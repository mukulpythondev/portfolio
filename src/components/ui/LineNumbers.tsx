
import React from 'react';

interface LineNumbersProps {
  count: number;
  startFrom?: number;
}

const LineNumbers: React.FC<LineNumbersProps> = ({ count, startFrom = 1 }) => {
  return (
    <div className="line-numbers text-xs text-gray-500 select-none pr-4 text-right font-mono">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="line-number">
          {startFrom + i}
        </div>
      ))}
    </div>
  );
};

export default LineNumbers;
