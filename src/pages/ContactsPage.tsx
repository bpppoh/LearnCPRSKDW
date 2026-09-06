import React, { useState } from 'react';
import {
  PhoneCall,
  Copy,
  Check,
  ShieldAlert,
  Flame,
  LifeBuoy,
  FileText,
  AlertCircle,
} from 'lucide-react';
import type { PageTab } from '../types';

interface ContactsPageProps {
  onSelectTab?: (tab: PageTab) => void;
}

interface EmergencyService {
  number: string;
  title: string;
  agency: string;
  category: string;
  description: string;
  bgGradient: string;
  badgeColor: string;
  icon: React.ComponentType<{ className?: string }>;
  isPrimary?: boolean;
}

export const ContactsPage: React.FC<ContactsPageProps> = () => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const handleCopy = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopiedNumber(num);
    setTimeout(() => setCopiedNumber(null), 2000);
  };

  const EMERGENCY_LIST: EmergencyService[] = [
    {
      number: '1669',
      title: 'สายด่วนการแพทย์ฉุกเฉิน (EMS)',
      agency: 'สถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.)',
      category: 'การแพทย์ & กู้ชีพ',
      description: 'บริการเจ็บป่วยฉุกเฉิน วิกฤต หมดสติ หัวใจหยุดเต้น รถพยาบาลพร้อมทีมแพทย์ฉุกเฉินส่งถึงที่เกิดเหตุฟรี 24 ชม.',
      bgGradient: 'from-orange-500 to-red-600',
      badgeColor: 'bg-red-100 text-red-800 border-red-200',
      icon: PhoneCall,
      isPrimary: true,
    },
    {
      number: '191',
      title: 'เหตุด่วนเหตุร้าย / ตำรวจ',
      agency: 'สำนักงานตำรวจแห่งชาติ',
      category: 'ความมั่นคง & ปลอดภัย',
      description: 'แจ้งอุบัติเหตุบนท้องถนน อาชญากรรม ทะเลาะวิวาท คดีความ หรือเหตุคุกคามความปลอดภัยในชีวิตและทรัพย์สิน',
      bgGradient: 'from-blue-600 to-indigo-700',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
      icon: ShieldAlert,
    },
    {
      number: '199',
      title: 'ดับเพลิงและกู้ภัย',
      agency: 'สำนักป้องกันและบรรเทาสาธารณภัย',
      category: 'อัคคีภัย & ภัยพิบัติ',
      description: 'แจ้งเพลิงไหม้ แก๊สรั่ว สารเคมีอันตราย สัตว์มีพิษเข้าบ้าน ช่วยคนติดในอาคารหรือที่สูง',
      bgGradient: 'from-amber-600 to-orange-700',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-200',
      icon: Flame,
    },
    {
      number: '1554',
      title: 'ศูนย์กู้ชีพนเรนทร / ศูนย์เอราวัณ',
      agency: 'สำนักการแพทย์ กรุงเทพมหานคร',
      category: 'การแพทย์ฉุกเฉิน กทม.',
      description: 'บริการหน่วยแพทย์กู้ชีพและเครือข่ายรถพยาบาลฉุกเฉินในเขตพื้นที่กรุงเทพมหานครและปริมณฑล',
      bgGradient: 'from-teal-600 to-emerald-700',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-200',
      icon: LifeBuoy,
    },
    {
      number: '1154',
      title: 'หน่วยกู้ภัยมูลนิธิร่วมกตัญญู / ป่อเต็กตึ๊ง',
      agency: 'เครือข่ายกู้ชีพ-กู้ภัยเอกชน',
      category: 'กู้ชีพ & กู้ภัยมูลนิธิ',
      description: 'บริการช่วยเหลือผู้ประสบอุบัติเหตุทางถนน เก็บกู้ ช่วยเหลือประชาชน และนำส่งสถานพยาบาล',
      bgGradient: 'from-slate-700 to-slate-900',
      badgeColor: 'bg-slate-100 text-slate-800 border-slate-200',
      icon: PhoneCall,
    },
    {
      number: '1196',
      title: 'อุบัติเหตุทางน้ำ',
      agency: 'กรมเจ้าท่า / ตำรวจน้ำ',
      category: 'ทางน้ำ & ทางทะเล',
      description: 'แจ้งเรือล่ม คนตกน้ำ อุบัติเหตุทางแม่น้ำและชายฝั่งทะเลทั่วประเทศไทย',
      bgGradient: 'from-cyan-600 to-blue-800',
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      icon: LifeBuoy,
    },
  ];

  return (
    <div className="space-y-12 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="rounded-3xl border border-red-200 bg-gradient-to-r from-red-50 via-white to-orange-50 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 border border-red-300 px-3.5 py-1 text-xs font-bold text-red-800 mb-3">
            <PhoneCall className="h-4 w-4 text-red-600" />
            <span>Emergency Hotlines & 24/7 National Dispatch</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            หน่วยงานและสายด่วนที่ติดต่อได้เมื่อเกิดเหตุ
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            รวบรวมเบอร์โทรศัพท์ฉุกเฉินที่สำคัญของประเทศไทย พร้อมระบบกดโทรออกได้ทันทีในคลิกเดียว (One-Click Call)
            และคู่มือการรายงานข้อมูล 5 ขั้นตอน เพื่อให้ทีมกู้ชีพส่งความช่วยเหลือมาได้รวดเร็วที่สุด
          </p>
        </div>
      </div>

      {/* Primary 1669 Feature Card */}
      <div className="relative overflow-hidden rounded-3xl border-2 border-brand-orange-400 bg-gradient-to-r from-brand-orange-600 via-brand-orange-500 to-red-600 p-6 sm:p-10 text-white shadow-xl">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <span>สายด่วนกู้ชีพฉุกเฉินอันดับ 1 ของไทย</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              สถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.)
            </h2>
            <p className="text-sm sm:text-base text-orange-100 leading-relaxed">
              เมื่อพบผู้หมดสติ หายใจเฮือก หัวใจหยุดเต้น เจ็บหน้าอกรุนแรง หรืออุบัติเหตุสาหัส
              โทรแจ้ง 1669 ทันที รถพยาบาลพร้อมอุปกรณ์ช่วยชีวิตขั้นสูงจะออกปฏิบัติการทันที
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="tel:1669"
              className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-xl font-black text-brand-orange-700 shadow-2xl hover:bg-orange-50 active:scale-95 transition-all"
            >
              <PhoneCall className="h-6 w-6 fill-brand-orange-600" />
              <span>โทรฟรี 1669</span>
            </a>

            <button
              onClick={() => handleCopy('1669')}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-white/40 bg-white/10 backdrop-blur-md px-5 py-4 text-sm font-bold text-white hover:bg-white/20 active:scale-95 transition-all"
            >
              {copiedNumber === '1669' ? (
                <>
                  <Check className="h-5 w-5 text-emerald-300" />
                  <span>คัดลอกเบอร์แล้ว!</span>
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5" />
                  <span>คัดลอกเบอร์</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Hotlines Grid */}
      <section className="space-y-6">
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          เบอร์โทรศัพท์ฉุกเฉินทั้งหมด (All Emergency Numbers)
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {EMERGENCY_LIST.map((item) => {
            const Icon = item.icon;
            const isCopied = copiedNumber === item.number;

            return (
              <div
                key={item.number}
                className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`rounded-full px-3 py-0.5 text-xs font-bold border ${item.badgeColor}`}>
                      {item.category}
                    </span>
                    <Icon className="h-5 w-5 text-slate-400" />
                  </div>

                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-slate-900 tracking-tight">
                      {item.number}
                    </span>
                  </div>

                  <h4 className="mt-1 text-base font-bold text-slate-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-brand-blue-700 font-semibold mt-0.5">
                    {item.agency}
                  </p>

                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href={`tel:${item.number}`}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 px-3 py-2 text-xs font-bold text-white hover:bg-slate-800 active:scale-95 transition-all"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>โทรออก</span>
                  </a>

                  <button
                    onClick={() => handleCopy(item.number)}
                    className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 active:scale-95"
                    title="คัดลอกเบอร์"
                  >
                    {isCopied ? (
                      <Check className="h-4 w-4 text-emerald-600" />
                    ) : (
                      <Copy className="h-4 w-4 text-slate-500" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Critical Guide: 5 Things to Tell 1669 */}
      <section className="rounded-3xl border border-brand-blue-200 bg-sky-50/50 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 border border-brand-blue-300 px-3 py-0.5 text-xs font-bold text-brand-blue-800 mb-2">
            <FileText className="h-3.5 w-3.5" />
            <span>สถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.) แนะนำ</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            5 ข้อมูลสำคัญที่ "ต้องแจ้ง" เมื่อโทร 1669
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            ตั้งสติและตอบคำถามเจ้าหน้าที่ตามลำดับต่อไปนี้ เพื่อให้รถพยาบาลเข้าถึงผู้ป่วยได้เร็วที่สุด
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-600 text-white font-black text-sm">
              1
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                บอกว่า "เกิดเหตุอะไร" และมีผู้ป่วยกี่คน
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                เช่น มีคนหมดสติไม่หายใจ 1 คน, มีอุบัติเหตุรถจักรยานยนต์ชนเสาไฟฟ้าบาดเจ็บ 2 คน
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-600 text-white font-black text-sm">
              2
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                บอก "สถานที่เกิดเหตุอย่างแม่นยำ" พร้อมจุดสังเกต
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                ระบุชื่อถนน, ซอย, เลขที่บ้าน, ใกล้ร้านสะดวกซื้อใด, หน้าโรงเรียนหรือวัดใด
                หากเปิด GPS ให้ดูพิกัดเพื่อบอกเจ้าหน้าที่ได้อย่างชัดเจน
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-600 text-white font-black text-sm">
              3
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                บอก "ระดับความรู้สึกตัวและสภาพอาการของผู้ป่วย"
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                ผู้ป่วยรู้สึกตัวหรือไม่, หายใจหรือไม่, หายใจเฮือกติดขัดหรือไม่, มีเลือดออกมากไหม, ตัวซีดเขียวหรือไม่
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-600 text-white font-black text-sm">
              4
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                บอก "การปฐมพยาบาลที่กำลังทำอยู่ ณ ตอนนี้"
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                เช่น กำลังทำ CPR กดหน้าอกอยู่, กำลังนำเครื่อง AED มาแปะ, กำลังใช้ผ้ากดห้ามเลือด
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl bg-white p-5 border border-sky-100 shadow-xs">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange-600 text-white font-black text-sm">
              5
            </span>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900">
                บอก "ชื่อผู้แจ้ง และเบอร์โทรศัพท์ที่ติดต่อได้"
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                บอกเบอร์มือถือของผู้แจ้งให้ชัดเจน <strong>และ "ห้ามวางสาย" ก่อนเจ้าหน้าที่จะสั่งวาง</strong>
                ให้เปิดลำโพง (Speakerphone) เพื่อฟังคำแนะนำการปฐมพยาบาลแบบเรียลไทม์
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What NOT to do Alert */}
      <div className="rounded-3xl border border-amber-300 bg-amber-50/70 p-6 flex items-start gap-4 text-xs sm:text-sm text-amber-950">
        <AlertCircle className="h-6 w-6 shrink-0 text-amber-600 mt-0.5" />
        <div>
          <strong className="text-base font-bold text-amber-900">ข้อควรระวังสำคัญที่สุด:</strong>
          <p className="mt-1 text-amber-800 leading-relaxed">
            ห้ามโทรแจ้งเหตุเล่นหรือล้อเล่นเด็ดขาด เพราะการโทรหลอกลวงจะไปตัดสิทธิ์ของผู้ป่วยวิกฤตที่กำลังรอคอยความช่วยเหลือ
            มีความผิดตามพระราชบัญญัติการแพทย์ฉุกเฉิน พ.ศ. 2551 และกฎหมายอาญา
          </p>
        </div>
      </div>
    </div>
  );
};
