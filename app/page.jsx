// Fase 2, Tugas 7
// File: app/page.jsx
// Tujuan: Halaman Login V.2.0 (Pengganti Login.html)

"use client"; // Menandakan ini adalah komponen interaktif (bisa diklik, dll)

import { useState } from 'react';
import { supabase } from '@/utils/supabaseClient'; // Impor klien Supabase kita

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  // Fungsi yang dipanggil saat tombol "Login" diklik
  const handleLogin = async (e) => {
    e.preventDefault(); // Mencegah form refresh halaman
    setLoading(true);
    setError(null);
    setMessage(null);

    // Ini adalah pengganti `doLogin()` dari Code.gs kita.
    // Kita menggunakan Supabase Auth.
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setError(error.message);
      // Ganti pesan error default Supabase agar lebih ramah
      if (error.message.includes("Invalid login credentials")) {
        setError("Email atau password yang Anda masukkan salah.");
      } else {
        setError(error.message);
      }
    } else {
      // Jika berhasil, Supabase akan menyimpan sesi di cookie.
      // Kita tidak perlu melakukan apa-apa lagi, tapi kita akan belajar
      // cara mengarahkan (redirect) pengguna di tugas berikutnya.
      setMessage("Login berhasil! Mengarahkan...");
      // Untuk saat ini, kita refresh halaman saja untuk membuktikan
      window.location.reload(); 
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        
        {/* Logo dan Judul - Mirip V.1.3 */}
        <div className="text-center">
          <img
            src="https://drive.google.com/thumbnail?id=1Jm_oLrhJE0SoOxozameAvYkSiswlxITu"
            alt="Logo Kemenlu"
            className="w-32 mx-auto mb-4" 
          />
          <h2 className="text-xl font-bold text-gray-800">ADMINISTRATION TOOLS</h2>
          <p className="text-sm text-gray-500">
            DIREKTORAT HUKUM DAN PERJANJIAN SOSIAL BUDAYA
          </p>
        </div>

        {/* Form Login (Menggunakan Tailwind CSS) */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label 
              htmlFor="email" 
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email (Username)
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400"
          >
            {loading ? 'Memproses...' : 'Login'}
          </button>

          {/* Menampilkan pesan error atau sukses */}
          {error && (
            <div className="p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-md">
              {error}
            </div>
          )}
          {message && (
             <div className="p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded-md">
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}