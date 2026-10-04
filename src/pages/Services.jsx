import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services, differentiators } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimateOnScroll';
import useScrollTop from '../hooks/useScrollTop';

const process = [
  { phase: 'Discovery', icon: '🔎', desc: 'We analyse your product brief, target market, quality benchmarks, and budget to build a precise sourcing plan.' },
  { phase: 'Supplier Identification', icon: '🏭', desc: 'Our team searches our verified network of 500+ manufacturers across Asia to shortlist right-fit suppliers.' },
  { phase: 'Negotiation & Sampling', icon: '💬', desc: 'We negotiate pricing, terms, and lead times, then arrange and evaluate product samples on your behalf.' },
  { phase: 'Production Monitoring', icon: '📋', desc: 'We act as your on-ground representative — tracking production progress, quality checks, and timelines.' },
  { phase: 'Export & Logistics', icon: '🚢', desc: 'We coordinate all documentation, customs clearance, and shipment execution for smooth international delivery.' },
];

const additional = [
  { title: 'Private Label Development', desc: 'We help brands build exclusive product lines with custom branding from verified manufacturers.' },
  { title: 'Trade Show Representation', desc: 'Our team represents your sourcing needs at major Asian trade shows and exhibitions.' },
  { title: 'Compliance Documentation', desc: 'Full support for export documentation, certificates of origin, and import compliance.' },
  { title: 'ESG Auditing', desc: 'Third-party audits of supplier facilities to verify ethical labor practices and environmental compliance.' },
];

export default function Services() {
  useScrollTop();

  return (
    <main className="overflow-x-hidden">

      {/* ── Header ── */}
      <section className="relative pt-36 pb-24 overflow-hidden surface-soft">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-200/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-slate-100 rounded-full blur-3xl" />
        </div>
        {/* Animated grid dots */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white text-slate-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-slate-200"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Everything Your Sourcing<br />
            <span className="text-amber-600">Operation Needs</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto"
          >
            From supplier discovery to your warehouse — we handle the entire sourcing chain
            so you can focus on growing your brand.
          </motion.p>
        </div>
      </section>

      {/* ── Core Services ── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeUp>
            <SectionHeading
              tag="Core Services"
              title="What Merchant Minds Delivers"
              subtitle="Six pillars of our buying agency operation, designed for international clients."
            />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="relative bg-white rounded-3xl p-9 border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-2xl transition-shadow duration-400 overflow-hidden group h-full"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="text-5xl mb-6 inline-block"
                    >
                      {service.icon}
                    </motion.div>
                    <div className="w-8 h-0.5 bg-amber-400 mb-5 group-hover:w-16 transition-all duration-500 rounded" />
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(99,102,241,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="How It Works"
              title="Our End-to-End Sourcing Process"
              subtitle="A proven 5-phase methodology that delivers quality products on time, every time."
            />
          </FadeUp>
          <div className="max-w-4xl mx-auto">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-7 items-start mb-6 group"
              >
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-16 h-16 bg-linear-to-br from-blue-700 to-blue-900 group-hover:from-amber-500 group-hover:to-orange-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-all duration-400"
                  >
                    {p.icon}
                  </motion.div>
                  {i < process.length - 1 && (
                    <div className="w-0.5 h-6 bg-linear-to-b from-blue-300 to-blue-100 mt-2" />
                  )}
                </div>
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white rounded-2xl p-6 flex-1 border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 mt-2"
                >
                  <div className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">
                    Phase {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{p.phase}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Differentiators ── */}
      <section className="py-28 relative overflow-hidden surface-soft">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeUp>
            <SectionHeading
              tag="Technology Edge"
              title="Tech-Powered Sourcing"
              subtitle="We leverage cutting-edge tools to deliver smarter, faster, more transparent sourcing."
            />
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white border border-slate-100 shadow-sm rounded-3xl p-9 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="text-4xl mb-6 inline-block"
                  >
                    {d.icon}
                  </motion.div>
                  <div className="w-8 h-0.5 bg-amber-400 mb-5 group-hover:w-16 transition-all duration-500 rounded" />
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{d.title}</h3>
                  <ul className="space-y-3">
                    {d.points.map((point, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                        className="flex items-start gap-3 text-slate-600 text-sm"
                      >
                        <span className="text-amber-600 mt-0.5 shrink-0 font-bold">✓</span>
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Additional Services ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="Also Available"
              title="Additional Services"
              subtitle="Specialized offerings for brands with complex sourcing requirements."
            />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 gap-6">
            {additional.map((s, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ x: 8, borderColor: 'rgb(191 219 254)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="flex gap-5 p-7 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow duration-300 group"
                >
                  <div className="w-11 h-11 bg-blue-100 group-hover:bg-blue-800 rounded-2xl flex items-center justify-center text-blue-800 group-hover:text-white font-black text-sm shrink-0 transition-all duration-300 shadow-sm">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">{s.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Transparent, Commission-Based Pricing
          </h2>
          <p className="text-slate-600 text-xl mb-10">
            No hidden fees. Get a customised quote based on your product volume and complexity.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="px-9 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
              >
                Get a Custom Quote
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/about"
                className="px-9 py-4 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-2xl border border-slate-300 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
