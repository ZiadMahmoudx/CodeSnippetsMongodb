import SnippetEditForm from '@/components/SnippetEditForm';
import { db } from '@/db';
import { notFound } from 'next/navigation';

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const SnippetEditPage = async (props: SnippetEditPageProps) => {
  const id = props.params.id;
  const snippet = await db.snippet.findFirst({
    where: { id }
  });
  if (!snippet) {
    notFound();
  }
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
