import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  Download,
  Calendar,
  FileText,
  PlayCircle,
  VideoOff,
  FileQuestion,
  FileArchive,
  HardDrive,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dummyMaterials } from "@/lib/dummyData";

// Generate static params for all known slugs
export function generateStaticParams() {
  return dummyMaterials.map((m) => ({ slug: m.slug }));
}

// Generate dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = dummyMaterials.find((m) => m.slug === slug);
  if (!material) return { title: "Materi Tidak Ditemukan" };
  return {
    title: material.title,
    description:
      material.description ||
      `Materi kuliah ${material.course}: ${material.title}`,
  };
}

// ─── File Extension → Label Map ────────────────────────
const extensionLabels: Record<string, string> = {
  PDF: "Dokumen PDF",
  PPTX: "Slide Presentasi",
  PPT: "Slide Presentasi",
  DOC: "Dokumen Word",
  DOCX: "Dokumen Word",
};

// ─── File Extension → Color Theme ──────────────────────
const extensionThemes: Record<
  string,
  { bg: string; text: string; icon: string }
> = {
  PDF: {
    bg: "bg-red-100 dark:bg-red-900/30",
    text: "text-red-700 dark:text-red-400",
    icon: "text-red-600 dark:text-red-400",
  },
  PPTX: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-700 dark:text-orange-400",
    icon: "text-orange-600 dark:text-orange-400",
  },
  PPT: {
    bg: "bg-orange-100 dark:bg-orange-900/30",
    text: "text-orange-700 dark:text-orange-400",
    icon: "text-orange-600 dark:text-orange-400",
  },
  DOCX: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-400",
    icon: "text-blue-600 dark:text-blue-400",
  },
  DOC: {
    bg: "bg-blue-100 dark:bg-blue-900/30",
    text: "text-blue-700 dark:text-blue-400",
    icon: "text-blue-600 dark:text-blue-400",
  },
};

const defaultTheme = {
  bg: "bg-slate-100 dark:bg-slate-900/30",
  text: "text-slate-700 dark:text-slate-400",
  icon: "text-slate-600 dark:text-slate-400",
};

export default async function MateriDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const material = dummyMaterials.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  const isVideo = material.type === "Video";
  const isDokumen = material.type === "Dokumen";
  const ext = material.fileExtension?.toUpperCase() || "";
  const theme = extensionThemes[ext] || defaultTheme;
  const fileLabel = extensionLabels[ext] || "File Materi";
  const hasFile = !!(material.fileSize && material.fileExtension);

  return (
    <main className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <Link
          href="/materi"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-emerald-700 transition-colors mb-6"
        >
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Daftar Materi
        </Link>

        <div className="space-y-8">
          {/* ═══ A. MEDIA SECTION ═══ */}
          {isVideo && material.videoUrl ? (
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-xl border border-border/50">
              <iframe
                width="100%"
                height="100%"
                src={material.videoUrl}
                title={material.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          ) : isVideo ? (
            /* ─── EMPTY STATE: Video Not Available ─── */
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 shadow-xl border border-border/50 flex flex-col items-center justify-center gap-5 p-8">
              <div className="w-20 h-20 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                <VideoOff className="w-10 h-10 text-slate-400 dark:text-slate-500" />
              </div>
              <div className="text-center space-y-2 max-w-md">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Video Sedang Disiapkan
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rekaman video pembelajaran untuk materi ini sedang dalam proses
                  pengunggahan oleh dosen. Silakan periksa kembali dalam beberapa
                  hari.
                </p>
              </div>
              <Badge
                variant="secondary"
                className="gap-1.5 text-xs font-normal"
              >
                <PlayCircle className="w-3 h-3" />
                Segera tersedia
              </Badge>
            </div>
          ) : isDokumen && !hasFile ? (
            /* ─── EMPTY STATE: Dokumen Not Available ─── */
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/30 dark:to-orange-950/20 shadow-xl border border-border/50 flex flex-col items-center justify-center gap-5 p-8">
              <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                <FileQuestion className="w-10 h-10 text-amber-400 dark:text-amber-500" />
              </div>
              <div className="text-center space-y-2 max-w-md">
                <h3 className="font-heading text-lg font-semibold text-primary">
                  Dokumen Sedang Disiapkan
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  File materi untuk topik ini belum diunggah oleh dosen. Silakan
                  hubungi dosen pengampu atau periksa kembali nanti.
                </p>
              </div>
              <Badge
                variant="secondary"
                className="gap-1.5 text-xs font-normal"
              >
                <FileText className="w-3 h-3" />
                Segera tersedia
              </Badge>
            </div>
          ) : (
            /* ─── Document Header Banner ─── */
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/20 shadow-xl border border-border/50 flex items-center justify-center">
              <FileText className="w-24 h-24 text-amber-500/30" />
            </div>
          )}

          {/* ═══ B. TITLE & DESCRIPTION ═══ */}
          <div className="bg-background rounded-2xl p-6 md:p-10 shadow-sm border border-border/50">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="border-emerald-200 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30"
              >
                {material.course}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Calendar className="w-3 h-3" />
                {material.date}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                {isVideo ? (
                  <PlayCircle className="w-3 h-3" />
                ) : (
                  <FileText className="w-3 h-3" />
                )}
                {material.type}
              </Badge>
              {/* File metadata badges */}
              {material.fileExtension && (
                <Badge
                  variant="secondary"
                  className={`gap-1 ${theme.text}`}
                >
                  <FileArchive className="w-3 h-3" />
                  {material.fileExtension}
                </Badge>
              )}
              {material.fileSize && (
                <Badge variant="secondary" className="gap-1">
                  <HardDrive className="w-3 h-3" />
                  {material.fileSize}
                </Badge>
              )}
            </div>

            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {material.title}
            </h1>

            {material.description && (
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-10">
                <p>{material.description}</p>
              </div>
            )}

            {/* ═══ C. DOWNLOAD SECTION ═══ */}
            {hasFile ? (
              <div className="border-t border-border/50 pt-8 mt-4">
                <div className="bg-secondary/50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border/50">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div
                      className={`p-4 rounded-xl shrink-0 ${theme.bg}`}
                    >
                      <FileText className={`w-8 h-8 ${theme.icon}`} />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-primary mb-1">
                        {fileLabel}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {material.title.replace(/\s+/g, "_")}.
                        {ext.toLowerCase()} •{" "}
                        <span className="font-medium">
                          {material.fileSize}
                        </span>
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-3 bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-700/20 py-6 text-lg rounded-xl"
                  >
                    <Download className="w-6 h-6" />
                    Unduh {ext}
                  </Button>
                </div>
              </div>
            ) : isDokumen ? (
              /* ─── EMPTY STATE: No file to download ─── */
              <div className="border-t border-border/50 pt-8 mt-4">
                <div className="bg-amber-50/50 dark:bg-amber-950/10 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-amber-200/50 dark:border-amber-800/30">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="p-4 rounded-xl shrink-0 bg-amber-100 dark:bg-amber-900/30">
                      <FileQuestion className="w-8 h-8 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-primary mb-1">
                        File Belum Tersedia
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Dosen belum mengunggah file untuk materi ini. Silakan cek
                        kembali nanti.
                      </p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    disabled
                    className="w-full sm:w-auto gap-3 py-6 text-lg rounded-xl opacity-50 cursor-not-allowed"
                  >
                    <Download className="w-6 h-6" />
                    Segera Tersedia
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <footer className="bg-primary py-12 mt-auto text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="pt-0 text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Dr. Budi Santoso, S.E., M.M. All
            rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
