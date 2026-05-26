import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { productCategories } from '../data/content';
import SectionHeading from '../components/SectionHeading';
import { FadeUp, FadeIn, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import useScrollTop from '../hooks/useScrollTop';

const allItems = [
  { name: 'Solid Oak Bookshelf', category: 'Furniture', moq: '50 units', lead: '45 days', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=80' },
  { name: 'Ceramic Vase Collection', category: 'Home Décor', moq: '100 units', lead: '30 days', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80' },
  { name: 'Reed Diffuser Set', category: 'Aromatics', moq: '200 units', lead: '21 days', image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=500&q=80' },
  { name: 'Linen Throw Blanket', category: 'Textiles', moq: '150 units', lead: '28 days', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
  { name: 'Rattan Accent Chair', category: 'Furniture', moq: '30 units', lead: '60 days', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&q=80' },
  { name: 'Soy Wax Candle Gift Set', category: 'Aromatics', moq: '300 units', lead: '14 days', image: 'https://images.unsplash.com/photo-1602928298849-325cec8771c0?w=500&q=80' },
];

const filters = ['All', ...productCategories.map((c) => c.name)];

export default function Products() {
  useScrollTop();
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? allItems : allItems.filter((i) => i.category === active);

  return (
    <main className="overflow-x-hidden">

      {/* ── Header ── */}
      <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/15 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-white/15"
          >
            Our Catalogue
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Products We{' '}
            <span className="text-amber-400">Source & Export</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-blue-200/75 text-xl max-w-2xl mx-auto"
          >
            Home lifestyle products across four major categories, sourced from 500+
            verified manufacturers across Asia.
          </motion.p>
        </div>
      </section>

      {/* ── Category Swiper ── */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="Specialization"
              title="Core Product Categories"
              subtitle="Each category backed by a dedicated sourcing desk and verified supplier network."
            />
          </FadeUp>
          <FadeIn delay={0.2}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              breakpoints={{ 768: { slidesPerView: 2 } }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation
              className="pb-14"
            >
              {productCategories.map((cat) => (
                <SwiperSlide key={cat.id}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="grid sm:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-slate-100 min-h-72"
                  >
                    <div className="relative overflow-hidden min-h-56">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-r from-slate-900/40 to-transparent" />
                    </div>
                    <div className="bg-white p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5">{cat.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {cat.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </FadeIn>
        </div>
      </section>

      {/* ── Filtered Product Grid ── */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="Catalogue"
              title="Featured Products"
              subtitle="Sample items from our active sourcing catalogue. Contact us for full specs and MOQ details."
            />
          </FadeUp>

          {/* Filter pills */}
          <FadeUp delay={0.1} className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setActive(f)}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  active === f
                    ? 'bg-blue-900 text-white shadow-lg shadow-blue-900/25'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-800 hover:shadow-md'
                }`}
              >
                {f}
              </motion.button>
            ))}
          </FadeUp>

          {/* Grid with exit/enter animation */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 group h-full"
                  >
                    <div className="relative overflow-hidden h-52">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-slate-900/30 to-transparent" />
                      <span className="absolute top-3 left-3 px-3 py-1.5 bg-blue-900/90 backdrop-blur-sm text-white text-xs font-bold rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-slate-900 text-lg mb-4 group-hover:text-blue-800 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex gap-5 mb-5">
                        <div className="text-sm">
                          <span className="text-slate-400 text-xs block mb-0.5">Min. Order</span>
                          <span className="font-bold text-slate-800">{item.moq}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-slate-400 text-xs block mb-0.5">Lead Time</span>
                          <span className="font-bold text-slate-800">{item.lead}</span>
                        </div>
                      </div>
                      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                        <Link
                          to="/contact"
                          className="block text-center py-3 bg-slate-50 hover:bg-blue-900 text-blue-800 hover:text-white text-sm font-bold rounded-xl border border-slate-200 hover:border-blue-900 transition-all duration-300"
                        >
                          Request Quote →
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Sourcing Process Steps ── */}
      <section className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeading
              tag="Process"
              title="How We Source Your Products"
              subtitle="A streamlined 5-step process from inquiry to your warehouse door."
              light
            />
          </FadeUp>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { step: '01', title: 'Inquiry', desc: 'Share product specs & requirements' },
              { step: '02', title: 'Sourcing', desc: 'Right-fit suppliers found in 48h' },
              { step: '03', title: 'Sampling', desc: 'Samples ordered & quality-checked' },
              { step: '04', title: 'Production', desc: 'Factory monitored throughout' },
              { step: '05', title: 'Delivery', desc: 'Shipped & tracked to your door' },
            ].map((s, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-14 h-14 bg-linear-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-black text-sm shadow-lg shadow-amber-500/30"
                  >
                    {s.step}
                  </motion.div>
                  <h4 className="font-bold text-white mb-2 text-sm">{s.title}</h4>
                  <p className="text-blue-200/65 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeUp>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Don't See What You Need?</h2>
            <p className="text-slate-500 text-lg mb-9">
              We source beyond our catalogue. Tell us your product and we'll find the right manufacturer within 48 hours.
            </p>
            <motion.div whileHover={{ scale: 1.04, y: -3 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-9 py-4 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-2xl shadow-lg hover:shadow-blue-900/30 hover:shadow-xl transition-all duration-300"
              >
                Send Us a Sourcing Request →
              </Link>
            </motion.div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
