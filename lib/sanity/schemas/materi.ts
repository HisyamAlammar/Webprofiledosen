import { defineType, defineField } from "sanity";

export const materi = defineType({
  name: "materi",
  title: "Materi Kuliah",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Materi",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "course",
      title: "Mata Kuliah / Kode MK",
      type: "string",
      description: "Contoh: MKM-402 atau MKT-205",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Tipe Materi",
      type: "string",
      options: {
        list: [
          { title: "Video", value: "Video" },
          { title: "Dokumen", value: "Dokumen" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "thumbnail",
      title: "Gambar Thumbnail",
      type: "image",
      options: { hotspot: true },
      description: "Opsional untuk tipe Video. Akan ditampilkan di katalog.",
    }),
    defineField({
      name: "youtubeUrl",
      title: "YouTube Embed URL",
      type: "url",
      description:
        "URL embed YouTube (contoh: https://www.youtube.com/embed/xxxxx). Wajib untuk tipe Video.",
      hidden: ({ document }) => document?.type !== "Video",
    }),
    defineField({
      name: "description",
      title: "Deskripsi / Ringkasan",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "file",
      title: "File Materi (PDF/PPT)",
      type: "file",
      options: {
        accept: ".pdf,.ppt,.pptx,.doc,.docx",
      },
      description: "Upload file slide/dokumen yang bisa diunduh mahasiswa.",
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publikasi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: "Tanggal Publikasi (Terbaru)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "course",
      media: "thumbnail",
    },
  },
});
