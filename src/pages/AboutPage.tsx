import React from 'react';
import {
  School,
  BookOpen,
  CheckCircle,
  HeartHandshake,
} from 'lucide-react';
import { QuizModal } from '../components/QuizModal';
import type { StudentMember, PageTab } from '../types';

interface AboutPageProps {
  onSelectTab?: (tab: PageTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const MEMBERS: StudentMember[] = [
    {
      name: 'ด.ช. คุณานนท์ อุนทุโร',
      role: 'หัวหน้ากลุ่ม / ค้นคว้าข้อมูลการแพทย์ฉุกเฉิน & CPR',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentId: 'เลขที่ 4',
      avatarText: 'คุณานนท์',
      bio: 'รับผิดชอบรวบรวมเนื้อหาการทำ CPR มาตรฐานสากล AHA และสพฉ. 1669',
      skills: ['Medical Research', 'CPR Protocols', 'Coordination'],
    },
    {
      name: 'นาย ธนาธิป ตั้งศุภธวัช',
      role: 'ผู้พัฒนาส่วนต่อประสานผู้ใช้ (Frontend UI/UX) & Web Audio',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentId: 'เลขที่ 7',
      avatarText: 'ธนาธิป',
      bio: 'รับผิดชอบพัฒนาโครงสร้างเว็บไซต์ React, Tailwind CSS และระบบ Metronome',
      skills: ['React & TypeScript', 'Tailwind CSS', 'Web Audio API'],
    },
    {
      name: 'ด.ญ. กัญญาพัชร ลือยาม',
      role: 'ผู้เรียบเรียงเนื้อหาหลักการประเมิน GRXABCDE',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentId: 'เลขที่ 16',
      avatarText: 'กัญญาพัชร',
      bio: 'รับผิดชอบสกัดขั้นตอนการตรวจร่างกาย 8 ลำดับ และการป้องกันภาวะช็อก',
      skills: ['Trauma Assessment', 'Content Structuring', 'Checklists'],
    },
    {
      name: 'ด.ญ. ไอลดา พิณทอง',
      role: 'ผู้ออกแบบสื่อจำลองเครื่อง AED และขั้นตอนการช็อกไฟฟ้า',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentId: 'เลขที่ 18',
      avatarText: 'ไอลดา',
      bio: 'รับผิดชอบลำดับขั้นตอนการใช้ AED 4 สเต็ป และข้อควรระวังทางการแพทย์',
      skills: ['AED Simulation', 'Educational Design', 'Quality Audit'],
    },
    {
      name: 'ด.ญ. นันท์นภัส แดงบุญมี',
      role: 'ผู้จัดทำคลังข้อสอบ Quiz & รวบรวมข้อมูลสายด่วน 1669',
      grade: 'ชั้นมัธยมศึกษาปีที่ 3/3',
      studentId: 'เลขที่ 25',
      avatarText: 'นันท์นภัส',
      bio: 'รับผิดชอบการออกแบบคำถามวัดความรู้ 5 ข้อ พร้อมเฉลยคำอธิบายทางการแพทย์',
      skills: ['Quiz Architecture', 'Emergency Dispatch Info', 'Verification'],
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
          <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">
            Project Team Members
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            สมาชิกกลุ่มผู้จัดทำโครงงาน (ม.3/3)
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            คณะทำงานโครงงาน 5 คน ร่วมแรงร่วมใจสร้างสรรค์สื่อการเรียนรู้คุณภาพ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEMBERS.map((member, mIdx) => (
            <div
              key={mIdx}
              className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* Member Top Card Header */}
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-brand-orange-500 to-amber-500 text-white font-bold text-lg shadow-md shadow-brand-orange-500/20">
                    {member.name.split(' ')[1]?.[0] || 'น'}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {member.name}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs font-semibold text-brand-blue-700">
                        {member.grade}
                      </span>
                      <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-600 border border-slate-200">
                        {member.studentId}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-slate-50 p-3 border border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    หน้าที่ในโครงงาน
                  </span>
                  <p className="text-xs font-semibold text-slate-800 mt-0.5">
                    {member.role}
                  </p>
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {member.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg bg-orange-50 border border-orange-200/80 px-2 py-0.5 text-[10px] font-semibold text-brand-orange-800"
                  >
                    {skill}
                  </span>
                ))}
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
