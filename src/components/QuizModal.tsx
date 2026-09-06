import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Award, CheckCircle, XCircle, RotateCcw, HelpCircle, ArrowRight } from 'lucide-react';
import type { QuizQuestion } from '../types';

const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: 'การกดหน้าอกทำ CPR สำหรับผู้ใหญ่ มาตรฐานสากลกำหนดให้กดด้วยความเร็วและอัตราเท่าใด?',
    options: [
      '60 – 80 ครั้งต่อนาที',
      '100 – 120 ครั้งต่อนาที (ลึก 5–6 เซนติเมตร)',
      '140 – 160 ครั้งต่อนาที',
      'กดตามจังหวะการหายใจของตนเอง',
    ],
    correctIndex: 1,
    explanation:
      'อัตราความเร็วที่ถูกต้องตามหลักเกณฑ์สากล AHA และ สพฉ. คือ 100–120 ครั้ง/นาที และกดลึกอย่างน้อย 5–6 ซม. พร้อมปล่อยคืนตัวสุด เพื่อให้มีเลือดไปเลี้ยงสมองและหัวใจอย่างมีประสิทธิภาพ',
  },
  {
    id: 2,
    question: 'สัดส่วนมาตรฐานระหว่างการกดหน้าอกและการช่วยหายใจ (Chest Compressions to Breaths) คือเท่าใด?',
    options: ['15 : 2', '30 : 2', '20 : 1', '50 : 5'],
    correctIndex: 1,
    explanation:
      'สัดส่วนการช่วยชีวิตขั้นพื้นฐานในผู้ใหญ่คือ กดหน้าอก 30 ครั้ง สลับกับการช่วยหายใจ 2 ครั้ง หรือหากไม่ได้ผ่านการฝึกช่วยหายใจ ให้ทำ Hands-Only CPR กดหน้าอกต่อเนื่อง 100-120 ครั้ง/นาที',
  },
  {
    id: 3,
    question: 'ในหลักการประเมินผู้บาดเจ็บฉุกเฉิน GRXABCDE ตัวอักษร "X" หมายถึงสิ่งใดและต้องทำเมื่อใด?',
    options: [
      'X-Ray ต้องพาส่งเอกซเรย์ทันที',
      'eXsanguinating Hemorrhage การตรวจและห้ามเลือดที่ไหลพุ่งรุนแรงทันทีก่อนตรวจขั้นต่อไป',
      'External Examination การตรวจแผลภายนอกร่างกาย',
      'Extra Oxygen การให้ออกซิเจนปริมาณสูง',
    ],
    correctIndex: 1,
    explanation:
      'ตัว X (eXsanguinating Hemorrhage) หมายถึงภาวะเลือดออกปริมาณมากจนถึงแก่ชีวิต (เช่น หลอดเลือดแดงใหญ่ฉีกขาด) ต้องรีบห้ามเลือดด้วยขันชะเนาะ (Tourniquet) หรือกดแผลโดยตรงทันที เพื่อป้องกันภาวะช็อก',
  },
  {
    id: 4,
    question: 'ก่อนที่ผู้ช่วยเหลือจะกดปุ่มช็อกไฟฟ้า (Shock) ของเครื่อง AED กฎความปลอดภัยที่สำคัญที่สุดคืออะไร?',
    options: [
      'ต้องจับมือผู้ป่วยไว้เพื่อให้กำลังใจ',
      'ต้องตะโกน "ฉันถอย คุณถอย ทุกคนถอย" และตรวจดูว่าไม่มีใครสัมผัสร่างกายผู้ป่วยเด็ดขาด',
      'ต้องรีบช่วยผายปอดทันทีขณะช็อก',
      'ต้องยกขาผู้ป่วยให้สูงขึ้น 30 องศา',
    ],
    correctIndex: 1,
    explanation:
      'เพื่อความปลอดภัยสูงสุดของผู้ช่วยเหลือ ต้องตะโกนเตือนรอบข้าง "ฉันถอย คุณถอย ทุกคนถอย" และกวาดสายตาดูไม่ให้ใครแตะต้องตัวผู้ป่วย เพราะกระแสไฟฟ้าอาจวิ่งเข้าสู่ผู้ช่วยเหลือทำให้หัวใจหยุดเต้นได้',
  },
  {
    id: 5,
    question: 'หมายเลขโทรศัพท์สายด่วนการแพทย์ฉุกเฉินของประเทศไทยที่โทรฟรีตลอด 24 ชั่วโมง คือเบอร์ใด?',
    options: ['191', '199', '1669', '1155'],
    correctIndex: 2,
    explanation:
      'สายด่วน 1669 คือศูนย์รับแจ้งเหตุและสั่งการการแพทย์ฉุกเฉิน (สพฉ.) ประจำแต่ละจังหวัด ให้บริการรับแจ้งเหตุและส่งรถพยาบาลกู้ชีพฉุกเฉินตลอด 24 ชั่วโมงโดยไม่มีค่าใช้จ่าย',
  },
];

export const QuizModal: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([null, null, null, null, null]);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [showResult, setShowResult] = useState<boolean>(false);

  const currentQ = QUIZ_DATA[currentQuestionIndex];
  const selectedOption = selectedAnswers[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isSubmitted) return;
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = index;
    setSelectedAnswers(newAnswers);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsSubmitted(false);
    } else {
      // Calculate score and fire confetti
      const score = calculateScore();
      if (score >= 4) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
      }
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((acc, ans, idx) => {
      return ans === QUIZ_DATA[idx].correctIndex ? acc! + 1 : acc;
    }, 0) || 0;
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([null, null, null, null, null]);
    setIsSubmitted(false);
    setShowResult(false);
  };

  const score = calculateScore();

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange-100 text-brand-orange-600">
            <Award className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange-600">
              Interactive Knowledge Check
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              แบบทดสอบความรู้การกู้ชีพและปฐมพยาบาล
            </h3>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>เริ่มใหม่</span>
        </button>
      </div>

      {!showResult ? (
        <div className="mt-6">
          {/* Progress Tracker */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>คำถามข้อที่ {currentQuestionIndex + 1} จาก {QUIZ_DATA.length} ข้อ</span>
            <span>
              ตอบถูกแล้ว: <strong className="text-emerald-600">{score}</strong> ข้อ
            </span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className="h-full bg-gradient-to-r from-brand-orange-500 to-brand-blue-600 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / QUIZ_DATA.length) * 100}%` }}
            />
          </div>

          {/* Question Text */}
          <div className="mt-6 rounded-2xl bg-slate-50/80 p-5 border border-slate-200/80">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed">
              {currentQ.question}
            </h4>
          </div>

          {/* Options */}
          <div className="mt-4 space-y-2.5">
            {currentQ.options.map((opt, optIdx) => {
              const isChosen = selectedOption === optIdx;
              const isCorrect = optIdx === currentQ.correctIndex;

              let btnStyle = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-800';
              if (isSubmitted) {
                if (isCorrect) {
                  btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold ring-2 ring-emerald-300';
                } else if (isChosen && !isCorrect) {
                  btnStyle = 'border-red-400 bg-red-50 text-red-900 ring-2 ring-red-200';
                } else {
                  btnStyle = 'border-slate-200 bg-slate-50/50 text-slate-400 opacity-60';
                }
              } else if (isChosen) {
                btnStyle = 'border-brand-orange-500 bg-brand-orange-50/80 text-brand-orange-950 font-semibold ring-2 ring-brand-orange-300';
              }

              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx)}
                  disabled={isSubmitted}
                  className={`w-full flex items-center justify-between rounded-xl border p-4 text-left text-sm transition-all duration-150 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        isChosen
                          ? 'bg-brand-orange-600 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isSubmitted && isCorrect && (
                    <CheckCircle className="h-5 w-5 shrink-0 text-emerald-600" />
                  )}
                  {isSubmitted && isChosen && !isCorrect && (
                    <XCircle className="h-5 w-5 shrink-0 text-red-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when submitted */}
          {isSubmitted && (
            <div
              className={`mt-5 rounded-2xl p-4 text-xs sm:text-sm border transition-all ${
                selectedOption === currentQ.correctIndex
                  ? 'border-emerald-200 bg-emerald-50/80 text-emerald-900'
                  : 'border-brand-orange-200 bg-orange-50/80 text-slate-800'
              }`}
            >
              <div className="flex items-center gap-2 font-bold mb-1">
                <HelpCircle className="h-4 w-4 text-brand-orange-600" />
                <span>คำอธิบายทางการแพทย์:</span>
              </div>
              <p className="leading-relaxed">{currentQ.explanation}</p>
            </div>
          )}

          {/* Navigation & Submit Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            {!isSubmitted ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={selectedOption === null}
                className="rounded-xl bg-brand-orange-600 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-orange-500 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ยืนยันคำตอบ
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex items-center gap-2 rounded-xl bg-brand-blue-700 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-brand-blue-600"
              >
                <span>{currentQuestionIndex < QUIZ_DATA.length - 1 ? 'ข้อถัดไป' : 'ดูคะแนนสรุป'}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Result Summary Screen */
        <div className="mt-8 flex flex-col items-center text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
            <Award className="h-12 w-12" />
          </div>

          <h4 className="mt-4 text-2xl font-black text-slate-900">
            ยินดีด้วย! คุณทำแบบทดสอบเสร็จสิ้น
          </h4>
          <p className="mt-1 text-sm text-slate-600">
            คุณได้คะแนนการช่วยชีวิตฉุกเฉิน:
          </p>

          <div className="mt-4 rounded-3xl bg-gradient-to-r from-brand-orange-500 to-brand-blue-600 p-1 shadow-lg">
            <div className="rounded-[22px] bg-white px-8 py-4">
              <span className="text-4xl sm:text-5xl font-black text-slate-900">
                {score}
              </span>
              <span className="text-xl font-bold text-slate-500"> / {QUIZ_DATA.length} คะแนน</span>
            </div>
          </div>

          <p className="mt-4 max-w-md text-sm text-slate-700 leading-relaxed font-medium">
            {score >= 4
              ? '🌟 ยอดเยี่ยมมาก! คุณมีความรู้ความเข้าใจเรื่องการช่วยชีวิต CPR, การประเมิน และการใช้เครื่อง AED ในระดับพร้อมปฏิบัติจริง!'
              : '👍 เก่งมากครับ! ลองทบทวนเนื้อหาในหน้า CPR, GRXABCDE และ AED เพิ่มเติม เพื่อความมั่นใจเต็มร้อยเมื่อเกิดเหตุจริง'}
          </p>

          <button
            onClick={handleReset}
            className="mt-6 flex items-center gap-2 rounded-2xl bg-brand-orange-600 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-brand-orange-500 active:scale-95"
          >
            <RotateCcw className="h-4 w-4" />
            <span>ทำแบบทดสอบอีกครั้ง</span>
          </button>
        </div>
      )}
    </div>
  );
};
