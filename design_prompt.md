# Project Brief: Personal Academic Hub (Dosen Manajemen)

## 1. Project Overview
- **Client:** Dosen Program Studi Manajemen.
- **Goal:** Membangun website pribadi sebagai pusat pembelajaran digital (video & materi kuliah) yang profesional, minimalis, dan mudah dikelola secara mandiri oleh dosen.
- **Tone & Style:** "Modern Executive Masterclass" — Profesional, berwibawa, bersih, dan berfokus pada konten.
- **Priority:** Mobile-first optimization (mayoritas audiens adalah mahasiswa).

## 2. Tech Stack Requirements
- **Framework:** Next.js 14+ (App Router).
- **Styling:** Tailwind CSS.
- **UI Components:** Shadcn UI (Radix UI).
- **Icons:** Lucide React.
- **CMS:** Sanity.io (Headless CMS untuk manajemen video dan dokumen).
- **Hosting:** Vercel (Serverless).
- **Video Hosting:** YouTube Embed (unlisted/public).

## 3. Design System
- **Typography:**
  - Headings: Serif Font (e.g., 'Merriweather' or 'Playfair Display') untuk kesan akademis.
  - Body/UI: Sans-Serif (e.g., 'Inter' or 'Geist') untuk keterbacaan tinggi.
- **Color Palette:**
  - Primary: Deep Navy (#0f172a) atau Charcoal Grey untuk kesan profesional.
  - Accent: Muted Gold atau Royal Blue untuk elemen interaktif/CTA.
  - Background: Clean White (#ffffff) atau sangat sedikit Off-White (#fafafa).
- **Layout:** Minimalis dengan whitespace yang luas agar mahasiswa fokus pada materi.

## 4. Information Architecture (Sitemap)
### A. Landing Page (Home)
- **Hero Section:** Foto profil profesional dosen, nama lengkap + gelar, dan tagline singkat.
- **Quick Links:** Akses cepat ke materi terbaru atau video terpopuler.
- **About Brief:** Ringkasan singkat profil akademik.

### B. Video Library (Video Pembelajaran)
- **Grid Layout:** Card-based UI menampilkan thumbnail YouTube, judul materi, dan durasi.
- **Detail Page:** Video player (YouTube embed), deskripsi materi, dan timestamps (jika ada).

### C. Resource Center (Materi & Dokumen)
- **Category Filter:** Filter berdasarkan mata kuliah atau tipe file (PDF/PPT).
- **Download List:** Tabel atau list minimalis dengan tombol download yang jelas dan ikon format file.

### D. Profile / Contact
- **Curriculum Vitae:** Riwayat singkat pendidikan & pengajaran.
- **Contact Info:** Email akademik dan link media sosial profesional (LinkedIn).

## 5. Data Schema (Sanity.io)
Agent harus menyiapkan skema berikut:
- **`lecture` (Mata Kuliah):** title, description, code.
- **`video`:** title, youtubeUrl, description, relatedLecture (reference), thumbnail.
- **`document`:** title, file (file upload), category (PDF/PPT), relatedLecture (reference).

## 6. Development Instructions for Agent
1. **Initialize Project:** Setup Next.js dengan Tailwind dan Shadcn UI.
2. **Component Scaffolding:** - Buat `Header` transparan/sticky.
   - Buat `VideoCard` menggunakan Shadcn `Card`.
   - Buat `DocumentList` dengan hover effect yang halus.
3. **Responsive Design:** Pastikan navigasi menggunakan `Sheet` (drawer) pada tampilan mobile.
4. **Integration:** Siapkan folder `lib/sanity` untuk fetching data.
5. **Performance:** Gunakan `next/image` untuk foto profil dan pastikan layout shift minimal (LCP optimization).

## 7. Constraint & Scope
- Hindari penggunaan framework animasi berat (Framer Motion cukup untuk transisi sederhana).
- Fokus pada fungsionalitas utama: Mahasiswa bisa menonton video dan mengunduh PDF dalam maksimal 3 kali klik dari Home.