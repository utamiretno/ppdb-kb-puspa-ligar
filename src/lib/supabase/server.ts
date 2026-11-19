import "server-only";
import { createClient } from "@supabase/supabase-js";

/**
 * Klien basis data server sesuai SDD.
 * Pemanggil wajib memeriksa sesi, peran, dan kepemilikan data.
 * Service role memiliki akses istimewa dan tidak dikirim ke browser.
 */
export function createServerDatabaseClient() {
  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error("SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY belum diisi.");
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false,
    },
  });
}
