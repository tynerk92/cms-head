import { process } from '$lib/markdown'
import { base } from '$app/paths'

export async function get({ params }) {
  const { slug } = params

  const data = await process(`${base}/posts/${slug}.md`);
  const body = JSON.stringify(data);

  return {
    body
  }
}
