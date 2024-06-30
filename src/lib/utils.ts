import { type ClassValue, clsx } from "clsx"
import localFont from 'next/font/local'
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const belyDisplayFont = localFont({
  src: [
    {
      path: '../../public/font/bely_display.otf',
      style: 'normal',
    },
  ],
})
