'use client';
import { Editor } from '@monaco-editor/react';
import type { Snippet } from '@prisma/client';
import * as actions from '@/actions';
import { useState } from 'react';
interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = '') => {
    setCode(value);
  };

  const editAction = actions.editSnippetAction.bind(null, snippet.id, code);
  return (
    <div className="mt-4">
      <div className="relative">
        <Editor
          height="50vh"
          defaultValue={snippet.code}
          theme="vs-dark"
          language="javascript"
          options={{ minimap: { enabled: false } }}
          onChange={handleEditorChange}
        />
      </div>
      <div className="mt-4 flex justify-center">
        <form action={editAction} className="flex">
          <button
            className="bg-green-700 text-white  py-3 px-6 rounded-full shadow-md mr-2 hover:bg-green-900 transition duration-300"
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SnippetEditForm;
