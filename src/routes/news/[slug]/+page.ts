import dayjs from 'dayjs';
import format from 'dayjs/plugin/customParseFormat';

import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

dayjs.extend(format);

// export const prerender = 'auto';

type MDData = {
  metadata: {
    title: string;
    description: string;
  };
  default: MDComponent;
};

const promises = {
  mds: import.meta.glob('$lib/content/news/**/index.md'),
  images: import.meta.glob('$lib/content/news/**/*.(avif|gif|heic|heif|jpeg|jpg|png|tiff|webp)', {
    query: { w: 288, meta: true },
    import: 'default'
  })
};

const filter = (obj: Record<string, unknown>, dir: string | undefined) =>
  Object.keys(obj).filter((x) => x.split('/').at(-2) === dir);

export const load: PageLoad = async ({ params }) => {
  if (/^\d{2}-\d{2}-\d{2}$/.test(params.slug)) {
    const md = filter(promises.mds, params.slug)[0];
    if (md) {
      const date = dayjs(params.slug, 'YY-MM-DD');
      const pubDate = `${date.format('DD')}/${date.format('MM')}/${date.format('YYYY')}`;

      const {
        metadata: { title, description },
        default: content
      } = (await promises.mds[md]()) as MDData;

      const images: ImageMetadata[] = [];
      for (const image of filter(promises.images, params.slug))
        images.push((await promises.images[image]()) as ImageMetadata);
      return { pubDate, title, description, content, images };
    }
    throw error(404, 'Not found [data]');
  }
  throw error(404, 'Not found');
};
