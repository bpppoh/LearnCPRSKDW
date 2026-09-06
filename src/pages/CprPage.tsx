import React from 'react';
import {
  HeartPulse,
  CheckCircle2,
  XCircle,
  ArrowRight,
} from 'lucide-react';
import { Metronome } from '../components/Metronome';
import type { PageTab } from '../types';

interface CprPageProps {
  onSelectTab: (tab: PageTab) => void;
}

export const CprPage: React.FC<CprPageProps> = ({ onSelectTab }) => {
  return (
    <div className="space-y-12 py-6 sm:py-8">
      {/* Header Banner with CPR Posture Guide */}
      <div className="rounded-3xl border border-brand-orange-200 bg-gradient-to-r from-orange-50 via-white to-amber-50 p-6 sm:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange-100 border border-brand-orange-300 px-3.5 py-1 text-xs font-bold text-brand-orange-800">
              <HeartPulse className="h-4 w-4 text-brand-orange-600" />
              <span>Cardiopulmonary Resuscitation (การกู้ชีพขั้นพื้นฐาน)</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              การช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR)
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              CPR คือการปฐมพยาบาลเพื่อช่วยชีวิตผู้ที่หัวใจหยุดเต้นหรือหยุดหายใจกะทันหัน โดยใช้แรงกดหน้าอก
              เพื่อบีบหัวใจให้สูบฉีดเลือดที่มีออกซิเจนไปหล่อเลี้ยงสมองและอวัยวะสำคัญ จนกว่าระบบไหลเวียนโลหิตจะกลับคืนมา
              หรือจนกว่าเครื่อง AED และทีมแพทย์จะมาถึง
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl border border-orange-200/80 bg-white p-3 shadow-xs">
                <span className="text-xs font-bold text-slate-800">ความลึกในการกด</span>
                <p className="mt-0.5 text-base font-black text-brand-orange-600">5 – 6 ซม.</p>
                <p className="text-[10px] text-slate-500">ในผู้ใหญ่และวัยรุ่น</p>
              </div>
              <div className="rounded-2xl border border-orange-200/80 bg-white p-3 shadow-xs">
                <span className="text-xs font-bold text-slate-800">ความเร็วในการกด</span>
                <p className="mt-0.5 text-base font-black text-brand-orange-600">100–120</p>
                <p className="text-[10px] text-slate-500">ครั้งต่อนาที</p>
              </div>
              <div className="rounded-2xl border border-orange-200/80 bg-white p-3 shadow-xs">
                <span className="text-xs font-bold text-slate-800">ตำแหน่งการวางมือ</span>
                <p className="mt-0.5 text-base font-black text-brand-orange-600">กึ่งกลางอก</p>
                <p className="text-[10px] text-slate-500">ครึ่งล่างกระดูกหน้าอก</p>
              </div>
            </div>
          </div>

          {/* CPR Hand Placement & Posture Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative group overflow-hidden rounded-3xl border-2 border-brand-orange-200 bg-white p-4 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl bg-slate-100 aspect-[4/3]">
                <img
                  src="/images/cpr-technique.webp"
                  alt="ภาพประกอบแสดงท่าทางการวางมือและตำแหน่งการกดหน้าอกทำ CPR ที่ถูกต้อง"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-900/85 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-white shadow-md">
                    <span className="h-2 w-2 rounded-full bg-brand-orange-500 animate-pulse" />
                    ท่าทาง & การวางมือที่ถูกต้อง
                  </span>
                </div>
              </div>

              {/* Anatomy Labels */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="rounded-lg bg-orange-50 border border-orange-200 px-2 py-1 text-[11px] font-semibold text-brand-orange-800">
                  ✋ สันมือวางกึ่งกลางหน้าอก
                </span>
                <span className="rounded-lg bg-sky-50 border border-sky-200 px-2 py-1 text-[11px] font-semibold text-brand-blue-800">
                  💪 แขนเหยียดตรง ล็อกข้อศอก
                </span>
                <span className="rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-1 text-[11px] font-semibold text-emerald-800">
                  ⬇️ ถ่ายน้ำหนักจากหัวไหล่ในแนวดิ่ง
                </span>
              </div>
              <p className="mt-2 text-[10px] text-slate-400 text-center sm:text-right">
                ภาพประกอบวิชาการ: Adult CPR Chest Compressions Technique
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Metronome Section (Featured Tool) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">
              Interactive Audio Tool
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              ฝึกซ้อมจังหวะการกดหน้าอก (CPR Beat Trainer)
            </h2>
          </div>
        </div>

        {/* Embedded Metronome Component */}
        <Metronome />
      </section>

      {/* The 2 Types of CPR: Hands-Only vs 30:2 */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
            Resuscitation Protocols
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            รูปแบบการทำ CPR: Hands-Only และ 30:2
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            เลือกรูปแบบที่เหมาะสมกับสถานการณ์และความเชี่ยวชาญของผู้ช่วยเหลือ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Hands-Only CPR */}
          <div className="rounded-3xl border-2 border-brand-orange-300 bg-white p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-brand-orange-600 px-3.5 py-1 text-[11px] font-bold text-white">
              แนะนำสำหรับทุกคน
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-100 text-brand-orange-600 font-black">
                🙌
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">1. Hands-Only CPR (กดหน้าอกต่อเนื่อง)</h3>
                <p className="text-xs text-brand-orange-700 font-semibold">สำหรับประชาชนทั่วไป / ไม่สะดวกผายปอด</p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              ในผู้ใหญ่ที่หัวใจหยุดเต้นเฉียบพลัน ในกระแสเลือดยังมีออกซิเจนคั่งค้างอยู่มาก
              การกดหน้าอกอย่างต่อเนื่องโดยไม่ต้องหยุดช่วยหายใจ จะช่วยรักษาแรงดันเลือดไปเลี้ยงสมองได้ดีที่สุด
            </p>

            <div className="mt-5 rounded-2xl bg-orange-50/70 p-4 border border-orange-200/80 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-brand-orange-900">
                <CheckCircle2 className="h-4 w-4 text-brand-orange-600" />
                <span>วิธีปฏิบัติ: กดหน้าอกต่อเนื่อง 100–120 ครั้ง/นาที ไม่ต้องผายปอด</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-brand-orange-900">
                <CheckCircle2 className="h-4 w-4 text-brand-orange-600" />
                <span>ทำต่อเนื่องจนกว่าเครื่อง AED จะมาถึง หรือทีมแพทย์รับช่วงต่อ</span>
              </div>
            </div>
          </div>

          {/* Conventional CPR 30:2 */}
          <div className="rounded-3xl border border-brand-blue-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 rounded-bl-2xl bg-brand-blue-600 px-3.5 py-1 text-[11px] font-bold text-white">
              สำหรับผู้ผ่านการอบรม
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100 text-brand-blue-600 font-black">
                🌬️
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">2. Conventional CPR (อัตราส่วน 30:2)</h3>
                <p className="text-xs text-brand-blue-700 font-semibold">กดหน้าอก 30 ครั้ง สลับผายปอด 2 ครั้ง</p>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              ใช้สำหรับผู้กู้ชีพที่ผ่านการอบรม หรือในกรณีผู้ป่วยจมน้ำ (Drowning), ขาดอากาศหายใจ, หรือในเด็กเล็ก
              ซึ่งต้องการออกซิเจนเข้าสู่ปอดอย่างเร่งด่วน
            </p>

            <div className="mt-5 rounded-2xl bg-sky-50/70 p-4 border border-sky-200/80 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-brand-blue-900">
                <CheckCircle2 className="h-4 w-4 text-brand-blue-600" />
                <span>วิธีปฏิบัติ: กดหน้าอก 30 ครั้ง แล้วเปิดทางเดินหายใจช่วยผายปอด 2 ครั้ง</span>
              </div>
              <div className="flex items-center gap-2 font-bold text-brand-blue-900">
                <CheckCircle2 className="h-4 w-4 text-brand-blue-600" />
                <span>เป่าลมเข้าปอดแต่ละครั้งนาน 1 วินาที ให้หน้าอกกระเพื่อมขึ้นพอประมาณ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Golden Elements of High-Quality CPR */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 text-center sm:text-left">
          5 หัวใจสำคัญของการกดหน้าอกคุณภาพสูง (High-Quality CPR)
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-brand-orange-600">01</span>
              <h4 className="mt-2 text-sm font-bold text-slate-900">ตำแหน่งวางมือ</h4>
              <p className="mt-1 text-xs text-slate-600">
                วางสันมือทับกันกึ่งกลางหน้าอก (ครึ่งล่างของกระดูกสันอก หรือแนวระหว่างหัวนม)
              </p>
            </div>
            <div className="mt-3 text-[11px] font-semibold text-brand-orange-700">ห้ามวางที่ชายโครง</div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-brand-orange-600">02</span>
              <h4 className="mt-2 text-sm font-bold text-slate-900">ความลึกในการกด</h4>
              <p className="mt-1 text-xs text-slate-600">
                กดลึกอย่างน้อย <strong>5 เซนติเมตร</strong> แต่ไม่เกิน 6 เซนติเมตรในผู้ใหญ่
              </p>
            </div>
            <div className="mt-3 text-[11px] font-semibold text-brand-orange-700">แขนตึงตั้งฉาก 90°</div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-brand-orange-600">03</span>
              <h4 className="mt-2 text-sm font-bold text-slate-900">อัตราความเร็ว</h4>
              <p className="mt-1 text-xs text-slate-600">
                ความเร็วสม่ำเสมอ <strong>100 – 120 ครั้งต่อนาที</strong> (ไม่เร็วหรือช้าเกินไป)
              </p>
            </div>
            <div className="mt-3 text-[11px] font-semibold text-brand-orange-700">นับจังหวะ 1 และ 2 และ 3...</div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-brand-orange-600">04</span>
              <h4 className="mt-2 text-sm font-bold text-slate-900">ปล่อยคืนตัวสุด</h4>
              <p className="mt-1 text-xs text-slate-600">
                ต้องปล่อยให้ทรวงอกคืนตัวเต็มที่ (Full Chest Recoil) เพื่อให้หัวใจคลายตัวรับเลือด
              </p>
            </div>
            <div className="mt-3 text-[11px] font-semibold text-brand-orange-700">ห้ามกดทับค้างไว้</div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex flex-col justify-between">
            <div>
              <span className="text-2xl font-black text-brand-orange-600">05</span>
              <h4 className="mt-2 text-sm font-bold text-slate-900">รบกวนให้น้อยที่สุด</h4>
              <p className="mt-1 text-xs text-slate-600">
                ห้ามหยุดกดหน้าอกเกิน <strong>10 วินาที</strong> ยกเว้นตอนเครื่อง AED วิเคราะห์คลื่นหัวใจ
              </p>
            </div>
            <div className="mt-3 text-[11px] font-semibold text-brand-orange-700">สลับคนกดทุก 2 นาที</div>
          </div>
        </div>
      </section>

      {/* Do's and Don'ts Checklist */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Do's */}
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50/40 p-6 shadow-sm">
          <div className="flex items-center gap-2.5 text-emerald-800 font-bold text-lg mb-4">
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
            <h3>สิ่งที่ "ควรทำ" ในการทำ CPR (Do's)</h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>จัดให้ผู้ป่วยนอนหงายราบบนพื้นผิวที่แข็งและเรียบ (ไม่ทำบนฟูกนุ่ม เพราะแรงจะจม)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>คุกเข่าข้างลำตัวผู้ป่วย โน้มตัวให้ไหล่อยู่เหนือหน้าอก แขนตึง ทิ้งน้ำหนักจากหัวไหล่</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>สลับเปลี่ยนผู้ช่วยเหลือทุกๆ 2 นาที (ประมาณ 5 รอบของ 30:2) เพื่อรักษาแรงกดให้คงที่</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span>ใช้เครื่อง AED ทันทีที่เครื่องมาถึง โดยทำตามคำสั่งเสียงของเครื่อง</span>
            </li>
          </ul>
        </div>

        {/* Don'ts */}
        <div className="rounded-3xl border border-red-200 bg-red-50/40 p-6 shadow-sm">
          <div className="flex items-center gap-2.5 text-red-800 font-bold text-lg mb-4">
            <XCircle className="h-6 w-6 text-red-600 shrink-0" />
            <h3>สิ่งที่ "ห้ามทำ" ในการทำ CPR (Don'ts)</h3>
          </div>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>ห้ามทำ CPR กับผู้ที่ยังมีสติ</strong> หรือผู้ที่ยังหายใจได้เป็นปกติ</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>ห้ามงอข้อศอกขณะกด</strong> เพราะจะทำให้เมื่อยแขนเร็วและแรงกดลงไม่ลึกพอ 5 ซม.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>ห้ามวางมือต่ำกว่ากระดูกสันอก</strong> (บริเวณลิ้นปี่) เพราะอาจทำให้กระดูกหักทิ่มตับได้</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
              <span><strong>ห้ามหยุดกดหน้าอกเพื่อคลำชีพจรบ่อยๆ</strong> ให้กดต่อเนื่องจนกว่าผู้ป่วยจะขยับตัวหรือแพทย์สั่งหยุด</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Next Step Navigation Card */}
      <div className="rounded-3xl border border-slate-200 bg-slate-100/70 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="text-base font-bold text-slate-900">
            ขั้นตอนต่อไป: ทำความเข้าใจการใช้เครื่องกระตุกหัวใจ AED
          </h4>
          <p className="text-xs text-slate-600 mt-0.5">
            เครื่อง AED จะช่วยวิเคราะห์และช็อกไฟฟ้าเพื่อรีเซ็ตจังหวะหัวใจที่สั่นพลิ้ว
          </p>
        </div>
        <button
          onClick={() => onSelectTab('aed')}
          className="flex items-center gap-2 rounded-2xl bg-brand-orange-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-orange-500 shrink-0"
        >
          <span>ไปที่หน้าเครื่อง AED</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
