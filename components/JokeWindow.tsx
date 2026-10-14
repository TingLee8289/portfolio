import React, { useCallback, useEffect, useRef, useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface Joke {
  text_zh: string;
  text_en: string | null;
}

// Shown when /api/joke is unreachable (local Vite dev, quota exceeded, offline).
const FALLBACK_JOKES: Joke[] = [
  {
    text_zh: '程式設計師為什麼分不清萬聖節和聖誕節？因為 Oct 31 == Dec 25。',
    text_en: 'Why do programmers confuse Halloween with Christmas? Because Oct 31 == Dec 25.',
  },
  {
    text_zh: '我的程式沒有 bug，只是有一些意料之外的功能。',
    text_en: "My code doesn't have bugs. It just has some unexpected features.",
  },
];

const TYPING_INTERVAL_MS = 35;

const JokeWindow: React.FC = () => {
  const { t, language } = useLanguage();
  const { joke: ui } = t.ui;
  const [joke, setJoke] = useState<Joke | null>(null);
  const [typed, setTyped] = useState('');
  const [loading, setLoading] = useState(true);
  const requestId = useRef(0);

  const loadJoke = useCallback(async () => {
    const id = ++requestId.current;
    setLoading(true);
    let next: Joke | null = null;
    try {
      const res = await fetch('/api/joke', { headers: { Accept: 'application/json' } });
      if (res.ok) next = (await res.json()) as Joke | null;
    } catch {
      // fall through to the fallback below
    }
    if (id !== requestId.current) return;
    setJoke(next ?? FALLBACK_JOKES[Math.floor(Math.random() * FALLBACK_JOKES.length)]);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadJoke();
    return () => {
      requestId.current++;
    };
  }, [loadJoke]);

  const text = joke ? (language === 'en' && joke.text_en ? joke.text_en : joke.text_zh) : '';

  useEffect(() => {
    setTyped('');
    if (!text) return;
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(timer);
    }, TYPING_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="relative z-10 mt-10 w-full max-w-2xl">
      <div className="glass-panel rounded-lg overflow-hidden shadow-2xl">
        {/* Title bar */}
        <div className="bg-vscode-activity px-4 py-2 flex items-center gap-2 border-b border-white/5">
          <div className="flex gap-2" aria-hidden="true">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="ml-4 text-xs text-gray-500 font-mono flex-1 text-center pointer-events-none">
            {ui.fileName}
          </div>
        </div>

        {/* Body */}
        <div className="p-5 md:p-6 min-h-[140px] font-mono text-sm md:text-base flex flex-col">
          <div className="text-vscode-comment mb-2">{ui.comment}</div>
          <div className="whitespace-pre-wrap leading-relaxed flex-1" aria-live="polite">
            <span className="text-vscode-text select-none mr-2">{'>'}</span>
            <span className="text-vscode-string">{loading && !joke ? ui.loading : typed}</span>
            <span className="animate-blink inline-block w-2 h-4 bg-vscode-accent align-middle ml-1"></span>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              onClick={loadJoke}
              disabled={loading}
              className="inline-flex items-center gap-2 text-xs text-gray-400 hover:text-white disabled:opacity-50 transition-colors"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              {ui.another}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JokeWindow;
