import { Navbar } from "@/components/navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, ArrowRight, Lightbulb, TrendingUp, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dummyProfile } from "@/lib/dummyData";

// Helper to map string icon names to Lucide components
const IconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7" />,
  TrendingUp: <TrendingUp className="w-7 h-7" />,
  Lightbulb: <Lightbulb className="w-7 h-7" />,
};

export default function Home() {
  const { name, title, bio, image, yearsOfExperience, studentsCount, videosCount, caseStudiesCount, expertise, education, experience } = dummyProfile;

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
            {name}, <span className="block text-3xl md:text-5xl text-amber-600 dark:text-amber-500 mt-3 font-medium">{title}</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {bio}
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

        <div className="flex-1 w-full max-w-xs sm:max-w-md lg:max-w-lg relative order-1 lg:order-2">
          <div className="aspect-square md:aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl border-4 border-background">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-background p-6 rounded-2xl shadow-xl border border-border/50 hidden md:block">
            <p className="font-heading font-bold text-primary text-3xl">{yearsOfExperience}</p>
            <p className="text-muted-foreground font-medium">Tahun Pengalaman</p>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="border-y border-border/50 bg-secondary/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
            <div>
              <p className="font-heading font-bold text-3xl md:text-4xl text-primary">{yearsOfExperience}</p>
              <p className="text-sm text-muted-foreground mt-1">Tahun Pengalaman</p>
            </div>
            <div>
              <p className="font-heading font-bold text-3xl md:text-4xl text-primary">{studentsCount}</p>
              <p className="text-sm text-muted-foreground mt-1">Mahasiswa</p>
            </div>
            <div>
              <p className="font-heading font-bold text-3xl md:text-4xl text-primary">{videosCount}</p>
              <p className="text-sm text-muted-foreground mt-1">Video Pembelajaran</p>
            </div>
            <div>
              <p className="font-heading font-bold text-3xl md:text-4xl text-primary">{caseStudiesCount}</p>
              <p className="text-sm text-muted-foreground mt-1">Studi Kasus</p>
            </div>
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
            {expertise.map((item, index) => {
              const bgColors = ["bg-amber-100 dark:bg-amber-900/30", "bg-emerald-100 dark:bg-emerald-900/30", "bg-blue-100 dark:bg-blue-900/30"];
              const textColors = ["text-amber-600 dark:text-amber-500", "text-emerald-700 dark:text-emerald-500", "text-blue-700 dark:text-blue-500"];
              return (
                <Card key={item.id} className="border-none shadow-md hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm">
                  <CardContent className="p-8 space-y-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${bgColors[index % bgColors.length]} ${textColors[index % textColors.length]}`}>
                      {IconMap[item.icon] || <ShieldCheck className="w-7 h-7" />}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
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
                {education.map((edu, index) => (
                  <div key={edu.id} className="relative">
                    <div className={`absolute -left-[43px] top-1.5 w-5 h-5 rounded-full bg-background border-[4px] shadow-sm ${index === 0 ? 'border-emerald-500' : 'border-emerald-500/50'}`}></div>
                    <h4 className="font-heading font-bold text-xl text-primary mb-1">{edu.degree}</h4>
                    <p className={`font-semibold mb-3 ${index === 0 ? 'text-emerald-700 dark:text-emerald-500' : 'text-emerald-700/70 dark:text-emerald-500/70'}`}>{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
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
                {experience.map((exp, index) => (
                  <div key={exp.id} className="relative">
                    <div className={`absolute -left-[43px] top-1.5 w-5 h-5 rounded-full bg-background border-[4px] shadow-sm ${index === 0 ? 'border-amber-500' : 'border-amber-500/50'}`}></div>
                    <h4 className="font-heading font-bold text-xl text-primary mb-1">{exp.role}</h4>
                    <p className={`font-semibold mb-3 ${index === 0 ? 'text-amber-600 dark:text-amber-500' : 'text-amber-600/70 dark:text-amber-500/70'}`}>{exp.company}</p>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                ))}
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
