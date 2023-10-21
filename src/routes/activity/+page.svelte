<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Async, CarouselKit } from '@daks.dev/svelte.sdk';
  import Infographic from './Infographic.svelte';

  import { screens } from '$lib/assets/images/gallery/index.async';
  const getter = async () => ({
    dataset: await screens()
  });

  import type { PageData } from './$types';
  export let data: PageData;
  const { infographic } = data;

  const show = (x: number) =>
    (x < 640 && 1) || (x < 768 && 2) || (x < 1024 && 3) || (x < 1280 && 4) || 5;

  const title = 'СКМ • Деятельность';
  const description = 'Направления деятельности предпрятия СКМ';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between min-h-screen mb-0"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Направления деятельности</h1>
  </header>

  <Infographic {infographic} />

  <Async
    let:value
    {getter}>
    <CarouselKit
      class="hidden xs:block"
      {...value}
      {show}
      duration={15000}
      controls="play"
      progress
      stream
      check />
  </Async>
</main>
