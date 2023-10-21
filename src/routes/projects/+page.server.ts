import type { PageServerLoad } from './$types';
import getter from '$lib/assets/images/gallery/index.async';

export const load = (async () => ({
  ...(await getter())
})) satisfies PageServerLoad;
