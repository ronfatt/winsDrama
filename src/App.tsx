import { useState, useEffect } from 'react';
import { EPISODES, DRAMA_SERIES_INFO } from './data/dramaData';
import { Navbar } from './components/Navbar';
import { EpisodeSelector } from './components/EpisodeSelector';
import { EpisodeHeader } from './components/EpisodeHeader';
import { StoryboardGrid } from './components/StoryboardGrid';
import { ShotlistTable } from './components/ShotlistTable';
import { ScriptView } from './components/ScriptView';
import { CharacterSection } from './components/CharacterSection';
import { BrandSection } from './components/BrandSection';
import { MobileShootingView } from './components/MobileShootingView';
import { Sparkles } from 'lucide-react';

export function App() {
  const [selectedEpId, setSelectedEpId] = useState<number>(1);
  const [currentView, setCurrentView] = useState<'mobile' | 'storyboard' | 'shotlist' | 'script' | 'characters' | 'brand'>('mobile');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // LocalStorage state for completed shots and notes
  const [completedShots, setCompletedShots] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('nasi_lemak_completed_shots');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [shotNotes, setShotNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('nasi_lemak_shot_notes');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('nasi_lemak_completed_shots', JSON.stringify(completedShots));
  }, [completedShots]);

  useEffect(() => {
    localStorage.setItem('nasi_lemak_shot_notes', JSON.stringify(shotNotes));
  }, [shotNotes]);

  const handleToggleShot = (shotNo: string) => {
    setCompletedShots(prev => ({
      ...prev,
      [shotNo]: !prev[shotNo]
    }));
  };

  const handleSaveNote = (shotNo: string, note: string) => {
    setShotNotes(prev => ({
      ...prev,
      [shotNo]: note
    }));
  };

  // Shot counters
  const totalShots = EPISODES.reduce((acc, ep) => acc + ep.shots.length, 0);
  const completedShotsCount = Object.values(completedShots).filter(Boolean).length;

  const getEpProgress = (epId: number) => {
    const ep = EPISODES.find(e => e.id === epId);
    if (!ep) return { completed: 0, total: 0 };
    const completed = ep.shots.filter(s => completedShots[s.shotNo]).length;
    return { completed, total: ep.shots.length };
  };

  const currentEpisode = EPISODES.find(ep => ep.id === selectedEpId) || EPISODES[0];

  // Search filter
  const isSearching = searchQuery.trim().length > 0;
  const searchResultsShots = isSearching
    ? EPISODES.flatMap(ep =>
        ep.shots.filter(s =>
          (s.scene + s.action + s.dialogue + s.character + s.lighting + ep.title + ep.subtitle)
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      )
    : [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-16">
      {/* Top Sticky Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedShotsCount={completedShotsCount}
        totalShotsCount={totalShots}
      />

      {/* Hero Poster Banner (Desktop / Large View Only) */}
      {!isSearching && currentView !== 'brand' && currentView !== 'characters' && currentView !== 'mobile' && (
        <div className="relative border-b border-slate-800 bg-slate-900/60 overflow-hidden no-print">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 lg:py-8 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Hero Text */}
            <div className="space-y-3 flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold text-amber-300">
                <Sparkles className="w-3.5 h-3.5" />
                Siri Drama Pendek 10 Episod • Production & Storyboard Deck
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                NASI LEMAK NAIK KELAS
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-medium leading-relaxed">
                Daripada gerai kecil di Semporna hingga membina perniagaan dewan majlis di Wins Garden Cafe.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-amber-400 font-bold">Genre:</span> {DRAMA_SERIES_INFO.genre}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-cyan-400 font-bold">Lokasi:</span> {DRAMA_SERIES_INFO.mainLocation}
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span className="text-emerald-400 font-bold">Brand:</span> {DRAMA_SERIES_INFO.brand}
                </div>
              </div>
            </div>

            {/* Drama Poster Art Preview */}
            <div className="w-full md:w-80 shrink-0 relative rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-500/10 group">
              <img
                src="/images/poster.jpg"
                alt="Nasi Lemak Naik Kelas Poster"
                className="w-full h-48 md:h-52 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-3.5">
                <div className="text-xs">
                  <div className="text-amber-400 font-bold">Wins Garden Cafe, Semporna</div>
                  <div className="text-[10px] text-slate-300 italic">"Modal membantu kita bermula. Ilmu membantu kita bertahan."</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Episode Selector Matrix */}
      {!isSearching && currentView !== 'brand' && currentView !== 'characters' && (
        <EpisodeSelector
          episodes={EPISODES}
          selectedEpId={selectedEpId}
          onSelectEp={(id) => setSelectedEpId(id)}
          getEpProgress={getEpProgress}
        />
      )}

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-4">
        {/* Global Search Results View */}
        {isSearching ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Hasil Carian:</span>
                <span className="text-amber-400">"{searchQuery}"</span>
                <span className="text-xs font-normal text-slate-400">({searchResultsShots.length} adegan ditemui)</span>
              </h2>
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-slate-400 hover:text-white underline"
              >
                Clear Search
              </button>
            </div>

            <StoryboardGrid
              shots={searchResultsShots}
              completedShots={completedShots}
              shotNotes={shotNotes}
              onToggleShot={handleToggleShot}
              onSaveNote={handleSaveNote}
            />
          </div>
        ) : (
          <>
            {/* View 0: Mobile Field Shooting Mode (📱 手机单手边看边拍模式) */}
            {currentView === 'mobile' && (
              <MobileShootingView
                episode={currentEpisode}
                completedShots={completedShots}
                shotNotes={shotNotes}
                onToggleShot={handleToggleShot}
                onSaveNote={handleSaveNote}
              />
            )}

            {/* View 1: Storyboard Grid Mode */}
            {currentView === 'storyboard' && (
              <div className="space-y-6">
                <EpisodeHeader episode={currentEpisode} />
                <StoryboardGrid
                  shots={currentEpisode.shots}
                  completedShots={completedShots}
                  shotNotes={shotNotes}
                  onToggleShot={handleToggleShot}
                  onSaveNote={handleSaveNote}
                />
              </div>
            )}

            {/* View 2: DP Shotlist Table Mode */}
            {currentView === 'shotlist' && (
              <div className="space-y-6">
                <EpisodeHeader episode={currentEpisode} />
                <ShotlistTable
                  shots={currentEpisode.shots}
                  completedShots={completedShots}
                  onToggleShot={handleToggleShot}
                  epSubtitle={currentEpisode.subtitle}
                  epId={currentEpisode.id}
                />
              </div>
            )}

            {/* View 3: Actor & Script Mode */}
            {currentView === 'script' && (
              <div className="space-y-6">
                <EpisodeHeader episode={currentEpisode} />
                <ScriptView episode={currentEpisode} />
              </div>
            )}

            {/* View 4: Main Characters */}
            {currentView === 'characters' && (
              <CharacterSection />
            )}

            {/* View 5: Brand Hub & Philosophy */}
            {currentView === 'brand' && (
              <BrandSection />
            )}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 py-6 px-4 text-center text-xs text-slate-500 no-print">
        <div className="max-w-7xl mx-auto space-y-1.5">
          <p className="font-bold text-slate-400">
            NASI LEMAK NAIK KELAS • Wins Garden Cafe • Siri Drama Pendek 10 Episod
          </p>
          <p>
            Hak Cipta Dikekalkan © Perfect Success Capital Sdn Bhd.
          </p>
        </div>
      </footer>
    </div>
  );
}
