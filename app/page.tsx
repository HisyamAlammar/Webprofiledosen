import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, ArrowRight, Lightbulb, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* HERO SECTION */}
      <section className="container mx-auto px-4 py-16 md:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-600/30 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-400 font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Dosen Program Studi Manajemen
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary leading-[1.1]">
            Dr. Budi Santoso, <span className="block text-3xl md:text-5xl text-amber-600 dark:text-amber-500 mt-3 font-medium">S.E., M.M.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Spesialisasi dalam Manajemen Strategis, Valuasi Perusahaan, dan Restrukturisasi Bisnis dengan lebih dari 15 tahun pengalaman mengajar dan konsultan praktisi.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/materi">
              <Button size="lg" className="w-full sm:w-auto gap-3 bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg rounded-xl">
                Akses Katalog Materi
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md lg:max-w-lg relative order-1 lg:order-2">
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Dr. Budi Santoso"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block">
            <p className="font-heading font-bold text-primary text-3xl">15+</p>
            <p className="text-muted-foreground font-medium">Tahun Pengalaman</p>
          </div>
        </div>
      </section>

      {/* EXPERTISE GRID */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">Area Keahlian Utama</h2>
            <p className="text-muted-foreground text-lg">Fokus riset dan pengajaran yang didedikasikan untuk pengembangan literasi bisnis dan manajemen modern.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-500 mb-6">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Manajemen Strategis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Perumusan taktik kompetitif, analisis industri menggunakan pendekatan Porter, dan eksekusi strategi di era disrupsi digital.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-700 dark:text-emerald-500 mb-6">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Valuasi Keuangan</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Metode penilaian aset perusahaan, analisis DCF (Discounted Cash Flow), dan restrukturisasi finansial korporat.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-500 mb-6">
                  <Lightbulb className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-primary">Perilaku Konsumen</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Studi tentang psikologi konsumen, pengambilan keputusan pembelian, dan penerapan behavioral economics dalam pemasaran.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION (Education & Experience) */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Education Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl text-emerald-700 dark:text-emerald-500">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-primary">Pendidikan</h2>
              </div>
              
              <div className="relative border-l-2 border-emerald-500/20 ml-6 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[43px] top-1.5 w-5 h-5 rounded-full bg-background border-[4px] border-emerald-500 shadow-sm"></div>
                  <h4 className="font-heading font-bold text-xl text-primary mb-1">S3 (Doktoral) Ilmu Manajemen</h4>
                  <p className="text-emerald-700 dark:text-emerald-500 font-semibold mb-3">Universitas Indonesia • 2015 - 2019</p>
                  <p className="text-muted-foreground">Disertasi berfokus pada adaptasi strategi dan resiliensi perusahaan BUMN di era disrupsi digital.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[43px] top-1.5 w-5 h-5 rounded-full bg-background border-[4px] border-emerald-500/50 shadow-sm"></div>
                  <h4 className="font-heading font-bold text-xl text-primary mb-1">S2 (Magister) Manajemen</h4>
                  <p className="text-emerald-700/70 dark:text-emerald-500/70 font-semibold mb-3">Universitas Gadjah Mada • 2010 - 2012</p>
                  <p className="text-muted-foreground">Konsentrasi Manajemen Strategis & Keuangan Korporat. Lulus dengan predikat Cum Laude.</p>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-500">
                  <Briefcase className="w-7 h-7" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-primary">Pengalaman</h2>
              </div>
              
              <div className="relative border-l-2 border-amber-500/20 ml-6 pl-8 space-y-12">
                <div className="relative">
                  <div className="absolute -left-[43px] top-1.5 w-5 h-5 rounded-full bg-background border-[4px] border-amber-500 shadow-sm"></div>
                  <h4 className="font-heading font-bold text-xl text-primary mb-1">Dosen Manajemen</h4>
                  <p className="text-amber-600 dark:text-amber-500 font-semibold mb-3">Universitas Nasional • 2020 - Sekarang</p>
                  <p className="text-muted-foreground">Mengampu kelas pascasarjana dan sarjana. Aktif membimbing tesis dan memimpin proyek penelitian tingkat nasional.</p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[43px] top-1.5 w-5 h-5 rounded-full bg-background border-[4px] border-amber-500/50 shadow-sm"></div>
                  <h4 className="font-heading font-bold text-xl text-primary mb-1">Konsultan Strategi Bisnis</h4>
                  <p className="text-amber-600/70 dark:text-amber-500/70 font-semibold mb-3">Bina Artha Consulting • 2013 - 2019</p>
                  <p className="text-muted-foreground">Memberikan advisory terkait restrukturisasi perusahaan, corporate planning, dan valuasi bisnis untuk klien korporasi.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-primary py-12 mt-auto text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 text-primary-foreground/50" />
          <h2 className="font-heading text-2xl font-bold mb-4">Mulai Perjalanan Belajar Anda</h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Akses seluruh katalog materi, slide presentasi, dan rekaman kelas secara langsung melalui hub digital ini.
          </p>
          <div className="pt-8 border-t border-primary-foreground/10 text-sm text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Dr. Budi Santoso, S.E., M.M. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
