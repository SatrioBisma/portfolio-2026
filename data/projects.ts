export interface ProjectTech {
  name: string
  category: "frontend" | "backend" | "database" | "devops" | "api" | "mobile"
  color?: string
}

export interface ProjectFeature {
  name: string
  description: string
  icon: string
}

export interface ProjectStatistic {
  label: string
  value: number
  suffix?: string
  prefix?: string
}

export interface ProjectContribution {
  title: string
  description: string
  year?: string
}

export interface ProjectChallenge {
  title: string
  description: string
  solution: string
}

export interface ProjectEntity {
  name: string
  fields: string[]
}

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  id: string
  slug: string
  title: string
  subtitle: string
  status: "Production" | "Internal" | "Ongoing" | "Completed"
  year: string
  role: string
  shortDescription: string
  fullDescription: string

  // Links
  liveDemo?: string
  documentation?: string
  github?: string

  // Media
  heroImage: string
  screenshots: ProjectImage[]
  videoUrl?: string

  // Project Info
  client: string
  teamSize: string
  duration: string
  platform: string
  methodology: string

  // Technology Stack
  techStack: ProjectTech[]

  // Features
  features: ProjectFeature[]

  // Statistics
  statistics: ProjectStatistic[]

  // Contributions
  contributions: ProjectContribution[]

  // Challenges
  challenges: ProjectChallenge[]

  // Database (optional)
  databaseEntities?: ProjectEntity[]

  // Workflow steps (optional)
  workflow?: string[]

  // AI/ML (optional)
  aiDetails?: {
    modelName: string
    framework: string
    accuracy: string
    description: string
  }
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "rewash",
    title: "Rewash",
    subtitle: "Laundry Service Locator & Booking Platform",
    status: "Production",
    year: "2024",
    role: "Full Stack Developer",
    shortDescription: "A mobile-first laundry service locator and booking platform designed to connect users with nearby laundry providers seamlessly.",
    fullDescription: "Rewash adalah aplikasi mobile yang membantu pengguna menemukan layanan laundry terdekat dan melakukan pemesanan secara mudah. Aplikasi ini dirancang dengan fokus pada pengalaman pengguna yang mulus dan efisien, memungkinkan pengguna untuk menelusuri memilih layanan laundry berdasarkan lokasi, harga, dan rating.",
    liveDemo: "https://play.google.com",
    heroImage: "/logoRewash.png",
    screenshots: [
      { src: "/logoRewash.png", alt: "Rewash App Screen", caption: "Tampilan Utama Aplikasi" }
    ],
    client: "PT Rewash Indonesia",
    teamSize: "4 orang",
    duration: "6 bulan",
    platform: "Android (Java)",
    methodology: "Agile - Scrum",
    techStack: [
      { name: "Java", category: "mobile", color: "#ED8B00" },
      { name: "Android Studio", category: "mobile", color: "#3DDC84" },
      { name: "Firebase", category: "backend", color: "#FFCA28" },
      { name: "Google Maps API", category: "api", color: "#4285F4" },
      { name: "REST API", category: "api" },
      { name: "Room Database", category: "database", color: "#673AB7" }
    ],
    features: [
      { name: "Pencarian Lokasi", description: "Menemukan layanan laundry terdekat berbasis GPS", icon: "MapPin" },
      { name: "Pemetaan Pemesanan", description: "Booking layanan laundry dengan mudah", icon: "Calendar" },
      { name: "Sistem Pembayaran", description: "Multiple metode pembayaran online", icon: "CreditCard" },
      { name: "Notifikasi", description: "Pengingat dan update status realtime", icon: "Bell" },
      { name: "Riwayat Transaksi", description: "Melihat semua transaksi sebelumnya", icon: "History" },
      { name: "Rating & Ulasan", description: "Beri rating dan ulasan layanan", icon: "Star" }
    ],
    statistics: [
      { label: "Pengguna Aktif", value: 5000, suffix: "+" },
      { label: "Transaksi Bulanan", value: 1200, suffix: "+" },
      { label: "Rating Rata-rata", value: 4.7, suffix: "/5" },
      { label: "Waktu Respons", value: 2, suffix: " menit" }
    ],
    contributions: [
      { title: "Analisis Kebutuhan", description: "Mengidentifikasi kebutuhan pengguna dan stakeholder" },
      { title: "Desain UI/UX", description: "Merancang antarmuka yang intuitif dan menarik" },
      { title: "Frontend Development", description: "Mengembangkan UI dengan Java dan XML" },
      { title: "Backend Integration", description: "Mengintegrasikan API dengan Firebase" },
      { title: "Fitur Lokasi", description: "Mengimplementasikan GPS tracking" },
      { title: "Pengujian", description: "Melakukan unit testing dan UI testing" },
      { title: "Deployment", description: "Men-deploy ke Google Play Store" }
    ],
    challenges: [
      {
        title: "Integrasi Google Maps",
        description: "Sulit mengintegrasikan Google Maps API dengan benar",
        solution: "Menggunakan library pihak ketiga yang sudah teroptimasi dan dokumentasi lengkap"
      },
      {
        title: "Performa Offline",
        description: "Aplikasi sering lambat saat koneksi internet buruk",
        solution: "Mengimplementasikan caching dan local storage dengan Room Database"
      },
      {
        title: "Notifikasi Realtime",
        description: "Sulit mengirim notifikasi secara realtime",
        solution: "Menggunakan Firebase Cloud Messaging untuk notifikasi"
      }
    ]
  },
  {
    id: "2",
    slug: "periku",
    title: "Periku",
    subtitle: "IoT Dashboard for Precision Agriculture",
    status: "Production",
    year: "2024",
    role: "Full Stack Developer",
    shortDescription: "An integrated IoT mobile dashboard developed to provide real-time monitoring and data insights for precision agriculture management.",
    fullDescription: "Periku adalah dashboard IoT yang membantu petani memantau kondisi lahan pertanian secara realtime. Aplikasi ini menampilkan data sensor seperti kelembaban tanah, suhu, dan intensitas cahaya untuk membantu pengambilan keputusan dalam mengelola pertanian presisi.",
    liveDemo: "#",
    heroImage: "/logoPeriku.png",
    screenshots: [
      { src: "/logoPeriku.png", alt: "Periku Dashboard", caption: "Tampilan Dashboard Utama" }
    ],
    client: "PT Periku Agriculture",
    teamSize: "3 orang",
    duration: "4 bulan",
    platform: "Android (Java)",
    methodology: "Agile - Sprint",
    techStack: [
      { name: "Java", category: "mobile", color: "#ED8B00" },
      { name: "Android Studio", category: "mobile", color: "#3DDC84" },
      { name: "Express.js", category: "backend", color: "#68A063" },
      { name: "Node.js", category: "backend", color: "#339933" },
      { name: "MongoDB", category: "database", color: "#47A248" },
      { name: "REST API", category: "api" },
      { name: "MQTT", category: "api", color: "#660099" }
    ],
    features: [
      { name: "Monitoring Realtime", description: "Menampilkan data sensor secara langsung", icon: "Activity" },
      { name: "Grafik Visualisasi", description: "Menampilkan data dalam bentuk chart", icon: "BarChart" },
      { name: "Notifikasi Alert", description: "Mengirim notifikasi saat kondisi kritis", icon: "AlertTriangle" },
      { name: "Analisis Data", description: "Menganalisis tren данные", icon: "TrendingUp" },
      { name: "Kontroldevices", description: "Meng контролировать устройства", icon: "Settings" },
      { name: "Export Laporan", description: "Ekspor data dalam format PDF", icon: "FileText" }
    ],
    statistics: [
      { label: "Sensor Terintegrasi", value: 150, suffix: "+" },
      { label: "Data Points/Hari", value: 10000, suffix: "+" },
      { label: "Akurasi Deteksi", value: 98, suffix: "%" },
      { label: "Waktu Respons", value: 500, suffix: "ms" }
    ],
    contributions: [
      { title: "Analisis Kebutuhan", description: "Mendefinisikan spesifikasi IoT dan monitoring" },
      { title: "Desain Sistem", description: "Merancang arsitektur IoT" },
      { title: "Backend API", description: "Mengembangkan REST API dengan Express.js" },
      { title: "Frontend Mobile", description: "Mengembangkan UI Android" },
      { title: "Integrasi Sensor", description: "Mengintegrasikan MQTT protocol" },
      { title: "Dashboard", description: "Membangun visualisasi data" },
      { title: "Deployment", description: "Deploy ke server production" }
    ],
    challenges: [
      {
        title: "Koneksi Sensor",
        description: "Sensor sering terputus dari jaringan",
        solution: "Mengimplementasikan koneksi ulang otomatis dan buffer data"
      },
      {
        title: "Volume Data Besar",
        description: "Data dari banyak sensor menyebabkan lambat",
        solution: "Menggunakan MQTT dengan QoS dan kompresi data"
      },
      {
        title: "Visualisasi Realtime",
        description: "Grafik perlu update tanpa lag",
        solution: "Menggunakan library chart yang dioptimasi untuk realtime"
      }
    ],
    workflow: [
      "Koneksi Sensor",
      "Pengumpulan Data MQTT",
      "Proses Data",
      "Penyimpanan Database",
      "Update Dashboard",
      "Analisis Tren",
      "Notifikasi Alert"
    ]
  },
  {
    id: "3",
    slug: "dirtykicks",
    title: "Dirtykicks",
    subtitle: "Shoe Cleaning Service Ordering System",
    status: "Production",
    year: "2023",
    role: "Full Stack Developer",
    shortDescription: "A specialized web-based ordering system tailored for Dirtykicks shoe cleaning services to streamline customer transactions and requests.",
    fullDescription: "Dirtykicks adalah sistem pemesanan layanan pembersihan sepatu berbasis web yang memungkinkan pelanggan untuk memesan layanan pembersihan sepatu secara online. Sistem ini mencakup manajemen pesanan, pelacakan status, dan komunikasi antara pelanggan dan penyedia layanan.",
    liveDemo: "#",
    heroImage: "/logoDirty.png",
    screenshots: [
      { src: "/logoDirty.png", alt: "Dirtykicks Website", caption: "Tampilan Website" }
    ],
    client: "Dirtykicks Indonesia",
    teamSize: "2 orang",
    duration: "3 bulan",
    platform: "Web (HTML/CSS/JS)",
    methodology: "Waterfall",
    techStack: [
      { name: "HTML5", category: "frontend", color: "#E34F26" },
      { name: "CSS3", category: "frontend", color: "#1572B6" },
      { name: "JavaScript", category: "frontend", color: "#F7DF1E" },
      { name: "PHP", category: "backend", color: "#777BB4" },
      { name: "MySQL", category: "database", color: "#4479A1" },
      { name: "REST API", category: "api" }
    ],
    features: [
      { name: "Pemesanan Online", description: "Pesan layanan pembersihan sepatu", icon: "ShoppingCart" },
      { name: "Pelacakan Status", description: "Lacak status pesanan", icon: "MapPin" },
      { name: "Galeri Layanan", description: "Lihat jenis layanan tersedia", icon: "Image" },
      { name: "Formulir Kontak", description: "Kirim pesan kepada kami", icon: "MessageCircle" },
      { name: "Testimoni", description: "Lihat ulasan pelanggan", icon: "Star" }
    ],
    statistics: [
      { label: "Pesan Diproses", value: 850, suffix: "+" },
      { label: "Kepuasan Pelanggan", value: 95, suffix: "%" },
      { label: "Waktu Selesai", value: 24, suffix: " jam" }
    ],
    contributions: [
      { title: "Desain Web", description: "Merancang tampilan website" },
      { title: "Frontend Development", description: "Mengembangkan HTML dan CSS" },
      { title: "Backend Logic", description: "Mengembangkan PHP dan database" },
      { title: "Deployment", description: "Men-deploy ke hosting" }
    ],
    challenges: [
      {
        title: "Responsive Design",
        description: "Tampilan tidak responsif di berbagai device",
        solution: "Menggunakan CSS Flexbox dan Grid"
      }
    ]
  },
  {
    id: "4",
    slug: "nusaindah",
    title: "Nusa Indah App",
    subtitle: "Digital Marketplace for Spare Parts",
    status: "Production",
    year: "2024",
    role: "Full Stack Developer",
    shortDescription: "A digital marketplace platform that bridges workshops and spare parts sales to facilitate buyers' transactions.",
    fullDescription: "Nusa Indah App adalah marketplace digital yang menghubungkan bengkel dengan penjualan suku cadang. Aplikasi ini memungkinkan pengguna untuk mencari, menemukan, dan membeli suku cadang yang dibutuhkan dengan mudah.",
    liveDemo: "#",
    heroImage: "/logonusaindah.png",
    screenshots: [
      { src: "/logonusaindah.png", alt: "Nusa Indah App", caption: "Tampilan Aplikasi" }
    ],
    client: "PT Nusa Indah Parts",
    teamSize: "4 orang",
    duration: "5 bulan",
    platform: "Android (Java)",
    methodology: "Agile - Scrum",
    techStack: [
      { name: "Java", category: "mobile", color: "#ED8B00" },
      { name: "Android Studio", category: "mobile", color: "#3DDC84" },
      { name: "PHP", category: "backend", color: "#777BB4" },
      { name: "MySQL", category: "database", color: "#4479A1" },
      { name: "REST API", category: "api" }
    ],
    features: [
      { name: "Katalog Produk", description: "Lihat semua suku cadang", icon: "Package" },
      { name: "Pencarian", description: "Cari produk berdasarkan nama", icon: "Search" },
      { name: "Keranjang Beli", description: "Tambah ke keranjang belanja", icon: "ShoppingCart" },
      { name: "Checkout", description: "Proses pembayaran", icon: "CreditCard" },
      { name: "Riwayat Pesanan", description: "Lihat pesanan sebelumnya", icon: "History" }
    ],
    statistics: [
      { label: "Produk Tersedia", value: 2500, suffix: "+" },
      { label: "Pengguna Terdaftar", value: 3000, suffix: "+" },
      { label: "Transaksi Sukses", value: 1800, suffix: "+" }
    ],
    contributions: [
      { title: "Analisis Kebutuhan", description: "Menganalisis kebutuhan marketplace" },
      { title: "Desain UI", description: "Merancang antarmuka pengguna" },
      { title: "Frontend", description: "Mengembangkan aplikasi Android" },
      { title: "Backend", description: "Mengembangkan API PHP" },
      { title: "Database", description: "Merancang database MySQL" }
    ],
    challenges: [
      {
        title: "Inventori Produk",
        description: "Sulit melacak stok secara realtime",
        solution: "Mengimplementasikan sistem manajemen inventori"
      }
    ]
  },
  {
    id: "5",
    slug: "e-asia-ghg",
    title: "E-Asia Green House Gases",
    subtitle: "IoT Air Quality Monitoring Dashboard",
    status: "Production",
    year: "2024",
    role: "Full Stack Developer",
    shortDescription: "A comprehensive web monitoring dashboard that visualizes real-time IoT data to track and analyze air quality and greenhouse gas levels.",
    fullDescription: "E-Asia GHG adalah dashboard monitoring berbasis web yang memvisualisasikan data IoT untuk melacak dan menganalisis kualitas udara serta tingkat gas rumah kaca. Dashboard ini menyediakan data real-time dan historis untuk penelitian dan pengambilan keputusan.",
    liveDemo: "#",
    heroImage: "/logoEasia.png",
    screenshots: [
      { src: "/logoEasia.png", alt: "E-Asia GHG Dashboard", caption: "Tampilan Dashboard" }
    ],
    client: "E-Asia Environmental Institute",
    teamSize: "5 orang",
    duration: "8 bulan",
    platform: "Web (React)",
    methodology: "Agile - Scrum",
    techStack: [
      { name: "React", category: "frontend", color: "#61DAFB" },
      { name: "TypeScript", category: "frontend", color: "#3178C6" },
      { name: "Next.js", category: "frontend", color: "#000000" },
      { name: "Tailwind CSS", category: "frontend", color: "#06B6D4" },
      { name: "Express.js", category: "backend", color: "#68A063" },
      { name: "Node.js", category: "backend", color: "#339933" },
      { name: "PostgreSQL", category: "database", color: "#4169E1" },
      { name: "REST API", category: "api" },
      { name: "WebSocket", category: "api", color: "#010101" }
    ],
    features: [
      { name: "Dashboard Realtime", description: "Tampilan data kualitas udara", icon: "Activity" },
      { name: "Visualisasi Data", description: "Grafik interaktif CH4, CO2, N2O", icon: "BarChart" },
      { name: "Peta Interaktif", description: "Peta lokasi pemantauan", icon: "Map" },
      { name: "Perbandingan", description: "Bandingkan data antar lokasi", icon: "GitCompare" },
      { name: "Export Data", description: "Ekspor data CSV dan PDF", icon: "Download" },
      { name: "Alert System", description: "Notifikasi saat kualitas buruk", icon: "Bell" },
      { name: "Analisis Tren", description: "Analisis data historis", icon: "TrendingUp" }
    ],
    statistics: [
      { label: "Lokasi Monitor", value: 45, suffix: "+" },
      { label: "Data Points/Hari", value: 50000, suffix: "+" },
      { label: "Akurasi Sensor", value: 99.2, suffix: "%" },
      { label: "Uptime Sistem", value: 99.9, suffix: "%" }
    ],
    databaseEntities: [
      {
        name: "Sensors",
        fields: ["id", "name", "location_id", "type", "status", "last_reading"]
      },
      {
        name: "Locations",
        fields: ["id", "name", "lat", "long", "address"]
      },
      {
        name: "Readings",
        fields: ["id", "sensor_id", "co2", "ch4", "n2o", "timestamp"]
      },
      {
        name: "Alerts",
        fields: ["id", "sensor_id", "level", "message", "created_at"]
      }
    ],
    contributions: [
      { title: "Analisis Kebutuhan", description: "Mendefinisikan spesifikasi sistem" },
      { title: "Desain Arsitektur", description: "Merancang arsitektur full-stack" },
      { title: "Frontend React", description: "Mengembangkan dashboard dengan React" },
      { title: "Backend API", description: "Mengembangkan REST API" },
      { title: "Database PostgreSQL", description: "Merancang dan mengimplementasikan database" },
      { title: "WebSocket", description: "Mengimplementasikan data realtime" },
      { title: "Deployment", description: "Deploy ke Vercel dan server" }
    ],
    challenges: [
      {
        title: "Volume Data Besar",
        description: "Data dari 45+ sensor per detik",
        solution: "Menggunakan batching dan kompresi data"
      },
      {
        title: "Realtime Visualization",
        description: "Grafik harus update tanpa refresh",
        solution: "Menggunakan WebSocket dan optimasi React"
      },
      {
        title: "Performa Database",
        description: "Query lambat dengan data banyak",
        solution: "Menggunakan indexing dan query optimization"
      }
    ],
    workflow: [
      "Pengumpulan Data Sensor",
      "Kirim via MQTT",
      "Proses di Backend",
      "Simpan ke PostgreSQL",
      "Update via WebSocket",
      "Visualisasi Dashboard",
      "Export Laporan"
    ]
  }
]

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug)
}

export const getProjectSlugs = (): string[] => {
  return projects.map(project => project.slug)
}