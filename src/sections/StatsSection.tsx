import { motion } from 'framer-motion'
import AnimatedCounter from '../components/AnimatedCounter'

const stats = [
  { value: 3026, suffix: '+', label: 'PACIENTES SATISFECHOS' },
  { value: 10, suffix: '', label: 'ESPECIALIDADES DISPONIBLES' },
  { value: 100, suffix: '%', label: 'CUIDADO PERSONALIZADO' },
  { value: 10, suffix: 'H', label: 'HORAS DE ATENCIÓN DIARIA' },
]

export default function StatsSection() {
  return (
    <section style={{ background: 'var(--green)', padding: '80px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '0',
        }}
          className="stats-grid"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '20px 24px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontStyle: 'italic',
                fontSize: 'clamp(48px, 5vw, 72px)',
                color: 'white',
                lineHeight: 1,
              }}>
                <AnimatedCounter
                  target={s.value}
                  suffix={s.suffix}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontStyle: 'italic',
                    color: 'white',
                  }}
                />
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '11px',
                letterSpacing: '0.1em',
                color: 'rgba(255,255,255,0.6)',
                marginTop: '10px',
                textTransform: 'uppercase',
              }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '48px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 700,
            fontSize: '20px',
            color: 'white',
          }}>
            ¿Lista para tu primera cita?
          </span>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'white',
              color: 'var(--green)',
              borderRadius: '8px',
              padding: '12px 24px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '14px',
              transition: 'all 0.25s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.2)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            AGENDAR →
          </a>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .stats-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.15);
            padding: 24px 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
