/// <reference types="@daks.dev/svelte.sdk/types" />

declare namespace App {
  // interface Locals {}
  // interface PageData {}
  // interface Error {}
  // interface Platform {}
}

declare interface Infographic {
  icon: ImageMetadata;
  title: string;
  content: string;

  max: number;
  min: number;
  count: number;
  node: HTMLElement;
}
