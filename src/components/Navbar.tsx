import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ToothLogo = () => (
  <svg viewBox="0 0 60 64" fill="none" width="32" height="34">
    <path
      d="M30 4 C18 4 8 14 8 26 C8 38 14 50 20 58 C23 62 27 64 30 64 C33 64 37 62 40 58 C46 50 52 38 52 26 C52 14 42 4 30 4Z"
      fill="none" stroke="#43A047" strokeWidth="2.5"
    />
    <path
      d="M22 20 C22 16 28 14 30 18 C32 14 38 16 38 20 C38 26 30 32 30 32 C30 32 22 26 22 20Z"
      fill="#43A047"
    />
  </svg>
)

const navLinks = [
  { label: 'INICIO', href: '#hero' },
  { label: 'NOSOTROS', href: '#about' },
  { label: 'SERVICIOS', href: '#services' },
  { label: 'TESTIMONIOS', href: '#testimonials' },
  { label: 'Contacto', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(20px, 4vw, 56px)',
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'background 0.3s, border-bottom 0.3s',
        }}
      >
        {/* Logo */}
        <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <ToothLogo />
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '16px',
              color: 'var(--green)',
              lineHeight: 1.2,
            }}>
              Biodentis
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '11px',
              color: 'var(--text-muted)',
            }}>
              Clínica Dental
            </div>
          </div>
        </a>

        {/* Center links — desktop */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '32px',
        }}
          className="nav-links-desktop"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '13px',
                color: 'var(--text-body)',
                letterSpacing: '0.02em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--green-mid)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-body)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side — desktop */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
          className="nav-right-desktop"
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '12px',
            color: 'var(--green)',
          }}>
            <span style={{ fontSize: '14px' }}>🕐</span>
            L-V 8AM-6PM | Sáb 8AM-2PM
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'var(--green)',
              color: 'white',
              borderRadius: '8px',
              padding: '10px 20px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '13px',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--green-mid)'
              e.currentTarget.style.boxShadow = 'var(--shadow-green)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--green)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Contacto <span>→</span>
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            padding: '8px',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          <span style={{
            width: '22px', height: '2px', background: 'var(--text-dark)',
            borderRadius: '2px', transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
          }} />
          <span style={{
            width: '22px', height: '2px', background: 'var(--text-dark)',
            borderRadius: '2px', transition: 'all 0.3s',
            opacity: mobileOpen ? 0 : 1,
          }} />
          <span style={{
            width: '22px', height: '2px', background: 'var(--text-dark)',
            borderRadius: '2px', transition: 'all 0.3s',
            transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
          }} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="mobile-menu"
            style={{
              position: 'fixed',
              top: '68px',
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(255,255,255,0.98)',
              backdropFilter: 'blur(20px)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '15px',
                  color: 'var(--text-body)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'inline-flex',
                justifyContent: 'center',
                background: 'var(--green)',
                color: 'white',
                borderRadius: '8px',
                padding: '12px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
              }}
            >
              Contacto →
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .nav-right-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
