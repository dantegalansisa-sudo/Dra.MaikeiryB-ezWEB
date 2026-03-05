const ToothLogo = () => (
  <svg viewBox="0 0 60 64" fill="none" width="28" height="30">
    <path d="M30 4 C18 4 8 14 8 26 C8 38 14 50 20 58 C23 62 27 64 30 64 C33 64 37 62 40 58 C46 50 52 38 52 26 C52 14 42 4 30 4Z"
      fill="none" stroke="#66BB6A" strokeWidth="2.5" />
    <path d="M22 20 C22 16 28 14 30 18 C32 14 38 16 38 20 C38 26 30 32 30 32 C30 32 22 26 22 20Z"
      fill="#66BB6A" />
  </svg>
)

const services = [
  'Prevención', 'Ortodoncia', 'Endodoncia',
  'Cirugía Bucal', 'Sedación Consciente', 'Prótesis Dental',
]

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-dark)',
      borderTop: '2px solid var(--green)',
      padding: '64px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
        }}
          className="footer-grid"
        >
          {/* Logo + bio */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <ToothLogo />
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: 'white',
                }}>
                  Dra. Maikeiry Báez
                </div>
              </div>
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontStyle: 'italic',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6,
            }}>
              Dientes sanos para una vida sana 💚
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '13px',
              color: 'white',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}>
              Servicios
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map((s) => (
                <a
                  key={s}
                  href="#services"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--green-light)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Horario */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '13px',
              color: 'white',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}>
              Horario
            </h4>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
            }}>
              📅 Lunes a Viernes
              <br />
              9:00 AM – 7:00 PM
            </p>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(102,187,106,0.15)',
              border: '1px solid rgba(102,187,106,0.3)',
              borderRadius: '50px',
              padding: '5px 14px',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: 'var(--green-bright)',
              marginTop: '12px',
            }}>
              <span style={{
                width: '6px', height: '6px', borderRadius: '50%',
                background: 'var(--green-bright)',
                animation: 'pulse-green 2s infinite',
              }} />
              ABIERTO
            </span>
          </div>

          {/* Contacto */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '13px',
              color: 'white',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '18px',
            }}>
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:8093660206" style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
              }}>
                📞 809-366-0206
              </a>
              <a href="https://linktr.ee/maikeirybaez" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
              }}>
                🔗 linktr.ee/maikeirybaez
              </a>
              <a href="https://instagram.com/dramaikeirybaez" target="_blank" rel="noopener noreferrer" style={{
                fontFamily: 'var(--font-body)', fontSize: '13px',
                color: 'rgba(255,255,255,0.5)',
              }}>
                📷 @dramaikeirybaez
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: '48px',
          paddingTop: '24px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: '12px',
            color: 'rgba(255,255,255,0.3)',
          }}>
            © 2025 Dra. Maikeiry Báez | Odontología Integral · @dramaikeirybaez
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
