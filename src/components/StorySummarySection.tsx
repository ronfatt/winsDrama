import React, { useState } from 'react';
import { EPISODES } from '../data/dramaData';
import { BookOpen, Flame, Target, Zap, MapPin, Users, Clapperboard, Search } from 'lucide-react';

interface StorySummarySectionProps {
  onSelectEpAndGoToStoryboard: (epId: number) => void;
}

export const StorySummarySection: React.FC<StorySummarySectionProps> = ({
  onSelectEpAndGoToStoryboard
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEpisodes = EPISODES.filter(ep => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      ep.title.toLowerCase().includes(q) ||
      ep.subtitle.toLowerCase().includes(q) ||
      ep.synopsis.toLowerCase().includes(q) ||
      ep.businessIssue.toLowerCase().includes(q) ||
      ep.keyTakeaway.toLowerCase().includes(q)
    );
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-amber-950/50 to-slate-950 p-6 lg:p-8 rounded-3xl border border-amber-500/30 space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-400" />
          Ringkasan Jalan Cerita (Sekilas Pandang Untuk Pengarah)
        </div>

        <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
          Jalan Cerita 10 Episod "Nasi Lemak Naik Kelas"
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-medium">
          Panduan ringkas naratif jalan cerita setiap episod bagi memudahkan pengarah (Director) dan penolong pengarah (1st AD) memahami perkembangan emosi watak, konsep perniagaan PSC, serta klimaks adegan sebelum penggambaran.
        </p>

        {/* Search Bar inside Synopsis View */}
        <div className="pt-2 max-w-md">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kata kunci cerita (cth: Lobster, SOP, Hujan, Aliran Tunai)..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Episode Narrative Synopsis Cards */}
      <div className="space-y-6">
        {filteredEpisodes.map((ep) => (
          <div
            key={ep.id}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 lg:p-6 space-y-4 hover:border-slate-700 transition-all shadow-xl relative"
          >
            {/* Ep Header Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-lg">
                  EPISOD {ep.id}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {ep.subtitle}
                </h3>
                <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-0.5 rounded border border-slate-700">
                  Masa: {ep.duration} minit
                </span>
              </div>

              {/* Jump to Storyboard Button */}
              <button
                onClick={() => onSelectEpAndGoToStoryboard(ep.id)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs transition-all shadow-md shrink-0 active:scale-95"
              >
                <Clapperboard className="w-3.5 h-3.5" />
                <span>Buka Storyboard EP {ep.id}</span>
              </button>
            </div>

            {/* Main Narrative Synopsis (Jalan Cerita Penuh) */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                <span>Ringkasan Naratif Cerita (Plot Overview):</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                {ep.synopsis}
              </p>
            </div>

            {/* 3 Pillars Grid (Hook, Business Issue, Cliffhanger) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              {/* Hook */}
              <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-3 text-xs space-y-1">
                <span className="text-amber-400 font-bold flex items-center gap-1 text-[11px]">
                  <Flame className="w-3.5 h-3.5" />
                  Hook 5 Saat:
                </span>
                <p className="text-amber-100/90 italic font-medium">
                  "{ep.hook}"
                </p>
              </div>

              {/* Business Issue */}
              <div className="bg-cyan-950/30 border border-cyan-500/20 rounded-xl p-3 text-xs space-y-1">
                <span className="text-cyan-400 font-bold flex items-center gap-1 text-[11px]">
                  <Target className="w-3.5 h-3.5" />
                  Isu Bisnes Utama:
                </span>
                <p className="text-cyan-100/90 font-medium">
                  {ep.businessIssue}
                </p>
              </div>

              {/* Cliffhanger */}
              <div className="bg-purple-950/30 border border-purple-500/20 rounded-xl p-3 text-xs space-y-1">
                <span className="text-purple-400 font-bold flex items-center gap-1 text-[11px]">
                  <Zap className="w-3.5 h-3.5" />
                  Cliffhanger Penutup:
                </span>
                <p className="text-purple-100/90 italic font-medium">
                  "{ep.cliffhanger}"
                </p>
              </div>
            </div>

            {/* Footer Reference (Locations & Characters) */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-400 border-t border-slate-800/60">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Lokasi: <strong className="text-slate-300">{ep.locations.join(', ')}</strong></span>
              </div>

              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-cyan-400" />
                <span>Watak: <strong className="text-amber-300">{ep.characters.join(', ')}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
