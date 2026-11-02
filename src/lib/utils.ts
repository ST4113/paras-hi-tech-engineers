import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const API_BASE_URL =
  (import.meta.env.VITE_API_BASE_URL || "https://gangotri.parashitech.in/backend").replace(/\/+$/, "")

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getProductImageUrl(imagePath: string | null | undefined): string | undefined {
  if (!imagePath) return undefined
  if (/^https?:\/\//i.test(imagePath)) return imagePath

  return `${API_BASE_URL}/${imagePath.replace(/^\/+/, "")}`
}
