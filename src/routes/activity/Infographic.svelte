<script lang="ts">
  import { Lightbox, Sign } from '@daks.dev/svelte.sdk';

  export let infographic: Partial<Infographic>[];
</script>

<div
  class="content py-8
        grid gap-x-4 gap-y-10 text-center
        grid-cols-none sm:grid-cols-2 lg:grid-cols-3">
  {#each infographic as info}
    <Lightbox
      class="relative group"
      custom={{ overlay: 'overflow-offset' }}
      scrollable={true}>
      <svelte:fragment slot="thumbnail">
        <Sign
          class="top-2 left-1/2 -ml-[72px]"
          icon="ic:round-zoom-out-map"
          small />
        <figure class="flex flex-col items-center gap-2">
          <img
            class="
              p-5 rounded-lg
              bg-slate-600 dark:bg-transparent
              drop-shadow-deep hover:drop-shadow-hard hover:scale-105
              transition duration-300 ease-in-out"
            src={info.icon?.src}
            width={info.icon?.width}
            height={info.icon?.height}
            alt={info.title}
            loading="eager" />
          <figcaption class="text-xl text-gray-500 dark:text-slate-400">
            {info.title}
          </figcaption>
        </figure>
      </svelte:fragment>
      <div class="content py-8 px-12 rounded-sm text-black bg-white">
        <h3 class="title mb-6">{info.title}</h3>
        {@html info.content}
      </div>
    </Lightbox>
  {/each}
</div>
