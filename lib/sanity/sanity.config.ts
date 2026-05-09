"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "j763uma3";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "edumanage-studio",
  title: "EduManage Hub — Admin",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Konten")
          .items([
            // Singleton: Profile
            S.listItem()
              .title("👨‍🏫 Profil Dosen")
              .id("profile")
              .child(
                S.document()
                  .schemaType("profile")
                  .documentId("siteProfile")
                  .title("Profil Dosen")
              ),
            S.divider(),
            // Collection: Mata Kuliah
            S.documentTypeListItem("mataKuliah").title("📚 Mata Kuliah"),
            // Collection: Materi
            S.documentTypeListItem("materi").title("📄 Materi Kuliah"),
          ]),
    }),
  ],
  schema: {
    types: schemaTypes,
  },
});
