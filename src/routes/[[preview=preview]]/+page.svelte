<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/svelte';

	export let data;
  console.log(data.page)
</script>

<div class="grid justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row-dense gap-12" class:full={data.page.data.preview_size}>
  {#each data.page.data.boxes_group as group}

  <div class="card w-auto bg-base-300 shadow-xl col-span-{group.block_size}">
    <figure class="w-100 h-96"><img class="object-fill" src={group.page_image.url} alt={group.page_image.alt} /></figure>
    <div class="card-body">
      <h3>{group.page_tagline}</h3>
      <h2 class="card-title">
        {group.page_title}
      </h2>
      <PrismicRichText
        field={group.page_desc}
      >
      </PrismicRichText>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
      <details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
    </details>
</div>
  </div>

  {/each}
  {#each data.page.data.boxes_group as group}

  <div class="card w-auto bg-base-300 shadow-xl col-span-{group.block_size}">
    <figure class="w-100 h-96"><img class="object-fill" src={group.page_image.url} alt={group.page_image.alt} /></figure>
    <div class="card-body">     
      <h3>{group.page_tagline}</h3>
      <h2 class="card-title">
        {group.page_title}
      </h2>
      <PrismicRichText
        field={group.page_desc}
      >
      </PrismicRichText>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
      <details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
    </details>
</div>
  </div>

  {/each}
  {#each data.page.data.boxes_group as group}

  <div class="card w-auto bg-base-300 shadow-xl col-span-{group.block_size}">
    <figure class="w-100 h-96"><img class="object-fill" src={group.page_image.url} alt={group.page_image.alt} /></figure>
    <div class="card-body">
      <h3>{group.page_tagline}</h3>
      <h2 class="card-title">
        {group.page_title}
      </h2>
      <PrismicRichText
        field={group.page_desc}
      >
      </PrismicRichText>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>

      <details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
    </details>
    </div>
  </div>

  {/each}
  {#each data.page.data.boxes_group as group}

  <div class="card w-auto bg-base-300 shadow-xl col-span-{group.block_size}">
    <figure class="w-100 h-96"><img class="object-fill" src={group.page_image.url} alt={group.page_image.alt} /></figure>
    <div class="card-body">
      <h3>{group.page_tagline}</h3>
      <h2 class="card-title">
        {group.page_title}
      </h2>
      <PrismicRichText
        field={group.page_desc}
      >
      </PrismicRichText>
      <div class="card-actions justify-end">
        <div class="badge badge-outline">Fashion</div> 
        <div class="badge badge-outline">Products</div>
      </div>
      <details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
    </details>

    </div>
  </div>

  {/each}
</div>

<SliceZone slices={data.page.data.slices} {components} />
