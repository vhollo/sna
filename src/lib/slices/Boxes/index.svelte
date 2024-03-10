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
    <div class="boxes_group card w-auto bg-base-100 shadow-xl col-span-2">
      <figure class="mx-auto max-h-min">
        <img class="box_image object-fill" src={group.box_image.url} alt={group.box_image.alt} />
      </figure>
      <div class="box_tagline card-body">
        <h3>{group.box_tagline}</h3>
        <h2 class="box_title card-title">
          {group.box_title}
        </h2>
        <PrismicRichText
          field={group.box_desc}
        >
        </PrismicRichText>
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
          <details class="box_body">
            <summary>Tovább…</summary>
            <PrismicRichText
            field={group.box_body}
            >
          </PrismicRichText>
        </details>
      </div>
    </div>
  {/each}
</article>
