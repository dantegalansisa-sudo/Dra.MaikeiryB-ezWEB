import { motion } from 'framer-motion'

interface SectionLabelProps {
  text: string
  light?: boolean
}

export default function SectionLabel({ text, light = false }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        background: light
          ? 'rgba(255,255,255,0.15)'
          : 'var(--green-pale)',
        border: light
          ? '1px solid rgba(255,255,255,0.3)'
          : '1px solid var(--border)',
        borderRadius: '50px',
        padding: '8px 18px',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '11px',
        letterSpacing: '0.12em',
        color: light ? 'white' : 'var(--green)',
        textTransform: 'uppercase' as const,
        backdropFilter: light ? 'blur(8px)' : undefined,
      }}
    >
      <span
        style={{
          width: '7px',
          height: '7px',
          borderRadius: '50%',
          background: 'var(--green-bright)',
          animation: 'pulse-green 2s infinite',
        }}
      />
      {text}
    </motion.div>
  )
}
