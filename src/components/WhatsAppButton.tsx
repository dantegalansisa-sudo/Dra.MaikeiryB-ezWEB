import { motion } from 'framer-motion'

export default function WhatsAppButton() {
  const msg = encodeURIComponent(
    'Hola Dra. Maikeiry! Me interesa agendar una cita. ¿Me puede ayudar?'
  )

  return (
    <motion.a
      href={`https://wa.me/18093660206?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 90,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'var(--green)',
        color: 'white',
        borderRadius: '50px',
        padding: '14px 24px',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '14px',
        boxShadow: 'var(--shadow-green)',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
    >
      {/* Ping animation */}
      <span style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50px',
        background: 'var(--green)',
        animation: 'pulse-green 2s infinite',
        zIndex: -1,
      }} />
      💬 Agendar Cita
    </motion.a>
  )
}
