import { db } from '@/db';
import Link from 'next/link';
import * as actions from '@/actions';
import { notFound } from 'next/navigation';

interface ShowSnippetByIdProps {
  params: {
    id: string;
  };
}

const ShowSnippetById = async (props: ShowSnippetByIdProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: props.params.id }
  });

  if (!snippet) {
    notFound();
  }

  const deleteSnippet = actions.deleteSnippetAction.bind(null, snippet.id);

  return (
    <div className="mx-auto p-3 mt-3 bg-white shadow-md rounded-md sm:w-full md:w-full lg:w-full">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
          {snippet.title}
        </h1>
        <div className="flex space-x-2">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full transition duration-300 flex items-center justify-center"
          >
            <span className="mr-2">Edit</span>
          </Link>
          <form action={deleteSnippet}>
            <button className=" py-3 px-6 rounded-full shadow-md bg-red-600 hover:bg-red-700 text-white  transition duration-300 flex items-center justify-center">
              <span className="mr-2">Delete</span>
            </button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-100 rounded-md p-4 overflow-x-auto text-sm md:text-base">
        <code className="text-gray-800 font-mono">{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ShowSnippetById;

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString()
    };
  });
}
