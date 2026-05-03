type ClassValue = string | false | null | undefined;

/**
 * Lightweight className join helper.
 */
export function cn(...inputs: ClassValue[]) {
  return inputs.filter(Boolean).join(" ");
}
