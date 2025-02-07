/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  readonly AI_API_KEY: string;
  readonly AI_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
