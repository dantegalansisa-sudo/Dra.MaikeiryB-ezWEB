import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from '../components/SectionLabel'

const ToothLogo = () => (
  <svg viewBox="0 0 60 64" fill="none" width="28" height="30">
    <path d="M30 4 C18 4 8 14 8 26 C8 38 14 50 20 58 C23 62 27 64 30 64 C33 64 37 62 40 58 C46 50 52 38 52 26 C52 14 42 4 30 4Z"
      fill="none" stroke="#66BB6A" strokeWidth="2.5" />
    <path d="M22 20 C22 16 28 14 30 18 C32 14 38 16 38 20 C38 26 30 32 30 32 C30 32 22 26 22 20Z"
      fill="#66BB6A" />
  </svg>
)

const serviceOptions = [
  '💊 Sedación Consciente',
  'Prevención / Limpieza',
  'Diagnóstico + Radiografía Digital',
  'Ortodoncia',
  'Cirugía Bucal',
  'Emergencia Dental',
  'Prótesis Dental',
  'Endodoncia',
  'Periodoncia',
  'Operatoria Dental',
  'Consulta General',
]

export default function ContactSection() {
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    servicio: '',
    primeraVisita: '',
    mensaje: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hola Dra. Maikeiry! Soy ${form.nombre}. Me interesa: ${form.servicio}. ${form.mensaje}`
    window.open(
      `https://wa.me/18093660206?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: 'var(--font-body)',
    fontWeight: 400,
    fontSize: '14px',
    background: 'white',
    border: '1.5px solid var(--border)',
    borderRadius: '10px',
    height: '50px',
    padding: '0 16px',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    color: 'var(--text-dark)',
  }

  return (
    <section id="contact" style={{ background: 'var(--bg-white)', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <SectionLabel text="AGENDA TU CITA" />
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
            ¿Lista Para Tener
            <br />
            Dientes Más Sanos?
          </motion.h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            color: 'var(--text-muted)',
            marginTop: '12px',
          }}>
            ¡Agenda tu cita hoy mismo!
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '40% 1fr',
          gap: '32px',
        }}
          className="contact-grid"
        >
          {/* Info left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'var(--bg-dark)',
              borderRadius: '20px',
              padding: '48px',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <ToothLogo />
                <div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'white',
                  }}>
                    Dra. Maikeiry Báez
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: 'var(--green-light)',
                  }}>
                    Odontología Integral
                  </div>
                </div>
              </div>

              <div style={{
                width: '40px',
                height: '2px',
                background: 'var(--green)',
                margin: '24px 0',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <a href="tel:8093660206" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '15px', color: 'white',
                }}>
                  📞 809-366-0206
                </a>
                <a href="https://linktr.ee/maikeirybaez" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.75)',
                }}>
                  🔗 linktr.ee/maikeirybaez
                </a>
                <a href="https://instagram.com/dramaikeirybaez" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.75)',
                }}>
                  📷 @dramaikeirybaez
                </a>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.75)',
                }}>
                  ⏰ L-V 9:00AM - 7:00PM
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/18093660206?text=${encodeURIComponent('Hola Dra. Maikeiry! Me interesa agendar una cita.')}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                background: 'var(--green)',
                color: 'white',
                borderRadius: '8px',
                padding: '14px 24px',
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
                e.currentTarget.style.background = 'var(--green)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              💬 WhatsApp Directo →
            </a>
          </motion.div>

          {/* Form right */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: 'var(--bg-section)',
              borderRadius: '20px',
              padding: '48px',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              gap: '18px',
            }}
          >
            <div>
              <label style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
                color: 'var(--text-dark)', marginBottom: '6px', display: 'block',
              }}>
                Nombre *
              </label>
              <input
                type="text"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre completo"
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(46,125,50,0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
                color: 'var(--text-dark)', marginBottom: '6px', display: 'block',
              }}>
                Teléfono *
              </label>
              <input
                type="tel"
                required
                value={form.telefono}
                onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                placeholder="809-000-0000"
                style={inputStyle}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(46,125,50,0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
                color: 'var(--text-dark)', marginBottom: '6px', display: 'block',
              }}>
                Servicio
              </label>
              <select
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                style={{ ...inputStyle, cursor: 'pointer', appearance: 'auto' as React.CSSProperties['appearance'] }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(46,125,50,0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <option value="">Selecciona un servicio</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
                color: 'var(--text-dark)', marginBottom: '6px', display: 'block',
              }}>
                ¿Primera visita?
              </label>
              <div style={{ display: 'flex', gap: '12px' }}>
                {['Sí', 'No'].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm({ ...form, primeraVisita: opt })}
                    style={{
                      flex: 1,
                      height: '50px',
                      borderRadius: '10px',
                      border: form.primeraVisita === opt
                        ? '1.5px solid var(--green)'
                        : '1.5px solid var(--border)',
                      background: form.primeraVisita === opt
                        ? 'var(--green-pale)'
                        : 'white',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: form.primeraVisita === opt
                        ? 'var(--green)'
                        : 'var(--text-body)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{
                fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: '13px',
                color: 'var(--text-dark)', marginBottom: '6px', display: 'block',
              }}>
                Mensaje
              </label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                placeholder="Cuéntanos cómo podemos ayudarte..."
                rows={3}
                style={{
                  ...inputStyle,
                  height: 'auto',
                  padding: '14px 16px',
                  resize: 'vertical',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--green)'
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(46,125,50,0.1)'
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                height: '54px',
                background: 'var(--green)',
                color: 'white',
                borderRadius: '10px',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-green)',
                transition: 'all 0.25s',
                marginTop: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--green-mid)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--green)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              ENVIAR SOLICITUD →
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
