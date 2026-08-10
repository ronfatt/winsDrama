import React from 'react';
import { Film, Clapperboard, Table, FileText, Users, Building2, Printer, Search } from 'lucide-react';
import { DRAMA_SERIES_INFO } from '../data/dramaData';

interface NavbarProps {
  currentView: 'storyboard' | 'shotlist' | 'script' | 'characters' | 'brand';
  setCurrentView: (view: 'storyboard' | 'shotlist' | 'script' | 'characters' | 'brand') => void;
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
  const percentCompleted = Math.round((completedShotsCount / totalShotsCount) * 100) || 0;

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 px-4 lg:px-8 py-3.5 no-print">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Brand & Title */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-bold">
              <Film className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-bold text-white tracking-wide leading-none">{DRAMA_SERIES_INFO.title}</h1>
                <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">
                  10 EPISOD
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <span className="text-cyan-400 font-medium">Production Deck</span> • {DRAMA_SERIES_INFO.brand}
              </p>
            </div>
          </div>

          {/* Mobile Print Button */}
          <button
            onClick={handlePrint}
            className="md:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700"
            title="Cetak Shotlist"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari adegan, watak, dialog..."
            className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
          />
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 w-full md:w-auto overflow-x-auto">
          <button
            onClick={() => setCurrentView('storyboard')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
              currentView === 'storyboard'
                ? 'bg-amber-500 text-slate-950 font-semibold shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Clapperboard className="w-3.5 h-3.5" />
            <span>分镜故事版</span>
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
            <span>摄影组排单</span>
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
            <span>对白剧本</span>
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
            <span>主要人物</span>
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
            <span>PSC 品牌与理念</span>
          </button>
        </div>

        {/* Progress & Print */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-900/60 px-3 py-1.5 rounded-xl border border-slate-800">
            <div className="text-right">
              <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Shooting Progress</div>
              <div className="text-xs font-bold text-emerald-400">{completedShotsCount} / {totalShotsCount} Shots ({percentCompleted}%)</div>
            </div>
            <div className="w-12 bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{ width: `${percentCompleted}%` }}
              ></div>
            </div>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all"
            title="Cetak Shotlist / Print Call Sheet"
          >
            <Printer className="w-4 h-4 text-cyan-400" />
            <span>Cetak Shotlist</span>
          </button>
        </div>
      </div>
    </header>
  );
};
