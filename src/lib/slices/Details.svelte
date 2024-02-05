<script>
	//import type { PageData } from '../../routes/$types';
	//import { PortableText } from '@portabletext/svelte';
	import internalLink from '$utils/internalLink.svelte';
	import Link from '$utils/Link.svelte';
  import DefaultListItem from '$utils/DefaultListItem.svelte'

	export let content//: PageData;
	export const ix = 0;

  const formatBody = { /// TODO: move to utils and import this
    marks: {
      internalLink: internalLink,
      link: Link,
    },
    listItem: {
      normal: DefaultListItem,
      bullet: DefaultListItem,
      number: DefaultListItem
    },
  }
  //console.log({content})
</script>


  {#if content.details}
  <section class="prose gap-x-8 gap-y-0 card max-w-prosee text-base-content bg-neutral">
    <div class="card-body collapse collapse-arrow">
      <input type="radio" name="details" /> 
      <p class="collapse-title">
        <b>{content.summary}</b>
      </p>
      <div class="collapse-content"> 
        <PortableText value={content.details} components={formatBody}/>
      </div>
    </div>
  </section>
  {:else}
  <section class="prose gap-x-8 gap-y-0 card max-w-prosee bg-base-200 text--neutral-content">
    <p class="card-body">{content.summary}</p>
  </section>
  {/if}
