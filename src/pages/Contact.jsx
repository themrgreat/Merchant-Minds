import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { company } from '../data/content';
import { FadeUp, SlideLeft, SlideRight, StaggerContainer, StaggerItem } from '../components/AnimateOnScroll';
import useScrollTop from '../hooks/useScrollTop';

const countries = [
  'United Kingdom','United States','Germany','France','Netherlands',
  'Australia','Canada','UAE','Saudi Arabia','South Africa',
  'Denmark','Sweden','Norway','Finland','Italy','Spain',
  'Japan','South Korea','Singapore','New Zealand','Other',
];

const init = { name:'', email:'', company:'', country:'', phone:'', category:'', message:'' };

const contactInfo = [
  { icon: '📍', label: 'Address', value: company.address },
  { icon: '📞', label: 'Phone', value: company.phone, href: `tel:${company.phone}` },
  { icon: '✉️', label: 'Email', value: company.email, href: `mailto:${company.email}` },
  { icon: '🕐', label: 'Business Hours', value: 'Mon–Fri, 9:00 AM – 6:30 PM IST' },
];

export default function Contact() {
  useScrollTop();
  const [form, setForm] = useState(init);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.company.trim()) e.company = 'Company name is required.';
    if (!form.country) e.country = 'Please select your country.';
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    else if (!/^\+?[\d\s\-().]{7,20}$/.test(form.phone)) e.phone = 'Enter a valid phone number.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 20) e.message = 'Please provide at least 20 characters.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('loading');
    try {
      await axios.post('https://httpbin.org/post', form);
      setStatus('success');
      setForm(init);
    } catch { setStatus('error'); }
  };

  const field = (name) =>
    `w-full px-4 py-3.5 border rounded-xl text-slate-900 text-sm placeholder-slate-400 outline-none transition-all duration-200 focus:ring-2 ${
      errors[name]
        ? 'border-red-400 bg-red-50/60 focus:ring-red-400/20 focus:border-red-400'
        : 'border-slate-200 bg-white focus:ring-blue-500/20 focus:border-blue-500'
    }`;

  return (
    <main className="overflow-x-hidden">

      {/* ── Header ── */}
      <section className="relative pt-36 pb-24 overflow-hidden surface-soft">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-slate-200/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-slate-100 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 bg-white text-slate-500 text-xs font-bold uppercase tracking-widest rounded-full mb-6 border border-slate-200"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            Start Your Sourcing<br />
            <span className="text-amber-600">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-slate-600 text-xl max-w-2xl mx-auto"
          >
            Our sourcing experts respond within 24 hours with supplier recommendations
            and a free initial consultation.
          </motion.p>
        </div>
      </section>

      {/* ── Main Section ── */}
      <section className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── Left: Info ── */}
            <SlideLeft className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Get In Touch</h2>
                <p className="text-slate-500 leading-relaxed">
                  A team of sourcing specialists based in New Delhi, working with
                  international clients across 30+ countries.
                </p>
              </div>

              <StaggerContainer className="space-y-3">
                {contactInfo.map((c, i) => (
                  <StaggerItem key={i}>
                    <motion.div
                      whileHover={{ x: 5, borderColor: 'rgb(191 219 254)' }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm"
                    >
                      <span className="text-2xl shrink-0">{c.icon}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-slate-800 font-semibold text-sm hover:text-blue-700 transition-colors break-all">
                            {c.value}
                          </a>
                        ) : (
                          <span className="text-slate-800 font-semibold text-sm">{c.value}</span>
                        )}
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* What Happens Next */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative bg-blue-900 rounded-3xl p-8 text-white overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-700/30 rounded-full -translate-y-1/2 translate-x-1/2" />
                <h3 className="font-bold text-lg mb-5 relative">What Happens Next?</h3>
                <div className="space-y-4 relative">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing expert contacts you with initial supplier matches',
                    'Discovery call to align on your requirements',
                    'Formal sourcing brief & quote within 48 hours',
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-xs font-black shrink-0 shadow-md">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-blue-100 text-sm">{s}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </SlideLeft>

            {/* ── Right: Form ── */}
            <SlideRight className="lg:col-span-3">
              <motion.div
                whileHover={{ boxShadow: '0 32px 64px -12px rgba(0,0,0,0.12)' }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-slate-400 text-sm mb-8">We'll get back to you within 24 hours.</p>

                {/* Status banners */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 flex items-start gap-3"
                    >
                      <span className="text-2xl shrink-0">✅</span>
                      <div>
                        <div className="font-bold mb-1">Message sent successfully!</div>
                        <div className="text-sm">Our sourcing team will contact you within 24 hours.</div>
                      </div>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 p-5 bg-rose-50 border border-rose-200 rounded-2xl text-rose-800 flex items-start gap-3"
                    >
                      <span className="text-2xl shrink-0">⚠️</span>
                      <div>
                        <div className="font-bold mb-1">Something went wrong.</div>
                        <div className="text-sm">
                          Please email us directly at{' '}
                          <a href={`mailto:${company.email}`} className="underline font-semibold">{company.email}</a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="John Smith" className={field('name')} />
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mt-1.5 text-rose-500 text-xs font-medium">{errors.name}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="john@company.com" className={field('email')} />
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mt-1.5 text-rose-500 text-xs font-medium">{errors.email}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Company Name <span className="text-rose-400">*</span>
                      </label>
                      <input type="text" name="company" value={form.company} onChange={handleChange}
                        placeholder="Your Company Ltd." className={field('company')} />
                      <AnimatePresence>
                        {errors.company && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mt-1.5 text-rose-500 text-xs font-medium">{errors.company}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Country */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Country <span className="text-rose-400">*</span>
                      </label>
                      <select name="country" value={form.country} onChange={handleChange} className={field('country')}>
                        <option value="">Select your country</option>
                        {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <AnimatePresence>
                        {errors.country && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mt-1.5 text-rose-500 text-xs font-medium">{errors.country}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-400">*</span>
                      </label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        placeholder="+44 20 1234 5678" className={field('phone')} />
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="mt-1.5 text-rose-500 text-xs font-medium">{errors.phone}</motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Category */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">Product Category</label>
                      <select name="category" value={form.category} onChange={handleChange} className={field('category')}>
                        <option value="">Select category (optional)</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Home Décor">Home Décor</option>
                        <option value="Tabletop & Kitchen">Tabletop & Kitchen</option>
                        <option value="Lighting">Lighting</option>
                        <option value="Textiles">Textiles</option>
                        <option value="Gifting & Lifestyle">Gifting & Lifestyle</option>
                        <option value="Other">Other / Multiple</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Message / Sourcing Requirement <span className="text-rose-400">*</span>
                      </label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={5}
                        placeholder="Describe your product requirements, quantity, timeline, or any specific questions..."
                        className={`${field('message')} resize-none`}
                      />
                      <div className="flex justify-between mt-1.5">
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                              className="text-rose-500 text-xs font-medium">{errors.message}</motion.p>
                          )}
                        </AnimatePresence>
                        <span className="text-slate-400 text-xs ml-auto">{form.message.length} chars</span>
                      </div>
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02, y: -2 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.98 } : {}}
                    className="mt-7 w-full py-4 bg-linear-to-r from-blue-800 to-blue-900 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-300 disabled:to-blue-300 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-blue-900/30 hover:shadow-xl flex items-center justify-center gap-3 text-base"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending your message…
                      </>
                    ) : (
                      'Send Message →'
                    )}
                  </motion.button>

                  <p className="mt-4 text-center text-slate-400 text-xs">
                    By submitting, you agree to be contacted by our sourcing team. We never share your data.
                  </p>
                </form>
              </motion.div>
            </SlideRight>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <FadeUp>
        <section className="bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              whileHover={{ scale: 1.005 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="rounded-3xl overflow-hidden h-72 bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center border border-blue-200 shadow-inner"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-blue-900 font-bold text-xl">New Delhi, India</p>
                <p className="text-blue-600 text-sm mt-2">International Buying Agency · Serving 20+ Countries</p>
                <motion.a
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                  href="https://maps.google.com/?q=New+Delhi,India"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-5 px-6 py-2.5 bg-blue-900 text-white text-sm font-bold rounded-xl hover:bg-blue-800 transition-colors shadow-lg"
                >
                  Open in Google Maps
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </FadeUp>

      {/* ── FAQ ── */}
      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h2>
              <p className="text-slate-500 text-lg">Quick answers to common queries from international clients.</p>
            </div>
          </FadeUp>
          <StaggerContainer className="space-y-3">
            {[
              { q: 'What is a buying agent and how do you charge?', a: 'A buying agent acts as your representative on the ground in the supplier\'s country. We charge a transparent commission on the FOB value of goods sourced — no hidden fees.' },
              { q: 'How quickly can you find suppliers?', a: 'We typically identify and shortlist suitable suppliers within 48 hours of receiving a detailed product brief. Sampling can begin within 1–2 weeks.' },
              { q: 'What is the minimum order quantity (MOQ)?', a: 'MOQ varies by product category and supplier. We work with brands at various scales — from growing startups to established retailers. Contact us with your volume.' },
              { q: 'Do you handle export documentation?', a: 'Yes. We coordinate all export documentation including commercial invoices, packing lists, certificates of origin, and compliance documentation required by your country.' },
              { q: 'Which countries do you export to?', a: 'We export to 30+ countries including the UK, EU, USA, Australia, UAE, Scandinavia, and more. If your country isn\'t listed, contact us — we can almost certainly help.' },
            ].map((faq, i) => (
              <StaggerItem key={i}>
                <motion.details
                  className="group bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors duration-300"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-slate-900 hover:text-blue-800 transition-colors list-none">
                    {faq.q}
                    <span className="text-slate-400 group-open:rotate-180 transition-transform duration-300 shrink-0 ml-4">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </motion.details>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </main>
  );
}
