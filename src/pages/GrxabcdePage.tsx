import React, { useState } from 'react';
import {
  Activity,
  ShieldAlert,
  AlertTriangle,
  HeartPulse,
  Eye,
  Wind,
  Thermometer,
  CheckCircle2,
  ArrowRight,
  Info,
} from 'lucide-react';
import type { PageTab } from '../types';

interface GrxabcdePageProps {
  onSelectTab: (tab: PageTab) => void;
}

interface StepDetail {
  letter: string;
  nameEn: string;
  nameTh: string;
  badgeColor: string;
  shortDesc: string;
  keyActions: string[];
  clinicalRationale: string;
  vitalWarning: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const GrxabcdePage: React.FC<GrxabcdePageProps> = ({ onSelectTab }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const STEPS: StepDetail[] = [
    {
      letter: 'G',
      nameEn: 'General Impression & Scene Safety',
      nameTh: 'การประเมินภาพรวมและความปลอดภัยของสถานที่',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
      shortDesc: 'ตรวจสอบความปลอดภัยของผู้ช่วยเหลือก่อนเสมอ และมองภาพรวมกลไกการบาดเจ็บ',
      keyActions: [
        'สังเกตความปลอดภัยรอบตัว: ไม่มีไฟฟ้ารั่ว, ไม่มีแก๊สรั่ว, ไม่มีโครงสร้างถล่ม, ปิดการจราจรป้องกันรถชนซ้ำ',
        'ประเมินกลไกการบาดเจ็บ (Mechanism of Injury - MOI) เช่น รถชนตกคูน้ำ, ตกจากที่สูง',
        'นับจำนวนผู้บาดเจ็บ และประเมินว่าต้องการกำลังเสริมหรือรถกู้ชีพกี่คัน',
        'สวมอุปกรณ์ป้องกันตนเอง (PPE) เช่น ถุงมือยางและหน้ากากอนามัย',
      ],
      clinicalRationale:
        'หากสถานที่เกิดเหตุไม่ปลอดภัย ผู้ช่วยเหลืออาจกลายเป็นผู้ประสบภัยเพิ่มอีกคนหนึ่ง "ความปลอดภัยของตนเองต้องมาก่อนเสมอ"',
      vitalWarning: 'หากที่เกิดเหตุมีอันตราย ห้ามเข้าเด็ดขาดจนกว่าเจ้าหน้าที่ผู้เชี่ยวชาญจะตัดกระแสไฟหรือควบคุมพื้นที่',
      icon: ShieldAlert,
    },
    {
      letter: 'R',
      nameEn: 'Response (AVPU Scale)',
      nameTh: 'การประเมินระดับความรู้สึกตัว',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
      shortDesc: 'ประเมินการตื่นและการตอบสนองของผู้ป่วยด้วยระบบมาตรฐาน AVPU',
      keyActions: [
        'A - Alert: ผู้ป่วยตื่นดี ลืมตา พูดคุยรู้เรื่อง',
        'V - Voice: ผู้ป่วยตอบสนองเมื่อมีเสียงเรียก (ลืมตาหรือขานรับเมื่อเรียก)',
        'P - Pain: ไม่ตอบสนองต่อเสียง แต่ขยับตัวหรือปัดป้องเมื่อถูกกระตุ้นด้วยความเจ็บปวด (เช่น บีบต้นแขน)',
        'U - Unresponsive: หมดสติโดยสิ้นเชิง ไม่ตอบสนองต่อสิ่งกระตุ้นใดๆ (ต้องเตรียม CPR & AED ทันที)',
      ],
      clinicalRationale:
        'ระดับความรู้สึกตัวเป็นดัชนีชี้วัดปริมาณออกซิเจนที่ไปเลี้ยงสมอง และความรุนแรงของการบาดเจ็บที่กะโหลกศีรษะ',
      vitalWarning: 'หากพบผู้ป่วยอยู่ในระดับ U (Unresponsive) ให้รีบตรวจการหายใจและคลำชีพจรทันที',
      icon: Eye,
    },
    {
      letter: 'X',
      nameEn: 'eXsanguinating Hemorrhage',
      nameTh: 'การตรวจและห้ามเลือดที่ไหลพุ่งรุนแรง',
      badgeColor: 'bg-red-100 text-red-800 border-red-300',
      shortDesc: 'ภาวะเลือดออกจากหลอดเลือดแดงใหญ่ไหลพุ่ง ต้องห้ามเลือดทันทีก่อนตรวจขั้นตอนอื่น',
      keyActions: [
        'กวาดสายตาดูรอบร่างกาย: มีเลือดสีแดงสดพุ่งเป็นสาย หรือกองเลือดขนาดใหญ่บนพื้นหรือไม่',
        'ใช้มือกดแผลโดยตรง (Direct Pressure) ด้วยผ้าสะอาดทันทีอย่างแน่นหนา',
        'หากเป็นบาดแผลที่แขนหรือขา และเลือดไม่หยุดไหล ให้ใช้สายรัดห้ามเลือด (Tourniquet) รัดเหนือบาดแผล 2–3 นิ้ว (ห้ามรัดตรงข้อต่อ)',
        'บันทึกเวลาที่ใส่สายรัดห้ามเลือด (Time of Tourniquet) ติดไว้ที่หน้าผากหรือสายรัดเสมอ',
      ],
      clinicalRationale:
        'หลอดเลือดแดงใหญ่ฉีกขาดสามารถทำให้ผู้ป่วยเสียเลือดจนถึงแก่ความตายได้ภายในเวลาเพียง 1–3 นาที จึงต้องขึ้นมาเป็นอันดับแรกก่อนทางเดินหายใจ (A)',
      vitalWarning: 'ห้ามคลายสายรัดห้ามเลือดออกเองเด็ดขาดเมื่อรัดแล้ว ยกเว้นแพทย์ในโรงพยาบาลเป็นผู้คลาย',
      icon: AlertTriangle,
    },
    {
      letter: 'A',
      nameEn: 'Airway & Cervical Spine Control',
      nameTh: 'การเปิดทางเดินหายใจและป้องกันกระดูกสันหลังส่วนคอ',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      shortDesc: 'ทำให้ทางเดินหายใจโล่ง และตรึงกระดูกคอให้นิ่งป้องกันอัมพาต',
      keyActions: [
        'กรณีผู้ป่วยอุบัติเหตุ (สงสัยกระดูกคอหัก): ใช้ท่ายกขากรรไกร (Jaw-thrust maneuver) ห้ามแหงนหน้า',
        'กรณีผู้ป่วยทั่วไป (ไม่มีอุบัติเหตุ): ใช้วิธีกดหน้าผากเชยคาง (Head-tilt chin-lift)',
        'มองในช่องปาก: มีสิ่งแปลกปลอม เศษอาหาร เลือด ฟันปลอม อุดกั้นหรือไม่ (ถ้าเห็นชัดเจนให้ใช้กวาดออกเบาๆ)',
        'จัดคนหนึ่งคนทำหน้าที่ประคองศีรษะให้อยู่ในแนวตรง (Manual In-line Stabilization)',
      ],
      clinicalRationale:
        'ลิ้นที่ตกไปอุดกั้นหลอดลมเป็นสาเหตุที่พบบ่อยที่สุดของทางเดินหายใจอุดกั้นในผู้หมดสติ',
      vitalWarning: 'ห้ามแหงนคอผู้ป่วยอุบัติเหตุเด็ดขาด เพราะอาจทำให้กระดูกสันหลังส่วนคอที่หักไปตัดไขสันหลังจนพิการถาวร',
      icon: Wind,
    },
    {
      letter: 'B',
      nameEn: 'Breathing & Ventilation',
      nameTh: 'การประเมินการหายใจและการระบายอากาศ',
      badgeColor: 'bg-sky-100 text-sky-800 border-sky-300',
      shortDesc: 'ตรวจดูการเคลื่อนไหวของทรวงอก อัตราการหายใจ และภาวะขาดอากาศ',
      keyActions: [
        'ดู (Look): ทรวงอกขยับขึ้นลงเท่ากันทั้ง 2 ข้างหรือไม่ มีแผลเปิดที่ผนังทรวงอกหรือไม่',
        'ฟัง (Listen): ฟังเสียงลมหายใจ มีเสียงฮืดฮาด (Stridor/Wheezing) หรือหายใจเฮือก (Agonal Gasping) หรือไม่',
        'รู้สึก (Feel): สัมผัสลมหายใจที่กระทบแก้ม และคลำความสมมาตรของทรวงอก',
        'หากไม่หายใจ หรือหายใจเฮือก (Agonal respiration) ให้ถือว่าหัวใจหยุดเต้น และเริ่มทำ CPR ทันที',
      ],
      clinicalRationale:
        'การหายใจเฮือก (Agonal gasp) ไม่ใช่การหายใจตามปกติ แต่เป็นสัญญาณเตือนว่าสมองกำลังจะขาดออกซิเจนขั้นรุนแรง',
      vitalWarning: 'พบการหายใจเฮือกติดขัด ให้เริ่มกดหน้าอก CPR ทันที อย่าเข้าใจผิดว่าผู้ป่วยยังหายใจได้',
      icon: Wind,
    },
    {
      letter: 'C',
      nameEn: 'Circulation & Bleeding Control',
      nameTh: 'การประเมินระบบการไหลเวียนโลหิต',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      shortDesc: 'ตรวจชีพจร ประเมินสีผิว อุณหภูมิ และเวลาการคืนตัวของหลอดเลือดฝอย',
      keyActions: [
        'คลำชีพจร: คลำที่หลอดเลือดใหญ่ที่คอ (Carotid pulse) ในผู้หมดสติ เป็นเวลา 5–10 วินาที',
        'ตรวจ Capillary Refill Time (CRT): กดที่เล็บมือ 5 วินาทีแล้วปล่อย เล็บต้องกลับมาเป็นสีชมพูภายใน 2 วินาที',
        'ตรวจผิวหนัง: ผิวซีด ตัวเย็น เหงื่อกาฬแตก (Signs of Shock) แสดงว่าเกิดภาวะช็อกจากการเสียเลือด',
        'ตรวจหาแผลเลือดออกอื่นๆ เพิ่มเติม และทำแผลกดห้ามเลือด',
      ],
      clinicalRationale:
        'ระบบไหลเวียนโลหิตที่ล้มเหลว (Hypovolemic Shock) จะทำให้อวัยวะภายในขาดออกซิเจนและล้มเหลวตามมาอย่างรวดเร็ว',
      vitalWarning: 'หากคลำชีพจรไม่ได้ภายใน 10 วินาที หรือไม่แน่ใจ ให้เริ่มทำ CPR ทันที!',
      icon: HeartPulse,
    },
    {
      letter: 'D',
      nameEn: 'Disability & Neurological Status',
      nameTh: 'การประเมินระบบประสาทและความพิการ',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-300',
      shortDesc: 'ตรวจขนาดรูม่านตา การตอบสนองต่อแสง และความบกพร่องทางระบบประสาท',
      keyActions: [
        'ตรวจรูม่านตาทั้งสองข้าง (Pupils): ดูขนาด รูปร่าง และการหดตัวเมื่อส่องไฟฉาย (ปกติจะกลมและหดตัวเท่ากัน)',
        'ตรวจการขยับแขนขา: ขอให้ผู้ป่วยยกแขน กำมือ หรือกระดิกเท้าทั้งสองข้าง',
        'ประเมินคะแนน Glasgow Coma Scale (GCS) ครอบคลุม การลืมตา การพูด และการเคลื่อนไหว (คะแนนเต็ม 15)',
        'ระวังภาวะน้ำตาลในเลือดต่ำ หรือสมองได้รับการกระทบกระเทือน',
      ],
      clinicalRationale:
        'รูม่านตาขยายไม่เท่ากัน (Anisocoria) หรือไม่ตอบสนองต่อแสง เป็นสัญญาณอันตรายของความดันในกะโหลกศีรษะสูงหรือเลือดออกในสมอง',
      vitalWarning: 'หากแขนขาอ่อนแรงครึ่งซีก ปากเบี้ยว พูดไม่ชัด ให้นึกถึงภาวะโรคหลอดเลือดสมอง (Stroke) รีบนำส่ง รพ. ด่วน',
      icon: Eye,
    },
    {
      letter: 'E',
      nameEn: 'Exposure & Environment Control',
      nameTh: 'การเปิดสำรวจร่างกายและป้องกันอุณหภูมิต่ำ',
      badgeColor: 'bg-indigo-100 text-indigo-800 border-indigo-300',
      shortDesc: 'ปลดหรือตัดเสื้อผ้าตรวจหาแผลซ่อนเร้น พร้อมคลุมผ้าห่มป้องกันภาวะตัวเย็นเกิน',
      keyActions: [
        'ตัดหรือปลดเสื้อผ้าเท่าที่จำเป็นเพื่อสำรวจบาดแผลที่อาจถูกบดบัง เช่น แผลแทง แผลกระดูกหัก',
        'ระวังและเคารพศักดิ์ศรีความเป็นส่วนตัวของผู้ป่วย (ปิดบังส่วนมิดชิด)',
        'รีบคลุมตัวผู้ป่วยด้วยผ้าห่มหรือ Emergency Blanket เพื่อป้องกันภาวะอุณหภูมิกายต่ำ (Hypothermia)',
        'หลีกเลี่ยงการให้ผู้ป่วยนอนสัมผัสพื้นคอนกรีตเย็นเป็นเวลานาน',
      ],
      clinicalRationale:
        'ภาวะอุณหภูมิกายต่ำ (Hypothermia) ร่วมกับเลือดออก จะทำให้การแข็งตัวของเลือดเสียไป (Coagulopathy) จนเลือดไหลไม่หยุด',
      vitalWarning: 'ภาวะตัวเย็นเกินในผู้บาดเจ็บเป็น 1 ในสามเหลี่ยมมรณะ (Trauma Triad of Death) ที่ต้องป้องกันอย่างยิ่งยวด',
      icon: Thermometer,
    },
  ];

  const currentStep = STEPS[activeStepIndex];
  const StepIcon = currentStep.icon;

  return (
    <div className="space-y-12 py-6 sm:py-8">
      {/* Header Banner */}
      <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 via-white to-teal-50 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 border border-emerald-300 px-3.5 py-1 text-xs font-bold text-emerald-800 mb-3">
            <Activity className="h-4 w-4 text-emerald-600" />
            <span>Pre-Hospital Trauma Assessment Algorithm</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            หลักการประเมินผู้บาดเจ็บฉุกเฉิน: GRXABCDE
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            ระบบการประเมินอาการผู้ประสบอุบัติเหตุและผู้ป่วยฉุกเฉินระดับมืออาชีพตามลำดับความเร่งด่วนของชีวิต
            เพื่อให้ผู้ช่วยเหลือสามารถตรวจพบและแก้ไขภาวะคุกคามชีวิต (Life-Threatening Conditions) ได้อย่างแม่นยำก่อนเคลื่อนย้าย
          </p>
        </div>
      </div>

      {/* Interactive Step Explorer (21st.dev Tab/Pill Design) */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
              Interactive 8-Step Navigation
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              คลิกเลือกขั้นตอนเพื่อดูรายละเอียดการประเมิน
            </h2>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            ขั้นตอน {activeStepIndex + 1} จาก 8
          </span>
        </div>

        {/* 8 Letter Tabs */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
          {STEPS.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.letter}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex flex-col items-center justify-center rounded-xl sm:rounded-2xl p-2 sm:p-4 border transition-all duration-200 active:scale-95 min-h-[3.75rem] sm:min-h-[4.5rem] ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 ring-2 ring-emerald-300'
                    : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span className="text-lg sm:text-2xl font-black leading-none">{step.letter}</span>
                <span
                  className={`text-[9px] sm:text-[10px] font-semibold mt-1 truncate max-w-full text-center ${
                    isSelected ? 'text-emerald-100' : 'text-slate-400'
                  }`}
                >
                  {step.nameEn.split(' ')[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Content Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 sm:p-10 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 font-black text-2xl sm:text-3xl shrink-0 shadow-inner">
                {currentStep.letter}
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[11px] sm:text-xs font-bold border border-slate-200 bg-slate-50 text-slate-700 max-w-full truncate">
                  <StepIcon className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">{currentStep.nameEn}</span>
                </div>
                <h3 className="mt-1 text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                  {currentStep.nameTh}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => prev - 1)}
                className="flex-1 sm:flex-initial text-center rounded-xl border border-slate-200 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← ขั้นก่อนหน้า
              </button>
              <button
                disabled={activeStepIndex === STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => prev + 1)}
                className="flex-1 sm:flex-initial text-center rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white hover:bg-emerald-500 disabled:opacity-30 disabled:cursor-not-allowed shadow-sm"
              >
                ขั้นถัดไป →
              </button>
            </div>
          </div>

          <p className="mt-5 text-sm sm:text-base font-semibold text-slate-800">
            {currentStep.shortDesc}
          </p>

          {/* Action Checklist */}
          <div className="mt-6 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              แนวทางและข้อปฏิบัติที่ต้องตรวจเช็ค (Action Checklist):
            </h4>
            <div className="space-y-2.5">
              {currentStep.keyActions.map((action, aIdx) => (
                <div
                  key={aIdx}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50/80 p-4 border border-slate-200/80 text-xs sm:text-sm text-slate-800"
                >
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Rationale & Warnings */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-sky-200 bg-sky-50/70 p-4 text-xs sm:text-sm text-sky-950">
              <div className="flex items-center gap-2 font-bold mb-1">
                <Info className="h-4 w-4 text-sky-600" />
                <span>เหตุผลทางการแพทย์ (Why this step matters):</span>
              </div>
              <p className="leading-relaxed text-sky-900">{currentStep.clinicalRationale}</p>
            </div>

            <div className="rounded-2xl border border-red-200 bg-red-50/70 p-4 text-xs sm:text-sm text-red-950">
              <div className="flex items-center gap-2 font-bold mb-1">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <span>ข้อควรระวังอันตรายถึงชีวิต (Vital Warning):</span>
              </div>
              <p className="leading-relaxed text-red-900">{currentStep.vitalWarning}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Reference Table */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            ตารางสรุปลำดับการประเมินและเป้าหมายของแต่ละขั้นตอน
          </h3>
          <span className="text-[11px] text-slate-400">
            (เลื่อนซ้าย-ขวาเพื่อดูตารางเต็มบนมือถือ)
          </span>
        </div>

        <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
          <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-slate-700">
                <th className="p-3 font-bold">ตัวอักษร</th>
                <th className="p-3 font-bold">ชื่อขั้นตอน</th>
                <th className="p-3 font-bold">เป้าหมายหลักในการตรวจ</th>
                <th className="p-3 font-bold">การแก้ไขฉุกเฉินเบื้องต้น</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td className="p-3 font-black text-amber-600">G</td>
                <td className="p-3 font-semibold text-slate-900">General Impression</td>
                <td className="p-3">สถานที่ปลอดภัยหรือไม่, กลไกการเกิดเหตุ</td>
                <td className="p-3">ตัดกระแสไฟ, ใส่ PPE, ขอรถกู้ชีพเสริม</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-blue-600">R</td>
                <td className="p-3 font-semibold text-slate-900">Response</td>
                <td className="p-3">ความรู้สึกตัวตามระบบ AVPU</td>
                <td className="p-3">ถ้าหมดสติ (U) เตรียมตรวจชีพจร & CPR</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-red-600">X</td>
                <td className="p-3 font-semibold text-slate-900">eXsanguinating Hemorrhage</td>
                <td className="p-3">เลือดออกพุ่งรุนแรงจากหลอดเลือดแดง</td>
                <td className="p-3">กดแผลโดยตรง / รัดสายชะเนาะ (Tourniquet)</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-emerald-600">A</td>
                <td className="p-3 font-semibold text-slate-900">Airway & C-spine</td>
                <td className="p-3">ทางเดินหายใจโล่ง & ระวังกระดูกคอ</td>
                <td className="p-3">ยกขากรรไกร (Jaw-thrust) กวาดสิ่งอุดกั้น</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-sky-600">B</td>
                <td className="p-3 font-semibold text-slate-900">Breathing</td>
                <td className="p-3">การเคลื่อนไหวทรวงอก & การหายใจ</td>
                <td className="p-3">ให้ออกซิเจน / ถ้าไม่หายใจเริ่ม CPR</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-rose-600">C</td>
                <td className="p-3 font-semibold text-slate-900">Circulation</td>
                <td className="p-3">คลำชีพจร, อุณหภูมิผิว, CRT &lt; 2 วินาที</td>
                <td className="p-3">คุมภาวะช็อก, ห้ามเลือดแผลย่อย</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-purple-600">D</td>
                <td className="p-3 font-semibold text-slate-900">Disability</td>
                <td className="p-3">รูม่านตาสองข้าง, GCS, การขยับแขนขา</td>
                <td className="p-3">ตรวจคัดกรอง Stroke, ป้องกันศีรษะขยับ</td>
              </tr>
              <tr>
                <td className="p-3 font-black text-indigo-600">E</td>
                <td className="p-3 font-semibold text-slate-900">Exposure</td>
                <td className="p-3">แผลซ่อนเร้น & ภาวะตัวเย็นเกิน</td>
                <td className="p-3">คลุมผ้าห่มรักษาความอบอุ่นให้ร่างกาย</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-slate-100/70 p-6">
        <div>
          <h4 className="text-base font-bold text-slate-900">
            หลังจากประเมินเสร็จแล้ว: เรียนรู้วิธีใช้เครื่อง AED
          </h4>
          <p className="text-xs text-slate-600">
            เครื่องกระตุกหัวใจไฟฟ้าอัตโนมัติจะช่วยกู้ชีพผู้ป่วยหัวใจเต้นผิดจังหวะรุนแรง
          </p>
        </div>
        <button
          onClick={() => onSelectTab('aed')}
          className="flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-500 shrink-0"
        >
          <span>ไปที่หน้าเครื่อง AED</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};
