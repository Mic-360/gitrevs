function NanoGuide() {
  return (
    <section className="w-full px-4 sm:px-6 md:px-16 py-16 md:py-24 bg-(--bg)">
      <div className="max-w-7xl mx-auto">
        <div className="border-b border-(--border-strong) pb-8 sm:pb-10 mb-12 sm:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-5 sm:gap-6">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl italic text-(--text) leading-[1.1] sm:leading-[1.1] warp-break-words md:leading-none">
            Enable <br className="hidden sm:block" />
            Chrome AI.
          </h2>
          <p className="font-mono text-[#a0a0a0] text-[13px] sm:text-sm max-w-full md:max-w-sm text-left md:text-right mt-2 md:mt-0">
            To use the Built-in Gemini Nano model, you must enable experimental
            flags and download the on-device model locally to your environment.
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
                Update Chrome
              </h4>
              <p className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed warp-break-words">
                Ensure you are running{" "}
                <span className="text-(--text) bg-(--surface-alt) px-1 sm:px-1.5 py-0.5 border border-(--border) whitespace-nowrap">
                  Chrome version 127
                </span>{" "}
                or higher. Check via the three-dot menu &rarr; Help &rarr; About
                Google Chrome.
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
                Enable Flags
              </h4>
              <div className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed space-y-4 sm:space-y-5">
                <p>
                  Navigate to{" "}
                  <code className="bg-(--surface) text-(--accent) px-1 sm:px-1.5 py-0.5 border border-(--border-strong) break-all">
                    chrome://flags
                  </code>{" "}
                  directly in the address bar.
                </p>
                <ul className="list-none space-y-3 sm:space-y-4 pt-1 sm:pt-2">
                  <li className="pl-4 sm:pl-5 border-l border-(--border-strong) relative before:absolute before:left-[calc(-3px) before:top-2 before:w-1.5 before:h-1.5 before:bg-(--border-strong) before:rounded-full">
                    Search for <strong>Prompt API for Gemini Nano</strong> and
                    set to <span className="text-(--text) italic">Enabled</span>
                  </li>
                  <li className="pl-4 sm:pl-5 border-l border-(--border-strong) relative before:absolute before:left-[calc(-3px) before:top-2 before:w-1.5 before:h-1.5 before:bg-(--border-strong) before:rounded-full">
                    Search for{" "}
                    <strong>Optimization Guide On Device Model</strong> and set
                    to{" "}
                    <span className="text-(--text) italic">
                      Enabled BypassPerfRequirement
                    </span>
                  </li>
                </ul>
                <p className="uppercase text-[10px] sm:text-xs tracking-widest pt-1 sm:pt-2 font-bold text-(--text)">
                  Relaunch the browser.
                </p>
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
                Download Model
              </h4>
              <div className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed space-y-4 sm:space-y-5">
                <p>
                  Navigate to{" "}
                  <code className="bg-(--surface) text-(--accent) px-1 sm:px-1.5 py-0.5 border border-(--border-strong) break-all">
                    chrome://components
                  </code>
                  .
                </p>
                <p>
                  Locate the module named{" "}
                  <strong>Optimization Guide On Device Model</strong> and click
                  the{" "}
                  <span className="underline decoration-(--accent) decoration-2 underline-offset-4">
                    Check for update
                  </span>{" "}
                  button.
                </p>
                <div className="p-3 sm:p-4 bg-(--surface-alt) border-l-2 border-(--text-muted) italic text-xs sm:text-[13px]">
                  Note: If it does not appear immediately, wait a few minutes
                  and refresh the page to allow the flags to propagate.
                </div>
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
                Verify Session
              </h4>
              <div className="font-mono text-[13px] sm:text-sm text-(--text-muted) leading-relaxed space-y-4 sm:space-y-5 w-full">
                <p>
                  Open the Chrome Developer Tools (F12) Console and test
                  availability:
                </p>
                <div className="bg-(--surface) p-4 sm:p-5 border border-(--border-strong) overflow-x-auto shadow-[4px_4px_0_var(--border-strong) transition-shadow duration-300 group-hover:shadow-[6px_6px_0_var(--accent) max-w-full">
                  <pre className="text-[11px] sm:text-[13px] leading-loose min-w-max">
                    <span className="text-(--accent)">const</span> session ={" "}
                    <span className="text-(--accent)">await</span>{" "}
                    window.languageModel.create();
                    <br />
                    <span className="text-(--accent)">const</span> response ={" "}
                    <span className="text-(--accent)">await</span>{" "}
                    session.prompt(
                    <span className="text-(--text)">
                      "Write a haiku about a web browser."
                    </span>
                    );
                    <br />
                    console.log(response);
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NanoGuide;