import React from 'react';
import {
  School,
  BookOpen,
  CheckCircle,
  HeartHandshake,
  Users,
} from 'lucide-react';
import { QuizModal } from '../components/QuizModal';
import type { StudentMember, PageTab } from '../types';

interface AboutPageProps {
  onSelectTab?: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const MEMBERS: StudentMember[] = [
    {
      name: 'นาย กิตติพัฒน์ โตเลี้ยง',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentNo: 'เลขที่ 1',
      no: 1,
    },
    {
      name: 'ด.ช. คุณานนท์ อุนทุโร',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentNo: 'เลขที่ 4',
      no: 4,
    },
    {
      name: 'นาย ธนาธิป ตั้งศุภธวัช',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentNo: 'เลขที่ 7',
      no: 7,
    },
    {
      name: 'ด.ญ. กัญญาพัชร ลือยาม',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentNo: 'เลขที่ 16',
      no: 16,
    },
    {
      name: 'ด.ญ. ไอลดา พิณทอง',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentNo: 'เลขที่ 18',
      no: 18,
    },
    {
      name: 'ด.ญ. นันท์นภัส แดงบุญมี',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentNo: 'เลขที่ 25',
      no: 25,
    },
  ];

  return (
    <div className="space-y-16 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="rounded-3xl border border-brand-blue-200 bg-gradient-to-r from-sky-50 via-white to-indigo-50 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-100 border border-brand-blue-300 px-3.5 py-1 text-xs font-bold text-brand-blue-800 mb-3">
            <School className="h-4 w-4 text-brand-blue-600" />
            <span>โรงเรียนสุคนธีรวิทย์ • วิชาโครงงาน (ม.3/3)</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            เกี่ยวกับโครงงานและคณะผู้จัดทำ
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            โครงงานเว็บไซต์การเรียนรู้การช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR), การประเมินผู้บาดเจ็บฉุกเฉิน (GRXABCDE),
            และการใช้งานเครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติ (AED) ผลงานการสร้างสรรค์ของนักเรียนชั้นมัธยมศึกษาปีที่ 3/3
          </p>
        </div>
      </div>

      {/* Project Meta Details (Teacher, School, Objectives) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 font-bold mb-4">
              <School className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">สถานศึกษา</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">โรงเรียนสุคนธีรวิทย์</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              สังกัดสำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน มุ่งเน้นพัฒนาศักยภาพผู้เรียนทั้งด้านวิชาการและทักษะชีวิต
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
            ระดับชั้นมัธยมศึกษาปีที่ 3/3
          </div>
        </div>

        <div className="rounded-3xl border border-brand-orange-200 bg-orange-50/40 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-100 text-brand-orange-700 font-bold mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">รายวิชา & ที่ปรึกษา</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">วิชาโครงงาน</h3>
            <p className="text-xs text-slate-700 mt-2 leading-relaxed">
              คุณครูที่ปรึกษาโครงงาน: <strong className="text-slate-900 font-bold">คุณครูวิลัยวรรณ</strong>
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-orange-200 text-xs font-semibold text-brand-orange-800">
            ภาคเรียนการศึกษาโครงงานนักเรียน
          </div>
        </div>

        <div className="rounded-3xl border border-brand-blue-200 bg-sky-50/40 p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue-100 text-brand-blue-700 font-bold mb-4">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-600">เป้าหมายโครงงาน</span>
            <h3 className="text-lg font-bold text-slate-900 mt-1">1 นาทีเปลี่ยนชีวิต</h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              ส่งเสริมให้เยาวชนทุกคนมีความรู้ ความกล้า และทักษะที่ถูกต้องในการทำ CPR และใช้เครื่อง AED ได้จริง
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-sky-200 text-xs font-semibold text-brand-blue-800">
            เพื่อสังคมและชุมชนปลอดภัย
          </div>
        </div>
      </section>

      {/* Project Objectives */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          วัตถุประสงค์ของโครงงาน (Project Objectives)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-slate-700 leading-relaxed">
              1. เพื่อศึกษาและรวบรวมองค์ความรู้ด้านการช่วยฟื้นคืนชีพขั้นพื้นฐาน (CPR), การประเมินผู้บาดเจ็บฉุกเฉิน (GRXABCDE), และการใช้เครื่อง AED ตามมาตรฐานสากล
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-slate-700 leading-relaxed">
              2. เพื่อพัฒนาเว็บไซต์เชิงปฏิสัมพันธ์ (Interactive Web Application) ที่มีระบบเคาะจังหวะ Metronome และระบบจำลองเครื่อง AED ช่วยให้ผู้เรียนเข้าใจง่ายและเห็นภาพจริง
            </p>
          </div>
          <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200">
            <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="text-slate-700 leading-relaxed">
              3. เพื่อเผยแพร่ความรู้และสร้างความตระหนักรู้ในความสำคัญของ "4 นาทีทองแห่งชีวิต" สู่เพื่อนนักเรียน คณะครู และคนในชุมชน
            </p>
          </div>
        </div>
      </section>

      {/* Student Members Grid */}
      <section className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange-50 border border-brand-orange-200 px-3.5 py-1 text-xs font-bold text-brand-orange-800 mb-2">
            <Users className="h-3.5 w-3.5 text-brand-orange-600" />
            <span>Project Contributors</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            คณะผู้จัดทำโครงงาน (ชั้น ม.3/3)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            นักเรียนชั้นมัธยมศึกษาปีที่ 3/3 โรงเรียนสุคนธีรวิทย์
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MEMBERS.map((member) => (
            <div
              key={member.no}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm hover:shadow-md hover:border-brand-orange-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card ambient corner glow */}
              <div className="absolute -top-12 -right-12 h-28 w-28 rounded-full bg-gradient-to-br from-brand-orange-500/10 to-transparent blur-2xl group-hover:scale-125 transition-transform pointer-events-none" />

              <div>
                {/* Header: Number Badge & Grade */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-700 border border-slate-200/80">
                    <span className="h-2 w-2 rounded-full bg-brand-orange-500" />
                    <span>{member.studentNo}</span>
                  </span>
                  <span className="rounded-full bg-brand-blue-50 border border-brand-blue-200 px-2.5 py-0.5 text-[11px] font-bold text-brand-blue-700">
                    {member.grade}
                  </span>
                </div>

                {/* Avatar & Student Name */}
                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-orange-500 via-orange-500 to-amber-400 text-white font-black text-xl shadow-md shadow-brand-orange-500/20 group-hover:scale-105 transition-transform shrink-0">
                    {String(member.no).padStart(2, '0')}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-brand-orange-700 transition-colors truncate">
                      {member.name}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      โรงเรียนสุคนธีรวิทย์
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] font-medium text-slate-400">
                  คณะผู้จัดทำโครงงาน
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  ภาคเรียน 2568–2569
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack & Design Engineering */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          เทคโนโลยีที่ใช้พัฒนาเว็บไซต์ (Frontend Engineering)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          พัฒนาด้วยสถาปัตยกรรม <strong>Frontend-Only (No Backend / No Database)</strong> เพื่อความปลอดภัยสูงสุด
          น้ำหนักเบา โหลดได้รวดเร็วในเสี้ยววินาที และสามารถเผยแพร่บนโฮสติ้งฟรี (GitHub Pages / Vercel / Netlify) ได้อย่างไร้รอยต่อ
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-800 block">React 19 + TypeScript</span>
            <span className="text-[11px] text-slate-500">คอมโพเนนต์โมดูลาร์</span>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-800 block">Tailwind CSS</span>
            <span className="text-[11px] text-slate-500">21st.dev UI Standards</span>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-800 block">Web Audio API</span>
            <span className="text-[11px] text-slate-500">สังเคราะห์เสียง CPR Beat</span>
          </div>
          <div className="rounded-2xl bg-slate-50 p-3 border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-800 block">Lucide + Confetti</span>
            <span className="text-[11px] text-slate-500">ไอคอน & เอฟเฟกต์ควิซ</span>
          </div>
        </div>
      </section>

      {/* Interactive Quiz Section */}
      <section className="space-y-4">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
            Interactive Assessment
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            ทดสอบความรู้ท้ายบทเรียน (First Aid Mini-Quiz)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            ร่วมทำแบบทดสอบ 5 ข้อ เพื่อวัดความเข้าใจและรับคะแนนพร้อมเอฟเฟกต์เฉลิมฉลอง
          </p>
        </div>

        {/* Embedded Quiz Component */}
        <QuizModal />
      </section>
    </div>
  );
};
