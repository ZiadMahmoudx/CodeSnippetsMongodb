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
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Snippets Area</h1>
      <Link href="/snippets/new">
        <div className="inline-block bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-300">
          Create New One!
        </div>
      </Link>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {renderedSnippets}
      </div>
    </div>
  );
}
