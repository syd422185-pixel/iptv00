import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/packages";

const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#D4A843]/10"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src="/manus-storage/logo_f8a3b57b.png" alt="اشتراك IPTV" className="w-10 h-10" />
          <span className="text-xl font-black gold-text">اشتراك IPTV</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#packages" className="text-gray-700 hover:text-[#D4A843] font-medium transition-colors">
            الباقات
          </a>
          <a href="#reviews" className="text-gray-700 hover:text-[#D4A843] font-medium transition-colors">
            التقييمات
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#D4A843] font-medium transition-colors">
            تواصل معنا
          </a>
          <a
            href={waLink("السلام عليكم اشتراك iptv")}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-white font-bold py-2 px-5 rounded-lg hover:shadow-md transition-all duration-300 text-sm"
          >
            تواصل واتساب
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-700"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#D4A843]/10 shadow-lg">
          <div className="container py-4 flex flex-col gap-3">
            <a
              href="#packages"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-[#D4A843] font-medium py-2 transition-colors"
            >
              الباقات
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-[#D4A843] font-medium py-2 transition-colors"
            >
              التقييمات
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="text-gray-700 hover:text-[#D4A843] font-medium py-2 transition-colors"
            >
              تواصل معنا
            </a>
            <a
              href={waLink("السلام عليكم اشتراك iptv")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient text-white font-bold py-3 px-5 rounded-lg text-center text-sm mt-2"
            >
              تواصل واتساب
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
