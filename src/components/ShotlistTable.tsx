import React from 'react';
import type { Shot } from '../data/dramaData';
import { CheckCircle2, Square } from 'lucide-react';

interface ShotlistTableProps {
  shots: Shot[];
  completedShots: Record<string, boolean>;
  onToggleShot: (shotNo: string) => void;
  epSubtitle: string;
  epId: number;
}

export const ShotlistTable: React.FC<ShotlistTableProps> = ({
  shots,
  completedShots,
  onToggleShot,
  epSubtitle,
  epId
}) => {
  const getCategoryBadgeClass = (cat?: Shot['shotCategory']) => {
    switch (cat) {
      case 'Establishing':
        return 'bg-emerald-950 text-emerald-300 border-emerald-800';
      case 'BRoll':
        return 'bg-cyan-950 text-cyan-300 border-cyan-800';
      default:
        return 'bg-amber-950 text-amber-300 border-amber-800';
    }
  };

  return (
    <div className="space-y-4">
      {/* Table Header Info */}
      <div className="flex items-center justify-between bg-slate-900/80 p-4 rounded-xl border border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 font-bold text-xs px-2.5 py-0.5 rounded">
              EPISOD {epId}
            </span>
            <h3 className="text-base font-bold text-white">{epSubtitle} — Shot List Senarai Shot</h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Mengandungi shot utama (Main)、B-Roll detail B-Roll dan suasana/shot suasana (Establishing) (Establishing)。
          </p>
        </div>
        <div className="text-xs text-right text-slate-400">
          Total Shots: <span className="text-amber-400 font-bold">{shots.length}</span>
        </div>
      </div>

      {/* Shotlist Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950">
        <table className="w-full text-left text-xs text-slate-300 border-collapse">
          <thead className="bg-slate-900 text-slate-400 font-bold uppercase tracking-wider text-[11px] border-b border-slate-800">
            <tr>
              <th className="py-3.5 px-4 w-12 text-center no-print">Status</th>
              <th className="py-3.5 px-3 w-20">Shot #</th>
              <th className="py-3.5 px-3 w-28">Kategori</th>
              <th className="py-3.5 px-4 w-44">Kamera & Angle</th>
              <th className="py-3.5 px-4">Adegan & Aksi Visual</th>
              <th className="py-3.5 px-4">Watak & Dialog / VO</th>
              <th className="py-3.5 px-4">Audio & SFX</th>
              <th className="py-3.5 px-4">Lampu & Nota DP</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80">
            {shots.map((shot) => {
              const isDone = completedShots[shot.shotNo] || false;

              return (
                <tr
                  key={shot.shotNo}
                  className={`hover:bg-slate-900/50 transition-colors ${
                    isDone ? 'bg-emerald-950/20 text-slate-400' : ''
                  }`}
                >
                  {/* Status Checkbox */}
                  <td className="py-3 px-4 text-center no-print">
                    <button
                      onClick={() => onToggleShot(shot.shotNo)}
                      className="p-1 hover:text-amber-400 transition-colors"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-600" />
                      )}
                    </button>
                  </td>

                  {/* Shot No */}
                  <td className="py-3 px-3 font-bold text-amber-400">
                    {shot.shotNo}
                  </td>

                  {/* Shot Category */}
                  <td className="py-3 px-3">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border block text-center ${getCategoryBadgeClass(shot.shotCategory)}`}>
                      {shot.shotCategory === 'Establishing' ? '🌅 Suasana' : shot.shotCategory === 'BRoll' ? '🔍 B-Roll' : '🎥 Utama'}
                    </span>
                  </td>

                  {/* Framing / Camera */}
                  <td className="py-3 px-4">
                    <span className="bg-slate-900 text-cyan-300 font-semibold px-2 py-1 rounded border border-slate-800 block text-[11px]">
                      {shot.cameraAngle}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1 block">
                      Type: {shot.visualType}
                    </span>
                  </td>

                  {/* Scene & Action */}
                  <td className="py-3 px-4">
                    <div className="font-semibold text-slate-200">{shot.scene}</div>
                    <div className="text-slate-400 mt-0.5 leading-relaxed">{shot.action}</div>
                  </td>

                  {/* Character & Dialogue */}
                  <td className="py-3 px-4">
                    <div className="text-amber-300 font-bold text-[11px] mb-0.5">{shot.character}</div>
                    {shot.dialogue && <div className="italic text-cyan-200/90 font-medium">"{shot.dialogue}"</div>}
                  </td>

                  {/* Audio */}
                  <td className="py-3 px-4 text-emerald-300 font-mono text-[11px]">
                    {shot.audio}
                  </td>

                  {/* Lighting & DP Notes */}
                  <td className="py-3 px-4 text-slate-300 text-[11px]">
                    {shot.lighting}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
