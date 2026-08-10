import React from 'react';
import { CHARACTERS } from '../data/dramaData';
import { Quote, AlertTriangle } from 'lucide-react';

export const CharacterSection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Header Banner */}
      <div className="text-center space-y-2">
        <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Pelakon & Profil Watak (Main Characters Profile)
        </span>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white">
          Watak Utama Siri "Nasi Lemak Naik Kelas"
        </h2>
        <p className="text-xs text-slate-400 max-w-2xl mx-auto">
          Panduan watak untuk pengarah, pembimbing pelakon (acting coach) dan pereka kostum.
        </p>
      </div>

      {/* Character Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CHARACTERS.map((char) => (
          <div
            key={char.id}
            className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl relative overflow-hidden"
          >
            {/* Header Gradient Accent */}
            <div className={`h-2 w-full absolute top-0 left-0 bg-gradient-to-r ${char.avatarBg}`}></div>

            <div className="space-y-4 pt-2">
              {/* Name & Role */}
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${char.avatarBg} flex items-center justify-center text-white font-extrabold text-lg shadow-md`}>
                  {char.name[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-tight">
                    {char.name} <span className="text-xs font-normal text-slate-400">({char.age})</span>
                  </h3>
                  <p className="text-xs text-amber-400 font-medium">
                    {char.role}
                  </p>
                </div>
              </div>

              {/* Outfit Guide */}
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs">
                <span className="text-slate-400 font-semibold block mb-1">
                  👕 Kostum & Penampilan:
                </span>
                <p className="text-slate-300">
                  {char.actorOutfit}
                </p>
              </div>

              {/* Personality */}
              <div className="space-y-2 text-xs">
                <span className="text-slate-400 font-semibold block">
                  🎭 Personaliti Watak:
                </span>
                <p className="text-slate-300 leading-relaxed">
                  {char.personality}
                </p>
              </div>

              {/* Flaws / Strengths Checklist */}
              <div className="space-y-2 text-xs">
                <span className="text-slate-400 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Poin Cabaran & Kekuatan:
                </span>
                <ul className="space-y-1">
                  {char.problemsOrSkills.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-slate-300">
                      <span className="text-amber-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Iconic Quote */}
            <div className="mt-6 pt-4 border-t border-slate-800 bg-slate-950/80 p-3.5 rounded-xl">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1 mb-1">
                <Quote className="w-3 h-3 text-amber-400" />
                Ayat Ikonik Watak:
              </span>
              <p className="text-xs text-amber-200/90 font-medium italic">
                "{char.iconicQuote}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
