export const SESSION_IDLE_TIMEOUT_SECONDS = 15 * 60;

export const DOCUMENT_LIMITS = {
  kartuKeluarga: { maxBytes: 2 * 1024 * 1024, mimeTypes: ["application/pdf", "image/jpeg"] },
  aktaKelahiran: { maxBytes: 2 * 1024 * 1024, mimeTypes: ["application/pdf", "image/jpeg"] },
  pasFoto: { maxBytes: 1024 * 1024, mimeTypes: ["image/jpeg", "image/png"] },
} as const;
