// Fase 2, Tugas 7
// File: app/layout.jsx
// Tujuan: File "template" utama yang membungkus semua halaman.
// Kita akan membersihkannya dari file default Next.js.

import './globals.css';

// Ini adalah metadata default untuk aplikasi kita
export const metadata = {
  title: 'HPSB Admin Tools V.2.0',
  description: 'Aplikasi Workload HPI Sosbud (V.2.0)',
};

// "children" adalah halaman-halaman kita (seperti page.jsx)
export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        {/*
          Di V.1.3, kita punya Navbar di setiap halaman.
          Di V.2.0, Navbar akan ada di sini, dan "children" akan berganti-ganti.
          Untuk saat ini, kita biarkan kosong agar halaman login tampil penuh.
        */}
        {children}
      </body>
    </html>
  );
}