// Fase 2, Tugas 7 (PERBAIKAN)
// File: utils/supabaseClient.js
// Tujuan: Memperbaiki nama fungsi yang salah.

// KESALAHAN SAYA (GEMINI) ADA DI BARIS INI:
// import { createBrowserClient } from '@supabase/auth-helpers-nextjs';
// SEHARUSNYA:
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

// Buat klien Supabase untuk sisi browser (client-side)
// Ini akan otomatis mengambil kunci API dari file .env.local (di lokal)
// atau dari Environment Variables di Vercel (saat online).

// KESALAHAN SAYA (GEMINI) JUGA ADA DI BARIS INI:
// export const supabase = createBrowserClient(
// SEHARUSNYA:
export const supabase = createClientComponentClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);