'use client';

import * as Icons from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  // @ts-ignore
  const IconComponent = Icons[name] || Icons.BookOpen;
  return <IconComponent className={className} />;
}