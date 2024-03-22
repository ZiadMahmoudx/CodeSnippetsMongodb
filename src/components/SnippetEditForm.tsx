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
      <Editor
        height="50vh"
        defaultValue={snippet.code}
        theme="vs-dark"
        language="javascript"
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editAction}>
        <button
          className="bg-green-700 text-white py-2 px-4 rounded-md mr-2 hover:bg-green-900 transition duration-300"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SnippetEditForm;
