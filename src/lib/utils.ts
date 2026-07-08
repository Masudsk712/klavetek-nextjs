/**
 * Global utility functions
 * Klavetek Green Blocks & Tiles Pvt. Ltd.
 */

export const isClient = typeof window !== "undefined";

/**
 * Delay execution
 */
export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Clamp number
 */
export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

/**
 * Random number
 */
export function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Random ID
 */
export function generateId(length = 10) {
  return Math.random().toString(36).substring(2, length + 2);
}

/**
 * Capitalize first letter
 */
export function capitalize(text: string) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Format number
 */
export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

/**
 * Format currency
 */
export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Format date
 */
export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Smooth scroll
 */
export function scrollToSection(id: string) {
  if (!isClient) return;

  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * Copy text
 */
export async function copyToClipboard(text: string) {
  if (!navigator.clipboard) return false;

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Debounce
 */
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay = 300
) {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

/**
 * Throttle
 */
export function throttle<T extends (...args: any[]) => void>(
  callback: T,
  limit = 100
) {
  let waiting = false;

  return (...args: Parameters<T>) => {
    if (waiting) return;

    callback(...args);

    waiting = true;

    setTimeout(() => {
      waiting = false;
    }, limit);
  };
}

/**
 * Get initials
 */
export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();
}

/**
 * Sleep helper
 */
export async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Check mobile
 */
export function isMobile() {
  if (!isClient) return false;

  return window.innerWidth < 768;
}

/**
 * Generate random gradient
 */
export function randomGradient() {
  const gradients = [
    "from-green-500 to-emerald-600",
    "from-lime-500 to-green-600",
    "from-emerald-500 to-teal-600",
    "from-green-600 to-lime-500",
  ];

  return gradients[Math.floor(Math.random() * gradients.length)];
}

/**
 * Remove duplicate objects
 */
export function uniqueBy<T>(
  array: T[],
  key: keyof T
): T[] {
  return Array.from(
    new Map(array.map((item) => [item[key], item])).values()
  );
}