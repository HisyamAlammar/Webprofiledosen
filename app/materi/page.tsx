"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, PlayCircle, FileText, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";

import { dummyMaterials } from "@/lib/dummyData";

// Extract unique courses from data
const allCourses = Array.from(new Set(dummyMaterials.map((m) => m.course)));

export default function MateriPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);

  const filteredMaterials = useMemo(() => {
    return dummyMaterials.filter((m) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (m.description && m.description.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCourse = !selectedCourse || m.course === selectedCourse;

      return matchesSearch && matchesCourse;
    });
  }, [searchQuery, selectedCourse]);

  const courseLabel = selectedCourse
    ? `${selectedCourse}`
    : "Semua Mata Kuliah";

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
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari materi..." 
                className="w-full pl-10 pr-9 py-2.5 bg-secondary/30 border border-border/50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-shadow"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Hapus pencarian"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Course Filter - Custom dropdown (no DropdownMenu to avoid Base UI context crash) */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 border border-border/50 shadow-sm py-2.5 px-4 bg-background hover:bg-secondary/50 h-[42px]"
              >
                <ChevronDown className={`w-4 h-4 transition-transform ${filterOpen ? "rotate-180" : ""}`} />
                <span className="hidden sm:inline">{courseLabel}</span>
                <span className="sm:hidden">Filter</span>
              </button>

              {filterOpen && (
                <>
                  {/* Backdrop to close dropdown */}
                  <div className="fixed inset-0 z-40" onClick={() => setFilterOpen(false)} />
                  <div className="absolute right-0 top-full mt-2 z-50 w-64 bg-popover border border-border/50 rounded-xl shadow-xl p-1.5 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2">
                    <p className="px-3 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      Filter Mata Kuliah
                    </p>
                    <div className="h-px bg-border/50 my-1" />
                    <button
                      onClick={() => { setSelectedCourse(null); setFilterOpen(false); }}
                      className={`flex w-full items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        !selectedCourse ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold" : "hover:bg-secondary/50"
                      }`}
                    >
                      Semua Mata Kuliah
                    </button>
                    {allCourses.map((course) => (
                      <button
                        key={course}
                        onClick={() => { setSelectedCourse(course); setFilterOpen(false); }}
                        className={`flex w-full items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCourse === course ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold" : "hover:bg-secondary/50"
                        }`}
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Active filters indicator */}
        {(searchQuery || selectedCourse) && (
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <span className="text-sm text-muted-foreground">Filter aktif:</span>
            {searchQuery && (
              <Badge variant="secondary" className="gap-1.5 pr-1.5">
                &quot;{searchQuery}&quot;
                <button onClick={() => setSearchQuery("")} className="hover:bg-foreground/10 rounded-full p-0.5 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            {selectedCourse && (
              <Badge variant="secondary" className="gap-1.5 pr-1.5">
                {selectedCourse}
                <button onClick={() => setSelectedCourse(null)} className="hover:bg-foreground/10 rounded-full p-0.5 transition-colors">
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            )}
            <button
              onClick={() => { setSearchQuery(""); setSelectedCourse(null); }}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Hapus semua
            </button>
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-muted-foreground mb-6">
          Menampilkan {filteredMaterials.length} dari {dummyMaterials.length} materi
        </p>

        {filteredMaterials.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
            <h3 className="font-heading text-xl font-bold text-primary mb-2">Materi Tidak Ditemukan</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Tidak ada materi yang cocok dengan pencarian &quot;{searchQuery}&quot;
              {selectedCourse ? ` di mata kuliah ${selectedCourse}` : ""}.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCourse(null); }}
              className="mt-4 text-sm text-emerald-700 dark:text-emerald-400 hover:underline underline-offset-2 font-medium"
            >
              Reset filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map((materi) => (
              <Card key={materi.id} className="flex flex-col h-full hover:shadow-xl transition-all duration-300 border-border/50 overflow-hidden group bg-background">
                
                {materi.type === "Video" ? (
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    {materi.image && (
                      <Image 
                        src={materi.image} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

                {materi.description && (
                  <CardContent className="pt-0 pb-0 flex-1">
                    <CardDescription className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {materi.description}
                    </CardDescription>
                  </CardContent>
                )}
                
                <CardFooter className="mt-auto pt-4 pb-6">
                  <div className="w-full space-y-3">
                    {/* File metadata chips for Dokumen type */}
                    {materi.type === "Dokumen" && (materi.fileExtension || materi.fileSize) && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        {materi.fileExtension && (
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md font-medium ${
                            materi.fileExtension === "PDF"
                              ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                              : materi.fileExtension === "PPTX" || materi.fileExtension === "PPT"
                              ? "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400"
                              : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          }`}>
                            <FileText className="w-3 h-3" />
                            {materi.fileExtension}
                          </span>
                        )}
                        {materi.fileSize && (
                          <span className="text-muted-foreground/70">{materi.fileSize}</span>
                        )}
                      </div>
                    )}
                    <Link href={`/materi/${materi.slug}`} className="w-full block">
                      <Button className="w-full gap-2 font-medium" variant={materi.type === "Video" ? "default" : "outline"}>
                        {materi.type === "Video"
                          ? "Mulai Belajar"
                          : materi.fileExtension
                          ? `Akses ${materi.fileExtension}`
                          : "Akses Dokumen"}
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </section>

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
