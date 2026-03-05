import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import AnimatedCounter from '../components/AnimatedCounter'

const slideUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
})

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function HeroSection() {
  return (
    <section
      style={{
        margin: '16px',
        borderRadius: '24px',
        overflow: 'hidden',
        height: '88vh',
        minHeight: '600px',
        position: 'relative',
      }}
    >
      {/* Background Image */}
      <img
        src="/images/procedimiento.jpeg"
        alt="Consultorio dental profesional"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Green Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            160deg,
            rgba(13,34,24,0.78) 0%,
            rgba(13,34,24,0.52) 45%,
            rgba(13,34,24,0.18) 100%
          )`,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 'clamp(28px, 5vw, 48px) clamp(24px, 5vw, 64px)',
        }}
      >
        {/* Top area */}
        <div>
          <motion.div {...fadeIn(0.3)}>
            <SectionLabel text="MEJOR CUIDADO DENTAL" light />
          </motion.div>
        </div>

        {/* Middle — Title + description + CTA */}
        <div style={{ maxWidth: '650px' }}>
          {/* Title */}
          <div>
            <motion.div {...slideUp(0.5)}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'var(--text-hero)',
                  lineHeight: 1.05,
                  color: 'white',
                  display: 'block',
                }}
              >
                Dientes Sanos
              </span>
            </motion.div>

            <motion.div {...slideUp(0.65)}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  fontSize: 'var(--text-hero)',
                  lineHeight: 1.05,
                  color: 'white',
                  display: 'block',
                }}
              >
                Para Una
              </span>
            </motion.div>

            <motion.div {...slideUp(0.8)}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: 'var(--text-hero)',
                  lineHeight: 1.05,
                  color: 'var(--green-light)',
                  display: 'block',
                }}
              >
                Vida Sana.{' '}
                <span style={{ fontStyle: 'normal' }}>💚</span>
              </span>
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            {...fadeIn(0.95)}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '400px',
              marginTop: '24px',
            }}
          >
            En nuestro consultorio ofrecemos una amplia gama de
            servicios para cuidar tu salud bucal. Trabajamos todas
            las especialidades con un equipo profesional actualizado.
          </motion.p>

          {/* CTA */}
          <motion.div
            {...slideUp(1.1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginTop: '32px',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://linktr.ee/maikeirybaez"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                color: 'var(--green)',
                borderRadius: '50px',
                padding: '14px 28px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px rgba(255,255,255,0.15)',
              }}
              onMouseEnter={(e) => {
                const t = e.currentTarget
                t.style.background = 'var(--green)'
                t.style.color = 'white'
                t.style.boxShadow = 'var(--shadow-green)'
              }}
              onMouseLeave={(e) => {
                const t = e.currentTarget
                t.style.background = 'white'
                t.style.color = 'var(--green)'
                t.style.boxShadow = '0 4px 20px rgba(255,255,255,0.15)'
              }}
            >
              Agendar Cita
              <span style={{ fontSize: '16px' }}>→</span>
            </a>

            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              O Llama:{' '}
              <a
                href="tel:8093660206"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: 600,
                  borderBottom: '1px solid rgba(255,255,255,0.3)',
                  paddingBottom: '1px',
                }}
              >
                809-366-0206
              </a>
            </span>
          </motion.div>
        </div>

        {/* Bottom row — info left + badge right */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Bottom left info */}
          <motion.p
            {...fadeIn(1.2)}
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 400,
              fontSize: '13px',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '280px',
              lineHeight: 1.6,
            }}
          >
            Consultorio abierto L-V 9AM–7PM.
            <br />
            ¡Agenda hoy mismo!
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            {...fadeIn(1.5)}
            style={{
              position: 'absolute',
              bottom: 'clamp(20px, 3vw, 36px)',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
              }}
            >
              Desliza
            </span>
            <span
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: '18px',
                animation: 'scroll-hint 2s infinite ease-in-out',
              }}
            >
              ↓
            </span>
          </motion.div>

          {/* Badge 783+ — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '16px',
              padding: '22px 28px',
              width: '200px',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: '48px',
                lineHeight: 1,
                color: 'white',
                marginBottom: '6px',
              }}
            >
              <AnimatedCounter
                target={783}
                suffix="+"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontStyle: 'italic',
                  fontSize: '48px',
                  lineHeight: 1,
                  color: 'white',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '12px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.4,
              }}
            >
              Pacientes que confían
              <br />
              en nosotros
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
