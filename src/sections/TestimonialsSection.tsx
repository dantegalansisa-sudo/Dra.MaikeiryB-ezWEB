import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const testimonials = [
  {
    initials: 'LC',
    name: 'Laura C.',
    treatment: 'Sedación Consciente',
    stars: 5,
    text: 'Tenía muchísimo miedo al dentista desde niña. La Dra. Maikeiry me ofreció la sedación consciente y fue una experiencia completamente diferente. Sin dolor, sin estrés. ¡La recomiendo al 100%!',
  },
  {
    initials: 'RP',
    name: 'Ramón P.',
    treatment: 'Ortodoncia',
    stars: 5,
    text: 'La Dra. Báez es muy profesional y el consultorio está muy bien equipado con radiografía digital. Mi ortodoncia está quedando perfecta y el trato es excelente. Completamente satisfecho.',
  },
  {
    initials: 'YM',
    name: 'Yolanda M.',
    treatment: 'Endodoncia + Prótesis',
    stars: 5,
    text: 'Dientes sanos para una vida sana — y lo cumplen al 100%. Me hicieron endodoncia y prótesis dental y los resultados son increíbles. Personal amable y muy actualizado en técnicas modernas.',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: 'var(--bg-base)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <SectionLabel text="TESTIMONIOS" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: 'var(--text-h2)',
              color: 'var(--text-dark)',
              lineHeight: 1.15,
              marginTop: '20px',
            }}
          >
            Lo Que Dicen
            <br />
            Nuestros Pacientes
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
          className="testimonials-grid"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '36px 28px',
                borderTop: '3px solid var(--green)',
                boxShadow: 'var(--shadow-sm)',
                position: 'relative',
              }}
            >
              {/* Quote mark */}
              <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '70px',
                color: 'var(--green-pale)',
                lineHeight: 1,
                position: 'absolute',
                top: '16px',
                right: '24px',
              }}>
                "
              </span>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {Array.from({ length: t.stars }).map((_, si) => (
                  <span key={si} style={{ color: 'var(--lime)', fontSize: '16px' }}>★</span>
                ))}
              </div>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-body)',
                lineHeight: 1.7,
                marginBottom: '24px',
              }}>
                {t.text}
              </p>

              {/* Avatar + info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--green)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: 'white',
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: 'var(--text-dark)',
                  }}>
                    {t.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                  }}>
                    {t.treatment}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
