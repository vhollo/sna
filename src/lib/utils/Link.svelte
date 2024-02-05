<script lang="ts">
  import type {MarkComponentProps} from '@portabletext/svelte'

  // Property custom marks receive from @portabletext/svelte when redered
  export let portableText: MarkComponentProps<{
    href?: string
  }>

  // Remember to make your variables reactive so that they can reflect prop changes
  // See: https://svelte.dev/docs#3_$_marks_a_statement_as_reactive
  $: ({value} = portableText)
  //$: newWindow = value.newWindow || false
</script>

<a class="" href={value.href} rel="external noopener" target="_blank">
  <button class="btn btn-sm"><slot /></button>
</a>
