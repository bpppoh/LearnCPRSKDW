import React, { useRef } from 'react';

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  spotlightColor = 'rgba(234, 88, 12, 0.09)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 ${className}`}
      style={{
        // Radial spotlight overlay via CSS custom properties
        backgroundImage: `radial-gradient(400px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), ${spotlightColor}, transparent 75%)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};
