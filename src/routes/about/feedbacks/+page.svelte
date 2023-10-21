<script lang="ts">
  import { YandexMetrikaHit, CardPlaceholder, TestimonialPlaceholder } from '@daks.dev/svelte.sdk';

  const title = 'СКМ • Отзывы';
  const description = 'Отзывы о предприятии СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Отзывы</h1>
  </header>

  <div
    class="
      content mb-16
      flex flex-wrap justify-around gap-y-8">
    {#each Array(5) as _val}
      <CardPlaceholder
        class="
          w-full max-w-sm
          odd:bg-green-700/20 even:bg-red-700/20
          snap-start" />
    {/each}
  </div>
  <TestimonialPlaceholder class="content max-w-xl" />
</main>
