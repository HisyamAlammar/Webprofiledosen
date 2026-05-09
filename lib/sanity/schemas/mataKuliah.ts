import { defineType, defineField } from "sanity";

export const mataKuliah = defineType({
  name: "mataKuliah",
  title: "Mata Kuliah",
  type: "document",
  icon: () => "📚",
  fields: [
    defineField({
      name: "title",
      title: "Nama Mata Kuliah",
      type: "string",
      description: "Contoh: Manajemen Strategis",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "code",
      title: "Kode Mata Kuliah",
      type: "string",
      description: "Contoh: MKM-402",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Mata Kuliah",
      type: "array",
      of: [{ type: "block" }],
      description: "Penjelasan singkat tentang mata kuliah ini.",
    }),
    defineField({
      name: "semester",
      title: "Semester",
      type: "number",
      description: "Semester ke berapa mata kuliah ini diajarkan.",
      validation: (rule) => rule.min(1).max(14),
    }),
    defineField({
      name: "sks",
      title: "SKS",
      type: "number",
      description: "Jumlah Satuan Kredit Semester.",
      validation: (rule) => rule.min(1).max(6),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "code",
    },
    prepare({ title, subtitle }) {
      return {
        title: title || "Mata Kuliah Baru",
        subtitle: subtitle ? `[${subtitle}]` : "",
      };
    },
  },
});
