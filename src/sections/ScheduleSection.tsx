import { motion } from 'framer-motion'

const ToothLogo = () => (
  <svg viewBox="0 0 60 64" fill="none" width="120" height="128"
    style={{ position: 'absolute', bottom: '20px', right: '20px', opacity: 0.06 }}
  >
    <path d="M30 4 C18 4 8 14 8 26 C8 38 14 50 20 58 C23 62 27 64 30 64 C33 64 37 62 40 58 C46 50 52 38 52 26 C52 14 42 4 30 4Z"
      fill="none" stroke="#43A047" strokeWidth="2.5" />
    <path d="M22 20 C22 16 28 14 30 18 C32 14 38 16 38 20 C38 26 30 32 30 32 C30 32 22 26 22 20Z"
      fill="#43A047" />
  </svg>
)

export default function ScheduleSection() {
  return (
    <section id="schedule" style={{ background: 'var(--bg-section)', padding: '80px 0' }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3vw, 36px)',
            color: 'var(--text-dark)',
            textAlign: 'center',
            marginBottom: '48px',
          }}
        >
          🕐 Nuestro Horario de Atención
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
          className="schedule-grid"
        >
          {/* Schedule card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <ToothLogo />

            {/* Row: L-V */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                color: 'var(--text-dark)',
                letterSpacing: '0.03em',
              }}>
                LUNES A VIERNES
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '14px',
                  color: 'var(--text-body)',
                }}>
                  9:00 AM – 7:00 PM
                </span>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: 'var(--green-bright)',
                  animation: 'pulse-green 2s infinite',
                }} />
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: '11px',
                  color: 'var(--green)',
                }}>
                  Disponible
                </span>
              </div>
            </div>

            {/* Row: Sábados */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                color: 'var(--text-dark)',
              }}>
                SÁBADOS
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '14px',
                color: 'var(--text-muted)',
              }}>
                Consultar disponibilidad
              </span>
            </div>

            {/* Row: Domingos */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px 0',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                color: 'var(--text-dark)',
              }}>
                DOMINGOS
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                }}>
                  Cerrado
                </span>
                <span style={{
                  width: '8px', height: '8px', borderRadius: '50%',
                  background: '#e57373',
                }} />
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '14px',
              color: 'var(--text-body)',
              marginTop: '28px',
            }}>
              ¡Agenda tu cita hoy mismo! 👉📱
            </p>

            <a
              href="tel:8093660206"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--green)',
                color: 'white',
                borderRadius: '8px',
                padding: '12px 24px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                marginTop: '16px',
                transition: 'all 0.25s',
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
              LLAMAR AHORA →
            </a>
          </motion.div>

          {/* Contact card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              background: 'var(--green)',
              borderRadius: '20px',
              padding: '40px',
              color: 'white',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="tel:8093660206" style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: '20px', color: 'white',
              }}>
                📞 809-366-0206
              </a>
              <a href="https://linktr.ee/maikeirybaez" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.85)',
                }}
              >
                🔗 linktr.ee/maikeirybaez
              </a>
              <a href="https://instagram.com/dramaikeirybaez" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', color: 'rgba(255,255,255,0.85)',
                }}
              >
                📷 @dramaikeirybaez
              </a>
            </div>

            <a
              href={`https://wa.me/18093660206?text=${encodeURIComponent('Hola Dra. Maikeiry! Me interesa agendar una cita.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'white',
                color: 'var(--green)',
                borderRadius: '8px',
                padding: '14px 28px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                marginTop: '32px',
                transition: 'all 0.25s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              💬 WhatsApp →
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .schedule-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
