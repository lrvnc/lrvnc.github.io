
import React from 'react';
import { cn } from '@/lib/utils';

type LogoPlaceholderProps = {
  name: string;
  className?: string;
};

const getInitials = (name: string) => {
  const words = name.replace(/of|the|university/gi, '').trim().split(' ');
  if (words.length > 1) {
    return words.filter(word => word.length > 0).map(word => word[0]).join('').substring(0, 3).toUpperCase();
  }
  return name.substring(0, 3).toUpperCase();
};

const LogoPlaceholder: React.FC<LogoPlaceholderProps> = ({ name, className }) => {
  const initials = getInitials(name);
  
  return (
    <div 
      title={name}
      className={cn(
        'flex-shrink-0 flex items-center justify-center bg-gray-200/10 border border-gray-200/20 rounded-md text-gray-300 font-bold hover:bg-gray-200/20 transition-colors',
        className
      )}>
      {initials}
    </div>
  );
};

export default LogoPlaceholder;
