import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { missionVision, differentiators, company } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { FadeUp, FadeIn, SlideLeft, SlideRight, StaggerContainer, StaggerItem, ScaleIn } from '../components/AnimateOnScroll';
import useScrollTop from '../hooks/useScrollTop';

const timeline = [
  { year: '2020', event: 'Founded in New Delhi with focus on home lifestyle categories' },
  { year: '2021', event: 'Expanded supplier network to 200+ verified manufacturers across Asia' },
  { year: '2022', event: 'Launched tech-driven quality inspection and real-time tracking system' },
  { year: '2023', event: 'Crossed 30+ export countries and 10,000 fulfilled orders' },
  { year: '2024', event: 'Integrated AI trend forecasting tools for proactive sourcing' },
  { year: '2025', event: 'Achieved 98% client satisfaction across all international markets' },
];

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'Transparent, honest dealings with every client and supplier.' },
  { icon: '⚡', title: 'Speed', desc: 'Fast supplier identification and quote turnaround within 48 hours.' },
  { icon: '🎯', title: 'Precision', desc: 'Right-fit manufacturers for your exact category and quality bar.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Ethical sourcing aligned with international ESG standards.' },
];

const stats = [
  { label: 'Founded', value: '2020' },
  { label: 'Countries', value: '30+' },
  { label: 'Suppliers', value: '500+' },
  { label: 'Orders', value: '10K+' },
];

export default function About() {
  useScrollTop();

  return (
    <main className="overflow-x-hidden">

      {/* ── Page Header ── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl" />
        </div>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-white/10 pointer-events-none"
            style={{ width: 200 + i * 120, height: 200 + i * 120, right: '-5%', top: '10%' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 18 + i * 6, repeat: Infinity, ease: 'linear' }}
          />
        ))}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/15"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            The Buying Agent That<br />
            <span className="text-amber-400">Works Like Your Own Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-blue-200/75 text-xl max-w-2xl mx-auto"
          >
            We act as your eyes and ears on the ground — managing the entire sourcing
            chain from supplier discovery to your warehouse door.
          </motion.p>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/50 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SlideLeft>
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                Company Overview
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Bridging Manufacturers<br />
                <span className="text-blue-700">with Global Brands</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-5">
                Merchant Minds is a sourcing and buying agency headquartered in New Delhi, India.
                We connect international brands and retailers with verified, high-quality manufacturers
                across South and Southeast Asia.
              </p>
              <p className="text-slate-500 leading-relaxed mb-10">
                Our team combines deep market knowledge with supplier intelligence and operational
                efficiency to deliver a seamless sourcing experience — from product development
                through to final delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    className="text-center p-5 bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100"
                  >
                    <div className="text-3xl font-extrabold text-blue-800">{s.value}</div>
                    <div className="text-slate-500 text-sm mt-1">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </SlideLeft>

            <SlideRight>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Office team"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.7, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  className="absolute -top-6 -right-5 bg-linear-to-br from-amber-500 to-orange-500 text-white rounded-2xl p-5 shadow-2xl"
                >
                  <div className="text-4xl font-black">5+</div>
                  <div className="text-sm font-semibold text-amber-100">Years of<br />Excellence</div>
                </motion.div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading tag="Purpose" title="Our Mission & Vision" />
          </FadeUp>
          <div className="grid md:grid-cols-2 gap-8">
            <ScaleIn delay={0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-blue-900 rounded-3xl p-10 text-white overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-700/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-7 shadow-lg">🎯</div>
                  <h3 className="text-2xl font-bold mb-4">Mission</h3>
                  <p className="text-blue-100 leading-relaxed text-lg">{missionVision.mission}</p>
                </div>
              </motion.div>
            </ScaleIn>
            <ScaleIn delay={0.2}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative bg-linear-to-br from-amber-500 to-orange-500 rounded-3xl p-10 text-white overflow-hidden h-full"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-7 shadow-lg">🌍</div>
                  <h3 className="text-2xl font-bold mb-4">Vision</h3>
                  <p className="text-amber-50 leading-relaxed text-lg">{missionVision.vision}</p>
                </div>
              </motion.div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading tag="Core Values" title="What We Stand For" />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-center p-9 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-shadow duration-300 bg-white group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="text-5xl mb-5 inline-block"
                  >
                    {v.icon}
                  </motion.div>
                  <div className="w-8 h-0.5 bg-amber-400 mx-auto mb-4 group-hover:w-16 transition-all duration-500 rounded" />
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors">{v.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── What Sets Us Apart ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeUp>
            <SectionHeading
              tag="Differentiators"
              title="What Sets Merchant Minds Apart?"
              subtitle="Technology-first approach to sourcing, quality, and sustainability."
              light
            />
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="bg-white/6 border border-white/10 rounded-3xl p-9 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="text-4xl mb-6 inline-block"
                  >
                    {d.icon}
                  </motion.div>
                  <div className="w-8 h-0.5 bg-amber-400 mb-5 group-hover:w-16 transition-all duration-500 rounded" />
                  <h3 className="text-xl font-bold text-white mb-5">{d.title}</h3>
                  <ul className="space-y-3">
                    {d.points.map((p, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.1 }}
                        className="flex items-start gap-3 text-blue-200/75 text-sm"
                      >
                        <span className="text-amber-400 mt-0.5 shrink-0 font-bold">✓</span>
                        {p}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading tag="Our Journey" title="From Startup to Global Partner" />
          </FadeUp>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-200 via-blue-400 to-blue-200" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-6 items-start group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="relative shrink-0 w-16 h-16 bg-linear-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center z-10 shadow-lg shadow-blue-900/20 group-hover:shadow-blue-700/30"
                  >
                    <span className="text-white text-xs font-black">{item.year}</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5, borderColor: 'rgb(191 219 254)' }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-slate-50 rounded-2xl p-5 flex-1 border border-slate-100 mt-3"
                  >
                    <p className="text-slate-700 leading-relaxed">{item.event}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-blue-950 to-blue-900" />
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            Let's Work Together
          </h2>
          <p className="text-blue-200/80 text-xl mb-10">
            Join 500+ international brands that trust Merchant Minds for their sourcing needs.
          </p>
          <motion.div whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-linear-to-r from-amber-500 to-amber-400 text-white font-bold rounded-2xl shadow-2xl btn-glow transition-all duration-300 text-lg"
            >
              Start Your Sourcing Journey →
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
