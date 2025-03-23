<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit, Lightbox, Async, CarouselKit, Icon } from '@daks.dev/svelte.sdk';
  import Infographic from '$lib/components/home/Infographic.svelte';

  import { screens } from '$lib/assets/images/gallery/index.async';
  const getter = async () => ({
    dataset: await screens()
  });

  import microdata from '$lib/configs/microdata';
  const { email, telephone } = microdata.organization;

  import type { PageProps } from './$types';
  let { data }: PageProps = $props();
  const { logo, infographic } = data;

  const show = 1; // (x: number) => (x < 480 && 1) || (x < 1024 && 2) || 3;
  const classButton = [
    'py-4 px-5',
    'text-cyan-600 bg-white hover:bg-gray-100 focus:ring-gray-200',
    'dark:text-slate-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
    'border border-gray-300 rounded-lg',
    'dark:border-gray-600 dark:hover:border-gray-600',
    'shadow-md shadow-slate-500/20'
  ];

  const title = 'СКМ • Строительная Компания «Масштаб»';
  const description =
    'Строительная и техническая экспертиза, обследование зданий и сооружений в Москве. Строительная компания «Масштаб»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow justify-between"
  itemprop="mainContentOfPage">
  <div class={['frame-xl pt-8 xl:pt-12', 'flex flex-wrap items-center']}>
    <header class="mb-12 flex w-fit flex-col">
      <Lightbox
        custom={{ overlay: 'overflow-offset' }}
        title="Масштаб &trade;"
        description="Строительная компания">
        {#snippet thumbnail()}
          <img
            class={['mx-auto w-52 pb-4', 'sm:mx-0 sm:inline-block', 'drop-shadow-2xl hover:sepia']}
            src={logo.thumbnail.src}
            width={logo.thumbnail.width}
            height={logo.thumbnail.height}
            alt="skm: logotype thumbnail"
            loading="eager"
            itemprop="thumbnailUrl" />
          <link
            href={logo.image.src}
            rel="image"
            itemprop="primaryImageOfPage" />
          <h1
            class={[
              'sm:inline-block',
              'text-center font-semibold sm:text-left',
              'text-gray-600 dark:text-gray-300',
              'text-shadow-4',
              'shadow-gray-400 dark:shadow-gray-600'
            ]}>
            <span
              class={[
                'block',
                'font-extrabold uppercase',
                'text-3.5xl lg:text-4.5xl md:text-4xl xl:text-5xl'
              ]}>
              Масштаб &trade;
            </span>
            <span
              class="xs:text-2xl sm:text-2.5xl md:text-3.5xl lg:text-2.5xl 2xl:text-4.5xl text-xl xl:text-4xl">
              Строительная&nbsp;компания
            </span>
          </h1>
        {/snippet}
        <img
          class={['bg-10% bg--loading bg-center bg-no-repeat', 'hover:sepia']}
          src={logo.image.src}
          width={logo.image.width}
          height={logo.image.height}
          alt="skm: logotype"
          loading="lazy" />
      </Lightbox>
      <!-- text-cyan-600 dark:text-cyan-700 -->
      <h2
        class={[
          'pt-4 xl:pt-8 2xl:pt-12',
          'font-normal',
          'text-center lg:text-left',
          'xs:text-4xl lg:text-4.5xl text-3xl md:text-5xl xl:text-5xl 2xl:text-6xl',
          'text-cyan-700 dark:text-cyan-600'
        ]}>
        Строим будущее <span class="whitespace-nowrap">по-новому</span>
      </h2>
    </header>

    <div class={['xs:hidden', 'mb-12 w-full', 'flex flex-row items-center justify-around']}>
      <a
        class={classButton}
        href="tel://{telephone.replace(/[\s-()]/g, '')}"
        aria-label="telephone">
        <Icon
          icon="ic:round-phone-in-talk"
          class="h-16 w-16" />
      </a>
      <a
        class={classButton}
        href="mailto:{email}"
        aria-label="email">
        <Icon
          icon="ic:round-mail-outline"
          class="h-16 w-16" />
      </a>
    </div>
    <div class={['hidden sm:block', 'mx-auto mb-8 w-full max-w-sm', 'max-xl:pl-4 lg:mb-auto']}>
      <Async
        let:value
        {getter}>
        <CarouselKit
          class="overflow-hidden rounded-md drop-shadow-lg lg:rounded-lg"
          {...value}
          {show}
          duration={20000}
          controls=""
          stream
          invert />
      </Async>
    </div>
  </div>

  <Infographic
    class="frame-xl mb-4"
    {infographic} />

  <div
    class={[
      'frame',
      'text-justify text-xs font-thin',
      'lg:text-center lg:text-sm',
      'text-gray-600 dark:text-gray-400'
    ]}>
    Любая информация, представленная на данном сайте, носит исключительно информационный характер и
    ни при каких условиях не является публичной офертой, определяемой положениями
    статьи&nbsp;437&nbsp;ГК&nbsp;РФ.
  </div>
</main>
