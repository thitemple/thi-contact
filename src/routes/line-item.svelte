<script lang="ts">
  export let uri: string;
  export let media: string;
  export let handle: string;

</script>

<li class="rounded border border-purple-300 p-2 hover:bg-purple-100 focus:bg-purple-100 text-slate-900 hover:text-purple-900 focus:text-purple-900 transition-colors dark:text-slate-300 dark:hover:bg-purple-900 dark:hover:text-purple-300 dark:focus:bg-purple-900 dark:focus:text-purple-300">
  <a target="_blank" href={uri} rel="noreferrer">
    <div class="flex items-center ">
      <div class="mr-2 opacity-70">
        <slot name="icon" />
      </div>
      <div class="flex flex-col">
        <span>{media}</span>
        <span class="opacity-60">{handle}</span>
      </div>
    </div>
  </a>
</li>