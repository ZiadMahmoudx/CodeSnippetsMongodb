'use server';

import { db } from '@/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createSnippet(formState: { message: string }, formData: FormData) {
  try {
    const title = formData.get('title');
    const code = formData.get('code');

    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'The title must be at least 3 characters long.'
      };
    }
    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'The code must be at least 10 characters long.'
      };
    }

    await db.snippet.create({
      data: {
        title,
        code
      }
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: err.message
      };
    } else {
      return {
        message: 'Something went wrong...'
      };
    }
  }
  revalidatePath('/');
  redirect('/');
}

export async function editSnippetAction(id: string, code: string) {
  await db.snippet.update({
    where: { id: id.toString() }, // Convert id to string
    data: { code }
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippetAction(id: string) {
  await db.snippet.delete({
    where: { id }
  });
  revalidatePath('/');
  redirect('/');
}
