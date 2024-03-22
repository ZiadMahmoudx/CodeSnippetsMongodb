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
    <div className=" mx-auto p-3 mt-3 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-gray-800">{snippet.title}</h1>
        <div className="flex space-x-2">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2 hover:bg-blue-600 transition duration-300"
          >
            Edit
          </Link>
          <form action={deleteSnippet}>
            <button className="bg-red-500 text-white  py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="bg-gray-100 rounded-md p-4 overflow-auto">
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
