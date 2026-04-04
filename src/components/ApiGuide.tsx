function ApiGuide() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-16 py-16 md:py-24 bg-(--bg)">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-(--border-strong) pb-8 sm:pb-10 mb-12 sm:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-5 sm:gap-6">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl italic text-(--text) leading-[1.1] sm:leading-[1.1] warp-break-words md:leading-none">
            Use Cloud <br className="hidden sm:block" />
            Gemini API.
          </h2>
          <p className="font-mono text-(--text-muted) text-[13px] sm:text-sm max-w-full md:max-w-sm text-left md:text-right mt-2 md:mt-0">
            Securely use your Google Gemini API key to run translations over the cloud anytime, without requiring experimental Chrome features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 sm:gap-x-16 md:gap-x-20 gap-y-16 sm:gap-y-20 md:gap-y-24">
          {/* Step 1 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 group">
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-none text-(--border) group-hover:text-(--accent) transition-colors duration-500 shrink-0">
              01
            </div>
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 w-full">
              <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-(--text) flex items-center gap-2 warp-break-words">
                <span className="w-1 h-3 sm:h-4 bg-(--accent) inline-block scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom shrink-0"></span>
                Google AI Studio
              </h4>
              <p className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed warp-break-words">
                Navigate to the{" "}
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-(--text) bg-(--surface-alt) px-1 sm:px-1.5 py-0.5 border border-(--border) whitespace-nowrap hover:bg-(--accent) hover:text-(--surface) transition-colors">
                  Google AI Studio
                </a>{" "}
                platform. Ensure you are signed into your Google workspace or personal account.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 group">
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-none text-(--border) group-hover:text-(--accent) transition-colors duration-500 shrink-0">
              02
            </div>
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 w-full">
              <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-(--text) flex items-center gap-2 warp-break-words">
                <span className="w-1 h-3 sm:h-4 bg-(--accent) inline-block scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom shrink-0"></span>
                Generate Key
              </h4>
              <div className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed space-y-4 sm:space-y-5">
                <p>
                  Click the prominent "Create API Key" button inside the AI Studio dashboard. 
                </p>
                <div className="p-3 sm:p-4 bg-(--surface-alt) border-l-2 border-(--text-muted) italic text-xs sm:text-[13px]">
                  Note: A free tier is instantly available for prototyping without any credit card required. Keep the key securely saved.
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 group">
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-none text-(--border) group-hover:text-(--accent) transition-colors duration-500 shrink-0">
              03
            </div>
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 w-full">
              <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-(--text) flex items-center gap-2 warp-break-words">
                <span className="w-1 h-3 sm:h-4 bg-(--accent) inline-block scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom shrink-0"></span>
                Input & Execute
              </h4>
              <div className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed space-y-4 sm:space-y-5">
                <p>
                  Paste the generated key into the{" "}
                  <code className="bg-(--surface) text-(--accent) px-1 sm:px-1.5 py-0.5 border border-(--border-strong) break-all">
                    Gemini API Key
                  </code>{" "}
                  input box above.
                </p>
                <p>
                  The translation engine will immediately swap routing structure and point its synthesis directly towards Google's ultra-fast Gemini 1.5 Flash endpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 group md:col-span-1">
            <div className="font-serif text-5xl sm:text-6xl md:text-7xl italic leading-none text-(--border) group-hover:text-(--accent) transition-colors duration-500 shrink-0">
              04
            </div>
            <div className="space-y-3 sm:space-y-4 pt-1 sm:pt-2 w-full min-w-0">
              <h4 className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-(--text) flex items-center gap-2 warp-break-words">
                <span className="w-1 h-3 sm:h-4 bg-(--accent) inline-block scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom shrink-0"></span>
                Security
              </h4>
              <div className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed space-y-4 sm:space-y-5 w-full">
                <p>
                  Your API requests occur directly from this browser to Google's servers. 
                </p>
                <div className="bg-(--surface) p-4 sm:p-5 border border-(--border-strong) shadow-[4px_4px_0_var(--border-strong)] transition-shadow duration-300 group-hover:shadow-[6px_6px_0_var(--accent)] max-w-full">
                  <p className="text-[11px] sm:text-[13px] leading-loose">
                    <span className="text-(--accent)">[Privacy Notice]</span><br/>
                    API keys are only held in the application's volatile memory and are never persisted, broadcasted, or sent to any third-party intermediary servers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApiGuide;
