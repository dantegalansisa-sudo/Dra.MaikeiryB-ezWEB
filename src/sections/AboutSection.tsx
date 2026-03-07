import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const photos = [
  { src: '/images/CEO.jpeg', rotate: -8, radius: '16px 4px 4px 16px' },
  { src: '/images/CEO2.jpeg', rotate: 5, radius: '4px 16px 16px 4px' },
  { src: '/images/procedimiento.jpeg', rotate: 7, radius: '16px 4px 4px 16px' },
  { src: '/images/CEO2.jpeg', rotate: -5, radius: '4px 16px 16px 4px' },
]

export default function AboutSection() {
  return (
    <section id="about" style={{ background: 'var(--bg-white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '22% 1fr 22%',
          alignItems: 'center',
          gap: '24px',
        }}
          className="about-grid"
        >
          {/* Left photos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            height: '380px',
          }}>
            {[0, 1].map((i) => (
              <motion.img
                key={i}
                src={photos[i].src}
                alt="Biodentis trabajando"
                initial={{
                  x: -70,
                  rotate: photos[i].rotate - 4,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  rotate: photos[i].rotate,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04, rotate: photos[i].rotate * -0.3 }}
                style={{
                  width: '170px',
                  height: '210px',
                  objectFit: 'cover',
                  borderRadius: photos[i].radius,
                  boxShadow: 'var(--shadow-md)',
                  position: 'absolute',
                  top: i === 0 ? '0' : '45%',
                  left: i === 0 ? '10%' : '20%',
                  zIndex: i === 0 ? 2 : 1,
                  cursor: 'pointer',
                  transition: 'box-shadow 0.3s',
                }}
              />
            ))}
          </div>

          {/* Center text */}
          <div style={{ textAlign: 'center' }}>
            <SectionLabel text="SOBRE NOSOTROS" />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'var(--text-h2)',
                color: 'var(--text-dark)',
                lineHeight: 1.15,
                marginTop: '20px',
              }}
            >
              Atención Compasiva,
              <br />
              Expertise de Confianza.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 400,
                fontSize: '15px',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                maxWidth: '460px',
                margin: '20px auto 0',
              }}
            >
              ¡Tu sonrisa es nuestra prioridad! En Biodentis nos dedicamos a
              transformar cada visita dental en una experiencia positiva,
              con cuidado personalizado y más de 8 años de experiencia
              cuidando tu bienestar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '14px',
                marginTop: '32px',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'var(--green)',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '13px 24px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '14px',
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
                Agendar Cita →
              </a>
              <a
                href="#about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'transparent',
                  color: 'var(--green)',
                  border: '1.5px solid var(--green)',
                  borderRadius: '8px',
                  padding: '13px 24px',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--green-pale)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                Conócenos
              </a>
            </motion.div>
          </div>

          {/* Right photos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            height: '380px',
          }}>
            {[2, 3].map((i) => (
              <motion.img
                key={i}
                src={photos[i].src}
                alt="Procedimiento dental"
                initial={{
                  x: 70,
                  rotate: photos[i].rotate + 3,
                  opacity: 0,
                }}
                whileInView={{
                  x: 0,
                  rotate: photos[i].rotate,
                  opacity: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 + (i - 2) * 0.2, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.04, rotate: photos[i].rotate * -0.3 }}
                style={{
                  width: '170px',
                  height: '210px',
                  objectFit: 'cover',
                  borderRadius: photos[i].radius,
                  boxShadow: 'var(--shadow-md)',
                  position: 'absolute',
                  top: i === 2 ? '0' : '45%',
                  right: i === 2 ? '10%' : '20%',
                  zIndex: i === 2 ? 2 : 1,
                  cursor: 'pointer',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .about-grid > div:first-child,
          .about-grid > div:last-child {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            height: auto !important;
            gap: 12px;
          }
          .about-grid > div:first-child img,
          .about-grid > div:last-child img {
            position: static !important;
            width: 100% !important;
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  )
}
