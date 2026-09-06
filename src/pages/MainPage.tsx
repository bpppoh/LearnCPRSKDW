import React from 'react';
import {
  HeartPulse,
  Activity,
  PhoneCall,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  AlertOctagon,
} from 'lucide-react';
import type { PageTab } from '../types';
import { SpotlightCard } from '../components/SpotlightCard';

interface MainPageProps {
  onSelectTab: (tab: PageTab) => void;
}

export const MainPage: React.FC<MainPageProps> = ({ onSelectTab }) => {
  return (
    <div className="space-y-16 py-6 sm:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-orange-50/40 via-white to-sky-50/40 px-6 py-14 sm:px-12 sm:py-20 shadow-sm text-center">
        {/* Background glow ambient */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 sm:w-96 rounded-full bg-brand-orange-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange-300 bg-brand-orange-100/80 px-4 py-1.5 text-xs font-bold text-brand-orange-800 shadow-xs mb-6">
            <Sparkles className="h-3.5 w-3.5 text-brand-orange-600" />
            <span>โครงงานวิชาการ • โรงเรียนสุคนธีรวิทย์ (ม.3/3)</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight sm:leading-tight">
            4 นาทีทองแห่งชีวิต <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-brand-orange-600 via-amber-600 to-brand-blue-600 bg-clip-text text-transparent">
              คู่มือช่วยฟื้นคืนชีพ & ปฐมพยาบาลฉุกเฉิน
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            เมื่อหัวใจหยุดเต้น ทุกวินาทีคือความเป็นความตาย เรียนรู้วิธีการทำ <strong>CPR</strong> อย่างถูกต้อง,
            การประเมินผู้บาดเจ็บด้วยหลักการ <strong>GRXABCDE</strong>, และการใช้เครื่อง <strong>AED</strong> เพื่อช่วยต่อลมหายใจคนที่คุณรัก
          </p>

          {/* Quick CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none">
            <button
              onClick={() => onSelectTab('cpr')}
              className="flex items-center justify-center gap-2 rounded-2xl bg-brand-orange-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange-600/30 hover:bg-brand-orange-500 active:scale-95 transition-all"
            >
              <HeartPulse className="h-5 w-5" />
              <span>เริ่มเรียนรู้การทำ CPR</span>
            </button>

            <button
              onClick={() => onSelectTab('aed')}
              className="flex items-center justify-center gap-2 rounded-2xl border border-brand-blue-300 bg-white px-6 py-3.5 text-sm font-bold text-brand-blue-700 shadow-sm hover:bg-brand-blue-50 active:scale-95 transition-all"
            >
              <Zap className="h-5 w-5 text-brand-blue-600" />
              <span>จำลองการใช้เครื่อง AED</span>
            </button>

            <button
              onClick={() => onSelectTab('contacts')}
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
            >
              <PhoneCall className="h-4 w-4 text-brand-orange-600" />
              <span>เบอร์โทรฉุกเฉิน 1669</span>
            </button>
          </div>
        </div>
      </section>

      {/* Emergency 3-Step Action Concept */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">
            Emergency Survival Chain
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-slate-900">
            3 ขั้นตอนสำคัญเมื่อพบคนหมดสติไม่หายใจ
          </h2>
          <p className="mt-1 text-sm text-slate-600">
            จำให้ขึ้นใจ: ปลอดภัย &gt; ปลุกเรียก &gt; ปั๊มหัวใจและใช้เครื่อง AED
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 font-black text-sm">
                  01
                </span>
                <AlertOctagon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                1. ตรวจสอบความปลอดภัย & ปลุกเรียก
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                ดูสถานที่เกิดเหตุว่าปลอดภัยหรือไม่ (ไม่มีสายไฟรั่ว ไฟไหม้ รถชน) จากนั้นตบไหล่ผู้ป่วยทั้ง 2 ข้าง
                พร้อมตะโกนเรียกเสียงดัง <em>"คุณครับๆ รู้สึกตัวไหม!"</em>
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-amber-700 font-semibold flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 shrink-0" />
              <span>ความปลอดภัยของผู้ช่วยเหลือต้องมาก่อนเสมอ</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-3xl border border-brand-orange-200 bg-orange-50/40 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-orange-600 text-white font-black text-sm">
                  02
                </span>
                <PhoneCall className="h-6 w-6 text-brand-orange-600" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                2. ขอความช่วยเหลือ & โทร 1669
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                หากผู้ป่วยไม่รู้สึกตัว ไม่หายใจหรือหายใจเฮือก ให้ชี้ตัวคนรอบข้างช่วยโทรแจ้ง <strong>สายด่วน 1669</strong>
                และรีบนำ <strong>เครื่อง AED</strong> ที่ใกล้ที่สุดมาทันที
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-orange-200 text-xs text-brand-orange-800 font-semibold flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 shrink-0" />
              <span>เปิดสปีกเกอร์โฟนคุยกับเจ้าหน้าที่ 1669</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-3xl border border-brand-blue-200 bg-sky-50/40 p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue-600 text-white font-black text-sm">
                  03
                </span>
                <HeartPulse className="h-6 w-6 text-brand-blue-600" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">
                3. เริ่มปั๊มหัวใจ CPR & ใช้ AED
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                วางสันมือกึ่งกลางหน้าอก กดลึก 5–6 ซม. ด้วยความเร็ว 100–120 ครั้ง/นาที ต่อเนื่องจนกว่าเครื่อง AED
                จะมาถึง แล้วปฏิบัติตามคำสั่งเสียงของเครื่อง AED ทันที
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-sky-200 text-xs text-brand-blue-800 font-semibold flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 shrink-0" />
              <span>ทำต่อเนื่องจนกว่าทีมแพทย์ฉุกเฉินจะมาถึง</span>
            </div>
          </div>
        </div>
      </section>

      {/* 21st.dev Style Bento Grid Navigation */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
              Interactive Learning Modules
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              โมดูลการเรียนรู้และเครื่องมือจำลองเสมือนจริง
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            คลิกเลือกการ์ดเพื่อเข้าสู่บทเรียนฉบับสมบูรณ์
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5">
          {/* Bento 1: CPR & Metronome (Large span 7) */}
          <SpotlightCard
            onClick={() => onSelectTab('cpr')}
            className="lg:col-span-7 cursor-pointer hover:border-brand-orange-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-100 text-brand-orange-600">
                <HeartPulse className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-brand-orange-50 border border-brand-orange-200 px-3 py-1 text-[11px] font-bold text-brand-orange-700">
                มีเครื่องเคาะจังหวะ Metronome 100-120 BPM
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>การช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR)</span>
              <ArrowRight className="h-4 w-4 text-brand-orange-600 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              คู่มือขั้นตอนการกดหน้าอก Hands-Only CPR และอัตราส่วน 30:2 อย่างถูกวิธี พร้อมระบบเคาะจังหวะฝึกกดเสียงจริง
              ที่ช่วยให้รักษาความเร็วได้คงที่ 100-120 ครั้งต่อนาที
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-medium text-slate-700">ลึก 5–6 ซม.</span>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-medium text-slate-700">100–120 ครั้ง/นาที</span>
              <span className="rounded-lg bg-slate-100 px-2.5 py-1 font-medium text-slate-700">ปล่อยคืนตัวสุด</span>
            </div>
          </SpotlightCard>

          {/* Bento 2: AED Simulator (Span 5) */}
          <SpotlightCard
            onClick={() => onSelectTab('aed')}
            className="lg:col-span-5 cursor-pointer hover:border-brand-blue-300"
            spotlightColor="rgba(2, 132, 199, 0.12)"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100 text-brand-blue-600">
                <Zap className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-brand-blue-50 border border-brand-blue-200 px-3 py-1 text-[11px] font-bold text-brand-blue-700">
                Virtual AED Simulator
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>เครื่องกระตุกหัวใจไฟฟ้า (AED)</span>
              <ArrowRight className="h-4 w-4 text-brand-blue-600 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              เครื่องมือชี้ชะตาชีวิต! รู้จักกลไกการทำงาน 4 ขั้นตอนสากล (เปิดเครื่อง-แปะแผ่น-วิเคราะห์-ช็อก)
              พร้อมข้อควรระวังสำคัญ เช่น ตัวเปียกน้ำ และแผ่นแปะยา
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-brand-blue-700">
              <span>ทดลองกดเครื่องจำลองเสมือนจริง →</span>
            </div>
          </SpotlightCard>

          {/* Bento 3: GRXABCDE Protocol (Span 6) */}
          <SpotlightCard
            onClick={() => onSelectTab('grxabcde')}
            className="lg:col-span-6 cursor-pointer hover:border-slate-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                <Activity className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-700">
                8 ขั้นตอนประเมินระดับสากล
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>หลักการประเมินผู้บาดเจ็บ GRXABCDE</span>
              <ArrowRight className="h-4 w-4 text-emerald-600 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              การประเมินผู้ป่วยและผู้บาดเจ็บก่อนเริ่มหัตถการ ตั้งแต่การตรวจความปลอดภัยสถานที่ (G), การตรวจการตอบสนอง (R),
              การห้ามเลือดที่ไหลพุ่งรุนแรง (X), ทางเดินหายใจ (A), จนถึงภาวะอุณหภูมิกายต่ำ (E)
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-bold">
              {['G', 'R', 'X', 'A', 'B', 'C', 'D', 'E'].map((letter) => (
                <span key={letter} className="flex h-6 w-6 items-center justify-center rounded-md bg-slate-100 text-slate-700">
                  {letter}
                </span>
              ))}
            </div>
          </SpotlightCard>

          {/* Bento 4: Emergency Contacts & 1669 (Span 6) */}
          <SpotlightCard
            onClick={() => onSelectTab('contacts')}
            className="lg:col-span-6 cursor-pointer hover:border-brand-orange-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                <PhoneCall className="h-6 w-6" />
              </div>
              <span className="rounded-full bg-red-50 border border-red-200 px-3 py-1 text-[11px] font-bold text-red-700">
                โทรฟรี 24 ชม.
              </span>
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>หน่วยงานและสายด่วนฉุกเฉิน</span>
              <ArrowRight className="h-4 w-4 text-red-600 transition-transform group-hover:translate-x-1" />
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              รวบรวมเบอร์โทรศัพท์ฉุกเฉิน 1669, 191, 199, 1154 และเช็คลิสต์ 5 ข้อมูลสำคัญที่ต้องแจ้งเมื่อโทรขอความช่วยเหลือ
              เพื่อความรวดเร็วในการส่งรถพยาบาลกู้ชีพฉุกเฉิน
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs font-bold text-red-600">
              <span className="rounded-lg bg-red-100 px-3 py-1 text-red-700">สายด่วน 1669</span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">เหตุด่วน 191</span>
              <span className="rounded-lg bg-slate-100 px-3 py-1 text-slate-700">ดับเพลิง 199</span>
            </div>
          </SpotlightCard>
        </div>
      </section>

      {/* Infographic: Why CPR & 4-Minute Golden Period Matters */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 border border-red-200 px-3 py-1 text-xs font-bold text-red-700">
              <Clock className="h-4 w-4" />
              <span>ความจริงทางการแพทย์ (Medical Facts)</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
              ทำไมต้องทำ CPR <br />
              <span className="text-brand-orange-600">ภายใน 4 นาทีแรก?</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              เมื่อหัวใจหยุดเต้น ร่างกายจะหยุดสูบฉีดเลือดไปเลี้ยงสมอง ออกซิเจนที่ตกค้างจะหล่อเลี้ยงได้เพียง 4 นาทีเท่านั้น
              หากไม่ได้รับการกดหน้าอกปั๊มหัวใจทันท่วงที เซลล์สมองจะเริ่มเสื่อมสลายและตายลงอย่างถาวร
            </p>

            <div className="space-y-2 pt-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>ทำ CPR ทันที: เพิ่มโอกาสรอดชีวิตขึ้น <strong>2 ถึง 3 เท่า</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>ใช้ AED ภายใน 3–5 นาที: เพิ่มโอกาสรอดชีวิตสูงถึง <strong>50–70%</strong></span>
              </div>
            </div>
          </div>

          {/* Survival Rate Drop Timeline Visual */}
          <div className="lg:col-span-7 rounded-2xl bg-slate-50 p-6 border border-slate-200/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 text-center sm:text-left">
              อัตราการรอดชีวิตที่ลดลงตามเวลา (Survival Curve)
            </h4>

            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-slate-700 gap-0.5 sm:gap-2 mb-1">
                  <span>0 – 4 นาทีแรก (Golden Period)</span>
                  <span className="text-emerald-600">โอกาสรอดชีวิตสูงสุด 50–70% (สมองยังไม่เสียหาย)</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '70%' }} />
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-slate-700 gap-0.5 sm:gap-2 mb-1">
                  <span>4 – 6 นาที</span>
                  <span className="text-amber-600">เริ่มมีความเสียหายต่อเซลล์สมอง (โอกาสรอดลดลง)</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-slate-700 gap-0.5 sm:gap-2 mb-1">
                  <span>6 – 10 นาที</span>
                  <span className="text-orange-600">เซลล์สมองเสียหายอย่างรุนแรง โอกาสฟื้นตัวลดลงมาก</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: '20%' }} />
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between text-xs font-bold text-slate-700 gap-0.5 sm:gap-2 mb-1">
                  <span>เกิน 10 นาทีขึ้นไป</span>
                  <span className="text-red-600">สมองตายถาวร (Brain Death) โอกาสรอดชีวิตต่ำกว่า 5%</span>
                </div>
                <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: '5%' }} />
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-500 text-center sm:text-left italic">
              *ข้อมูลอ้างอิง: สมาคมแพทย์โรคหัวใจแห่งสหรัฐอเมริกา (AHA) และ สถาบันการแพทย์ฉุกเฉินแห่งชาติ (สพฉ.)
            </p>
          </div>
        </div>
      </section>

      {/* School Project Info Banner */}
      <section className="rounded-3xl border border-brand-blue-200 bg-gradient-to-r from-brand-blue-900 via-brand-blue-800 to-slate-900 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="rounded-md bg-brand-orange-500 px-2.5 py-0.5 text-xs font-bold text-white uppercase">
              วิชาโครงงาน
            </span>
            <span className="text-xs text-brand-blue-200 font-semibold">โรงเรียนสุคนธีรวิทย์ (ม.3/3)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">
            ร่วมทดสอบความรู้และทำความรู้จักกับทีมผู้จัดทำโครงงาน
          </h3>
          <p className="text-xs sm:text-sm text-brand-blue-100 max-w-xl">
            เราสร้างเว็บไซต์นี้ขึ้นมาเพื่อให้ทุกคนมีความมั่นใจ กล้าเข้าช่วยเหลือเมื่อเจอสถานการณ์ฉุกเฉินจริง
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
          <button
            onClick={() => onSelectTab('about')}
            className="flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-xs font-bold text-slate-900 shadow-md hover:bg-slate-100 active:scale-95 transition-all"
          >
            <Users className="h-4 w-4 text-brand-blue-600" />
            <span>ดูข้อมูลผู้จัดทำ & ทำควิซ</span>
          </button>
        </div>
      </section>
    </div>
  );
};
