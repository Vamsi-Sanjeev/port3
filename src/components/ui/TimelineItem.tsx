import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
  isLeft?: boolean;
  icon: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  isLast = false,
  isLeft = true,
  icon
}) => {
  return (
    <div className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} mb-12`}>
      <div className={`hidden md:block w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
        {isLeft && (
          <div className="transform transition-all duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{title}</h3>
            <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{date}</p>
            <p className="text-[var(--color-muted)]">{description}</p>
          </div>
        )}
        {!isLeft && <div className="h-6"></div>}
      </div>

      <div className="relative flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] flex items-center justify-center z-10 shadow-lg transform transition-all duration-500 hover:scale-110">
          <div className="w-14 h-14 rounded-full bg-[var(--color-surface)] flex items-center justify-center">
            {React.cloneElement(icon as React.ReactElement, {
              size: 24,
              className: "text-[var(--color-primary)]"
            })}
          </div>
        </div>
        {!isLast && (
          <div className="h-full w-1 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] absolute top-16 -bottom-12 opacity-30"></div>
        )}
      </div>

      <div className={`w-full md:w-5/12 ${isLeft ? 'pl-6 md:pl-8' : 'pr-6 md:pr-8 text-right'}`}>
        <div className="md:hidden mb-3">
          <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
          <p className="text-sm text-[var(--color-primary)] font-medium">{date}</p>
        </div>
        
        {!isLeft && (
          <div className="hidden md:block transform transition-all duration-500 hover:scale-105">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{title}</h3>
            <p className="text-sm text-[var(--color-primary)] font-medium mb-2">{date}</p>
            <p className="text-[var(--color-muted)]">{description}</p>
          </div>
        )}
        
        <div className="md:hidden">
          <p className="text-[var(--color-muted)]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;