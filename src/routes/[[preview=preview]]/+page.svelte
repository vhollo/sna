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
<div class="justify-items-center block sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row-dense gap-12" class:full={data.page.data.preview_size}>
  {#each Array(5) as _, i}
    <!--<li>{i + 1}</li>-->
    {#each data.page.data.boxes_group as group}

    <!--<div class="card order-{Math.floor(Math.random() * i * i * 3)} w-auto bg-base-300 shadow-xl col-span-{group.block_size && '' || 'full'} ">-->
    <div class="card order-{Math.floor(Math.random() * i * i * 3)} w-auto bg-base-300 shadow-xl col-span-{group.block_size/* && 'sidepadding'*/ || 'full'} ">
      <figure class="w-100 min-h-96">
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
        ></PrismicRichText>
        <nav class="flex flex-row">
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <div tabindex="0" class="collapse bg-base-100 justify-start"> 
            <div class="collapse-title text-xl font-medium">
              Tovább…
            </div>
            <div class="collapse-content"> 
              <PrismicRichText field={group.page_body}></PrismicRichText>
            </div>
          </div>

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
        </nav>
      </div>
    </div>

    {/each}
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

  .col-span-full {
    margin: -1rem;
    border-radius: 0;
  }
  .sidepadding {
    width: fit-content;
    margin-inline: var(--sides);
  }
</style>