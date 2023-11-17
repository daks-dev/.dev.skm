<script lang="ts">
  import { onMount } from 'svelte';
  import { FormattedDate, YandexMetrikaHit } from '@daks.dev/svelte.sdk';

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
  <header class="wrapper-lg">
    <h1 class="title">Новости</h1>
  </header>

  <div
    class="
      flex
      flex-wrap justify-around gap-12 wrapper-lg">
    {#each items as { slug, title, description, images }, idx}
      <article
        class="flex gap-4 -bp:flex-col"
        aria-posinset={idx + 1}
        aria-setsize={items.length}>
        <a
          class="shadow-md shadow-gray-800 oversee:shadow-lg oversee:shadow-gray-900"
          href="/news/{slug}">
          {#if images.length}
            {@const { src, width, height } = images[0]}
            <img
              class="aspect-video max-w-xs -sm:w-full"
              {src}
              {width}
              {height}
              alt="" />
          {/if}
        </a>
        <div>
          <FormattedDate
            class="mb-2 block tracking-wide text-slate-600 dark:text-slate-400"
            date={slug}
            parse="YY-MM-DD" />
          <p class="font-semibold">{title}</p>
          <p>{description}</p>
        </div>
      </article>
    {:else}
      <p>Новостей нет!</p>
    {/each}
  </div>
</main>
