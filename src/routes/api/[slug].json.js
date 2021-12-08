import { process } from '$lib/markdown'

export async function get({ params }) {
  const { slug } = params

  const data = await process(`src/posts/${slug}.md`);
  const body = JSON.stringify(data);

  return {
    body
  }
}
