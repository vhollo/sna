<script>
	import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/svelte';
  /** @type {import("@prismicio/client").Content.BoxSlice} */
  export let slice;
</script>

<article
  data-slice-type={slice.slice_type}
  data-slice-variation={slice.variation}
  class="grid justify-items-center md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 grid-flow-row-dense gap-12" class:full={slice.preview_size}>

  {#each slice.boxes_group || [] as group}
    <div class="card w-auto bg-base-100 shadow-xl col-span-2">
      <figure class="mx-auto max-h-min">
        <img class="object-fill" src={group.page_image.url} alt={group.page_image.alt} />
      </figure>
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
</article>
