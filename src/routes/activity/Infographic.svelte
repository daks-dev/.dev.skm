<script lang="ts">
  import { Lightbox, Sign } from '@daks.dev/svelte.sdk';

  export let infographic: Partial<Infographic>[];
</script>

<div
  class="content grid
        grid-cols-none gap-x-4 gap-y-10 py-8
        text-center sm:grid-cols-2 lg:grid-cols-3">
  {#each infographic as info}
    <Lightbox
      class="group relative"
      custom={{ overlay: 'overflow-offset' }}
      scrollable={true}>
      <svelte:fragment slot="thumbnail">
        <Sign
          class="left-1/2 top-2 -ml-[72px]"
          icon="ic:round-zoom-out-map"
          small />
        <figure class="flex flex-col items-center gap-2">
          <img
            class="
              drop-shadow-deep hover:drop-shadow-hard
              rounded-lg bg-slate-600
              p-5 transition duration-300
              ease-in-out hover:scale-105 dark:bg-transparent"
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
      <div class="content rounded-sm bg-white px-12 py-8 text-black">
        <h3 class="title mb-6">{info.title}</h3>
        {@html info.content}
      </div>
    </Lightbox>
  {/each}
</div>
