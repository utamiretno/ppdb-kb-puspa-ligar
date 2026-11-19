export type UserRole = "orang_tua" | "admin" | "kepala_sekolah";
export type AccountStatus = "aktif" | "nonaktif";

export const registrationStatusLabels = [
  "Data Terkirim",
  "Sedang Diverifikasi",
  "Perlu Perbaikan",
  "Diterima",
  "Ditolak",
] as const;

export type RegistrationStatusLabel = (typeof registrationStatusLabels)[number];
