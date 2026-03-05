import { motion } from 'framer-motion'

const bullets = [
  { icon: '💊', text: 'Ansiedad dental eliminada completamente' },
  { icon: '😴', text: 'Relajación profunda durante el procedimiento' },
  { icon: '🧠', text: 'Completamente consciente y responsivo' },
  { icon: '✅', text: 'Recuperación rápida — vuelves a casa el mismo día' },
]

export default function SedationSection() {
  return (
    <section id="sedation" style={{
      background: 'var(--bg-dark)',
      padding: '120px 0',
      overflow: 'hidden',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '56px',
          alignItems: 'center',
        }}
          className="sedation-grid"
        >
          {/* Text left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(139,195,74,0.2)',
                border: '1px solid rgba(139,195,74,0.35)',
                borderRadius: '50px',
                padding: '7px 16px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: 'var(--lime)',
              }}>
                ⭐ SERVICIO EXCLUSIVO
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'var(--text-h2)',
                lineHeight: 1.15,
                color: 'white',
                marginTop: '24px',
              }}
            >
              Sedación Consciente:
              <br />
              <span style={{ color: 'var(--green-bright)' }}>
                Sin Miedo,
              </span>
              <br />
              Sin Estrés.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                width: '60px',
                height: '3px',
                background: 'var(--green-bright)',
                marginTop: '24px',
                transformOrigin: 'left',
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.75)',
                marginTop: '24px',
                maxWidth: '480px',
              }}
            >
              ¿Tienes miedo al dentista? La sedación consciente te
              permite recibir tu tratamiento dental en un estado de
              relajación profunda, completamente consciente pero sin
              ansiedad, sin dolor y sin estrés. La Dra. Maikeiry Báez
              es una de las pocas especialistas en ofrecer este
              servicio en Santo Domingo.
            </motion.p>

            {/* Bullets */}
            <div style={{ marginTop: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{b.icon}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.85)',
                  }}>
                    {b.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--green-bright)',
                color: 'white',
                borderRadius: '8px',
                padding: '14px 28px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                marginTop: '32px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--green-mid)'
                e.currentTarget.style.boxShadow = 'var(--shadow-green)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--green-bright)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              AGENDAR SEDACIÓN →
            </motion.a>
          </div>

          {/* Image right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Blob verde behind */}
            <div style={{
              position: 'absolute',
              top: '-30px',
              right: '-30px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'var(--green)',
              opacity: 0.15,
              filter: 'blur(60px)',
            }} />

            <img
              src="/images/procedimiento.jpeg"
              alt="Sedación Consciente"
              style={{
                width: '100%',
                borderRadius: '20px',
                boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                position: 'relative',
                zIndex: 1,
              }}
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '-20px',
                zIndex: 2,
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '14px 20px',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'var(--green-bright)',
                animation: 'pulse-green 2s infinite',
              }} />
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '12px',
                  color: 'var(--text-dark)',
                }}>
                  Dra. Maikeiry Báez
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}>
                  Sedación Consciente
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .sedation-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
