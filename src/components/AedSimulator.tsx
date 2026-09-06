import React, { useState } from 'react';
import { Power, Activity, Zap, CheckCircle2, RotateCcw, AlertTriangle } from 'lucide-react';

type AedStep = 1 | 2 | 3 | 4;

export const AedSimulator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AedStep>(1);
  const [isPowered, setIsPowered] = useState<boolean>(false);
  const [pad1Attached, setPad1Attached] = useState<boolean>(false); // Right upper chest
  const [pad2Attached, setPad2Attached] = useState<boolean>(false); // Left lower ribs
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [shockDelivered, setShockDelivered] = useState<boolean>(false);
  const [simulationVoice, setSimulationVoice] = useState<string>('กดปุ่มเปิดเครื่องเพื่อเริ่มต้น');

  // Play audio beep
  const playBeep = (freq = 880, duration = 0.2) => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context fallback
    }
  };

  const handlePowerOn = () => {
    setIsPowered(true);
    setCurrentStep(2);
    setSimulationVoice('ติดแผ่นขั้วไฟฟ้ารองหน้าอกผู้ป่วย ตามรูปที่แสดง');
    playBeep(523.25, 0.3);
  };

  const handleAttachPad = (padNumber: 1 | 2) => {
    if (padNumber === 1) {
      setPad1Attached(true);
      playBeep(659.25, 0.15);
      if (pad2Attached) {
        advanceToAnalysis();
      }
    } else {
      setPad2Attached(true);
      playBeep(659.25, 0.15);
      if (pad1Attached) {
        advanceToAnalysis();
      }
    }
  };

  const advanceToAnalysis = () => {
    setCurrentStep(3);
    setIsAnalyzing(true);
    setSimulationVoice('กำลังวิเคราะห์คลื่นไฟฟ้าหัวใจ... "ห้ามแตะต้องตัวผู้ป่วย!"');
    playBeep(440, 0.4);

    setTimeout(() => {
      setIsAnalyzing(false);
      setCurrentStep(4);
      setSimulationVoice('แนะนำให้ทำการช็อก! กำลังชาร์จพลังงาน... "ทุกคนถอย! ฉันถอย คุณถอย"');
      playBeep(880, 0.5);
    }, 2800);
  };

  const handleDeliverShock = () => {
    playBeep(1200, 0.6);
    setShockDelivered(true);
    setSimulationVoice('ทำการช็อกไฟฟ้าเรียบร้อยแล้ว! "ให้เริ่มทำ CPR กดหน้าอกต่อทันทีเป็นเวลา 2 นาที"');
  };

  const resetSimulator = () => {
    setIsPowered(false);
    setCurrentStep(1);
    setPad1Attached(false);
    setPad2Attached(false);
    setIsAnalyzing(false);
    setShockDelivered(false);
    setSimulationVoice('กดปุ่มเปิดเครื่องเพื่อเริ่มต้น');
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-brand-blue-200 bg-gradient-to-b from-white via-sky-50/20 to-brand-blue-50/40 p-6 sm:p-8 shadow-xl">
      {/* Glow backgrounds */}
      <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-brand-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-brand-orange-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-blue-300 bg-brand-blue-50 px-3.5 py-1 text-xs font-semibold text-brand-blue-800">
            <Activity className="h-3.5 w-3.5 text-brand-blue-600 animate-pulse" />
            <span>Interactive AED Virtual Trainer (จำลองการใช้งาน 4 ขั้นตอน)</span>
          </div>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            เครื่องจำลองขั้นตอนการใช้งานเครื่องกระตุกหัวใจไฟฟ้า AED
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            จำลองสถานการณ์จริงตั้งแต่เปิดเครื่อง แปะแผ่นขั้ว วิเคราะห์ และปล่อยกระแสไฟฟ้าช็อก
          </p>
        </div>

        <button
          onClick={resetSimulator}
          className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:scale-95 shadow-sm"
        >
          <RotateCcw className="h-4 w-4 text-slate-500" />
          <span>เริ่มจำลองใหม่</span>
        </button>
      </div>

      {/* Steps Progression Pills */}
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[
          { num: 1, title: '1. เปิดเครื่อง', desc: 'Power On' },
          { num: 2, title: '2. แปะแผ่นขั้ว', desc: 'Attach Pads' },
          { num: 3, title: '3. วิเคราะห์คลื่น', desc: 'Analyzing' },
          { num: 4, title: '4. สั่งช็อก/CPR', desc: 'Shock & CPR' },
        ].map((s) => (
          <div
            key={s.num}
            className={`flex flex-col rounded-xl p-3 border transition-all ${
              currentStep === s.num
                ? 'border-brand-orange-500 bg-brand-orange-50/80 shadow-md ring-2 ring-brand-orange-400/30'
                : currentStep > s.num
                ? 'border-emerald-300 bg-emerald-50/60 text-emerald-800'
                : 'border-slate-200 bg-white/70 text-slate-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold ${currentStep === s.num ? 'text-brand-orange-700' : ''}`}>
                {s.title}
              </span>
              {currentStep > s.num && <CheckCircle2 className="h-4 w-4 text-emerald-600" />}
            </div>
            <span className="text-[11px] text-slate-500 mt-0.5">{s.desc}</span>
          </div>
        ))}
      </div>

      {/* Main Simulation Workspace */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive AED Device Body */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-md rounded-3xl border-4 border-amber-400 bg-gradient-to-b from-amber-100 via-amber-50 to-amber-200 p-6 shadow-2xl relative">
            {/* AED Brand Label */}
            <div className="flex items-center justify-between border-b-2 border-amber-300 pb-3">
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded-full bg-red-600 animate-ping" />
                <span className="text-sm font-black tracking-widest text-slate-800 uppercase">AED TRAINER 2026</span>
              </div>
              <span className="rounded-md bg-red-600 px-2.5 py-0.5 text-[11px] font-bold text-white uppercase tracking-wider">
                สพฉ. 1669
              </span>
            </div>

            {/* LCD Screen Display */}
            <div className="mt-4 rounded-2xl border-2 border-slate-700 bg-slate-900 p-4 font-mono text-center shadow-inner">
              <div className="text-[10px] text-emerald-400/80 tracking-widest">
                {isPowered ? '● SYSTEM ACTIVE' : '○ STANDBY'}
              </div>
              <div className="my-2 min-h-[3.5rem] flex items-center justify-center">
                <p className="text-sm sm:text-base font-bold text-emerald-300 transition-all leading-relaxed">
                  {isPowered ? simulationVoice : '--- เครื่องปิดอยู่ (กดปุ่มเขียว) ---'}
                </p>
              </div>
              {isAnalyzing && (
                <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 animate-pulse">
                  <Activity className="h-4 w-4" />
                  <span>กำลังตรวจจับคลื่นไฟฟ้าหัวใจ (ห้ามสัมผัสผู้ป่วย)...</span>
                </div>
              )}
            </div>

            {/* Control Panel Buttons */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              {/* Power Button */}
              <button
                onClick={handlePowerOn}
                disabled={isPowered}
                className={`flex flex-col items-center justify-center gap-1 rounded-2xl p-4 font-bold text-white shadow-lg transition-all active:scale-95 ${
                  isPowered
                    ? 'bg-emerald-600 opacity-60 cursor-not-allowed'
                    : 'bg-emerald-600 hover:bg-emerald-500 ring-4 ring-emerald-300 animate-bounce'
                }`}
              >
                <Power className="h-7 w-7" />
                <span className="text-xs">1. กดเปิดเครื่อง (ON)</span>
              </button>

              {/* Shock Button */}
              <button
                onClick={handleDeliverShock}
                disabled={currentStep !== 4 || shockDelivered}
                className={`flex flex-col items-center justify-center gap-1 rounded-2xl p-4 font-bold text-white shadow-lg transition-all active:scale-95 ${
                  currentStep === 4 && !shockDelivered
                    ? 'bg-red-600 hover:bg-red-500 ring-4 ring-red-400 animate-pulse shadow-red-500/50'
                    : 'bg-slate-400 opacity-40 cursor-not-allowed'
                }`}
              >
                <Zap className="h-7 w-7 fill-white" />
                <span className="text-xs">
                  {shockDelivered ? '✓ ปล่อยช็อกแล้ว' : '4. กดปุ่มช็อก (SHOCK)'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Interactive Body Placement Simulation */}
        <div className="lg:col-span-6 flex flex-col items-center">
          <div className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-sm text-center">
            <h4 className="text-sm font-bold text-slate-800">
              จำลองตำแหน่งแปะแผ่นนำไฟฟ้า (Defibrillation Pads)
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              คลิกที่ปุ่มเพื่อจำลองการแปะแผ่นขั้วไฟฟ้าลงบนตำแหน่งที่ถูกต้อง
            </p>

            {/* Torso Diagram Silhouette */}
            <div className="relative mt-4 mx-auto h-64 w-52 rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 flex items-center justify-center overflow-hidden">
              <div className="text-[10px] text-slate-400 font-medium">รูปจำลองหน้าอกผู้ป่วย</div>

              {/* Pad 1: Right Upper Chest (ใต้ไหปลาร้าขวา) */}
              <button
                onClick={() => handleAttachPad(1)}
                disabled={!isPowered || pad1Attached}
                className={`absolute top-10 left-6 flex flex-col items-center justify-center rounded-xl p-2 text-[10px] font-bold transition-all shadow-md active:scale-90 ${
                  pad1Attached
                    ? 'bg-brand-blue-600 text-white ring-2 ring-brand-blue-400'
                    : isPowered && !pad1Attached
                    ? 'bg-brand-orange-500 text-white animate-pulse ring-2 ring-brand-orange-300 cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Zap className="h-4 w-4" />
                <span>แผ่น 1: ใต้ไหปลาร้าขวา</span>
                {pad1Attached && <span className="text-[9px] text-emerald-200">✓ แปะแล้ว</span>}
              </button>

              {/* Pad 2: Left Ribs / Below Nipple (ชายโครงซ้ายใต้ราวนม) */}
              <button
                onClick={() => handleAttachPad(2)}
                disabled={!isPowered || pad2Attached}
                className={`absolute bottom-12 right-6 flex flex-col items-center justify-center rounded-xl p-2 text-[10px] font-bold transition-all shadow-md active:scale-90 ${
                  pad2Attached
                    ? 'bg-brand-blue-600 text-white ring-2 ring-brand-blue-400'
                    : isPowered && !pad2Attached
                    ? 'bg-brand-orange-500 text-white animate-pulse ring-2 ring-brand-orange-300 cursor-pointer'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Zap className="h-4 w-4" />
                <span>แผ่น 2: ชายโครงซ้าย</span>
                {pad2Attached && <span className="text-[9px] text-emerald-200">✓ แปะแล้ว</span>}
              </button>
            </div>

            {/* Step Status Feedback */}
            <div className="mt-4 text-xs font-semibold">
              {currentStep === 1 && (
                <span className="text-slate-600">กดปุ่มสีเขียว (1. ON) เพื่อเปิดเครื่อง</span>
              )}
              {currentStep === 2 && (
                <span className="text-brand-orange-600 animate-pulse">
                  คลิกแปะแผ่นขั้วไฟฟ้าทั้ง 2 ตำแหน่งบนรูปหน้าอก
                </span>
              )}
              {currentStep === 3 && (
                <span className="text-amber-600 font-bold">
                  ⚠️ ผู้ช่วยเหลือทุกคน "ถอยห่างจากตัวผู้ป่วย" ห้ามสัมผัส!
                </span>
              )}
              {currentStep === 4 && !shockDelivered && (
                <span className="text-red-600 font-bold animate-pulse">
                  ⚡ ตะโกน "ฉันถอย คุณถอย ทุกคนถอย" แล้วกดปุ่มช็อก (4. SHOCK)
                </span>
              )}
              {shockDelivered && (
                <span className="text-emerald-700 font-bold">
                  🎉 สำเร็จ! ให้เริ่มทำ CPR กดหน้าอก 30:2 ต่อเนื่องทันที 2 นาที
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Safety Notice Callout */}
      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-300 bg-amber-50/70 p-4 text-xs sm:text-sm text-amber-900">
        <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600 mt-0.5" />
        <div>
          <strong>ข้อควรระวังสำคัญที่สุดในการใช้ AED:</strong>
          <ul className="mt-1 list-disc list-inside space-y-0.5 text-amber-800">
            <li>หากผู้ป่วยตัวเปียกน้ำ ต้องเช็ดหน้าอกให้แห้งสนิทและย้ายออกจากแอ่งน้ำก่อนแปะแผ่น</li>
            <li>ถ้ามีแผ่นแปะยา (Transdermal Patch) บริเวณหน้าอก ให้สวมถุงมือลอกแผ่นยาออกแล้วเช็ดคราบก่อน</li>
            <li>ห้ามสัมผัสตัวผู้ป่วยเด็ดขาดในขณะที่เครื่องกำลังวิเคราะห์คลื่นหัวใจ หรือขณะกดปุ่มช็อกไฟฟ้า</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
