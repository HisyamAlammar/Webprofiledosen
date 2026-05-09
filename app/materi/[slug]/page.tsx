import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Download, Calendar, FileText, PlayCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dummyMaterials } from "@/lib/dummyData";

// Generate static params for all known slugs
export function generateStaticParams() {
  return dummyMaterials.map((m) => ({ slug: m.slug }));
}

// Generate dynamic metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = dummyMaterials.find((m) => m.slug === slug);
  if (!material) return { title: "Materi Tidak Ditemukan" };
  return {
    title: material.title,
    description: material.description || `Materi kuliah ${material.course}: ${material.title}`,
  };
}

export default async function MateriDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = dummyMaterials.find((m) => m.slug === slug);

  if (!material) {
    notFound();
  }

  const isVideo = material.type === "Video";

  return (
    <main className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <Link href="/materi" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-emerald-700 transition-colors mb-6">
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Daftar Materi
        </Link>

        <div className="space-y-8">
          {/* A. Media Section */}
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
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-muted shadow-xl border border-border/50 flex flex-col items-center justify-center gap-4">
              <AlertCircle className="w-12 h-12 text-muted-foreground/50" />
              <p className="text-muted-foreground text-sm">Video belum tersedia untuk materi ini.</p>
            </div>
          ) : (
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/20 shadow-xl border border-border/50 flex items-center justify-center">
              <FileText className="w-24 h-24 text-amber-500/30" />
            </div>
          )}

          {/* B. Title and Description */}
          <div className="bg-background rounded-2xl p-6 md:p-10 shadow-sm border border-border/50">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30">
                {material.course}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Calendar className="w-3 h-3" />
                {material.date}
              </Badge>
              <Badge variant="secondary" className="gap-1">
                {isVideo ? <PlayCircle className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                {material.type}
              </Badge>
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              {material.title}
            </h1>
            
            {material.description && (
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-10">
                <p>{material.description}</p>
              </div>
            )}

            {/* C. Download Button */}
            {material.fileSize && (
              <div className="border-t border-border/50 pt-8 mt-4">
                <div className="bg-secondary/50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border/50">
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-700 dark:text-blue-500 shrink-0">
                      <FileText className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-xl text-primary mb-1">Slide Presentasi (PDF)</h3>
                      <p className="text-sm text-muted-foreground">{material.title.replace(/\s+/g, "_")}.pdf • {material.fileSize}</p>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full sm:w-auto gap-3 bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-700/20 py-6 text-lg rounded-xl">
                    <Download className="w-6 h-6" />
                    Unduh Materi
                  </Button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
      
      <footer className="bg-primary py-12 mt-auto text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="pt-0 text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Dr. Budi Santoso, S.E., M.M. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
