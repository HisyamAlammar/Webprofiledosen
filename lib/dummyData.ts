export type MaterialType = "Video" | "Dokumen";

export interface Material {
  id: string;
  title: string;
  course: string;
  type: MaterialType;
  date: string;
  image?: string | null;
  slug: string;
  description?: string;
  fileSize?: string;
  videoUrl?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  years: string;
  description: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  years: string;
  description: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  image: string;
  email: string;
  linkedin: string;
  yearsOfExperience: string;
  studentsCount: string;
  videosCount: string;
  caseStudiesCount: string;
  awardsCount: string;
  expertise: Expertise[];
  education: Education[];
  experience: Experience[];
}

export const dummyMaterials: Material[] = [
  { 
    id: "1", 
    title: "Analisis Kompetitif & Strategi Bertahan", 
    course: "MKM-402", 
    type: "Video", 
    date: "12 Okt 2026", 
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop", 
    slug: "analisis-kompetitif",
    description: "Dalam sesi masterclass ini, kita akan membedah secara mendalam studi kasus perusahaan multinasional yang gagal beradaptasi dengan perubahan teknologi, serta membandingkannya dengan perusahaan yang berhasil pivot.",
    videoUrl: "https://www.youtube.com/embed/rzwIWDCKwns",
    fileSize: "4.2 MB"
  },
  { 
    id: "2", 
    title: "Manajemen Keuangan Lanjutan: Valuasi", 
    course: "MKM-301", 
    type: "Dokumen", 
    date: "05 Okt 2026", 
    image: null, 
    slug: "manajemen-keuangan-valuasi",
    description: "Metode penilaian aset keuangan, menghitung cost of capital (WACC), dan analisis risiko investasi korporat."
  },
  { 
    id: "3", 
    title: "Pengantar Manajemen Strategis", 
    course: "MKM-402", 
    type: "Video", 
    date: "28 Sep 2026", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", 
    slug: "pengantar-manajemen-strategis",
    description: "Pemahaman dasar mengenai arah strategis perusahaan dan pentingnya Visi Misi yang solid."
  },
  { 
    id: "4", 
    title: "Perilaku Konsumen: Faktor Psikologis", 
    course: "MKT-205", 
    type: "Dokumen", 
    date: "21 Sep 2026", 
    image: null, 
    slug: "perilaku-konsumen-psikologis",
    description: "Menganalisis faktor psikologis yang mempengaruhi keputusan pembelian."
  },
  { 
    id: "5", 
    title: "Strategi Pemasaran Digital", 
    course: "MKT-410", 
    type: "Dokumen", 
    date: "14 Sep 2026", 
    image: null, 
    slug: "strategi-pemasaran-digital",
    description: "Pendekatan komprehensif dalam pemasaran digital untuk B2B dan B2C."
  },
  { 
    id: "6", 
    title: "Strategi Tingkat Bisnis", 
    course: "MKM-402", 
    type: "Video", 
    date: "07 Sep 2026", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", 
    slug: "strategi-tingkat-bisnis",
    description: "Menyelami strategi level bisnis dan penciptaan keunggulan kompetitif berkelanjutan."
  },
];

export const dummyProfile: ProfileData = {
  name: "Dr. Budi Santoso",
  title: "S.E., M.M.",
  bio: "Spesialisasi dalam Manajemen Strategis, Valuasi Perusahaan, dan Restrukturisasi Bisnis dengan lebih dari 15 tahun pengalaman mengajar dan konsultan praktisi.",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  email: "budi.santoso@university.edu",
  linkedin: "https://linkedin.com/in/budisantoso",
  yearsOfExperience: "15+",
  studentsCount: "5,000+",
  videosCount: "120+",
  caseStudiesCount: "50+",
  awardsCount: "4",
  expertise: [
    {
      id: "exp-1",
      title: "Manajemen Strategis",
      description: "Perumusan taktik kompetitif, analisis industri menggunakan pendekatan Porter, dan eksekusi strategi di era disrupsi digital.",
      icon: "ShieldCheck"
    },
    {
      id: "exp-2",
      title: "Valuasi Keuangan",
      description: "Metode penilaian aset perusahaan, analisis DCF (Discounted Cash Flow), dan restrukturisasi finansial korporat.",
      icon: "TrendingUp"
    },
    {
      id: "exp-3",
      title: "Perilaku Konsumen",
      description: "Studi tentang psikologi konsumen, pengambilan keputusan pembelian, dan penerapan behavioral economics dalam pemasaran.",
      icon: "Lightbulb"
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "S3 (Doktoral) Ilmu Manajemen",
      institution: "Universitas Indonesia • 2015 - 2019",
      years: "2015-2019",
      description: "Disertasi berfokus pada adaptasi strategi dan resiliensi perusahaan BUMN di era disrupsi digital."
    },
    {
      id: "edu-2",
      degree: "S2 (Magister) Manajemen",
      institution: "Universitas Gadjah Mada • 2010 - 2012",
      years: "2010-2012",
      description: "Konsentrasi Manajemen Strategis & Keuangan Korporat. Lulus dengan predikat Cum Laude."
    }
  ],
  experience: [
    {
      id: "work-1",
      role: "Dosen Manajemen",
      company: "Universitas Nasional • 2020 - Sekarang",
      years: "2020-Present",
      description: "Mengampu kelas pascasarjana dan sarjana. Aktif membimbing tesis dan memimpin proyek penelitian tingkat nasional."
    },
    {
      id: "work-2",
      role: "Konsultan Strategi Bisnis",
      company: "Bina Artha Consulting • 2013 - 2019",
      years: "2013-2019",
      description: "Memberikan advisory terkait restrukturisasi perusahaan, corporate planning, dan valuasi bisnis untuk klien korporasi."
    }
  ]
};
