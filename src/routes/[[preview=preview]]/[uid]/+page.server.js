import { createClient } from "$lib/prismicio";

export async function load({ params, fetch, cookies }) {
  console.log({params})
  const client = createClient({ fetch, cookies });

  const page = await client.getByUID("boxes", params.uid || params.uid == '/' && 'main');
  //console.log({page})

  return {
    page,
  };
}

export async function entries() {
  const client = createClient();

  const pages = await client.getAllByType("boxes");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
