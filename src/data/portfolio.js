export const portfolioData = {
  name: "SURYA DAFFA FAUZI KHOERUDIN",
  title: "Web Developer | Mobile Programming",
  description:
    "Mahasiswa IT semester 6 yang berfokus pada pengembangan web dan teknologi modern. Berpengalaman membangun berbagai aplikasi seperti ecommerce dan platform jasa menggunakan Laravel, JavaScript, dan framework modern lainnya. Terbiasa bekerja dalam tim serta memiliki ketertarikan tinggi untuk terus belajar dan mengembangkan solusi digital yang efisien dan scalable.",
  about:
    " Saya adalah mahasiswa IT semester 6 yang memiliki ketertarikan di bidang Web Development dan Software Development. Terbiasa membangun aplikasi web menggunakan Laravel dan JavaScript serta memahami konsep dasar backend, database, dan logika aplikasi. Saya lebih sering mengembangkan kemampuan melalui pembuatan project nyata, baik secara mandiri maupun dalam tim, seperti platform ecommerce dan sistem jasa titip. Saat ini saya terus belajar dan terbuka untuk freelance, remote work, maupun kolaborasi project dalam membangun solusi digital yang fungsional dan mudah dikembangkan. Saya percaya cara terbaik belajar programming adalah dengan membangun project nyata dan terus mengembangkan solusi dari masalah yang ada.",

  profileImage1: "/assets/images/fotoprojects/ppff.jpeg",
  profileImage: "/assets/images/fotoprojects/foto sendiiri.png",

  skills: [
    {
      name: "Laravel",
      icon: "bi-layers-half",
      logo: "https://cdn.simpleicons.org/laravel",
      color: "text-red-600",
    },
    {
      name: "PHP",
      icon: "bi-filetype-php",
      logo: "https://cdn.simpleicons.org/php",
      color: "text-indigo-400",
    },
    {
      name: "React",
      icon: "bi-code-slash",
      logo: "https://cdn.simpleicons.org/react",
      color: "text-cyan-400",
    },
    {
      name: "Tailwind CSS",
      icon: "bi-palette",
      logo: "https://cdn.simpleicons.org/tailwindcss",
      color: "text-cyan-400",
    },
    {
      name: "HTML5",
      icon: "bi-filetype-html",
      logo: "https://cdn.simpleicons.org/html5",
      color: "text-orange-600",
    },
    {
      name: "CSS3",
      icon: "bi-filetype-css",
      logo: "https://cdn.simpleicons.org/css3",
      color: "text-blue-600",
    },
    {
      name: "JavaScript",
      icon: "bi-filetype-js",
      logo: "https://cdn.simpleicons.org/javascript",
      color: "text-yellow-500",
    },
    {
      name: "Python",
      icon: "bi-filetype-py",
      logo: "https://cdn.simpleicons.org/python",
      color: "text-yellow-400",
    },
    {
      name: "MySQL",
      icon: "bi-database-check",
      logo: "https://cdn.simpleicons.org/mysql",
      color: "text-blue-500",
    },
    {
      name: "REST API",
      icon: "bi-hdd-network",
      logo: "https://cdn.simpleicons.org/swagger",
      color: "text-green-600",
    },
    {
      name: "Node.js",
      icon: "bi-hdd-network",
      logo: "https://cdn.simpleicons.org/nodedotjs",
      color: "text-green-500",
    },
    {
      name: "Git",
      icon: "bi-git",
      logo: "https://cdn.simpleicons.org/git",
      color: "text-orange-500",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      logo: "https://cdn.simpleicons.org/github/white",
      color: "text-white",
    },
    {
      name: "Docker",
      icon: "bi-box-seam",
      logo: "https://cdn.simpleicons.org/docker",
      color: "text-blue-400",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Website E-Commerce Jakarta Scootter Shop",
      // Deskripsi singkat untuk di Card
      description:
        "Platform E-Commerce Full-Stack untuk suku cadang Vespa klasik dengan integrasi pembayaran real-time.",
      // Deskripsi lengkap untuk di Modal
      detailedDescription: {
        overview:
          "A full-stack ecommerce web application developed using Next.js for the frontend and NestJS for the backend API. The system supports product management, shopping cart, order processing, and payment integration. This project was developed in a team of three developers, where I was responsible for the frontend development, implementing the user interface, managing client-side state, and integrating the frontend with the backend API. The application uses PostgreSQL with Prisma ORM for database management, while Redis is used to handle background jobs and queue processing. Tech Stack: Next.js, NestJS, TypeScript, PostgreSQL, Prisma, Redis, Tailwind CSS.",
        responsibilities: [
          "Implementing the user interface with Next.js & Tailwind CSS",
          "Managing client-side state using Zustand",
          "Integrating frontend with NestJS API using TanStack Query",
          "Ensuring responsive design for mobile and desktop",
        ],
        techStack: {
          frontend: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Zustand",
            "TanStack Query",
          ],
          backend: ["NestJS", "TypeScript", "Prisma ORM"],
          infrastructure: ["PostgreSQL", "Redis", "Docker"],
        },
      },
      technologies: [
        "Next.js 15",
        "NestJS 11",
        "PostgreSQL",
        "Prisma ORM",
        "Midtrans/Xendit",
      ],
      image: "/assets/images/fotoprojects/Jakarta scooter shop.png",
      link: "https://jakartascootershop.com/",
      github: null,
      type: "web app - ecommerce",
    },
    {
      id: 2,
      title: "Aplikasi Jastip Web",
      description:
        "Platform penghubung antara pembeli dan traveler untuk layanan jasa titip barang antar kota/negara.",
      detailedDescription: {
        overview:
          "A web platform built using Laravel that connects customers who want to buy items from other cities or countries with travelers who provide personal shopping services. The system manages order requests, service fees, payment tracking, and withdrawal processes for travelers. The platform includes three main roles: Customer, Traveler, and Admin. Customers can create orders and upload item details, travelers can accept requests and earn service fees, while admins manage platform operations through an admin dashboard built with Filament. The application uses Tailwind CSS and Blade templating for the frontend interface, while Livewire enables dynamic interactions in the admin panel without heavy JavaScript. This project was developed as part of a bootcamp team project, where our team successfully achieved 3rd place among dozens of participating teams.",
        role: "Fullstack Developer (Team Project)",
        // Bagian Prestasi
        achievement:
          "3rd Place Winner among dozens of teams in the IT Bootcamp Competition.",
        responsibilities: [
          "Developing core features for Customer and Traveler roles using Laravel",
          "Implementing order request systems and payment tracking logic",
          "Building a comprehensive admin dashboard using Filament PHP",
          "Designing responsive frontend interfaces with Tailwind CSS and Blade",
        ],
        techStack: {
          frontend: ["Tailwind CSS", "Blade Templating", "Livewire"],
          backend: ["Laravel", "PHP", "MySQL"],
          admin_panel: ["Filament PHP"],
        },
      },
      technologies: [
        "Laravel",
        "Filament",
        "Livewire",
        "MySQL",
        "Tailwind CSS",
      ],
      image: "/assets/images/fotoprojects/jastip1.png",
      images: [
        "/assets/images/fotoprojects/jastip1.png",
        "/assets/images/fotoprojects/jastip2.png",
        "/assets/images/fotoprojects/jastip3.png",
        "/assets/images/fotoprojects/jastip4.png",
      ],
      link: null,
      github: "https://github.com/sryxx16/project-jasa-titip.git",
      type: "webapp",
    },
    {
      id: 4,
      title: "Aplikasi Money Tracking",
      description:
        "Aplikasi mobile pelacak keuangan pribadi untuk mencatat pemasukan dan pengeluaran harian secara digital.",
      detailedDescription: {
        overview:
          "A personal finance tracking mobile application built using Flutter and Firebase to help users manage their daily income and expenses digitally. The application allows users to record financial transactions, categorize expenses, and monitor their financial activity through simple reports and summaries.",
        role: "Mobile Developer",
        responsibilities: [
          "Building mobile UI components using Flutter and Material Design",
          "Implementing user authentication (Register & Login) with Firebase Auth",
          "Developing local database schema and logic using Drift (SQLite)",
          "Managing transaction records and category filtering systems",
          "Creating financial summary reports and data visualization",
        ],
        techStack: {
          mobile_framework: ["Flutter", "Dart"],
          backend_auth: ["Firebase Authentication"],
          local_storage: ["Drift (SQLite)", "Shared Preferences"],
          design_system: ["Material Design 3"],
        },
      },
      technologies: ["Flutter", "Firebase Auth", "SQLite", "Drift", "Dart"],
      image: "/assets/images/fotoprojects/money-tracking/mt1.jpeg",
      images: [
        "/assets/images/fotoprojects/money-tracking/mt1.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt2.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt3.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt4.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt5.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt6.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt7.jpeg",
        "/assets/images/fotoprojects/money-tracking/mt8.jpeg",
      ],
      link: null,
      github: "https://github.com/sryxx16/money-tracking.git",
      type: "mobileapp",
    },
  ],

  certificates: [
    {
      id: 1,
      title: "Sertifikat HKI Web Jasa Titip",
      issuer: "IT Bootcamp UBSI",
      year: "2025",
      description:
        "Penghargaan Hak Kekayaan Intelektual (HKI) atas pengembangan Sistem Informasi Layanan Jasa Titip berbasis Web. Mengamankan hak cipta dari arsitektur perangkat lunak dan desain UI/UX yang telah dibangun.",
      image:
        "/assets/images/sertif/EC002025106321_sertifikat_2025-08-07-1_page-0001.jpg",
      images: [
        "/assets/images/sertif/EC002025106321_sertifikat_2025-08-07-1_page-0001.jpg",
        "/assets/images/sertif/EC002025106321_sertifikat_2025-08-07-1_page-0002.jpg",
      ],
      type: "carousel",
    },
    {
      id: 2,
      title: "PCAP : Programing Essentials in Python",
      issuer: "CISCO",
      year: "2024",
      description:
        "Sertifikasi resmi dari CISCO yang memvalidasi pemahaman mendalam tentang konsep pemrograman dasar hingga menengah menggunakan bahasa Python, termasuk struktur data, algoritma, dan OOP.",
      image: "/assets/images/sertif/17230348_page-0001.jpg",
      type: "single",
    },
    {
      id: 3,
      title: "Fundamental Front-End Web",
      issuer: "Coding Studio",
      year: "2024",
      description:
        "Sertifikat kelulusan dalam membangun antarmuka web interaktif. Menguasai fundamental HTML5, CSS3, JavaScript modern, serta prinsip desain responsif untuk berbagai ukuran layar.",
      image: "/assets/images/sertif/codingstudio.png",
      type: "single",
    },
    {
      id: 4,
      title: "IT Bootcamp Software Dev",
      issuer: "IT Bootcamp UBSI",
      year: "2025",
      description:
        "Menyelesaikan program intensif Software Development. Fokus pada praktik pembuatan aplikasi nyata dari tahap perencanaan, coding, hingga deployment menggunakan teknologi web masa kini.",
      image:
        "/assets/images/sertif/SertifikatDigitalmhs_20251110_002358_page-0001.jpg",
      images: [
        "/assets/images/sertif/SertifikatDigitalmhs_20251110_002358_page-0001.jpg",
      ],
      type: "carousel",
    },
  ],

  contacts: {
    email: "suryadaffaf@gmail.com",
    whatsapp: "+62 857 1587 9337",
    location: "Cibinong, Indonesia",
    github: "https://github.com/sryxx16",
    linkedin: "www.linkedin.com/in/surya-daffa-fauzi-khoerudin",
    instagram: "https://www.instagram.com/_sur.16/",
  },
};
