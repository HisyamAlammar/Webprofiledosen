import { defineType, defineField, defineArrayMember } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profil Dosen",
  type: "document",
  icon: () => "👨‍🏫",
  groups: [
    { name: "utama", title: "Utama", default: true },
    { name: "sosial", title: "Media Sosial" },
    { name: "statistik", title: "Statistik" },
    { name: "keahlian", title: "Keahlian" },
    { name: "riwayat", title: "Riwayat" },
  ],
  fields: [
    // ── GRUP: Utama ──────────────────────────────────────
    defineField({
      name: "name",
      title: "Nama Lengkap",
      type: "string",
      group: "utama",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Gelar Akademik",
      type: "string",
      group: "utama",
      description: "Contoh: S.E., M.M.",
    }),
    defineField({
      name: "avatar",
      title: "Foto Profil",
      type: "image",
      group: "utama",
      options: { hotspot: true },
      description:
        "Foto formal berukuran minimal 800x1000px. Gunakan fitur hotspot untuk mengatur area crop.",
    }),
    defineField({
      name: "bio",
      title: "Bio Singkat",
      type: "array",
      of: [{ type: "block" }],
      group: "utama",
      description:
        "Gunakan formatting (bold, italic, bullet) untuk menulis ringkasan profil akademik Anda.",
    }),

    // ── GRUP: Media Sosial ───────────────────────────────
    defineField({
      name: "email",
      title: "Email Akademik",
      type: "string",
      group: "sosial",
      validation: (rule) =>
        rule.regex(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          { name: "email", invert: false }
        ).error("Masukkan alamat email yang valid."),
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      group: "sosial",
    }),
    defineField({
      name: "googleScholar",
      title: "Google Scholar URL",
      type: "url",
      group: "sosial",
      description: "Link profil Google Scholar untuk publikasi akademik.",
    }),
    defineField({
      name: "researchGate",
      title: "ResearchGate URL",
      type: "url",
      group: "sosial",
    }),

    // ── GRUP: Statistik ──────────────────────────────────
    defineField({
      name: "yearsOfExperience",
      title: "Tahun Pengalaman",
      type: "string",
      group: "statistik",
      description: 'Contoh: "15+"',
    }),
    defineField({
      name: "studentsCount",
      title: "Jumlah Mahasiswa",
      type: "string",
      group: "statistik",
      description: 'Contoh: "5,000+"',
    }),
    defineField({
      name: "videosCount",
      title: "Jumlah Video",
      type: "string",
      group: "statistik",
    }),
    defineField({
      name: "caseStudiesCount",
      title: "Jumlah Studi Kasus",
      type: "string",
      group: "statistik",
    }),
    defineField({
      name: "awardsCount",
      title: "Jumlah Penghargaan",
      type: "string",
      group: "statistik",
    }),

    // ── GRUP: Keahlian ───────────────────────────────────
    defineField({
      name: "expertise",
      title: "Bidang Keahlian",
      type: "array",
      group: "keahlian",
      of: [
        defineArrayMember({
          type: "object",
          name: "expertiseItem",
          title: "Keahlian",
          fields: [
            defineField({
              name: "title",
              title: "Judul",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "description",
              title: "Deskripsi",
              type: "array",
              of: [{ type: "block" }],
            }),
            defineField({
              name: "icon",
              title: "Nama Icon (Lucide)",
              type: "string",
              description:
                "Nama komponen Lucide React, contoh: ShieldCheck, TrendingUp, Lightbulb",
            }),
          ],
          preview: {
            select: { title: "title", icon: "icon" },
            prepare({ title, icon }) {
              return { title: title || "Keahlian Baru", subtitle: icon ? `Icon: ${icon}` : "" };
            },
          },
        }),
      ],
    }),

    // ── GRUP: Riwayat ────────────────────────────────────
    defineField({
      name: "education",
      title: "Riwayat Pendidikan",
      type: "array",
      group: "riwayat",
      of: [
        defineArrayMember({
          type: "object",
          name: "educationItem",
          title: "Pendidikan",
          fields: [
            defineField({
              name: "degree",
              title: "Gelar / Jenjang",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "institution",
              title: "Institusi",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "years", title: "Tahun", type: "string" }),
            defineField({
              name: "description",
              title: "Deskripsi",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
          preview: {
            select: { title: "degree", subtitle: "institution" },
          },
        }),
      ],
    }),
    defineField({
      name: "experience",
      title: "Riwayat Profesional",
      type: "array",
      group: "riwayat",
      of: [
        defineArrayMember({
          type: "object",
          name: "experienceItem",
          title: "Pengalaman",
          fields: [
            defineField({
              name: "role",
              title: "Jabatan",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "company",
              title: "Perusahaan / Institusi",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({ name: "years", title: "Tahun", type: "string" }),
            defineField({
              name: "description",
              title: "Deskripsi",
              type: "array",
              of: [{ type: "block" }],
            }),
          ],
          preview: {
            select: { title: "role", subtitle: "company" },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "title",
      media: "avatar",
    },
  },
});
