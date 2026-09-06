import React, { useState, useEffect, useRef } from 'react';
import { Play, Square, Volume2, VolumeX, Heart, RotateCcw, AlertCircle } from 'lucide-react';

export const Metronome: React.FC = () => {
  const [bpm, setBpm] = useState<number>(110);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentBeat, setCurrentBeat] = useState<number>(0);
  const [cycleCount, setCycleCount] = useState<number>(1);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);

  const audioContextRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);

  // Initialize Web Audio API on demand to comply with browser autoplay policies
  const playClickSound = (isFirstBeat: boolean) => {
    if (isMuted) return;
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const osc = audioContextRef.current.createOscillator();
      const gain = audioContextRef.current.createGain();

      osc.type = isFirstBeat ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(isFirstBeat ? 950 : 650, audioContextRef.current.currentTime);

      gain.gain.setValueAtTime(1, audioContextRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioContextRef.current.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(audioContextRef.current.destination);

      osc.start();
      osc.stop(audioContextRef.current.currentTime + 0.09);
    } catch {
      // Audio context fallback
    }
  };

  useEffect(() => {
    if (isPlaying) {
      const intervalMs = (60 / bpm) * 1000;
      intervalRef.current = window.setInterval(() => {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 120);

        setCurrentBeat((prev) => {
          const next = (prev % 30) + 1;
          playClickSound(next === 1);
          if (next === 1 && prev === 30) {
            setCycleCount((c) => c + 1);
          }
          return next;
        });
      }, intervalMs);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setIsFlashing(false);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, bpm, isMuted]);

  const togglePlay = () => {
    if (!isPlaying) {
      setCurrentBeat(1);
      playClickSound(true);
    }
    setIsPlaying(!isPlaying);
  };

  const resetCounter = () => {
    setIsPlaying(false);
    setCurrentBeat(0);
    setCycleCount(1);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-orange-200 bg-gradient-to-b from-white via-orange-50/30 to-brand-orange-50/50 p-4 sm:p-8 shadow-lg">
      {/* Background Accent Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange-300/80 bg-brand-orange-100/80 px-3 py-1 text-[11px] sm:text-xs font-semibold text-brand-orange-800">
          <Heart className="h-3.5 w-3.5 fill-brand-orange-600 text-brand-orange-600 animate-pulse" />
          <span>Interactive CPR Beat Trainer (100–120 BPM)</span>
        </div>

        <h3 className="mt-2.5 text-xl sm:text-3xl font-bold text-slate-900">
          เครื่องฝึกเคาะจังหวะปั๊มหัวใจ
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-md px-2">
          มาตรฐานสากล AHA & สพฉ. แนะนำให้กดหน้าอกด้วยความเร็วสม่ำเสมอ 100–120 ครั้ง/นาที
        </p>

        {/* Visual Beat Indicator */}
        <div className="mt-5 sm:mt-6 flex flex-col items-center">
          <div
            className={`relative flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-full transition-all duration-100 ${
              isFlashing
                ? 'scale-110 bg-brand-orange-500 shadow-xl shadow-brand-orange-500/50 text-white'
                : 'bg-white border-4 border-slate-100 text-slate-700 shadow-md'
            }`}
          >
            <Heart
              className={`h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-75 ${
                isFlashing ? 'scale-125 fill-white text-white' : 'text-brand-orange-500 fill-brand-orange-100'
              }`}
            />
            {isPlaying && (
              <span className="absolute bottom-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                Beat {currentBeat}/30
              </span>
            )}
          </div>

          {/* Cycle Badge */}
          <div className="mt-3.5 sm:mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-slate-700 border border-slate-200">
              รอบที่: <strong className="text-brand-orange-600">{cycleCount}</strong>
            </span>
            <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] sm:text-xs font-medium text-slate-700 border border-slate-200">
              จังหวะ: <strong className="text-brand-blue-600">{currentBeat || '-'}</strong> / 30 ครั้ง
            </span>
          </div>
        </div>

        {/* BPM Selector Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
          {[100, 105, 110, 115, 120].map((rate) => (
            <button
              key={rate}
              onClick={() => setBpm(rate)}
              className={`rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold transition-all ${
                bpm === rate
                  ? 'bg-brand-orange-600 text-white shadow-md shadow-brand-orange-500/30'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {rate} BPM {rate === 110 && '(แนะนำ)'}
            </button>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto">
          <button
            onClick={togglePlay}
            className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl px-6 py-3 sm:py-3.5 text-sm sm:text-base font-bold shadow-lg transition-all active:scale-95 ${
              isPlaying
                ? 'bg-red-600 text-white shadow-red-500/30 hover:bg-red-700'
                : 'bg-brand-orange-600 text-white shadow-brand-orange-500/30 hover:bg-brand-orange-500'
            }`}
          >
            {isPlaying ? (
              <>
                <Square className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                <span>หยุดจังหวะ</span>
              </>
            ) : (
              <>
                <Play className="h-4 w-4 sm:h-5 sm:w-5 fill-white" />
                <span>เริ่มเคาะจังหวะฝึกกด</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95"
              title={isMuted ? 'เปิดเสียง' : 'ปิดเสียง'}
            >
              {isMuted ? (
                <>
                  <VolumeX className="h-4 w-4 text-slate-400" />
                  <span>เปิดเสียง</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 text-brand-blue-600" />
                  <span>เสียงบี๊บ</span>
                </>
              )}
            </button>

            <button
              onClick={resetCounter}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 rounded-2xl border border-slate-200 bg-white px-3.5 py-2.5 sm:py-3.5 text-xs sm:text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95"
              title="รีเซ็ตรอบนับ"
            >
              <RotateCcw className="h-4 w-4 text-slate-500" />
              <span>รีเซ็ต</span>
            </button>
          </div>
        </div>

        {/* CPR Golden Rule Tip */}
        <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-brand-blue-200/80 bg-brand-blue-50/60 p-3.5 text-left text-xs sm:text-sm text-brand-blue-900 max-w-lg">
          <AlertCircle className="h-5 w-5 shrink-0 text-brand-blue-600 mt-0.5" />
          <p>
            <strong>เทคนิคการกด:</strong> วางสันมือทับกันกึ่งกลางหน้าอก แขนเหยียดตรงตั้งฉาก 90° กดลึก 5–6 เซนติเมตร
            และปล่อยให้หน้าอกคืนตัวเต็มที่ทุกครั้งก่อนกดครั้งต่อไป (Full Recoil)
          </p>
        </div>
      </div>
    </div>
  );
};
