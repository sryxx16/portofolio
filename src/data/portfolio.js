export const portfolioData = {
  name: "SURYA DAFFA FAUZI KHOERUDIN",
  title: "Web Developer | Mobile Programming | Network Engineer",
  description:
    "Saya adalah mahasiswa IT asal Cibinong yang passionate dalam merancang dan membangun solusi digital. Terbiasa menggunakan Laravel, JavaScript, dan teknologi modern lainnya untuk menciptakan website yang fungsional dan rapi.",
  about:
    "Saya adalah mahasiswa IT yang memiliki ketertarikan di bidang Web Development dan Software Development. Terbiasa membangun aplikasi berbasis JavaScript dan Laravel, serta memahami konsep dasar backend, database, dan logika aplikasi. Saya memiliki semangat belajar tinggi, terbiasa mengerjakan project secara mandiri, dan terus mengembangkan kemampuan melalui praktik langsung. Saat ini, saya terbuka untuk freelance, kerja remote, maupun kolaborasi project, dengan fokus pada solusi yang fungsional, rapi, dan mudah dikembangkan.",

  profileImage: "/assets/images/fotoprojects/fotoprofile2.png", //
  skills: [
    {
      name: "Laravel",
      icon: "bi-layers-half",
      logo: "https://cdn.simpleicons.org/laravel",
      color: "text-red-600",
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
      name: "Docker",
      icon: "bi-box-seam",
      logo: "https://cdn.simpleicons.org/docker",
      color: "text-blue-400",
    },
    {
      name: "GitHub",
      icon: "bi-github",
      // Khusus GitHub kita kasih /white belakangnya biar putih di background gelap
      logo: "https://cdn.simpleicons.org/github/white",
      color: "text-white",
    },
  ],

  projects: [
    {
      id: 1,
      title: "Website E-Commerce Jakarta Scootter Shop",
      description: "Website toko online sperpart vespa clasic.",
      image: "/assets/images/fotoprojects/Jakarta scooter shop.png",
      link: "https://jakartascootershop.com/",
      github: null,
      type: "ecommerce",
    },
    {
      id: 2,
      title: "Aplikasi Jastip Web",
      description:
        "Sistem informasi layanan jasa titip yang telah terdaftar HKI. Memudahkan proses pemesanan secara terorganisir.",
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
      id: 3,
      title: "Landing Page Kopi",
      description:
        "Desain landing page yang responsif dan menarik untuk sebuah kedai kopi fiktif.",
      image: "https://via.placeholder.com/600x400",
      link: "#",
      github: "#",
      type: "landing",
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
