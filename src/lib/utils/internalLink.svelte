<script>
  //import type {MarkComponentProps} from '@portabletext/svelte'

  // Property custom marks receive from @portabletext/svelte when rendered
  /*export let portableText: MarkComponentProps<{
    slug?: string
  }>*/

  // Remember to make your variables reactive so that they can reflect prop changes
  // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: value = value
  //$: newWindow = value.newWindow || false
  console.log(value)
</script>

{#if value.slug}
  <a href={value.slug}>
    <button class="btn btn-sm"><slot /></button>
  </a>
{:else}
  <slot />
{/if}

<style>
  a, .btn {
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    margin-inline: inherit;
  }
</style>