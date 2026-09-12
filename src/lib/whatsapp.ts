export const WHATSAPP_NUMBER = "56982960453";

/**
 * Construye un link wa.me con mensaje precargado opcional.
 * Centralizado acá para que cambiar el número o el mensaje por
 * defecto no obligue a tocar cada componente que usa WhatsApp.
 */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}