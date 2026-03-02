import React, { useState } from "react";
import { portfolioData } from "../../data/portfolio";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement form submission logic here
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    {
      icon: "bi-envelope-fill",
      label: "Email",
      value: portfolioData.contacts.email,
      link: `mailto:${portfolioData.contacts.email}`
    },
    {
      icon: "bi-whatsapp",
      label: "WhatsApp",
      value: portfolioData.contacts.whatsapp,
      link: `https://wa.me/${portfolioData.contacts.whatsapp.replace(/\D/g, "")}`
    },
    {
      icon: "bi-geo-alt-fill",
      label: "Lokasi",
      value: portfolioData.contacts.location,
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h6 className="text-cyan-400 uppercase tracking-widest text-sm font-bold mb-2">
            Let's Connect
          </h6>
          <h2 className="text-4xl font-bold text-gray-900">Hubungi Saya</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className="bg-white rounded-3xl shadow-md p-8 md:p-12"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Mari Bekerja Sama!
            </h4>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Saya selalu terbuka untuk mendiskusikan proyek baru, ide kreatif,
              atau tawaran pekerjaan seputar teknologi web.
            </p>

            {/* Contact Items */}
            <div className="space-y-6">
              {contacts.map((contact, idx) => (
                <a
                  key={idx}
                  href={contact.link}
                  className="flex items-center gap-4 hover:translate-x-2 transition-transform"
                >
                  <div className="bg-cyan-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    <i className={`bi ${contact.icon}`}></i>
                  </div>
                  <div>
                    <h6 className="font-bold text-gray-900">{contact.label}</h6>
                    <p className="text-gray-600 text-sm">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white rounded-3xl shadow-md p-8 md:p-12"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama..."
                  className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-400 transition"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email..."
                  className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-400 transition"
                  required
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Hal yang ingin didiskusikan..."
                  className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-400 transition"
                  required
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block font-bold text-gray-900 mb-2">
                  Pesan
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  rows="4"
                  className="w-full bg-gray-100 border-0 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-cyan-400 transition resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 rounded-full flex items-center justify-center gap-2 transition-all mt-2"
              >
                <i className="bi bi-send-fill"></i> Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
