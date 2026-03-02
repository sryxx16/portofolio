import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Deteksi scroll untuk mengubah background navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  // Fungsi untuk Smooth Scroll
  const handleSmoothScroll = (e, href) => {
    e.preventDefault(); // Mencegah lompatan instan bawaan HTML
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);

    if (elem) {
      // Menghitung posisi elemen dikurangi tinggi navbar (sekitar 80px) agar tidak tertutup
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsOpen(false); // Otomatis tutup menu mobile kalau link diklik
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 border-b ${
        isScrolled
          ? "bg-[#0a0f1d]/80 border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
          className="text-2xl font-black tracking-tighter text-white hover:text-cyan-400 transition-colors cursor-pointer"
        >
          SURYA<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-cyan-400 transition-colors duration-300 relative group cursor-pointer"
            >
              {link.name}
              {/* Animasi garis bawah saat di-hover biar premium */}
              <span className="absolute -bottom-1.5 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white focus:outline-none hover:text-cyan-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Dropdown (Dibuat lebih smooth transisinya) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#0a0f1d]/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-6 font-bold uppercase text-sm text-gray-300 tracking-wider">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="hover:text-cyan-400 hover:translate-x-2 transition-all duration-300 cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
