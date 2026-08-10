import React from 'react';
import { DRAMA_SERIES_INFO, EPISODES } from '../data/dramaData';
import { Building2, Sparkles, Award, CheckCircle, HelpCircle } from 'lucide-react';

export const BrandSection: React.FC = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Brand Header */}
      <div className="bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 p-6 lg:p-8 rounded-3xl border border-cyan-500/30 text-center space-y-3 relative overflow-hidden">
        <div className="inline-flex items-center gap-2 bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Building2 className="w-4 h-4 text-cyan-400" />
          Rakan Pembiayaan Utama
        </div>

        <h2 className="text-2xl lg:text-4xl font-extrabold text-white">
          {DRAMA_SERIES_INFO.brand}
        </h2>

        <p className="text-sm text-cyan-100/90 max-w-2xl mx-auto font-medium">
          “{DRAMA_SERIES_INFO.goldenQuote}”
        </p>
      </div>

      {/* Brand Philosophy & Style Rules */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Do's (Gaya Branding Digalakkan) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle className="w-5 h-5" />
            <span>GAYA BRANDING DIGALAKKAN (DO'S)</span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Menonjolkan imej syarikat yang memahami cabaran usahawan tempatan dan masalah sebenar perniagaan.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Membimbing pengurusan kos, aliran tunai, SOP, dan disiplin sebelum menyuntik modal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Memperlihatkan pegawai pembiayaan (Lina) sebagai rakan strategik yang tenang dan profesional.</span>
            </li>
          </ul>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs italic text-emerald-300">
            "Pembiayaan bukan tentang berapa banyak wang yang anda boleh dapat. Ia tentang bagaimana wang itu digunakan."
          </div>
        </div>

        {/* Don'ts (Gaya Branding Dielakkan) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <HelpCircle className="w-5 h-5" />
            <span>GAYA BRANDING DIELAKKAN (DON'TS)</span>
          </div>

          <ul className="space-y-2.5 text-xs text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>ELAKKAN persepsi kononnya “Ambil pembiayaan terus kaya instant”.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>ELAKKAN slogan seperti “Confirm lulus”, “Cepat kaya”, atau “Pinjam sebanyak mungkin”.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-400 font-bold">•</span>
              <span>ELAKKAN melukis Lina sebagai jurujual pembiayaan yang agresif dan memaksa.</span>
            </li>
          </ul>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs italic text-rose-300">
            "Modal membantu kita bergerak. Pengurusan yang baik memastikan kita tidak berhenti di tengah jalan."
          </div>
        </div>
      </div>

      {/* Series Taglines */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Pilihan Tagline Siri Drama
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {DRAMA_SERIES_INFO.taglines.map((tagline, idx) => (
            <div key={idx} className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-bold text-amber-300 flex items-center gap-2">
              <span className="text-amber-500 font-extrabold">{idx + 1}.</span>
              <span>{tagline}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 10 Episodes Business Lessons Table */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-400" />
          Ringkasan 10 Ilmu Perniagaan Dalam Siri
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 text-slate-400 font-bold uppercase text-[10px]">
              <tr>
                <th className="py-2.5 px-3">Episod</th>
                <th className="py-2.5 px-3">Tajuk Episod</th>
                <th className="py-2.5 px-4">Isu & Pembelajaran Bisnes PSC</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {EPISODES.map((ep) => (
                <tr key={ep.id} className="hover:bg-slate-950/60">
                  <td className="py-2.5 px-3 font-bold text-amber-400">EP {ep.id}</td>
                  <td className="py-2.5 px-3 font-semibold text-white">{ep.subtitle}</td>
                  <td className="py-2.5 px-4 text-slate-300">{ep.keyTakeaway}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
