<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from '@daks.dev/svelte.sdk';

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { sources, modifieds } = data;

  const title = 'СКМ • Допуски';
  const description = 'Допуски предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="frame">
    <h1 class="title">Допуски</h1>
  </header>

  <LightboxKit
    class="frame gap-8"
    custom={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {sources}
    {modifieds}
    sign="ic:round-zoom-out-map"
    centered
    shadow
    scale />
</main>
