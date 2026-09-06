import React from 'react';
import {
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from 'lucide-react';
import { AedSimulator } from '../components/AedSimulator';
import type { PageTab } from '../types';

interface AedPageProps {
  onSelectTab: (tab: PageTab) => void;
}

export const AedPage: React.FC<AedPageProps> = ({ onSelectTab }) => {
  return (
    <div className="space-y-12 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="rounded-3xl border border-brand-blue-200 bg-gradient-to-r from-sky-50 via-white to-brand-blue-50 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 border border-brand-blue-300 px-3.5 py-1 text-xs font-bold text-brand-blue-800 mb-3">
            <Zap className="h-4 w-4 text-brand-blue-600 fill-brand-blue-600" />
            <span>Automated External Defibrillator (เครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติ)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            เครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติ (AED)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            AED คืออุปกรณ์การแพทย์พกพาอัจฉริยะที่สามารถตรวจวิเคราะห์คลื่นไฟฟ้าหัวใจของผู้ป่วยได้โดยอัตโนมัติ
            และปล่อยกระแสไฟฟ้าช็อกเพื่อแก้ไขภาวะหัวใจเต้นผิดจังหวะขั้นรุนแรง (VF/pVT)
            โดยถูกออกแบบมาให้ประชาชนทั่วไปและนักเรียนสามารถใช้งานได้อย่างปลอดภัยตามคำสั่งเสียงของเครื่อง
          </p>
        </div>
      </div>

      {/* Embedded AED Simulator */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
              Interactive Virtual Tool
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              จำลองสถานการณ์การใช้งานเครื่อง AED เสมือนจริง
            </h2>
          </div>
        </div>

        {/* Embedded Simulator */}
        <AedSimulator />
      </section>

      {/* How AED Works & Shockable vs Non-Shockable Rhythms */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">
            Medical Mechanism
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            กลไกการทำงานของเครื่อง AED: ทำไมการช็อกจึงช่วยชีวิตได้?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            เมื่อคนเราเกิดภาวะหัวใจหยุดเต้นเฉียบพลัน ส่วนใหญ่มักไม่ได้เกิดจากหัวใจหยุดนิ่งไปเฉยๆ
            แต่เกิดจากคลื่นไฟฟ้าในหัวใจลัดวงจร ทำให้กล้ามเนื้อหัวใจเต้นสั่นพลิ้วระริก (Ventricular Fibrillation - VF)
            จนไม่สามารถสูบฉีดเลือดไปเลี้ยงร่างกายได้
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shockable Rhythms */}
          <div className="rounded-2xl border border-emerald-300 bg-emerald-50/50 p-5">
            <div className="flex items-center gap-2 font-bold text-emerald-900 text-sm mb-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
              <span>คลื่นหัวใจที่เครื่องแนะนำให้ "ช็อกไฟฟ้า" (Shockable Rhythm)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li>
                <strong>1. Ventricular Fibrillation (VF):</strong> หัวใจห้องล่างเต้นพริ้วระริก คลื่นไฟฟ้าไม่เป็นระเบียบ
              </li>
              <li>
                <strong>2. Pulseless Ventricular Tachycardia (pVT):</strong> หัวใจห้องล่างเต้นเร็วจัดจนไม่มีชีพจร
              </li>
            </ul>
            <div className="mt-4 rounded-xl bg-white/80 p-3 text-xs text-emerald-900 border border-emerald-200">
              ⚡ <strong>การทำงาน:</strong> กระแสไฟฟ้าช็อกจะหยุดการสั่นพลิ้วชั่วขณะ เพื่อให้เซลล์กำเนิดจังหวะธรรมชาติ (SA Node) สามารถรีเซ็ตและกลับมาเต้นตามจังหวะปกติได้
            </div>
          </div>

          {/* Non-Shockable Rhythms */}
          <div className="rounded-2xl border border-amber-300 bg-amber-50/50 p-5">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <span>คลื่นหัวใจที่เครื่อง "ไม่แนะนำให้ช็อก" (Non-Shockable Rhythm)</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li>
                <strong>1. Asystole:</strong> หัวใจหยุดเต้นโดยสิ้นเชิง (คลื่นหัวใจเป็นเส้นตรงราบ)
              </li>
              <li>
                <strong>2. Pulseless Electrical Activity (PEA):</strong> มีคลื่นไฟฟ้าแต่กล้ามเนื้อหัวใจไม่บีบตัว
              </li>
            </ul>
            <div className="mt-4 rounded-xl bg-white/80 p-3 text-xs text-amber-900 border border-amber-200">
              🛑 <strong>สิ่งที่ต้องทำ:</strong> หากเครื่องบอก <em>"ไม่แนะนำให้ทำการช็อก"</em> ให้ <strong>เริ่มกดหน้าอกทำ CPR ทันที 2 นาที</strong> ห้ามหยุดรอ!
            </div>
          </div>
        </div>
      </section>

      {/* 4 Universal Steps of AED */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">
            Standard 4-Step Operation
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            4 ขั้นตอนมาตรฐานสากลในการใช้งานเครื่อง AED
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            ท่องให้จำขึ้นใจ: เปิดเครื่อง &gt; แปะแผ่น &gt; ถอยห้ามแตะ &gt; กดปุ่มช็อก
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 font-black text-sm">
                01
              </span>
              <h4 className="mt-3 text-base font-bold text-slate-900">1. เปิดเครื่องทันที</h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                ทันทีที่เครื่อง AED มาถึงจุดเกิดเหตุ ให้กดปุ่มเปิด (Power ON) หรือเปิดฝาเครื่อง จากนั้นฟังคำสั่งเสียง
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-emerald-700">
              ระหว่างเตรียมเครื่อง ให้คนอื่นทำ CPR ต่อเนื่อง
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-blue-100 text-brand-blue-800 font-black text-sm">
                02
              </span>
              <h4 className="mt-3 text-base font-bold text-slate-900">2. ติดแผ่นขั้วไฟฟ้า</h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                ลอกแผ่นกาวออก แปะแผ่นหนึ่งใต้กระดูกไหปลาร้าขวา อีกแผ่นแปะที่ใต้ราวนมชายโครงซ้าย เสียบสายเข้าเครื่อง
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-brand-blue-700">
              กดแผ่นให้แนบสนิทกับผิวหนัง
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 font-black text-sm">
                03
              </span>
              <h4 className="mt-3 text-base font-bold text-slate-900">3. เครื่องวิเคราะห์คลื่น</h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                เมื่อเครื่องสั่ง <em>"กำลังวิเคราะห์ ห้ามแตะต้องตัวผู้ป่วย"</em> ให้ตะโกนบอกทุกคนรอบข้าง และหยุดกดหน้าอกชั่วคราว
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-amber-700">
              ห้ามสัมผัสตัวผู้ป่วยเด็ดขาด
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-red-100 text-red-800 font-black text-sm">
                04
              </span>
              <h4 className="mt-3 text-base font-bold text-slate-900">4. กดปุ่มช็อก & ทำ CPR ต่อ</h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                หากเครื่องสั่งให้ช็อก ให้ตะโกน <strong>"ฉันถอย คุณถอย ทุกคนถอย"</strong> กดปุ่มไฟกระพริบ แล้วทำ CPR ต่อทันที 2 นาที
              </p>
            </div>
            <div className="mt-3 pt-2 border-t border-slate-100 text-[11px] font-semibold text-red-700">
              เริ่มปั๊มหัวใจต่อทันทีหลังเสียงช็อก
            </div>
          </div>
        </div>
      </section>

      {/* Special Safety Precautions */}
      <section className="rounded-3xl border border-red-200 bg-red-50/40 p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-3 text-red-800 font-bold text-lg mb-4">
          <AlertTriangle className="h-6 w-6 text-red-600 shrink-0" />
          <h3>4 สถานการณ์พิเศษที่ต้องระวังในการใช้เครื่อง AED</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
          <div className="rounded-2xl bg-white p-4 border border-red-200 shadow-xs">
            <h5 className="font-bold text-red-950">1. ผู้ป่วยตัวเปียกน้ำ / จมน้ำ</h5>
            <p className="mt-1 text-slate-600">
              ย้ายผู้ป่วยขึ้นจากแอ่งน้ำ เช็ดบริเวณหน้าอกให้แห้งสนิทก่อนแปะแผ่นนำไฟฟ้า เพื่อป้องกันกระแสไฟฟ้าลัดวงจรข้ามผิวหนัง
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-red-200 shadow-xs">
            <h5 className="font-bold text-red-950">2. มีแผ่นแปะยา (Medical Patch)</h5>
            <p className="mt-1 text-slate-600">
              หากพบบริเวณหน้าอกมีแผ่นยาแก้ปวดหรือแผ่นนิโคติน ให้สวมถุงมือดึงแผ่นยาออก และเช็ดผิวหนังให้สะอาดก่อนแปะแผ่น AED
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-red-200 shadow-xs">
            <h5 className="font-bold text-red-950">3. เครื่องกระตุ้นหัวใจฝังในตัว (Pacemaker)</h5>
            <p className="mt-1 text-slate-600">
              หากคลำพบก้อนนูนแข็งใต้ผิวหนังบริเวณใต้ไหปลาร้า ให้แปะแผ่นขั้วไฟฟ้าห่างจากตัวเครื่องอย่างน้อย 1 นิ้ว (2.5 ซม.) ห้ามแปะทับ
            </p>
          </div>

          <div className="rounded-2xl bg-white p-4 border border-red-200 shadow-xs">
            <h5 className="font-bold text-red-950">4. การใช้ในเด็กเล็ก (อายุ 1–8 ปี)</h5>
            <p className="mt-1 text-slate-600">
              ให้ใช้แผ่นสำหรับเด็ก หรือเปิดสวิตช์โหมดเด็ก หากไม่มีแผ่นเด็กให้ใช้แผ่นผู้ใหญ่ได้ แต่หากแผ่นใหญ่จนแตะกัน ให้แปะที่ <strong>กึ่งกลางหน้าอก 1 แผ่น และ กลางหลัง 1 แผ่น</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-100/70 p-6">
        <div>
          <h4 className="text-base font-bold text-slate-900">
            ขั้นตอนต่อไป: รู้จักเบอร์โทรฉุกเฉินและวิธีแจ้งเหตุ 1669
          </h4>
          <p className="text-xs text-slate-600">
            การแจ้งข้อมูลที่แม่นยำจะช่วยให้ทีมแพทย์ส่งรถกู้ชีพมาถึงจุดเกิดเหตุได้เร็วที่สุด
          </p>
        </div>
        <button
          onClick={() => onSelectTab('contacts')}
          className="flex items-center gap-2 rounded-2xl bg-brand-blue-700 px-5 py-2.5 text-xs font-bold text-white hover:bg-brand-blue-600 shrink-0"
        >
          <span>ไปที่หน้าเบอร์โทรฉุกเฉิน</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
