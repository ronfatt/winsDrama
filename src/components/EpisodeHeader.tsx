import React from 'react';
import type { Episode } from '../data/dramaData';
import { Flame, Target, Zap, MapPin, Users, PackageCheck, Award, Quote } from 'lucide-react';

interface EpisodeHeaderProps {
  episode: Episode;
}

export const EpisodeHeader: React.FC<EpisodeHeaderProps> = ({ episode }) => {
  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-2xl p-5 lg:p-6 mb-6 shadow-xl relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 relative z-10">
        {/* Left Side: Episode Title & Main Info */}
        <div className="space-y-3 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-amber-500 text-slate-950 font-extrabold text-xs px-3 py-1 rounded-lg tracking-wider">
              {episode.title}
            </span>
            <span className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-lg border border-slate-700 font-medium">
              Masa: {episode.duration} minit
            </span>
            <span className="bg-cyan-500/10 text-cyan-300 text-xs px-3 py-1 rounded-lg border border-cyan-500/30 font-medium flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              {episode.shots.length} Storyboard Shots
            </span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
            {episode.subtitle}
          </h2>

          {/* 3 Core Production Pillars (Hook, Issue, Cliffhanger) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {/* Hook */}
            <div className="bg-amber-950/40 border border-amber-500/30 rounded-xl p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs mb-1">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>1. 5 SAAT PERTAMA (HOOK)</span>
              </div>
              <p className="text-xs text-amber-100/90 font-medium italic">
                {episode.hook}
              </p>
            </div>

            {/* Business Issue */}
            <div className="bg-blue-950/40 border border-blue-500/30 rounded-xl p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs mb-1">
                <Target className="w-4 h-4 text-blue-400" />
                <span>2. MASALAH PERNIAGAAN</span>
              </div>
              <p className="text-xs text-blue-100/90 font-medium">
                {episode.businessIssue}
              </p>
            </div>

            {/* Cliffhanger */}
            <div className="bg-purple-950/40 border border-purple-500/30 rounded-xl p-3.5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs mb-1">
                <Zap className="w-4 h-4 text-purple-400" />
                <span>3. CLIFFHANGER PENUTUP</span>
              </div>
              <p className="text-xs text-purple-100/90 font-medium italic">
                {episode.cliffhanger}
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Crew Quick Reference (Locations, Characters, Props) */}
        <div className="w-full lg:w-80 bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3.5 text-xs">
          <div className="font-bold text-slate-200 border-b border-slate-800 pb-2 flex items-center justify-between">
            <span>Panduan Kru Penggambaran</span>
            <span className="text-[10px] text-amber-400 font-normal">Semporna Production</span>
          </div>

          {/* Locations */}
          <div>
            <span className="text-slate-400 font-medium flex items-center gap-1.5 mb-1 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              Lokasi Penggambaran:
            </span>
            <div className="flex flex-wrap gap-1">
              {episode.locations.map((loc, idx) => (
                <span key={idx} className="bg-slate-900 text-slate-200 px-2 py-0.5 rounded border border-slate-800">
                  {loc}
                </span>
              ))}
            </div>
          </div>

          {/* Characters */}
          <div>
            <span className="text-slate-400 font-medium flex items-center gap-1.5 mb-1 text-[11px]">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              Watak Terlibat:
            </span>
            <div className="flex flex-wrap gap-1">
              {episode.characters.map((char, idx) => (
                <span key={idx} className="bg-slate-900 text-amber-300 font-medium px-2 py-0.5 rounded border border-slate-800">
                  {char}
                </span>
              ))}
            </div>
          </div>

          {/* Props */}
          <div>
            <span className="text-slate-400 font-medium flex items-center gap-1.5 mb-1 text-[11px]">
              <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
              Senarai Prop Utama:
            </span>
            <div className="flex flex-wrap gap-1">
              {episode.propsList.map((prop, idx) => (
                <span key={idx} className="bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800 text-[10px]">
                  • {prop}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Branding Quote Banner */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs bg-slate-950/60 p-3.5 rounded-xl">
        <div className="flex items-center gap-2.5">
          <Quote className="w-4 h-4 text-amber-400 shrink-0" />
          <div>
            <span className="text-amber-400 font-bold">Fokus Branding PSC: </span>
            <span className="text-slate-300">{episode.brandingFocus}</span>
          </div>
        </div>
        <div className="text-emerald-400 font-semibold bg-emerald-950/40 px-3 py-1 rounded-lg border border-emerald-500/20 shrink-0">
          💡 Key Takeaway: {episode.keyTakeaway}
        </div>
      </div>
    </div>
  );
};
