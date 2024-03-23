'use client';
import * as actions from '@/actions';

import { useFormState } from 'react-dom';

const CreateSnippetPage = () => {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full px-8 py-6 bg-white rounded-lg shadow-md lg:w-full">
        <h3 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          Create Snippet
        </h3>
        <form action={action}>
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title:
            </label>
            <input
              type="text"
              id="title"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600"
              placeholder="Enter title"
              name="title"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">
              Code:
            </label>
            <textarea
              id="content"
              className="w-full h-48 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-600 font-mono text-sm md:text-base"
              placeholder="Enter code"
              name="code"
              style={{
                whiteSpace: 'pre-wrap', // Preserve whitespace and wrap lines
                fontFamily: 'Menlo, Monaco, monospace' // Use a monospace font
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full  py-3 px-6 rounded-full shadow-md  bg-blue-600 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Create
          </button>
          {formState.message && (
            <div className="mt-4 text-sm text-red-600 bg-red-100 border border-red-400 rounded-md px-4 py-2">
              {formState.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetPage;
