<script lang="ts">
  import { Lightbox, Sign } from '@daks.dev/svelte.sdk';

  export let infographic: Partial<Infographic>[];
</script>

<div
  class={[
    'frame py-8',
    'grid grid-cols-none gap-x-4 gap-y-10',
    'sm:grid-cols-2 lg:grid-cols-3',
    'text-center'
  ]}>
  {#each infographic as info}
    <Lightbox
      class="group relative"
      custom={{ overlay: 'overflow-offset' }}
      scrollable={true}>
      {#snippet thumbnail()}
        <Sign
          class="top-2 left-1/2 -ml-[72px]"
          icon="ic:round-zoom-out-map"
          small />
        <figure class="flex flex-col items-center gap-2">
          <img
            class={[
              'p-5',
              'rounded-lg bg-slate-600 drop-shadow-lg dark:bg-transparent',
              'hover:scale-105 hover:drop-shadow-xl',
              'transition duration-200 ease-in-out'
            ]}
            src={info.icon?.src}
            width={info.icon?.width}
            height={info.icon?.height}
            alt={info.title}
            loading="eager" />
          <figcaption class="text-xl text-gray-500 dark:text-slate-400">
            {info.title}
          </figcaption>
        </figure>
      {/snippet}
      <div
        class={['readable', 'frame px-12 pt-5 pb-7', 'bg-neutral-50 text-gray-800', 'rounded-xs']}>
        <h3 class="title mb-5 font-medium">{info.title}</h3>
        <div class="sm:text-justify">
          {@html info.content}
        </div>
      </div>
    </Lightbox>
  {/each}
</div>
