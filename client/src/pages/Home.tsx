/*
 * Design: Royal Gold - فخامة ذهبية على خلفية بيضاء
 * Colors: White bg, Gold (#D4A843) accents, Dark text
 * Typography: Cairo font (Arabic)
 * WhatsApp: 966597761902 only
 */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Shield, Zap, Headphones, Tv, Users, CheckCircle, ChevronUp, MessageCircle, Send, Phone, User } from "lucide-react";
import { packages, WHATSAPP_NUMBER } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const activeSubsLink = waLink(
  "السلام عليكم اشتراك iptv ارغب في الاشتراك في الباقه الي يختارها مع السعر وتحتها زودني بطريقه الدفع"
);

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Contact form state
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `السلام عليكم اشتراك iptv\nالاسم: ${formData.name}\nالهاتف: ${formData.phone}\nالاستفسار: ${formData.message}`;
    window.open(waLink(msg), "_blank");
    setFormSent(true);
    setTimeout(() => setFormSent(false), 3000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#D4A843]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#D4A843]/5 to-transparent rounded-full blur-3xl" />
        
        <div className="container relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <img src="/manus-storage/logo_f8a3b57b.png" alt="اشتراك IPTV" className="w-14 h-14" />
              <h1 className="text-4xl md:text-6xl font-black gold-text">اشتراك IPTV</h1>
              <span className="text-3xl">✨</span>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 font-semibold mt-4">
              ارتق إلى قمة تجربة المشاهدة
            </p>
            <p className="text-gray-500 mt-2 text-lg">
              أفضل اشتراكات IPTV في السعودية والخليج
            </p>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto"
          >
            {[
              { icon: <Tv className="w-5 h-5" />, text: "أكثر من 15000 قناة" },
              { icon: <Star className="w-5 h-5" />, text: "جودة حتى 4K" },
              { icon: <Headphones className="w-5 h-5" />, text: "دعم فني 24/7" },
              { icon: <Zap className="w-5 h-5" />, text: "تفعيل خلال دقائق" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 bg-gray-50 rounded-xl py-3 px-4 border border-[#D4A843]/10">
                <span className="text-[#D4A843]">{item.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <a
              href="#packages"
              className="gold-gradient text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              طلب اشتراك الآن
            </a>
            <a
              href={waLink("السلام عليكم اشتراك iptv ارغب في الاشتراك")}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#D4A843] text-[#D4A843] font-bold py-3 px-8 rounded-xl hover:bg-[#D4A843] hover:text-white transition-all duration-300"
            >
              تواصل عبر الواتساب
            </a>
          </motion.div>

          {/* Stats with Active Subscriptions Counter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 text-center"
          >
            <div>
              <p className="text-3xl font-black gold-text">50,000+</p>
              <p className="text-sm text-gray-500">عميل راضي</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black gold-text flex items-center gap-2">
                <LiveCounter />
              </p>
              <p className="text-sm text-gray-500">اشتراك نشط</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black gold-text">⭐ 4.9/5</p>
              <p className="text-sm text-gray-500">من التقييمات</p>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div>
              <p className="text-3xl font-black gold-text">24/7</p>
              <p className="text-sm text-gray-500">دعم فني</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="w-full h-1 gold-gradient" />

      {/* Packages Section */}
      <section id="packages" className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <p className="text-[#D4A843] font-bold text-sm mb-2">باقات متميزة</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              باقاتنا المتميزة
            </h2>
            <p className="text-gray-500 mt-3">اختر الباقة المناسبة لك بأسعار تنافسية</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#D4A843] font-bold text-sm mb-2">مميزات متفردة</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              لماذا تختار <span className="gold-text">اشتراك IPTV</span>؟
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, title: "سرعة عالية", desc: "بث بدون تقطيع وتأخير" },
              { icon: <Tv className="w-8 h-8" />, title: "جودة 4K", desc: "أفضل جودة صورة متاحة" },
              { icon: <Headphones className="w-8 h-8" />, title: "دعم 24/7", desc: "فريق دعم متاح دائماً" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl border border-[#D4A843]/15 bg-white hover:gold-shadow transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl gold-gradient flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 gold-gradient">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, value: "50,000+", label: "عميل راضي" },
              { icon: <Tv className="w-8 h-8" />, value: "15,000+", label: "قناة عالمية" },
              { icon: <Zap className="w-8 h-8" />, value: "فوري", label: "تفعيل خلال دقائق" },
              { icon: <Shield className="w-8 h-8" />, value: "256-bit", label: "تشفير آمن" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <div className="flex justify-center mb-3">{item.icon}</div>
                <p className="text-2xl md:text-3xl font-black">{item.value}</p>
                <p className="text-sm text-white/80 mt-1">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews / Testimonials */}
      <section id="reviews" className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#D4A843] font-bold text-sm mb-2">آراء عملائنا</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              ماذا يقول عملاؤنا عن <span className="gold-text">اشتراك IPTV</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "محمد العتيبي", city: "الرياض", rating: 5, text: "خدمة ممتازة وبث بدون تقطيع، أنصح الجميع بالاشتراك. الدعم الفني سريع جداً.", avatar: "👤" },
              { name: "أحمد الحربي", city: "جدة", rating: 5, text: "جودة الصورة خيالية 4K، قنوات الرياضة تعمل بدون أي مشكلة. أفضل اشتراك جربته.", avatar: "👤" },
              { name: "فهد القحطاني", city: "الدمام", rating: 5, text: "تفعيل سريع جداً والأسعار مناسبة. الخدمة ممتازة والدعم متواجد على مدار الساعة.", avatar: "👤" },
              { name: "عبدالله السبيعي", city: "مكة", rating: 4, text: "اشتراك ممتاز وقنوات كثيرة. أنصح فيه وخصوصاً لمن يحب كرة القدم.", avatar: "👤" },
              { name: "خالد الشمري", city: "المدينة", rating: 5, text: "جربت عدة اشتراكات و هذا أفضلهم. سرعة وثبات وجودة عالية.", avatar: "👤" },
              { name: "سعود الرشيدي", city: "الخبر", rating: 5, text: "خدمة عملاء ممتازة ورسبونس سريع. الاشتراك شغال تمام بدون أي مشاكل.", avatar: "👤" },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6 border border-[#D4A843]/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center text-white text-lg">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-xs text-gray-500">{review.city}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${j < review.rating ? "fill-[#D4A843] text-[#D4A843]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#D4A843] font-bold text-sm mb-2">تواصل معنا</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              نموذج تواصل سريع
            </h2>
            <p className="text-gray-500 mt-3">أرسل استفسارك وسيتم الرد عليك خلال دقائق</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto bg-white rounded-2xl p-8 border border-[#D4A843]/15 shadow-sm"
          >
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">الاسم</label>
                <div className="relative">
                  <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">رقم الهاتف</label>
                <div className="relative">
                  <Phone className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="05XXXXXXXX"
                    className="w-full pr-10 pl-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">رسالتك</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب استفسارك هنا..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#D4A843] focus:ring-2 focus:ring-[#D4A843]/20 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full gold-gradient text-white font-bold py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                {formSent ? "تم الإرسال بنجاح ✓" : "إرسال عبر الواتساب"}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Setup Methods */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#D4A843] font-bold text-sm mb-2">روابط تهمك</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              طرق التفعيل
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { emoji: "📱", title: "أندرويد و Google TV", desc: "يمكنك تفعيل الاشتراك بسهولة على أجهزة أندرويد و Google TV باتباع الخطوات البسيطة" },
              { emoji: "🍎", title: "آيفون و Apple TV", desc: "تفعيل سهل على أجهزة Apple مع أفضل جودة صورة" },
              { emoji: "📺", title: "سامسونج و LG", desc: "طريقة التفعيل على أجهزة التلفاز الذكية" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 border border-[#D4A843]/10 text-center"
              >
                <span className="text-4xl mb-3 block">{item.emoji}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Banner */}
      <section className="py-12 bg-gray-900 text-center">
        <div className="container">
          <h3 className="text-2xl font-bold text-white mb-3">هل تواجه مشكلة في التفعيل؟</h3>
          <p className="text-gray-400 mb-6">فريق الدعم الخاص بنا متاح 24/7 للمساعدة</p>
          <a
            href={waLink("السلام عليكم اشتراك iptv أحتاج مساعدة في التفعيل")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gold-gradient text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            تواصل عبر الواتساب
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="container">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/manus-storage/logo_f8a3b57b.png" alt="اشتراك IPTV" className="w-10 h-10" />
            <span className="text-xl font-bold text-white">اشتراك IPTV</span>
          </div>
          <p className="text-center text-sm text-gray-500 mb-6">أفضل خدمات البث المباشر والأفلام والمسلسلات بجودة 4K</p>
          <div className="flex flex-wrap items-center justify-center gap-6 mb-6 text-sm">
            <a href="#packages" className="hover:text-[#D4A843] transition-colors">الباقات</a>
            <a href="#reviews" className="hover:text-[#D4A843] transition-colors">التقييمات</a>
            <a href="#contact" className="hover:text-[#D4A843] transition-colors">تواصل معنا</a>
            <a href="#faq" className="hover:text-[#D4A843] transition-colors">الأسئلة الشائعة</a>
          </div>
          <a
            href={waLink("السلام عليكم اشتراك iptv")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center block text-[#D4A843] hover:text-[#E8C96A] transition-colors mb-4"
          >
            واتساب: +966 59 776 1902
          </a>
          <p className="text-center text-xs text-gray-600">© 2026 اشتراك IPTV. جميع الحقوق محفوظة.</p>
        </div>
      </footer>

      {/* Scroll to top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-24 left-6 w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all z-40"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}

      <WhatsAppFloat />
    </div>
  );
}

/* Live Subscription Counter */
function LiveCounter() {
  const [count, setCount] = useState(12847);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="flex items-center gap-2">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      {count.toLocaleString("en-US")}
    </span>
  );
}
