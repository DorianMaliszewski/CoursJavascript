/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly API_KEY: string;
  readonly LLM_HOSTNAME: string;
  readonly LLM_USERNAME: string;
  readonly LLM_PASSWORD: string;
  readonly LLM_MODEL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
