import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const checks = [
  'Especialista en Odontología Integral — Todas las especialidades',
  'Pionera en Sedación Consciente en Santo Domingo',
  '"Dientes sanos para una vida sana" — su filosofía de salud',
]

export default function CEOSection() {
  return (
    <section id="ceo" style={{ background: 'var(--bg-white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '42% 1fr',
          gap: '64px',
          alignItems: 'center',
        }}
          className="ceo-grid"
        >
          {/* Photo left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative' }}
          >
            {/* Green blob behind */}
            <div style={{
              position: 'absolute',
              top: '40px',
              left: '-20px',
              width: '280px',
              height: '280px',
              borderRadius: '50%',
              background: 'var(--green-pale)',
              filter: 'blur(60px)',
              zIndex: 0,
            }} />

            <img
              src="/images/CEO1.jpeg"
              alt="Dra. Maikeiry Báez"
              style={{
                width: '100%',
                borderRadius: '20px',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'top',
                boxShadow: 'var(--shadow-lg)',
                position: 'relative',
                zIndex: 1,
              }}
            />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                position: 'absolute',
                bottom: '28px',
                right: '-24px',
                zIndex: 2,
                background: 'white',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-md)',
                padding: '16px 20px',
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
                  fontSize: '13px',
                  color: 'var(--text-dark)',
                }}>
                  💚 Dra. Maikeiry Báez
                </div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400,
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                }}>
                  Directora · Odontología Integral
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text right */}
          <div>
            <SectionLabel text="DIRECTORA & FUNDADORA" />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontStyle: 'italic',
                fontSize: 'var(--text-h2)',
                color: 'var(--text-dark)',
                lineHeight: 1.1,
                marginTop: '20px',
              }}
            >
              Dra. Maikeiry
              <br />
              Báez
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                width: '60px',
                height: '3px',
                background: 'var(--green)',
                marginTop: '20px',
                transformOrigin: 'left',
              }}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginTop: '20px',
              }}
            >
              La Dra. Maikeiry Báez es la fundadora de este consultorio
              odontológico, creado con la misión de ofrecer dientes sanos
              para una vida sana. Con un equipo de profesionales con
              experiencia y conocimientos actualizados, brinda la mejor
              atención personalizada para cada paciente.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginTop: '16px',
              }}
            >
              Pionera en el servicio de Sedación Consciente en Santo
              Domingo, la Dra. Báez ofrece una alternativa única para
              pacientes con ansiedad dental, garantizando tratamientos
              cómodos y libres de estrés.
            </motion.p>

            {/* Checks */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {checks.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-body)',
                  }}
                >
                  <span style={{ color: 'var(--green)', fontWeight: 700, fontSize: '16px', flexShrink: 0 }}>✓</span>
                  {text}
                </motion.div>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 1 }}
              style={{
                background: 'var(--green-pale)',
                borderLeft: '3px solid var(--green)',
                borderRadius: '0 10px 10px 0',
                padding: '20px 24px',
                marginTop: '28px',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-body)',
                fontStyle: 'italic',
                fontSize: '14px',
                color: 'var(--text-body)',
                lineHeight: 1.7,
              }}>
                "¡Tu sonrisa es nuestra prioridad! Agenda tu cita hoy mismo
                y descubre el cuidado personalizado que mereces."
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '13px',
                color: 'var(--green)',
                marginTop: '8px',
              }}>
                — Dra. Maikeiry Báez
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--green)',
                color: 'white',
                borderRadius: '8px',
                padding: '14px 28px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '14px',
                marginTop: '28px',
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
              AGENDAR CON LA DRA. →
            </motion.a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ceo-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
