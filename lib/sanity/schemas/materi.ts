import { defineType, defineField } from "sanity";

export const materi = defineType({
  name: "materi",
  title: "Materi Kuliah",
  type: "document",
  icon: () => "📄",
  groups: [
    { name: "konten", title: "Konten Utama", default: true },
    { name: "media", title: "Media & File" },
    { name: "metadata", title: "Metadata" },
  ],
  fields: [
    // ── GRUP: Konten Utama ──────────────────────────────
    defineField({
      name: "title",
      title: "Judul Materi",
      type: "string",
      group: "konten",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      group: "konten",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mataKuliah",
      title: "Mata Kuliah",
      type: "reference",
      to: [{ type: "mataKuliah" }],
      group: "konten",
      description: "Pilih mata kuliah terkait. Jika belum ada, buat dulu di menu 'Mata Kuliah'.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Tipe Materi",
      type: "string",
      group: "konten",
      options: {
        list: [
          { title: "🎬 Video Pembelajaran", value: "Video" },
          { title: "📑 Dokumen / Slide", value: "Dokumen" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi / Ringkasan",
      type: "array",
      of: [{ type: "block" }],
      group: "konten",
      description:
        "Gunakan formatting (bold, italic, bullet) untuk menjelaskan isi materi kepada mahasiswa.",
    }),
    defineField({
      name: "pertemuan",
      title: "Pertemuan ke-",
      type: "number",
      group: "konten",
      description:
        "Nomor pertemuan dalam kalender akademik (1–16). Membantu mahasiswa menemukan materi berdasarkan minggu.",
      validation: (rule) => rule.min(1).max(16).integer(),
    }),

    // ── GRUP: Media & File ──────────────────────────────
    defineField({
      name: "thumbnail",
      title: "Gambar Thumbnail",
      type: "image",
      options: { hotspot: true },
      group: "media",
      description:
        "Opsional. Akan ditampilkan di katalog. Jika kosong, thumbnail otomatis ditampilkan dari YouTube.",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Embed URL",
      type: "url",
      group: "media",
      description:
        'URL embed YouTube (contoh: https://www.youtube.com/embed/xxxxx). Wajib diisi untuk tipe "Video".',
      hidden: ({ document }) => document?.type !== "Video",
      validation: (rule) =>
        rule.custom((value, context) => {
          const doc = context.document;
          if (doc?.type === "Video" && !value) {
            return "URL YouTube wajib diisi untuk materi bertipe Video.";
          }
          return true;
        }),
    }),
    defineField({
      name: "file",
      title: "File Materi (PDF/PPT)",
      type: "file",
      group: "media",
      options: {
        accept: ".pdf,.ppt,.pptx,.doc,.docx",
      },
      description: "Upload file slide/dokumen yang bisa diunduh mahasiswa.",
      hidden: ({ document }) => document?.type === "Video",
      validation: (rule) =>
        rule.custom((value, context) => {
          const doc = context.document;
          if (doc?.type === "Dokumen" && !value) {
            return "File wajib diupload untuk materi bertipe Dokumen.";
          }
          return true;
        }),
    }),

    // ── GRUP: Metadata ──────────────────────────────────
    defineField({
      name: "publishedAt",
      title: "Tanggal Publikasi",
      type: "datetime",
      group: "metadata",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Tanggal Publikasi (Terbaru)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Pertemuan (Urut)",
      name: "pertemuanAsc",
      by: [{ field: "pertemuan", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      courseTitle: "mataKuliah.title",
      courseCode: "mataKuliah.code",
      media: "thumbnail",
      type: "type",
      pertemuan: "pertemuan",
    },
    prepare({ title, courseCode, type, pertemuan, media }) {
      const icon = type === "Video" ? "🎬" : "📑";
      const meetingLabel = pertemuan ? `P${pertemuan}` : "";
      const subtitle = [courseCode ? `[${courseCode}]` : "", meetingLabel, icon]
        .filter(Boolean)
        .join(" · ");
      return {
        title: title || "Materi Baru",
        subtitle,
        media,
      };
    },
  },
});
