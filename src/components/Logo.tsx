import React from 'react';
import { Bug } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Bug className="w-8 h-8" />
      <span className="text-xl font-bold">CodeAnt AI</span>
    </div>
  );
}