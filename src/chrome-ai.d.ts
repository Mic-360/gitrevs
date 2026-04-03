// TypeScript typings for Chrome's Built-in AI (experimental)
declare global {
  interface Window {
    LanguageModel?: {
      create: () => Promise<{
        prompt: (text: string) => Promise<string>;
        destroy: () => void;
      }>;
    };
    ai?: {
      languageModel?: {
        create: () => Promise<{
          prompt: (text: string) => Promise<string>;
          destroy: () => void;
        }>;
      };
    };
    languageModel?: {
      create: () => Promise<any>;
    };
  }
}

export {};
