import { motion } from 'framer-motion'

interface ServiceItemProps {
  num: string
  name: string
  desc: string
  special?: boolean
  highlight?: boolean
  onHover: () => void
}

export default function ServiceItem({
  num,
  name,
  desc,
  special,
  onHover,
}: ServiceItemProps) {
  return (
    <motion.div
      onMouseEnter={onHover}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{
        padding: '20px 16px',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        borderLeft: special ? '3px solid var(--green)' : '3px solid transparent',
        background: special ? 'var(--green-pale)' : 'transparent',
        borderRadius: special ? '4px' : '0',
      }}
      whileHover={{
        paddingLeft: '26px',
        backgroundColor: special ? '#d7ecd9' : 'var(--green-pale)',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: '12px',
        color: 'var(--green)',
        letterSpacing: '0.1em',
        minWidth: '32px',
      }}>
        {num}
      </span>

      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '20px',
            color: special ? 'var(--green)' : 'var(--text-dark)',
          }}>
            {name}
          </span>
          {special && (
            <span style={{
              background: 'var(--green)',
              color: 'white',
              fontFamily: 'var(--font-body)',
              fontWeight: 700,
              fontSize: '10px',
              letterSpacing: '0.08em',
              padding: '3px 10px',
              borderRadius: '50px',
              textTransform: 'uppercase',
            }}>
              ÚNICO
            </span>
          )}
        </div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: '13px',
          color: 'var(--text-muted)',
          marginTop: '2px',
        }}>
          {desc}
        </p>
      </div>

      <span style={{
        fontSize: '18px',
        color: 'var(--green-light)',
        transition: 'transform 0.2s',
      }}>
        →
      </span>
    </motion.div>
  )
}
