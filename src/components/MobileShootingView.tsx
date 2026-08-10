import React, { useState } from 'react';
import type { Shot, Episode } from '../data/dramaData';
import { Camera, Volume2, Lightbulb, Square, ChevronLeft, ChevronRight, MessageSquare, Film, CheckCircle2 } from 'lucide-react';

interface MobileShootingViewProps {
  episode: Episode;
  completedShots: Record<string, boolean>;
  shotNotes: Record<string, string>;
  onToggleShot: (shotNo: string) => void;
  onSaveNote: (shotNo: string, note: string) => void;
}

export const MobileShootingView: React.FC<MobileShootingViewProps> = ({
  episode,
  completedShots,
  shotNotes,
  onToggleShot,
  onSaveNote
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'Main' | 'BRoll' | 'Establishing'>('all');
  const [activeShotIndex, setActiveShotIndex] = useState<number>(0);

  const filteredShots = episode.shots.filter(shot => {
    if (filterCategory === 'all') return true;
    return shot.shotCategory === filterCategory;
  });

  const currentShot: Shot | undefined = filteredShots[activeShotIndex] || filteredShots[0];

  const handlePrev = () => {
    if (activeShotIndex > 0) {
      setActiveShotIndex(activeShotIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeShotIndex < filteredShots.length - 1) {
      setActiveShotIndex(activeShotIndex + 1);
    }
  };

  const getShotImage = (shot?: Shot) => {
    if (!shot) return '/images/poster.jpg';
    const text = (shot.scene + shot.action + shot.dialogue).toLowerCase();
    if (text.includes('lobster') || text.includes('nasi lemak lobster') || text.includes('mentega') || text.includes('panggangan')) {
      return '/images/lobster.jpg';
    }
    if (text.includes('dewan') || text.includes('hall') || text.includes('majlis') || text.includes('hari jadi') || text.includes('acara')) {
      return '/images/venue.jpg';
    }
    return '/images/poster.jpg';
  };

  const completedCount = episode.shots.filter(s => completedShots[s.shotNo]).length;
  const totalCount = episode.shots.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100) || 0;

  if (!currentShot) {
    return (
      <div className="p-8 text-center text-slate-400">
        Tiada shot dalam kategori ini.
      </div>
    );
  }

  const isCurrentFilmed = completedShots[currentShot.shotNo] || false;
  const currentNote = shotNotes[currentShot.shotNo] || '';

  return (
    <div className="space-y-4 max-w-md mx-auto pb-24 px-1">
      {/* Mobile Shooting Header & Progress */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-2.5 py-0.5 rounded-lg">
              EP {episode.id}
            </span>
            <h3 className="font-extrabold text-sm text-white truncate max-w-[180px]">
              {episode.subtitle}
            </h3>
          </div>
          <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
            {completedCount}/{totalCount} 已拍 ({progressPercent}%)
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        {/* Filter Pills */}
        <div className="grid grid-cols-4 gap-1 pt-1">
          <button
            onClick={() => { setFilterCategory('all'); setActiveShotIndex(0); }}
            className={`py-1.5 rounded-lg text-[11px] font-bold text-center border transition-all ${
              filterCategory === 'all'
                ? 'bg-amber-500 text-slate-950 border-amber-500'
                : 'bg-slate-950 text-slate-400 border-slate-800'
            }`}
          >
            全部 ({episode.shots.length})
          </button>

          <button
            onClick={() => { setFilterCategory('Main'); setActiveShotIndex(0); }}
            className={`py-1.5 rounded-lg text-[11px] font-bold text-center border transition-all ${
              filterCategory === 'Main'
                ? 'bg-amber-500 text-slate-950 border-amber-500'
                : 'bg-slate-950 text-amber-300 border-slate-800'
            }`}
          >
            🎥 主线
          </button>

          <button
            onClick={() => { setFilterCategory('BRoll'); setActiveShotIndex(0); }}
            className={`py-1.5 rounded-lg text-[11px] font-bold text-center border transition-all ${
              filterCategory === 'BRoll'
                ? 'bg-cyan-500 text-slate-950 border-cyan-500'
                : 'bg-slate-950 text-cyan-300 border-slate-800'
            }`}
          >
            🔍 细节
          </button>

          <button
            onClick={() => { setFilterCategory('Establishing'); setActiveShotIndex(0); }}
            className={`py-1.5 rounded-lg text-[11px] font-bold text-center border transition-all ${
              filterCategory === 'Establishing'
                ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                : 'bg-slate-950 text-emerald-300 border-slate-800'
            }`}
          >
            🌅 空景
          </button>
        </div>
      </div>

      {/* Shot Selector Thumb Swiper Bar */}
      <div className="flex items-center justify-between bg-slate-900/90 p-2.5 rounded-xl border border-slate-800 text-xs">
        <button
          onClick={handlePrev}
          disabled={activeShotIndex === 0}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-slate-200 font-bold active:scale-95 transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-amber-400" />
          <span>上一镜头</span>
        </button>

        <div className="text-center font-extrabold text-amber-300">
          Shot {activeShotIndex + 1} / {filteredShots.length}
        </div>

        <button
          onClick={handleNext}
          disabled={activeShotIndex === filteredShots.length - 1}
          className="flex items-center gap-1 px-3 py-2 rounded-lg bg-slate-800 disabled:opacity-30 disabled:pointer-events-none text-slate-200 font-bold active:scale-95 transition-all"
        >
          <span>下一镜头</span>
          <ChevronRight className="w-4 h-4 text-amber-400" />
        </button>
      </div>

      {/* Mobile Hero Shot Card */}
      <div className={`rounded-2xl border overflow-hidden transition-all shadow-2xl ${
        isCurrentFilmed
          ? 'bg-slate-950 border-emerald-500/80 ring-2 ring-emerald-500/20'
          : 'bg-slate-900 border-slate-800'
      }`}>
        {/* Card Image Banner */}
        <div className="relative aspect-video bg-slate-950">
          <img
            src={getShotImage(currentShot)}
            alt={currentShot.scene}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="bg-slate-950/95 backdrop-blur text-amber-400 font-black text-sm px-3 py-1 rounded-xl border border-amber-500/40">
              SHOT {currentShot.shotNo}
            </span>

            <span className={`text-xs font-extrabold px-2.5 py-1 rounded-lg border backdrop-blur ${
              currentShot.shotCategory === 'Establishing'
                ? 'bg-emerald-950/90 text-emerald-300 border-emerald-500/40'
                : currentShot.shotCategory === 'BRoll'
                ? 'bg-cyan-950/90 text-cyan-300 border-cyan-500/40'
                : 'bg-amber-950/90 text-amber-300 border-amber-500/40'
            }`}>
              {currentShot.shotCategory === 'Establishing' ? '🌅 空景' : currentShot.shotCategory === 'BRoll' ? '🔍 B-Roll' : '🎥 主线'}
            </span>
          </div>

          {/* Bottom Framing Overlay */}
          <div className="absolute bottom-3 left-3 right-3">
            <div className="bg-slate-950/90 backdrop-blur text-cyan-300 font-extrabold text-xs px-3 py-1.5 rounded-xl border border-cyan-500/30 inline-flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-cyan-400" />
              <span>{currentShot.cameraAngle}</span>
            </div>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-4 space-y-4">
          {/* Action */}
          <div>
            <div className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Film className="w-3.5 h-3.5 text-amber-400" />
              画面与动作 (Action):
            </div>
            <p className="text-sm font-semibold text-slate-100 bg-slate-950/80 p-3 rounded-xl border border-slate-800 leading-relaxed">
              <strong className="text-amber-400 block mb-0.5">{currentShot.scene}</strong>
              {currentShot.action}
            </p>
          </div>

          {/* Dialogue / VO */}
          {currentShot.dialogue && (
            <div>
              <div className="text-[11px] font-extrabold text-cyan-400 uppercase tracking-wider mb-1 flex items-center justify-between">
                <span className="flex items-center gap-1">
                  <MessageSquare className="w-3.5 h-3.5" />
                  对白 / 旁白 (Dialogue):
                </span>
                <span className="text-amber-300 font-bold text-xs">{currentShot.character}</span>
              </div>
              <div className="bg-gradient-to-r from-cyan-950/60 to-slate-950 p-3 rounded-xl border border-cyan-500/30 text-sm font-medium text-cyan-100 italic leading-relaxed">
                "{currentShot.dialogue}"
              </div>
            </div>
          )}

          {/* Audio Cue */}
          <div>
            <div className="text-[11px] font-extrabold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5" />
              音效提示 (Audio Cue):
            </div>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs font-mono text-emerald-300">
              {currentShot.audio}
            </div>
          </div>

          {/* DP Lighting Note */}
          <div>
            <div className="text-[11px] font-extrabold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1">
              <Lightbulb className="w-3.5 h-3.5" />
              摄影/灯光 (DP Cue):
            </div>
            <p className="text-xs text-slate-300 bg-slate-950 p-2.5 rounded-xl border border-slate-800 leading-relaxed">
              {currentShot.lighting}
            </p>
          </div>

          {/* GIANT ONE-TOUCH SHOOTING BUTTON (单手打卡大按钮) */}
          <button
            onClick={() => onToggleShot(currentShot.shotNo)}
            className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-xl active:scale-95 transition-all ${
              isCurrentFilmed
                ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                : 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-amber-500/20 hover:from-amber-400 hover:to-amber-500'
            }`}
          >
            {isCurrentFilmed ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>✓ SHOT {currentShot.shotNo} 已拍摄 (FILMED)</span>
              </>
            ) : (
              <>
                <Square className="w-5 h-5" />
                <span>点击标记为【已拍摄】 (SHOT {currentShot.shotNo})</span>
              </>
            )}
          </button>

          {/* On-Set Note */}
          <div className="pt-1">
            <input
              type="text"
              value={currentNote}
              onChange={(e) => onSaveNote(currentShot.shotNo, e.target.value)}
              placeholder="现场备注 (自动保存)..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
