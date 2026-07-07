"use client";

import { motion } from "framer-motion";
import { Award, Shield } from "lucide-react";

export default function HeroCard() {
  return (
    <div className="w-[280px] xl:w-[300px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative"
      >
        
        {/* Main Glass Card */}
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="relative rounded-[20px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-3xl shadow-2xl overflow-hidden"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(0,0,0,0.7), 0 0 80px -30px rgba(16,185,129,0.25)"
          }}
        >
          {/* Premium Shimmer Top */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
          
          {/* Premium Shimmer Bottom */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* ISO Badge */}
          <div className="flex items-start justify-between mb-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-1.5">
                Premium AAC Blocks
              </p>
              <p className="text-[11px] text-slate-400 font-medium">
                ISO Certified Quality
              </p>
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="relative flex-shrink-0"
            >
              <div className="h-14 w-14 rounded-full border border-emerald-400/40 flex items-center justify-center bg-emerald-500/10 backdrop-blur-2xl">
                <Award className="h-6 w-6 text-emerald-400" />
              </div>
              
              {/* Rotating ISO Badge */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-1.5 -right-1.5 h-10 w-10 rounded-full bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg border-2 border-white/30"
              >
                <span className="text-[10px] font-black text-white tracking-wide">ISO</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Clean Stats */}
          <div className="space-y-2.5 mb-6">
            <StatRow icon={<Shield className="h-4 w-4 text-emerald-400" />} label="20+ Years Experience" />
            <StatRow icon={<Shield className="h-4 w-4 text-emerald-400" />} label="500+ Projects Complete" />
            <StatRow icon={<Shield className="h-4 w-4 text-emerald-400" />} label="50+ Cities Coverage" />
          </div>

          {/* CTA Link */}
          <motion.a
            href="#products"
            whileHover={{ x: 4 }}
            className="group flex items-center gap-3 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
          >
            <span>View Products</span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Subtle Bottom Shadow */}
        <div className="absolute -bottom-4 left-4 right-4 h-8 bg-gradient-to-t from-black/40 to-transparent blur-xl -z-10" />
      </motion.div>
    </div>
  );
}

function StatRow({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className="flex items-center gap-3 py-2.5 border-b border-white/5 last:border-0"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex-shrink-0">
        {icon}
      </div>
      <span className="text-sm font-medium text-white/90">{label}</span>
    </motion.div>
  );
}