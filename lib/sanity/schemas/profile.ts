import { defineType, defineField, defineArrayMember } from "sanity";

export const profile = defineType({
  name: "profile",
  title: "Profil Dosen",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama Lengkap",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Gelar Akademik",
      type: "string",
      description: "Contoh: S.E., M.M.",
    }),
    defineField({
      name: "avatar",
      title: "Foto Profil",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio Singkat",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "yearsOfExperience",
      title: "Tahun Pengalaman",
      type: "string",
      description: "Contoh: 15+",
    }),
    defineField({
      name: "studentsCount",
      title: "Jumlah Mahasiswa",
      type: "string",
    }),
    defineField({
      name: "videosCount",
      title: "Jumlah Video",
      type: "string",
    }),
    defineField({
      name: "caseStudiesCount",
      title: "Jumlah Studi Kasus",
      type: "string",
    }),
    defineField({
      name: "awardsCount",
      title: "Jumlah Penghargaan",
      type: "string",
    }),
    defineField({
      name: "expertise",
      title: "Bidang Keahlian",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "expertiseItem",
          title: "Keahlian",
          fields: [
            defineField({ name: "title", title: "Judul", type: "string" }),
            defineField({
              name: "description",
              title: "Deskripsi",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "icon",
              title: "Nama Icon (Lucide)",
              type: "string",
              description:
                "Nama komponen Lucide React, contoh: ShieldCheck, TrendingUp, Lightbulb",
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "education",
      title: "Riwayat Pendidikan",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "educationItem",
          title: "Pendidikan",
          fields: [
            defineField({ name: "degree", title: "Gelar / Jenjang", type: "string" }),
            defineField({ name: "institution", title: "Institusi", type: "string" }),
            defineField({ name: "years", title: "Tahun", type: "string" }),
            defineField({
              name: "description",
              title: "Deskripsi",
              type: "text",
              rows: 3,
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "experience",
      title: "Riwayat Profesional",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "experienceItem",
          title: "Pengalaman",
          fields: [
            defineField({ name: "role", title: "Jabatan", type: "string" }),
            defineField({ name: "company", title: "Perusahaan / Institusi", type: "string" }),
            defineField({ name: "years", title: "Tahun", type: "string" }),
            defineField({
              name: "description",
              title: "Deskripsi",
              type: "text",
              rows: 3,
            }),
          ],
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
