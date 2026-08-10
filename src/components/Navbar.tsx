import React from 'react';
import { Film, Clapperboard, Table, FileText, Users, Building2, Printer, Search, Smartphone } from 'lucide-react';
import { DRAMA_SERIES_INFO } from '../data/dramaData';

interface NavbarProps {
  currentView: 'mobile' | 'storyboard' | 'shotlist' | 'script' | 'characters' | 'brand';
  setCurrentView: (view: 'mobile' | 'storyboard' | 'shotlist' | 'script' | 'characters' | 'brand') => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  completedShotsCount: number;
  totalShotsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  searchQuery,
  setSearchQuery,
  completedShotsCount,
  totalShotsCount
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-3 lg:px-8 py-2.5 no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Brand & Title */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-bold shrink-0">
              <Film className="w-4 h-4 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base font-bold text-white tracking-wide leading-none">{DRAMA_SERIES_INFO.title}</h1>
                <span className="bg-amber-500/20 text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-amber-500/30 shrink-0">
                  10 EPISOD
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
                <span className="text-cyan-400 font-medium">Wins Garden Deck</span> • {DRAMA_SERIES_INFO.brand}
                <span className="ml-2 text-emerald-400 font-bold">({completedShotsCount}/{totalShotsCount} siap)</span>
              </p>
            </div>
          </div>

          {/* Mobile Print Button */}
          <button
            onClick={handlePrint}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700 shrink-0"
            title="Cetak Shotlist"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>

        {/* View Switchers (Scrollable Bar for Mobile Thumb Nav) */}
        <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 w-full md:w-auto overflow-x-auto no-scrollbar">
          {/* Mobile Field Shooting Mode Button */}
          <button
            onClick={() => setCurrentView('mobile')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all whitespace-nowrap ${
              currentView === 'mobile'
                ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 shadow-md'
                : 'bg-slate-800/80 text-amber-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>📱 Mode Telefon</span>
          </button>

          <button
            onClick={() => setCurrentView('storyboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentView === 'storyboard'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>Storyboard Visual</span>
          </button>

          <button
            onClick={() => setCurrentView('shotlist')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentView === 'shotlist'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Table className="w-3.5 h-3.5" />
            <span>Senarai Shot</span>
          </button>

          <button
            onClick={() => setCurrentView('script')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentView === 'script'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Skrip Dialog Pelakon</span>
          </button>

          <button
            onClick={() => setCurrentView('characters')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentView === 'characters'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Watak Utama</span>
          </button>

          <button
            onClick={() => setCurrentView('brand')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentView === 'brand'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Jenama PSC</span>
          </button>
        </div>

        {/* Search & Progress */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between">
          <div className="relative flex-1 md:w-48">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari adegan, watak..."
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-8 pr-3 py-1 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <button
            onClick={handlePrint}
            className="hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all shrink-0"
            title="Cetak Shotlist / Print Call Sheet"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cetak</span>
          </button>
        </div>
      </div>
    </header>
  );
};
