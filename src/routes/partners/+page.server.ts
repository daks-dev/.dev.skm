import type { PageServerLoad } from './$types';
import { sources } from '$lib/content/partners';

export const load = (() => ({
  dataset: sources
})) satisfies PageServerLoad;
