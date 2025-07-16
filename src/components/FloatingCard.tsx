import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingCard = ({ children, className, delay = 0 }: FloatingCardProps) => {
  return (
    <div
      className={cn(
        "hover-lift float pulse-glow bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl p-6 transition-all duration-300",
        className
      )}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default FloatingCard;