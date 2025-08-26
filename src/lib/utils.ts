import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function nameFormatter(name: string) {
  return name.trim().replace(/\s+/g, " ");
}

export function whatsappMessageFormatter(message: string) {
  return encodeURIComponent(message);
}

export function sendWhatsappMessage(phoneNumber: string, message: string) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessageFormatter(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}

export function getWhatsappMessageUrl(phoneNumber: string, message: string) {
  return `https://wa.me/${phoneNumber}?text=${whatsappMessageFormatter(message)}`;
}

export function getEmailUrl(email: string, subject?: string, body?: string) {
  const emailSubject = subject ?? "Permintaan Informasi Layanan Anda";
  const emailBody =
    body ??
    "Halo,\n\nSaya tertarik untuk mengetahui lebih lanjut tentang layanan Anda. Mohon berikan informasi tambahan.\n\nTerima kasih.";
  return `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
}

export function sendEmailMessage(
  email: string,
  subject: string,
  message: string,
) {
  const emailUrl = getEmailUrl(email, subject, message);
  window.open(emailUrl, "_blank", "noopener,noreferrer");
}
