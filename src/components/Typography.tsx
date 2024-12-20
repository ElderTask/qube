import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
}

export function Title({ children, className = '' }: TextProps) {
  return (
    <h1 className={`text-5xl md:text-7xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] ${className}`}>
      {children}
    </h1>
  );
}

export function Subtitle({ children, className = '' }: TextProps) {
  return (
    <p className={`text-xl md:text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${className}`}>
      {children}
    </p>
  );
}

export function CardTitle({ children, className = '' }: TextProps) {
  return (
    <h3 className={`text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] ${className}`}>
      {children}
    </h3>
  );
}

export function CardText({ children, className = '' }: TextProps) {
  return (
    <p className={`text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] ${className}`}>
      {children}
    </p>
  );
}