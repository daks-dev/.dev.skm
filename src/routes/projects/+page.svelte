<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { sources, modifieds } = data;

  const title = 'СКМ • Проекты';
  const description = 'Проекты предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <LightboxKit
    class="frame gap-x-8 gap-y-8"
    custom={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {sources}
    {modifieds}
    sign="ic:round-zoom-out-map"
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
