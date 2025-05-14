
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper function for RTL-aware margin/padding classes
export function rtlFlip(ltrClass: string, rtlClass: string, isRTL: boolean): string {
  return isRTL ? rtlClass : ltrClass
}

// Utility for conditional RTL styling
export function rtlSafe(className: string, isRTL: boolean): string {
  // Convert common directional classes for RTL
  if (!isRTL) return className
  
  const mappings: Record<string, string> = {
    'mr-': 'ml-',
    'ml-': 'mr-',
    'pr-': 'pl-',
    'pl-': 'pr-',
    'right-': 'left-',
    'left-': 'right-',
    'text-left': 'text-right',
    'text-right': 'text-left',
  }
  
  // Check if the class contains any directional properties
  for (const [ltr, rtl] of Object.entries(mappings)) {
    if (className.includes(ltr)) {
      return className.replace(new RegExp(ltr, 'g'), rtl)
    }
    if (className.includes(rtl)) {
      return className.replace(new RegExp(rtl, 'g'), ltr)
    }
  }
  
  return className
}
