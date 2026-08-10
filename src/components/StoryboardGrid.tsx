import React, { useState } from 'react';
import type { Shot } from '../data/dramaData';
import { Camera, Volume2, Lightbulb, CheckSquare, Square, MessageSquare, Film } from 'lucide-react';

interface StoryboardGridProps {
  shots: Shot[];
  completedShots: Record<string, boolean>;
  shotNotes: Record<string, string>;
  onToggleShot: (shotNo: string) => void;
  onSaveNote: (shotNo: string, note: string) => void;
}

export const StoryboardGrid: React.FC<StoryboardGridProps> = ({
  shots,
  completedShots,
  shotNotes,
  onToggleShot,
  onSaveNote
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'Main' | 'BRoll' | 'Establishing'>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredShots = shots.filter(shot => {
    if (filterCategory !== 'all' && shot.shotCategory !== filterCategory) {
      return false;
    }
    if (filterType !== 'all' && shot.visualType.toLowerCase() !== filterType.toLowerCase()) {
      return false;
    }
    return true;
  });

  // Pick placeholder imagery based on shot characteristics
  const getShotImage = (shot: Shot) => {
    const text = (shot.scene + shot.action + shot.dialogue).toLowerCase();
    if (text.includes('lobster') || text.includes('nasi lemak lobster') || text.includes('mentega') || text.includes('panggangan')) {
      return '/images/lobster.jpg';
    }
    if (text.includes('dewan') || text.includes('hall') || text.includes('majlis') || text.includes('hari jadi') || text.includes('acara')) {
      return '/images/venue.jpg';
    }
    return '/images/poster.jpg';
  };

  const getCategoryBadge = (cat?: Shot['shotCategory']) => {
    switch (cat) {
      case 'Establishing':
        return { label: '🌅 Suasana (Establishing)', class: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' };
      case 'BRoll':
        return { label: '🔍 Detail B-Roll (Detail)', class: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40' };
      default:
        return { label: '🎥 Shot Utama (Main) (Main)', class: 'bg-amber-500/20 text-amber-300 border-amber-500/40' };
    }
  };

  const getVisualTypeBadgeClass = (type: Shot['visualType']) => {
    switch (type) {
      case 'Hook':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'Conflict':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/40';
      case 'Lesson':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      case 'Action':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'Climax':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'Cliffhanger':
        return 'bg-red-500/20 text-red-300 border-red-500/40';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const mainCount = shots.filter(s => s.shotCategory === 'Main' || !s.shotCategory).length;
  const brollCount = shots.filter(s => s.shotCategory === 'BRoll').length;
  const establishingCount = shots.filter(s => s.shotCategory === 'Establishing').length;

  return (
    <div className="space-y-5">
      {/* On-Set Shooting Filter Bar (Mode Penggambaran - Tapis Kategori Shot) */}
      <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-3 no-print">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
            <Film className="w-4 h-4 text-amber-400" />
            <span>Mode Penggambaran Pengarah • Tapis Kategori Shot (Shooting Category Filter):</span>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                filterCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              Semua Shot ({shots.length})
            </button>

            <button
              onClick={() => setFilterCategory('Main')}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                filterCategory === 'Main'
                  ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md'
                  : 'bg-slate-950 text-amber-300 border-slate-800 hover:text-white'
              }`}
            >
              🎥 Shot Utama ({mainCount})
            </button>

            <button
              onClick={() => setFilterCategory('BRoll')}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                filterCategory === 'BRoll'
                  ? 'bg-cyan-500 text-slate-950 border-cyan-500 shadow-md'
                  : 'bg-slate-950 text-cyan-300 border-slate-800 hover:text-white'
              }`}
            >
              🔍 Detail B-Roll ({brollCount})
            </button>

            <button
              onClick={() => setFilterCategory('Establishing')}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                filterCategory === 'Establishing'
                  ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-md'
                  : 'bg-slate-950 text-emerald-300 border-slate-800 hover:text-white'
              }`}
            >
              🌅 Suasana (Establishing) ({establishingCount})
            </button>
          </div>
        </div>

        {/* Secondary Visual Type Pills */}
        <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="text-slate-400 font-medium mr-1">Jenis Visual (Type) (Type):</span>
          {['all', 'Hook', 'Conflict', 'Lesson', 'Action', 'Climax', 'Cliffhanger'].map(type => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-2 py-0.5 rounded-md border font-medium transition-all ${
                filterType === type
                  ? 'bg-slate-700 text-amber-300 border-amber-500'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              {type === 'all' ? 'Semua' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Storyboard Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredShots.map((shot) => {
          const isFilmed = completedShots[shot.shotNo] || false;
          const userNote = shotNotes[shot.shotNo] || '';
          const catInfo = getCategoryBadge(shot.shotCategory);

          return (
            <div
              key={shot.shotNo}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                isFilmed
                  ? 'bg-slate-950/90 border-emerald-500/50 shadow-lg shadow-emerald-500/5 opacity-80'
                  : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                {/* Visual Header & Camera Framing */}
                <div className="relative aspect-video bg-slate-950 overflow-hidden group">
                  <img
                    src={getShotImage(shot)}
                    alt={shot.scene}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="bg-slate-950/90 backdrop-blur text-amber-400 font-extrabold text-xs px-2.5 py-1 rounded-lg border border-amber-500/40">
                        SHOT {shot.shotNo}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border backdrop-blur ${catInfo.class}`}>
                        {catInfo.label}
                      </span>
                    </div>

                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border backdrop-blur ${getVisualTypeBadgeClass(shot.visualType)}`}>
                      {shot.visualType}
                    </span>
                  </div>

                  {/* Camera Framing Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <div className="bg-slate-950/90 backdrop-blur text-cyan-300 font-bold px-2.5 py-1 rounded-lg border border-cyan-500/30 flex items-center gap-1.5">
                      <Camera className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{shot.cameraAngle}</span>
                    </div>

                    <button
                      onClick={() => onToggleShot(shot.shotNo)}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-md ${
                        isFilmed
                          ? 'bg-emerald-500 text-slate-950'
                          : 'bg-amber-500 text-slate-950 hover:bg-amber-400'
                      }`}
                    >
                      {isFilmed ? (
                        <>
                          <CheckSquare className="w-4 h-4" />
                          <span>Disiapkan</span>
                        </>
                      ) : (
                        <>
                          <Square className="w-4 h-4 text-slate-400" />
                          <span>Tanda Siap</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 space-y-3">
                  {/* Scene & Action */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                      🎬 Visual & Aksi (Action) (Action & Staging)
                    </div>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
                      <strong className="text-amber-400 font-semibold">{shot.scene} </strong>
                      {shot.action}
                    </p>
                  </div>

                  {/* Dialogue & Voiceover */}
                  {shot.dialogue && (
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                        <span className="flex items-center gap-1 text-cyan-400">
                          <MessageSquare className="w-3 h-3" />
                          Dialog / Suara Latar (VO) (Dialogue / VO)
                        </span>
                        <span className="text-[10px] text-amber-300 font-semibold">{shot.character}</span>
                      </div>
                      <div className="bg-gradient-to-r from-cyan-950/40 to-slate-950 p-2.5 rounded-xl border border-cyan-500/20 text-xs text-cyan-100 font-medium italic">
                        "{shot.dialogue}"
                      </div>
                    </div>
                  )}

                  {/* Audio Cues & SFX */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1 text-emerald-400">
                      <Volume2 className="w-3 h-3" />
                      Panduan Audio & SFX (Audio / SFX)
                    </div>
                    <div className="bg-slate-950/80 p-2 rounded-xl border border-slate-800 text-[11px] text-emerald-300/90 font-mono">
                      {shot.audio}
                    </div>
                  </div>

                  {/* DP Lighting & Camera Notes */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1 text-amber-400">
                      <Lightbulb className="w-3 h-3" />
                      Panduan Pengarah & Kamera (DP) (DP Guide)
                    </div>
                    <p className="text-[11px] text-slate-300 bg-slate-950/60 p-2 rounded-xl border border-slate-800/80">
                      {shot.lighting}
                      {shot.directorNote && (
                        <span className="block mt-1 text-amber-300 font-medium border-t border-slate-800/80 pt-1">
                          🎬 Director Note: {shot.directorNote}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* On-Set Director Notes Input */}
              <div className="p-4 pt-0 no-print">
                <div className="pt-2 border-t border-slate-800">
                  <input
                    type="text"
                    value={userNote}
                    onChange={(e) => onSaveNote(shot.shotNo, e.target.value)}
                    placeholder="Nota Penggambaran Set (disimpan automatik)..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-1.5 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
