import React, { useEffect, useRef, useState } from 'react';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
import { Play, Sparkles, ExternalLink, BookmarkCheck } from 'lucide-react';

interface VideoChapter {
  time: number; // in seconds
  label: string;
  badge: string;
}

const CHAPTERS: VideoChapter[] = [
  { time: 0, label: 'ความปลอดภัย & ปลุกเรียกผู้ป่วย', badge: '00:00' },
  { time: 45, label: 'ขอความช่วยเหลือ & โทรแจ้ง 1669', badge: '00:45' },
  { time: 85, label: 'จัดท่าผู้ป่วย & ตำแหน่งวางมือกดหน้าอก', badge: '01:25' },
  { time: 135, label: 'เทคนิคการกด 100–120 ครั้ง/นาที', badge: '02:15' },
  { time: 200, label: 'เปิดเครื่อง AED & แปะแผ่นนำไฟฟ้า', badge: '03:20' },
  { time: 235, label: 'การกดปุ่มช็อก & ทำ CPR ต่อเนื่อง', badge: '03:55' },
];

export const VideoPlayer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const plyrInstanceRef = useRef<Plyr | null>(null);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize Plyr on the video container element
    const player = new Plyr(containerRef.current, {
      controls: [
        'play-large',
        'play',
        'progress',
        'current-time',
        'duration',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
      ],
      settings: ['quality', 'speed'],
      youtube: {
        noCookie: true,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        modestbranding: 1,
      },
      tooltips: { controls: true, seek: true },
    });

    plyrInstanceRef.current = player;

    player.on('timeupdate', () => {
      const current = player.currentTime;
      // Find current chapter
      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        if (current >= CHAPTERS[i].time) {
          setActiveChapter(i);
          break;
        }
      }
    });

    player.on('playing', () => setIsPlaying(true));
    player.on('pause', () => setIsPlaying(false));

    return () => {
      try {
        player.destroy();
      } catch {
        // Ignore destroy error
      }
    };
  }, []);

  const seekTo = (seconds: number, index: number) => {
    setActiveChapter(index);
    if (plyrInstanceRef.current) {
      plyrInstanceRef.current.currentTime = seconds;
      plyrInstanceRef.current.play();
    }
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Background Ambient Glow */}
      <div className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-brand-orange-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange-50 border border-brand-orange-200 px-3 py-0.5 text-xs font-bold text-brand-orange-700">
              <Sparkles className="h-3.5 w-3.5 text-brand-orange-600" />
              <span>วิดีโอสาธิตภาคปฏิบัติ • Basic Life Support (BLS)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              วิดีโอสาธิตการช่วยชีวิตขั้นพื้นฐาน CPR & การใช้ AED
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              รับชมขั้นตอนปฏิบัติจริงอย่างละเอียดตามมาตรฐานสากล เพื่อเพิ่มความมั่นใจเมื่อเกิดเหตุฉุกเฉิน
            </p>
          </div>

          <a
            href="https://youtu.be/8sjSv4vxy-I"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 hover:text-brand-orange-600 transition-colors"
          >
            <span>ต้นฉบับ YouTube: EDPYH Channel</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Video Cinema Container */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-950 shadow-2xl ring-1 ring-slate-900/10">
          <div
            ref={containerRef}
            data-plyr-provider="youtube"
            data-plyr-embed-id="8sjSv4vxy-I"
            className="w-full aspect-video"
          />
        </div>

        {/* Interactive Chapters / Timeline Jump */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
              <BookmarkCheck className="h-4 w-4 text-brand-orange-600" />
              <span>คลิกเพื่อข้ามไปยังหัวข้อสำคัญในคลิป (Interactive Key Moments)</span>
            </span>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              {isPlaying ? 'กำลังเล่น...' : 'คลิกเพื่อข้ามไปยังวินาทีนั้น'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {CHAPTERS.map((ch, idx) => {
              const isSelected = activeChapter === idx;
              return (
                <button
                  key={ch.time}
                  onClick={() => seekTo(ch.time, idx)}
                  type="button"
                  className={`flex items-center gap-3 rounded-2xl p-3 text-left transition-all border ${
                    isSelected
                      ? 'border-brand-orange-400 bg-brand-orange-50/80 shadow-xs'
                      : 'border-slate-200/80 bg-slate-50/50 hover:bg-slate-100/80 hover:border-slate-300'
                  }`}
                >
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-xl text-xs font-mono font-black shrink-0 ${
                      isSelected
                        ? 'bg-brand-orange-600 text-white'
                        : 'bg-white border border-slate-200 text-slate-700'
                    }`}
                  >
                    <Play className="h-3.5 w-3.5 fill-current" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-brand-orange-600">
                        {ch.badge}
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-slate-800 truncate">
                      {ch.label}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
