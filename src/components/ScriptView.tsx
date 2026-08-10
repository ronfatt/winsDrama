import React from 'react';
import type { Episode } from '../data/dramaData';
import { BookOpen } from 'lucide-react';

interface ScriptViewProps {
  episode: Episode;
}

export const ScriptView: React.FC<ScriptViewProps> = ({ episode }) => {
  const getSpeakerBadgeClass = (speaker?: string) => {
    if (!speaker) return 'bg-slate-800 text-slate-300';
    if (speaker.includes('AZLAN')) return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
    if (speaker.includes('LINA')) return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
    if (speaker.includes('PANGLIMA')) return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
    return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Teleprompter Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 p-5 rounded-2xl border border-amber-500/30 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <h3 className="text-lg font-bold text-white">
              Mode Latihan Pelakon & Skrip Penuh (Script & Teleprompter Mode)
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Gaya percakapan Bahasa Melayu tempatan Sabah. Dialog ikonik dan intonasi pelakon dislahkan untuk hafalan watak.
          </p>
        </div>
        <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-xl uppercase">
          {episode.title}
        </span>
      </div>

      {/* Script Breakdown Blocks */}
      <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 space-y-5">
        {episode.fullScript.map((line, idx) => {
          if (line.type === 'scene_heading') {
            return (
              <div key={idx} className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-amber-400 font-extrabold text-xs tracking-wider uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                {line.text}
              </div>
            );
          }

          if (line.type === 'action') {
            return (
              <div key={idx} className="bg-slate-900/40 border-l-2 border-slate-700 p-3 text-xs text-slate-400 italic">
                🎬 [Aksi / Visual]: {line.text}
              </div>
            );
          }

          return (
            <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all">
              <div className={`shrink-0 px-3 py-1.5 rounded-lg border text-xs font-bold ${getSpeakerBadgeClass(line.speaker)}`}>
                {line.speaker || 'WATAK'}
              </div>

              <div className="flex-1 space-y-1">
                <div className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
                  {line.section}
                </div>
                <div className="text-sm font-medium text-slate-100 leading-relaxed font-sans">
                  "{line.text}"
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
