# Personal Academic Hub & Digital Learning Portal

A premium, mobile-first web application designed specifically for University Lecturers and Academics to showcase their professional portfolio and manage a centralized digital classroom for their students.

Built with **Next.js 14+ (App Router)**, **Tailwind CSS v4**, and **Shadcn UI**.

## 🌟 Key Features

*   **Premium Personal Branding**: A high-end portfolio layout featuring a dynamic Hero section, vertical timeline for Education & Experience, and a structured Areas of Expertise grid.
*   **Digital Course Catalog**: A centralized `/materi` hub for students to find all course materials, beautifully categorized into Video Lectures and Document Downloads (PDF/PPT). Includes search and filtering capabilities.
*   **The Digital Classroom**: An immersive `/materi/[slug]` layout featuring responsive 16:9 YouTube video embeds, detailed prose descriptions, and highly prominent, touch-friendly download buttons.
*   **Mobile-First & Touch Optimized**: Engineered from the ground up for smartphone users, ensuring students can navigate courses and download materials flawlessly on the go.
*   **Dark Mode Support**: Seamless Light/Dark/System theme toggling built with `next-themes`.

## 🛠️ Tech Stack

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components**: [Shadcn UI](https://ui.shadcn.com/) (Radix UI)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Theming**: `next-themes`

## 🚀 Getting Started

### Prerequisites

Ensure you have Node.js (v18.17.0 or higher) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HisyamAlammar/Webprofiledosen.git
   cd Webprofiledosen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Architecture

The application utilizes a streamlined 3-layer routing system:

*   `/` : The Home Page (Lecturer's Professional Profile, CV, and Portfolio)
*   `/materi` : The Course Catalog (List of all available Videos and Documents with filters)
*   `/materi/[slug]` : The Digital Classroom (Video Player, Course Details, and Download Links)

## 🎨 Design System

**"Modern Executive Masterclass"**
*   **Typography**: `Merriweather` (Headings) for academic authority, `Inter` (Body) for optimal readability.
*   **Color Palette**: Deep Slate/Navy background elements contrasted with clean whites, accented by Emerald Green (`#047857`) and Amber Gold (`#d97706`) for a premium financial/business aesthetic.

## 📄 License

This project is licensed under the MIT License.
