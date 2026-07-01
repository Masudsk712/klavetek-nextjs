"use client";

const trustItems = [
  {
    label: "ISO",
    sublabel: "9001:2015",
  },
  {
    label: "BIS Certified",
  },
  {
    label: "IGBC Member",
  },
  {
    label: "Make in India",
  },
];

export default function TrustBar() {
  return (
    <div className="relative z-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200">
          
          {/* Trusted By */}
          <div className="lg:pr-8 mb-4 lg:mb-0">
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-600">
                Trusted by{" "}
                <span className="text-emerald-600 text-lg">500+</span>{" "}
                <span className="text-slate-900 font-bold">Builders</span>
              </p>
            </div>
          </div>

          {/* Features */}
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 lg:px-8">
              <div className="flex flex-col items-center justify-center">
                <span className="text-sm font-semibold text-slate-800">
                  {item.label}
                </span>
                {item.sublabel && (
                  <span className="text-xs text-slate-500">{item.sublabel}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}