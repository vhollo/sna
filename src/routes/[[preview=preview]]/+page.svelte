<script>
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/svelte';

	export let data;
  console.log(data.page)
</script>

<!--<header class="flex flex-row">
  <figure>
    <PrismicImage field={data.boxes_group.page_image} />
  </figure>
</header>-->
<div class="grid justify-items-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-12" class:full={data.page.data.preview_size}>
  {#each data.page.data.boxes_group as group}

  <div class="card w-auto bg-base-300 shadow-xl xs:col-span-full col-span-{group.block_size}">
    <figure class="w-100 h-96">
      <!--<img class="object-fill" src={group.page_image.url} alt={group.page_image.alt} />-->
      <PrismicImage field={group.page_image} />
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
      <!--<details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
      </details>-->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="collapse bg-base-100"> 
        <div class="collapse-title text-xl font-medium">
          Tovább…
        </div>
        <div class="collapse-content"> 
          <PrismicRichText field={group.page_body}></PrismicRichText>
        </div>
      </div>

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
      <!--<details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
      </details>-->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="collapse bg-base-100"> 
        <div class="collapse-title text-xl font-medium">
          Tovább…
        </div>
        <div class="collapse-content"> 
          <PrismicRichText field={group.page_body}></PrismicRichText>
        </div>
      </div>

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

      <!--<details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
      </details>-->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="collapse bg-base-100"> 
        <div class="collapse-title text-xl font-medium">
          Tovább…
        </div>
        <div class="collapse-content"> 
          <PrismicRichText field={group.page_body}></PrismicRichText>
        </div>
      </div>

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
      <!--<details>
        <summary>Tovább…</summary>
        <PrismicRichText
        field={group.page_body}
        >
      </PrismicRichText>
      </details>-->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div tabindex="0" class="collapse bg-base-100"> 
        <div class="collapse-title text-xl font-medium">
          Tovább…
        </div>
        <div class="collapse-content"> 
          <PrismicRichText field={group.page_body}></PrismicRichText>
        </div>
      </div>

    </div>
  </div>

  {/each}
</div>

<SliceZone slices={data.page.data.slices} {components} />

<style>
  .col-span-full figure {
    @apply h-5/6;
  }
  .col-span-0 {
    display: none;
    visibility: hidden;
  }
</style>