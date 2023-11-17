<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  // import Content from '$lib/content/news/001/index.svelte.md';

  import type { PageData } from './$types';
  export let data: PageData;
  const { pubDate, title, description, content, images } = data;

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title mb-4">{title}</h1>
    <time class="text-accent tracking-wide">{pubDate}</time>
  </header>

  <div class="content flex gap-8 -sm:flex-col -sm:items-center">
    <div class="shrink-0">
      {#if images.length}
        {@const { src, width, height } = images[0]}
        <img
          class="rounded-md -xs:w-full"
          {src}
          {width}
          {height}
          alt="" />
      {/if}
    </div>
    <div class="text-justify leading-relaxed">
      <svelte:component this={content} />
    </div>
  </div>
</main>
