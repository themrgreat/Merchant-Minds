import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import {
  heroStats,
  services,
  productCategories,
  whyUs,
  processSteps,
  categoryNote,
  company,
} from "../data/content";
import SectionHeading from "../components/SectionHeading";
import {
  FadeUp,
  FadeIn,
  SlideLeft,
  SlideRight,
  StaggerContainer,
  StaggerItem,
  ScaleIn,
} from "../components/AnimateOnScroll";
import AnimatedCounter from "../components/AnimatedCounter";
import useScrollTop from "../hooks/useScrollTop";

const floatingShapes = [
  { size: 300, x: "75%", y: "10%", delay: 0, opacity: 0.06 },
  { size: 200, x: "85%", y: "55%", delay: 1, opacity: 0.04 },
  { size: 150, x: "15%", y: "70%", delay: 2, opacity: 0.05 },
  { size: 100, x: "5%", y: "20%", delay: 0.5, opacity: 0.07 },
];

export default function Home() {
  useScrollTop();

  return (
    <main className="overflow-x-hidden">
      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-screen flex items-center hero-mesh overflow-hidden">
        {/* Animated floating rings */}
        {floatingShapes.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-slate-300 pointer-events-none"
            style={{
              width: s.size,
              height: s.size,
              left: s.x,
              top: s.y,
              opacity: s.opacity,
            }}
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0] }}
            transition={{
              duration: 7 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: s.delay,
            }}
          />
        ))}

        {/* Glowing orb */}
        <div className="absolute right-0 top-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-36 md:py-44">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 bg-white border border-slate-200 shadow-sm rounded-full px-5 py-2.5 text-slate-600 text-sm mb-10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
              </span>
              Trusted Global Buying Agent · Serving 20+ Countries
            </motion.div>

            {/* Headline */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.07] tracking-tight"
              >
                Simplifying
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.07] tracking-tight gradient-text"
              >
                Global Sourcing,
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-8">
              <motion.h1
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.9,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.07] tracking-tight"
              >
                Seamlessly
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl"
            >
              We bridge international brands with verified manufacturers across
              Asia. End-to-end sourcing, supplier negotiations, and export
              execution — all under one roof.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-amber-500 to-amber-400 text-white font-bold rounded-2xl shadow-xl btn-glow transition-all duration-300 text-base"
                >
                  Get a Free Quote
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 font-semibold rounded-2xl hover:bg-slate-50 shadow-sm transition-all duration-300 text-base"
                >
                  Our Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="absolute bottom-0 left-0 right-0 border-t border-slate-200"
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(16px)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2">
              {heroStats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="py-4 md:py-6 px-2 md:px-4 text-center border-r border-slate-200 last:border-r-0"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-amber-500">
                    <AnimatedCounter target={stat.value} />+
                  </div>
                  <div className="text-slate-500 text-xs mt-1 font-medium tracking-wide uppercase">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────── HOW WE WORK ─────────────── */}
      <section id="how-we-work" className="py-28 bg-slate-50 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading tag="How We Work" title="From Product Idea to Shipment" />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((s) => (
              <StaggerItem key={s.step}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl border border-slate-100 card-glow transition-shadow duration-300 h-full group"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center text-white font-black text-sm mb-5 shadow-lg shadow-amber-500/30">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {s.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─────────────── WHO WE ARE ─────────────── */}
      <section className="py-28 bg-white relative overflow-hidden">
        {/* subtle bg decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-50/60 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <SlideLeft>
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Your International
                <br />
                <span className="text-blue-700">Buying Agent</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-7">
                Merchant Minds acts as your sourcing partner on the ground —
                managing the entire supply chain from verified manufacturer
                discovery to your warehouse door.
              </p>
              <div className="space-y-3 mb-9">
                {[
                  "End-to-end product sourcing",
                  "Supplier negotiations & quality control",
                  "Shipment planning & export execution",
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-blue-700 font-bold text-base group"
                >
                  Learn more about us
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </Link>
              </motion.div>
            </SlideLeft>

            <SlideRight>
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                    alt="Global partnership"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-blue-950/20 to-transparent" />
                </motion.div>
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-5 flex items-center gap-3 border border-slate-100"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-blue-600 to-blue-900 rounded-2xl flex items-center justify-center text-2xl shadow-lg">
                    🌍
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-sm">
                      20+ Countries
                    </div>
                    <div className="text-slate-400 text-xs">
                      International reach
                    </div>
                  </div>
                </motion.div>
                {/* Second badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                  className="absolute -top-5 -right-4 bg-amber-500 rounded-2xl shadow-xl p-4 text-white"
                >
                  <div className="text-2xl font-black">200+</div>
                  <div className="text-xs font-medium text-amber-100">
                    Verified Suppliers
                  </div>
                </motion.div>
              </div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeUp>
            <SectionHeading
              tag="What We Do"
              title="End-to-End Buying Agency Services"
              subtitle="From sourcing to shipment, we manage every step so you can focus on growing your business."
            />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl border border-slate-100 hover:border-blue-100 card-glow transition-shadow duration-300 h-full group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="text-4xl mb-5 inline-block"
                  >
                    {service.icon}
                  </motion.div>
                  <div className="w-8 h-0.5 bg-amber-400 mb-4 group-hover:w-16 transition-all duration-500 rounded" />
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-800 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp delay={0.3} className="text-center mt-12">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 hover:shadow-xl"
              >
                View All Services →
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────── PRODUCT CATEGORIES ─────────────── */}
      <section className="py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="What We Source"
              title="Product Categories We Specialize In"
              subtitle="Home lifestyle products sourced from 200+ verified manufacturers across Asia."
            />
          </FadeUp>
          <FadeIn delay={0.2}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="pb-14"
            >
              {productCategories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 bg-white transition-shadow duration-500"
                  >
                    <div className="relative overflow-hidden h-60">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-transparent to-transparent" />
                      <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold">
                        {cat.name}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {cat.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
              <SwiperSlide>
                <div className="h-full min-h-72 rounded-3xl border-2 border-dashed border-slate-200 bg-slate-50 p-8 flex flex-col justify-center text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{categoryNote.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{categoryNote.text}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </FadeIn>
          <FadeUp delay={0.3} className="text-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-bold rounded-2xl transition-all duration-300"
              >
                Explore All Categories →
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>

      {/* ─────────────── WHY CHOOSE US ─────────────── */}
      <section className="py-28 relative overflow-hidden surface-soft">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-72 h-72 bg-slate-300 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-200 rounded-full blur-3xl opacity-15" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <FadeUp>
            <SectionHeading
              tag="Why Us"
              title="What Makes Merchant Minds Different"
              subtitle="We don't just find factories — we deliver the right outcome for your business."
            />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border-t-2 border-slate-200 hover:border-amber-400 transition-colors duration-300 pt-6"
                >
                  <div className="text-amber-600 font-bold text-sm tracking-widest mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─────────────── CLIENT STORIES ─────────────── */}
      <section className="py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="Our Network"
              title="Currently building our international sourcing network"
            />
          </FadeUp>
        </div>
      </section>

      {/* ─────────────── CTA BANNER ─────────────── */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto px-4 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5 leading-tight">
            Start a sourcing brief
          </h2>
          <p className="text-slate-600 text-xl mb-10">
            Tell us what you need. We'll connect you with the right supplier
            within 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/contact"
                className="px-9 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300"
              >
                Start a Sourcing Request
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <a
                href={`mailto:${company.email}`}
                className="px-9 py-4 bg-white hover:bg-slate-100 text-slate-700 font-semibold rounded-2xl border border-slate-300 transition-all duration-300"
              >
                Email Us Directly
              </a>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
