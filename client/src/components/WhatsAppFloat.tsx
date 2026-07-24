import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/packages";

export default function WhatsAppFloat() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("السلام عليكم اشتراك iptv")}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#D4A843] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      style={{ boxShadow: "0 4px 20px rgba(212, 168, 67, 0.4)" }}
    >
      <img
        src="/manus-storage/whatsapp-float_368ebdb3.png"
        alt="واتساب"
        className="w-6 h-6"
      />
      <span className="font-bold text-sm hidden sm:inline">تواصل معنا عبر الواتساب</span>
    </a>
  );
}
