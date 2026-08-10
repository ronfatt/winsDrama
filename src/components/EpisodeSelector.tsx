import React from 'react';
import type { Episode } from '../data/dramaData';
import { Clock, Sparkles, CheckCircle2 } from 'lucide-react';

interface EpisodeSelectorProps {
  episodes: Episode[];
  selectedEpId: number;
  onSelectEp: (id: number) => void;
  getEpProgress: (epId: number) => { completed: number; total: number };
}

export const EpisodeSelector: React.FC<EpisodeSelectorProps> = ({
  episodes,
  selectedEpId,
  onSelectEp,
  getEpProgress
}) => {
  return (
    <div className="w-full bg-slate-950/80 border-b border-slate-800/80 py-4 px-4 lg:px-8 no-print">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h2 className="text-sm font-bold text-slate-200 uppercase tracking-wider">
              Pilih Episod (Episode Matrix 1 - 10)
            </h2>
          </div>
          <span className="text-xs text-slate-400">
            Klik episod untuk melihat adegan, watak & storyboard penggambaran
          </span>
        </div>

        {/* Scrollable Episode Cards Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2.5">
          {episodes.map((ep) => {
            const isSelected = ep.id === selectedEpId;
            const progress = getEpProgress(ep.id);
            const isDone = progress.total > 0 && progress.completed === progress.total;

            return (
              <button
                key={ep.id}
                onClick={() => onSelectEp(ep.id)}
                className={`relative group flex flex-col justify-between p-3 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-500/20 to-slate-900 border-amber-500/80 ring-1 ring-amber-500/50 shadow-lg shadow-amber-500/10'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                }`}
              >
                {/* Ep Number Header */}
                <div className="flex items-center justify-between w-full mb-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 font-extrabold'
                      : 'bg-slate-800 text-slate-300'
                  }`}>
                    EP {ep.id}
                  </span>

                  {isDone ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <span className="text-[10px] text-slate-400 font-medium">
                      {progress.completed}/{progress.total}
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                <div className="font-bold text-xs text-slate-100 line-clamp-1 group-hover:text-amber-300 transition-colors">
                  {ep.subtitle}
                </div>

                {/* Hook Tagline Preview */}
                <p className="text-[10px] text-slate-400 line-clamp-2 mt-1 italic">
                  {ep.hook}
                </p>

                {/* Footer Badges */}
                <div className="mt-2.5 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    {ep.duration}
                  </span>
                  <span className="text-amber-400/90 font-medium">
                    {ep.shots.length} Shots
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
