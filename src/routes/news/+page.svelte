<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from '@daks.dev/svelte.sdk';

  import type { PageData } from './$types';
  export let data: PageData;
  const { items } = data;

  const title = 'СКМ • Новости';
  const description = 'Новости предприятия СКМ';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage snap-start">
  <header class="content">
    <h1 class="title">Новости</h1>
  </header>

  <div
    class="
      content
      flex flex-col items-center gap-8">
    {#each items as { slug, pubDate, title, description, images }, idx}
      <article
        class="flex gap-4 -bp:flex-col"
        aria-posinset={idx + 1}
        aria-setsize={items.length}>
        <a
          class="shadow-md oversee:shadow-lg"
          href="/news/{slug}">
          {#if images.length}
            {@const { src, width, height } = images[0]}
            <img
              class="aspect-video max-w-xs rounded-md -sm:w-full"
              {src}
              {width}
              {height}
              alt="" />
          {/if}
        </a>
        <div>
          <time class="text-accent mb-2 block tracking-wide">{pubDate}</time>
          <p class="font-semibold">{title}</p>
          <p>{description}</p>
        </div>
      </article>
    {:else}
      <p>Новостей нет!</p>
    {/each}

    <!--TextPlaceholder class="mx-auto mb-8 w-full max-w-3xl" />
    {#each Array(5) as _val}
      <ImagePlaceholder class="snap-start odd:-scale-x-100" />
    {/each}
    <TestimonialPlaceholder class="mx-auto mt-8 w-full max-w-xl" /-->
  </div>
</main>
