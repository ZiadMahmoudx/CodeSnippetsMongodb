import { db } from '@/db';
import Link from 'next/link';

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link href={`/snippets/${snippet.id}`} key={snippet.id}>
      <div className="bg-white shadow-md rounded-md p-4 mb-4 cursor-pointer hover:bg-gray-100 transition duration-300">
        <h1 className="text-xl font-semibold text-gray-800">{snippet.title}</h1>
        <div className="text-gray-600 mt-2">View Snippet</div>
      </div>
    </Link>
  ));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl  font-extrabold text-gray-900 mb-8">
        Explore Snippets
      </h1>
      <Link href="/snippets/new">
        <button className="bg-sky-500 hover:bg-sky-600 text-white py-3 px-6 rounded-full shadow-md transition duration-300">
          Create New One!
        </button>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {renderedSnippets}
      </div>
    </div>
  );
}
