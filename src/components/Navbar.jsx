import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { company, navLinks } from '../data/content';
import logo from '../assets/image.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_32px_rgba(0,0,0,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setMenuOpen(false)}>
          <motion.img
            src={logo}
            alt={company.name}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className={`h-10 w-auto object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? scrolled ? 'text-blue-700 bg-blue-50' : 'text-white bg-white/15'
                    : scrolled
                    ? 'text-slate-600 hover:text-blue-800 hover:bg-slate-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{ background: scrolled ? 'rgb(239 246 255)' : 'rgba(255,255,255,0.12)' }}
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="ml-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-linear-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-400/40 hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-current rounded transition-all"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              className="block h-0.5 w-full bg-current rounded"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-full bg-current rounded transition-all"
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-2xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive ? 'bg-blue-50 text-blue-800 font-semibold' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-2 px-4 py-3 bg-linear-to-r from-amber-500 to-amber-400 text-white text-sm font-bold rounded-xl text-center shadow-lg"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
