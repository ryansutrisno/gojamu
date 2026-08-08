/**
 * WhatsApp link utility
 *
 * Build WA links from env variable instead of hardcoded numbers.
 * Supports Meta Pixel tracking on click via global handler in MetaPixel component.
 */

/** Get WhatsApp number from environment */
export function getWA_NUMBER(): string {
  const num = import.meta.env.PUBLIC_WHATSAPP_NUMBER;
  if (!num) {
    console.warn('[WA] PUBLIC_WHATSAPP_NUMBER is not set in environment');
    return '628562926377'; // fallback
  }
  return num;
}

/** Build full WhatsApp URL */
export function buildWALink(message?: string): string {
  const base = `https://wa.me/${getWA_NUMBER()}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}
