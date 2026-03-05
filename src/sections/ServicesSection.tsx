import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'
import ServiceItem from '../components/ServiceItem'

const services = [
  { num: '01/', name: 'Prevención', desc: 'Profilaxis, sellantes y fluoruro para mantener dientes sanos.', img: '/images/CEO.jpeg' },
  { num: '02/', name: 'Diagnóstico', desc: 'Evaluación completa + Radiografía Digital de precisión.', img: '/images/procedimiento.jpeg' },
  { num: '03/', name: 'Ortodoncia', desc: 'Brackets y alineadores para una sonrisa perfectamente alineada.', img: '/images/examen.jpeg' },
  { num: '04/', name: 'Cirugía Bucal', desc: 'Extracciones, apicectomías y procedimientos quirúrgicos.', img: '/images/procedimiento.jpeg' },
  { num: '05/', name: 'Emergencias', desc: 'Atención urgente para dolor dental o accidentes bucales.', img: '/images/paciente-nina.jpeg' },
  { num: '06/', name: 'Prótesis Dental', desc: 'Fijas y removibles que restauran función y estética.', img: '/images/examen.jpeg' },
  { num: '07/', name: 'Endodoncia', desc: 'Tratamiento de conducto preciso y con mínimo dolor.', img: '/images/procedimiento.jpeg' },
  { num: '08/', name: 'Periodoncia', desc: 'Tratamiento de encías y tejidos de soporte dental.', img: '/images/examen.jpeg' },
  { num: '09/', name: 'Radiografía Digital', desc: 'Imágenes de alta precisión con mínima radiación.', img: '/images/procedimiento.jpeg' },
  { num: '10/', name: 'Operatoria Dental', desc: 'Restauraciones y tratamiento de caries con materiales premium.', img: '/images/CEO.jpeg' },
  { num: '11/', name: 'Sedación Consciente', desc: 'Tratamiento completamente sin estrés ni miedo.', img: '/images/CEO1.jpeg', special: true },
]

export default function ServicesSection() {
  const [activeImg, setActiveImg] = useState(services[0].img)

  return (
    <section id="services" style={{ background: 'var(--bg-base)', padding: '120px 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: '40px',
          marginBottom: '56px',
          flexWrap: 'wrap',
        }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'var(--text-h2)',
              color: 'var(--text-dark)',
              lineHeight: 1.15,
            }}
          >
            Donde Cada Tratamiento
            <br />
            Comienza Con Confianza
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ maxWidth: '340px' }}
          >
            <SectionLabel text="NUESTROS SERVICIOS" />
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginTop: '14px',
              marginBottom: '20px',
            }}>
              Ofrecemos 11 especialidades para cuidar cada aspecto
              de tu salud bucal con tecnología actualizada.
            </p>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--green)',
                color: 'white',
                borderRadius: '8px',
                padding: '11px 22px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '13px',
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
              Ver Todos →
            </a>
          </motion.div>
        </div>

        {/* Services list + reactive photo */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '48px',
          alignItems: 'start',
        }}
          className="services-grid"
        >
          {/* List */}
          <div>
            {services.map((s) => (
              <ServiceItem
                key={s.num}
                num={s.num}
                name={s.name}
                desc={s.desc}
                special={s.special}
                onHover={() => setActiveImg(s.img)}
              />
            ))}
          </div>

          {/* Reactive photo */}
          <div
            className="services-photo"
            style={{
              position: 'sticky',
              top: '100px',
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImg}
                src={activeImg}
                alt="Servicio dental"
                initial={{ opacity: 0, x: 15, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
          .services-photo {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
