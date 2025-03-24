/// <reference types="@daks.dev/svelte.sdk/types" />

type ComponentType = import('svelte').SvetleComponent;
declare module '*.(svx|md)' {
  const Component: ComponentType;
  export default Component;
  export const metadata: Record<string, unknown>;
}
declare interface MDLoadData {
  metadata: Record<string, unknown>;
  default: ComponentType;
}

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
