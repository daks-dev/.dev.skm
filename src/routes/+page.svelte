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

  import type { PageData } from './$types';
  export let data: PageData;
  const { logo, infographic } = data;

  const show = (x: number) => (x < 480 && 1) || (x < 1024 && 2) || 1;
  const button = `
    py-4 px-5 rounded-lg
    text-cyan-600 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-gray-200
    dark:text-slate-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700
    shadow-md shadow-slate-500/20
  `;

  const title = 'СКМ • Строительная Компания «Масштаб»';
  const description =
    'Строительная и техническая экспертиза, обследование зданий и сооружений в Москве. Строительная компания «Масштаб»';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="justify-between grow"
  itemprop="mainContentOfPage">
  <div
    class="
      wrapper pt-8 xl:pt-12
      flex flex-wrap items-center">
    <header class="flex flex-col w-fit mb-12">
      <Lightbox
        custom={{ overlay: 'overflow-offset' }}
        title="Масштаб &trade;"
        description="Строительная компания">
        <svelte:fragment slot="thumbnail">
          <img
            class="
              sm:inline-block
              pb-4 mx-auto sm:mx-0
              drop-shadow-2xl hover:sepia"
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
            class="
              sm:inline-block
              font-semibold
              text-shadow text-center sm:text-left text-gray-600 dark:text-gray-300"
            style:--text-shadow-color="#555555"
            style:--text-shadow-val="7px">
            <span
              class="
                block
                font-extrabold
                text-3.5xl md:text-4xl lg:text-4.5xl xl:text-5xl uppercase">
              Масштаб &trade;
            </span>
            <span
              class="text-xl xs:text-2xl sm:text-2.5xl md:text-3.5xl lg:text-2.5xl xl:text-4xl 2xl:text-4.5xl">
              Строительная&nbsp;компания
            </span>
          </h1>
        </svelte:fragment>
        <img
          class="
            bg-no-repeat bg-center bg-1/10 bg-loading
            hover:sepia"
          src={logo.image.src}
          width={logo.image.width}
          height={logo.image.height}
          alt="skm: logotype"
          loading="lazy" />
      </Lightbox>
      <!-- text-cyan-600 dark:text-cyan-700 -->
      <h2
        class="
          pt-4 xl:pt-8 2xl:pt-12
          text-center lg:text-left
          font-normal
          text-3xl xs:text-4xl md:text-5xl lg:text-4.5xl xl:text-5xl 2xl:text-6xl
          text-cyan-700 dark:text-cyan-600">
        Строим будущее <span class="whitespace-nowrap">по-новому</span>
      </h2>
    </header>

    <div
      class="
        xs:hidden
        w-full flex flex-row justify-around items-center mb-12">
      <a
        class={button}
        href="tel://{telephone.replace(/[\s-()]/g, '')}">
        <Icon
          icon="ic:round-phone-in-talk"
          class="w-16 h-16" />
      </a>
      <a
        class={button}
        href="mailto:{email}">
        <Icon
          icon="ic:round-mail-outline"
          class="w-16 h-16" />
      </a>
    </div>
    <div
      class="
        hidden xs:block
        w-full lg:max-w-xs xl:max-w-sm mx-auto px-2 mb-12 lg:-mt-12 lg:mb-0 lg:mr-0">
      <Async
        let:value
        {getter}>
        <CarouselKit
          class="overflow-hidden rounded-md lg:rounded-lg drop-shadow-lg"
          {...value}
          {show}
          duration={15000}
          controls=""
          stream
          invert />
      </Async>
      <!--SvelteKit /-->
    </div>
  </div>

  <Infographic
    class="wrapper"
    {infographic} />

  <div
    class="
      wrapper
      font-thin text-xs lg:text-sm text-justify lg:text-center
      text-gray-600 dark:text-gray-400">
    Любая информация, представленная на данном сайте, носит исключительно информационный характер и
    ни при каких условиях не является публичной офертой, определяемой положениями
    статьи&nbsp;437&nbsp;ГК&nbsp;РФ.
  </div>
</main>
