'use client';
import * as actions from '@/actions';

import { useFormState } from 'react-dom';

const CreateSnippetPage = () => {
  const [formState, action] = useFormState(actions.createSnippet, { message: '' });
  return (
    <div className="max-lg:w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create Snippet</h3>
      <form action={action}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-800 font-medium mb-2">
            Title:
          </label>
          <input
            type="text"
            id="title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter title"
            name="title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 font-medium mb-2">
            Code:
          </label>
          <textarea
            id="content"
            className="w-full px-4 py-2 border rounded-md  focus:outline-none focus:border-blue-500"
            placeholder="Enter code"
            name="code"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-sky-700 text-white py-2 px-4 rounded-md hover:bg-sky-800 transition duration-300"
        >
          Create
        </button>
        {formState.message ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md mt-2">
            {formState.message}
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default CreateSnippetPage;
