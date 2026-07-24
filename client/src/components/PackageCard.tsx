/*
 * Package Card - مع "اشتراك الآن" فقط (بدون زر الواتساب)
 * رسالة واتساب: السلام عليكم اشتراك iptv ارغب في الاشتراك في الباقه مع السعر + زودني بطريقه الدفع
 */
import { useState } from "react";
import { WHATSAPP_NUMBER, type PackageData, type PackagePlan } from "@/data/packages";

interface PackageCardProps {
  pkg: PackageData;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);

  const waLink = (plan: PackagePlan) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `السلام عليكم اشتراك iptv\nارغب في الاشتراك في: ${pkg.name}\nالمدة: ${plan.duration}\nالسعر: ${plan.price} ريال سعودي\nزودني بطريقه الدفع`
    )}`;

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-[#0a1628] border border-[#D4A843]/20 hover:border-[#D4A843]/50 transition-all duration-300 flex flex-col"
      style={{ boxShadow: "0 0 30px rgba(212, 168, 67, 0.05)" }}
    >
      {/* محتوى البطاقة */}
      <div className="p-5 flex flex-col flex-1">
        {/* صورة الباقة */}
        <div className="flex justify-center mb-3">
          <div className="w-20 h-20 rounded-xl overflow-hidden border border-[#D4A843]/20 bg-white/5 flex items-center justify-center">
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* اسم الباقة */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-black text-[#D4A843] mb-0.5">{pkg.name}</h3>
          <p className="text-xs text-gray-500">{pkg.description}</p>
        </div>

        {/* خيارات المدة - radio buttons */}
        <div className="space-y-2 mb-4 flex-1">
          {pkg.plans.map((plan, i) => (
            <button
              key={i}
              onClick={() => setSelectedPlan(i)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all duration-200 ${
                selectedPlan === i
                  ? "border-[#D4A843] bg-[#D4A843]/10"
                  : "border-white/10 bg-white/5 hover:border-[#D4A843]/30"
              }`}
            >
              {/* Radio + المدة */}
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${
                    selectedPlan === i
                      ? "border-[#D4A843] bg-[#D4A843]"
                      : "border-gray-500"
                  }`}
                >
                  {selectedPlan === i && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-white font-medium text-sm">{plan.duration}</span>
              </div>

              {/* السعر */}
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-black text-[#D4A843]">
                  {plan.price}
                </span>
                <span className="text-[10px] text-gray-500">ريال</span>
              </div>
            </button>
          ))}
        </div>

        {/* زر اشتراك الآن فقط */}
        <a
          href={selectedPlan !== null ? waLink(pkg.plans[selectedPlan]) : waLink(pkg.plans[0])}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center py-3 rounded-lg font-bold text-sm transition-all duration-300 ${
            selectedPlan !== null
              ? "bg-gradient-to-r from-[#C9952B] via-[#D4A843] to-[#E8C96A] text-white hover:shadow-lg hover:scale-[1.02]"
              : "border-2 border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843]/10"
          }`}
        >
          {selectedPlan !== null ? "اشتراك الآن" : "عرض التفاصيل"}
        </a>
      </div>
    </div>
  );
}
