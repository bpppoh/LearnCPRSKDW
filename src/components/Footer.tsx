import React from 'react';
import { HeartPulse, PhoneCall, ShieldCheck, School, Heart } from 'lucide-react';
import type { PageTab } from '../types';

interface FooterProps {
  onSelectTab: (tab: PageTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-white text-slate-600">
      {/* Top emergency banner */}
      <div className="bg-gradient-to-r from-brand-orange-600 via-brand-orange-500 to-brand-blue-700 py-3 text-white">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-semibold text-center sm:text-left gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>พบเห็นผู้หมดสติ ไม่หายใจ หรือหัวใจหยุดเต้นฉุกเฉิน</span>
          </div>
          <div className="flex items-center gap-2">
            <span>โทรแจ้งทันที:</span>
            <a
              href="tel:1669"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-0.5 text-xs font-bold text-brand-orange-700 hover:bg-orange-50"
            >
              <PhoneCall className="h-3 w-3" />
              <span>สายด่วนการแพทย์ฉุกเฉิน 1669 (โทรฟรี 24 ชม.)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: About the Project */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange-600 text-white">
                <HeartPulse className="h-5 w-5" />
              </div>
              <span className="text-base font-bold text-slate-900">
                โครงงานเว็บไซต์คู่มือกู้ชีพและปฐมพยาบาลฉุกเฉิน
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed max-w-md">
              จัดทำขึ้นเพื่อการศึกษา เผยแพร่ความรู้ และสร้างทักษะการช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR),
              การประเมินผู้บาดเจ็บฉุกเฉิน (GRXABCDE), และการใช้งานเครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติ (AED)
              สำหรับนักเรียนและประชาชนทั่วไป
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-medium text-slate-500">
              <School className="h-4 w-4 text-brand-blue-600" />
              <span>โรงเรียนสุคนธีรวิทย์ • วิชาโครงงาน (ชั้น ม.3/3)</span>
            </div>
            <p className="text-xs text-slate-500">
              ครูที่ปรึกษาโครงงาน: <strong className="text-slate-800">คุณครูวิลัยวรรณ</strong>
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              หน้าบทเรียนหลัก
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onSelectTab('main')}
                  className="hover:text-brand-orange-600 transition-colors"
                >
                  หน้าแรก (MainPage)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('cpr')}
                  className="hover:text-brand-orange-600 transition-colors"
                >
                  การกู้ชีพขั้นพื้นฐาน (CPR & Metronome)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('grxabcde')}
                  className="hover:text-brand-orange-600 transition-colors"
                >
                  การประเมินผู้บาดเจ็บ (GRXABCDE)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('aed')}
                  className="hover:text-brand-orange-600 transition-colors"
                >
                  เครื่องกระตุกหัวใจไฟฟ้า (AED & Simulator)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Student Members */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
              คณะผู้จัดทำ (ม.3/3)
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>1. ด.ช. คุณานนท์ อุนทุโร (เลขที่ 4)</li>
              <li>2. นาย ธนาธิป ตั้งศุภธวัช (เลขที่ 7)</li>
              <li>3. ด.ญ. กัญญาพัชร ลือยาม (เลขที่ 16)</li>
              <li>4. ด.ญ. ไอลดา พิณทอง (เลขที่ 18)</li>
              <li>5. ด.ญ. นันท์นภัส แดงบุญมี (เลขที่ 25)</li>
            </ul>
            <div className="mt-3">
              <button
                onClick={() => onSelectTab('about')}
                className="text-xs font-semibold text-brand-blue-600 hover:text-brand-blue-700"
              >
                ดูรายละเอียดโครงงานและผู้จัดทำ →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-3">
          <p>© {currentYear} โครงงานวิชาโครงงาน โรงเรียนสุคนธีรวิทย์. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> for Life-Saving Education
          </p>
        </div>
      </div>
    </footer>
  );
};
