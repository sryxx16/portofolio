import React, { useState, useRef } from "react";
import { portfolioData } from "../../data/portfolio";
import emailjs from "@emailjs/browser"; // Pastikan sudah install: npm install @emailjs/browser

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Kirim email menggunakan EmailJS
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Ganti dengan Service ID EmailJS lo
        "YOUR_TEMPLATE_ID", // Ganti dengan Template ID EmailJS lo
        form.current,
        "YOUR_PUBLIC_KEY", // Ganti dengan Public Key EmailJS lo
      )
      .then(
        (result) => {
          alert("Pesan berhasil terkirim ke email Surya! ✅");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSending(false);
        },
        (error) => {
          alert("Waduh, gagal kirim pesan. Coba lagi ya Bang! ❌");
          setIsSending(false);
        },
      );
  };

  const contacts = [
    {
      icon: "bi-envelope-fill",
      label: "Email",
      value: portfolioData.contacts.email,
      link: `mailto:${portfolioData.contacts.email}`,
    },
    {
      icon: "bi-whatsapp",
      label: "WhatsApp",
      value: portfolioData.contacts.whatsapp,
      link: `https://wa.me/${portfolioData.contacts.whatsapp.replace(/\D/g, "")}`,
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Lokasi",
      value: portfolioData.contacts.location,
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h6 className="text-cyan-400 tracking-[0.2em] text-sm font-bold mb-3 flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-cyan-400"></span>
            LET'S CONNECT
            <span className="w-8 h-[2px] bg-cyan-400"></span>
          </h6>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Hubungi Saya
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
              <h4 className="text-2xl font-bold text-white mb-4">
                Mari Bekerja Sama!
              </h4>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Saya selalu terbuka untuk mendiskusikan proyek baru, ide
                kreatif, atau tawaran pekerjaan seputar teknologi web.
              </p>

              <div className="space-y-8">
                {contacts.map((contact, idx) => (
                  <a
                    key={idx}
                    href={contact.link}
                    className="flex items-center gap-5 group"
                  >
                    <div className="bg-white/5 border border-white/10 text-cyan-400 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-cyan-500 group-hover:text-gray-900 group-hover:scale-110 transition-all">
                      <i className={`bi ${contact.icon}`}></i>
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-300 group-hover:text-cyan-400 transition-colors">
                        {contact.label}
                      </h6>
                      <p className="text-gray-500 text-sm mt-1">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              <form
                ref={form}
                onSubmit={handleSubmit}
                className="space-y-6 relative z-10"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      name="name" // Pastikan sesuai dengan variabel di template EmailJS
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama..."
                      className="w-full bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email" // Pastikan sesuai dengan variabel di template EmailJS
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Masukkan email..."
                      className="w-full bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Hal yang ingin didiskusikan..."
                    className="w-full bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message" // Pastikan sesuai dengan variabel di template EmailJS
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tulis pesan Anda di sini..."
                    rows="5"
                    className="w-full bg-[#0a0f1d]/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-900 font-black py-4 rounded-xl flex items-center justify-center gap-3 transition-all mt-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 text-lg uppercase tracking-wider disabled:opacity-50"
                >
                  {isSending ? "Sedang Mengirim..." : "Kirim Pesan"}{" "}
                  <i className="bi bi-send-fill"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
