import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { agencyServices } from "../data/content";
import SectionHeading from "../components/SectionHeading";
import { FadeUp, StaggerContainer, StaggerItem } from "../components/AnimateOnScroll";
import useScrollTop from "../hooks/useScrollTop";

export default function SourcingAgencies() {
  useScrollTop();

  return (
    <main className="overflow-x-hidden">

      {/* ── Header ── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/15"
          >
            For Sourcing Agencies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            For International{" "}
            <span className="text-amber-400">Sourcing Agencies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-blue-200/75 text-xl max-w-2xl mx-auto"
          >
            Need reliable execution in Asia without building your own team?
          </motion.p>
        </div>
      </section>

      {/* ── Partnership ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="Partnership"
              title="Your India / Asia Sourcing Arm"
              subtitle="Merchant Minds can operate as your India / Asia sourcing and product-development arm."
            />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {agencyServices.map((item) => (
              <StaggerItem key={item}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center gap-3 bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:shadow-xl transition-shadow duration-300 h-full"
                >
                  <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center shrink-0 shadow-md">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all duration-300"
              >
                Discuss a Partnership →
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
