import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, PlayCircle, FileText, Filter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function MateriPage() {
  const materials = [
    { id: 1, title: "Analisis Kompetitif & Strategi Bertahan", course: "MKM-402", type: "Video", date: "12 Okt 2026", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop", slug: "analisis-kompetitif" },
    { id: 2, title: "Manajemen Keuangan Lanjutan: Valuasi", course: "MKM-301", type: "Dokumen", date: "05 Okt 2026", image: null, slug: "manajemen-keuangan-valuasi" },
    { id: 3, title: "Pengantar Manajemen Strategis", course: "MKM-402", type: "Video", date: "28 Sep 2026", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", slug: "pengantar-manajemen-strategis" },
    { id: 4, title: "Perilaku Konsumen: Faktor Psikologis", course: "MKT-205", type: "Dokumen", date: "21 Sep 2026", image: null, slug: "perilaku-konsumen-psikologis" },
    { id: 5, title: "Strategi Pemasaran Digital", course: "MKT-410", type: "Dokumen", date: "14 Sep 2026", image: null, slug: "strategi-pemasaran-digital" },
    { id: 6, title: "Strategi Tingkat Bisnis", course: "MKM-402", type: "Video", date: "07 Sep 2026", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", slug: "strategi-tingkat-bisnis" },
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <section className="container mx-auto px-4 py-12 lg:py-20 flex-1">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 border-b border-border/50 pb-8">
          <div>
            <h1 className="font-heading text-4xl font-bold text-primary mb-3">Katalog Materi</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Jelajahi seluruh arsip video rekaman masterclass dan dokumen perkuliahan (PDF/PPT) yang tersedia.
            </p>
          </div>
          
          <div className="flex w-full md:w-auto gap-3">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Cari materi..." 
                className="w-full pl-9 pr-4 py-2.5 bg-secondary/30 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2 py-5 border-border/50 bg-background hover:bg-secondary/50">
                  <Filter className="w-4 h-4" /> Mata Kuliah
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Filter Mata Kuliah</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="font-medium text-emerald-700 dark:text-emerald-500">Semua Mata Kuliah</DropdownMenuItem>
                <DropdownMenuItem>MKM-402: Manajemen Strategis</DropdownMenuItem>
                <DropdownMenuItem>MKM-301: Manajemen Keuangan Lanjutan</DropdownMenuItem>
                <DropdownMenuItem>MKT-205: Perilaku Konsumen</DropdownMenuItem>
                <DropdownMenuItem>MKT-410: Strategi Pemasaran Digital</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((materi) => (
            <Card key={materi.id} className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden group bg-background">
              
              {materi.type === "Video" ? (
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                  {materi.image && (
                    <Image 
                      src={materi.image} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt={materi.title} 
                    />
                  )}
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <PlayCircle className="w-14 h-14 text-white drop-shadow-md" />
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white border-none shadow-sm">Video</Badge>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-950/40 dark:to-orange-900/20 flex items-center justify-center border-b border-border/50">
                  <FileText className="w-20 h-20 text-amber-500/50 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-amber-600 hover:bg-amber-700 text-white border-none shadow-sm">Dokumen</Badge>
                  </div>
                </div>
              )}

              <CardHeader className="pt-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="outline" className="border-border/50 text-muted-foreground bg-secondary/30">{materi.course}</Badge>
                  <span className="text-xs text-muted-foreground font-medium">{materi.date}</span>
                </div>
                <CardTitle className="font-heading text-xl leading-snug group-hover:text-primary transition-colors">
                  {materi.title}
                </CardTitle>
              </CardHeader>
              
              <CardFooter className="mt-auto pt-4 pb-6">
                <Link href={`/materi/${materi.slug}`} className="w-full">
                  <Button className="w-full gap-2 font-medium" variant={materi.type === "Video" ? "default" : "outline"}>
                    {materi.type === "Video" ? "Mulai Belajar" : "Akses Dokumen"}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

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
