import { useState, useEffect } from "react";
import ApiGuide from "./components/ApiGuide";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NanoGuide from "./components/NanoGuide";
import PromptGenerator from "./components/PromptGenerator";

function App() {
  const [aiMode, setAiMode] = useState<'chrome' | 'api'>('chrome');
  const [apiKey, setApiKey] = useState('');
  const [cloudModel, setCloudModel] = useState<'flash' | 'pro' | 'flash-lite'>('flash');
  
  // Hydrate encrypted API key from local storage on mount
  useEffect(() => {
    import('./lib/crypto').then(({ decryptKey }) => {
      const storedKey = localStorage.getItem('__gitrevs_api_key_obfs');
      if (storedKey) {
        const decrypted = decryptKey(storedKey);
        if (decrypted) setApiKey(decrypted);
      }
    });
  }, []);

  const handleKeyChange = async (val: string) => {
    setApiKey(val);
    const { encryptKey } = await import('./lib/crypto');
    if (val.trim()) {
      localStorage.setItem('__gitrevs_api_key_obfs', encryptKey(val));
    } else {
      localStorage.removeItem('__gitrevs_api_key_obfs');
    }
  };
  
  // Initialize dark mode based on user preference
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen flex flex-col w-full relative selection:bg-(--accent) selection:text-(--surface) overflow-x-hidden transition-colors duration-300">
      <Header aiMode={aiMode} setAiMode={setAiMode} isDark={isDark} setIsDark={setIsDark} />

      <main className="grow w-full">
        <section className="w-full border-b border-(--border) px-4 sm:px-6 md:px-16 py-12 sm:py-16 md:py-24 bg-(--surface-alt) transition-colors duration-300">
          <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
            
            {aiMode === 'api' && (
              <div className="flex flex-col gap-4 sm:gap-6 animate-in slide-in-from-top-4 fade-in duration-500">
                <div className="flex items-center justify-between">
                  <label className="font-serif text-2xl sm:text-3xl italic text-(--text) wrap-break-word">
                    Enter Gemini API Key
                  </label>
                  {apiKey && (
                    <span className="font-mono text-[9px] uppercase tracking-widest text-(--accent) px-2 py-1 border border-(--accent)">
                      Key saved encrypted
                    </span>
                  )}
                </div>
                <div className="flex flex-col md:flex-row gap-0 group border border-(--border-strong) focus-within:border-(--accent) bg-(--surface) shadow-[4px_4px_0_var(--border-strong)] transition-all duration-300 w-full flex-wrap sm:flex-nowrap">
                  <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => handleKeyChange(e.target.value)}
                    placeholder="AIzaSy..."
                    className="w-full bg-transparent px-4 sm:px-6 py-4 sm:py-5 outline-none font-mono text-base sm:text-lg md:text-xl text-(--text) placeholder:text-(--text-muted) border-b md:border-b-0 border-(--border-strong) md:flex-1 min-w-0"
                  />
                </div>
                
                {/* Cloud Model Toggle */}
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-(--text-muted)">Model Engine:</span>
                  <div className="flex border border-(--border-strong) bg-(--surface) p-1 shadow-[2px_2px_0_var(--border-strong)] overflow-x-auto whitespace-nowrap">
                    <button
                      onClick={() => setCloudModel('flash')}
                      className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-4 py-1.5 transition-colors shrink-0 ${
                        cloudModel === 'flash' ? 'bg-(--text) text-(--surface)' : 'text-(--text-muted) hover:text-(--text)'
                      }`}
                    >
                      3.0 Flash
                    </button>
                    <button
                      onClick={() => setCloudModel('flash-lite')}
                      className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-4 py-1.5 transition-colors shrink-0 ${
                        cloudModel === 'flash-lite' ? 'bg-(--text) text-(--surface)' : 'text-(--text-muted) hover:text-(--text)'
                      }`}
                    >
                      3.1 Flash-Lite
                    </button>
                    <button
                      onClick={() => setCloudModel('pro')}
                      className={`font-mono text-[11px] sm:text-xs uppercase tracking-widest px-4 py-1.5 transition-colors shrink-0 ${
                        cloudModel === 'pro' ? 'bg-(--text) text-(--surface)' : 'text-(--text-muted) hover:text-(--text)'
                      }`}
                    >
                      3.1 Pro
                    </button>
                  </div>
                </div>
              </div>
            )}

            <PromptGenerator aiMode={aiMode} apiKey={apiKey} cloudModel={cloudModel} />
            
          </div>
        </section>

        {aiMode === 'chrome' ? <NanoGuide /> : <ApiGuide />}
      </main>

      <Footer />
    </div>
  );
}

export default App;
