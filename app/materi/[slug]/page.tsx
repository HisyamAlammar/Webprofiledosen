import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Download, Calendar, Clock, FileText } from "lucide-react";
import Link from "next/link";

export default function MateriDetailPage() {
  return (
    <main className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <div className="flex-1 container mx-auto px-4 py-8 md:py-12 max-w-4xl">
        <Link href="/materi" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-emerald-700 transition-colors mb-6">
          <ChevronLeft className="w-4 h-4" />
          Kembali ke Daftar Materi
        </Link>

        <div className="space-y-8">
          {/* A. YouTube Embed */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black shadow-xl border border-border/50">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/rzwIWDCKwns" 
              title="Michael Porter: Aligning Strategy & Project Management" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* B. Title and Description */}
          <div className="bg-background rounded-2xl p-6 md:p-10 shadow-sm border border-border/50">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30">MKM-402: Manajemen Strategis</Badge>
              <Badge variant="secondary" className="gap-1"><Calendar className="w-3 h-3" /> 12 Okt 2026</Badge>
              <Badge variant="secondary" className="gap-1"><Clock className="w-3 h-3" /> 1j 15m</Badge>
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              Analisis Kompetitif & Strategi Bertahan di Era Disrupsi
            </h1>
            
            <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                Dalam sesi masterclass ini, kita akan membedah secara mendalam studi kasus perusahaan multinasional (seperti Nokia, Blockbuster, dan Kodak) yang gagal beradaptasi dengan perubahan teknologi, serta membandingkannya dengan perusahaan yang berhasil pivot (seperti Netflix dan Apple).
              </p>
              <p className="mt-4">
                Fokus utama pembahasan adalah mengaplikasikan <strong>Porter's Five Forces</strong> dalam industri teknologi modern dan merumuskan strategi <em>Blue Ocean</em> untuk menciptakan ruang pasar yang belum ada pesaingnya. Materi ini sangat krusial bagi pemimpin bisnis masa depan dalam merancang strategi yang <em>agile</em> dan tahan banting.
              </p>
            </div>

            {/* C. Download Button */}
            <div className="border-t border-border/50 pt-8 mt-4">
              <div className="bg-secondary/50 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-border/50">
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-700 dark:text-blue-500">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary mb-1">Slide Presentasi (PDF)</h3>
                    <p className="text-sm text-muted-foreground">Analisis_Kompetitif_MKM402.pdf • 4.2 MB</p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full sm:w-auto gap-3 bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-700/20 py-6 text-lg rounded-xl">
                  <Download className="w-6 h-6" />
                  Unduh Materi
                </Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      <footer className="bg-background border-t py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Dr. Budi Santoso, S.E., M.M. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
