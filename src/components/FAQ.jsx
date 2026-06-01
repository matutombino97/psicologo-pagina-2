import { useState } from 'react';

const FAQS = [
  {
    q: '¿Cómo es la primera sesión?',
    a: 'La primera sesión es una consulta exploratoria de 50 minutos. Me contás qué te trae, yo te cuento cómo trabajo y entre los dos evaluamos si somos un buen equipo. No hay ningún compromiso de continuar.',
  },
  {
    q: '¿Cuánto duran y cuántas sesiones necesito?',
    a: 'Cada sesión dura 50 minutos. La frecuencia recomendada es semanal, aunque se adapta a cada caso. La duración total del proceso varía mucho: algunos procesos duran meses, otros pueden extenderse años. Lo evaluamos juntos en el camino.',
  },
  {
    q: '¿Es confidencial todo lo que hablo en sesión?',
    a: 'Absolutamente. Todo lo que se habla en el consultorio está protegido por el secreto profesional. Solo en situaciones de riesgo grave para la vida (del paciente u otras personas) podría ser necesario romperlo, y en ese caso siempre te lo comunicaría previamente.',
  },
  {
    q: '¿Cuáles son los costos y formas de pago?',
    a: 'El valor de la sesión individual es de $12.000 (ARS). Acepto transferencia bancaria y efectivo. También trabajo con algunas obras sociales prepagadas. Consultame por los detalles de tu cobertura.',
  },
  {
    q: '¿Qué diferencia hay entre atención presencial y online?',
    a: 'Ambas modalidades son igualmente efectivas. La presencial tiene el valor del espacio físico compartido, mientras que la online ofrece comodidad y accesibilidad. La elección depende de tus preferencias y disponibilidad. Muchos pacientes combinan ambas.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-warm)',
        padding: '120px 0',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--divider-accent)',
        }}
      />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div className="section-reveal" style={{ marginBottom: '64px' }}>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.7rem',
              fontWeight: '500',
              color: 'var(--terracotta)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            ✦ Preguntas frecuentes
          </span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '300',
              color: 'var(--text-primary)',
              lineHeight: '1.1',
            }}
          >
            Dudas comunes
          </h2>
        </div>

        {/* FAQ items */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="section-reveal"
              style={{
                transitionDelay: `${i * 60}ms`,
                borderLeft: openIndex === i ? '2px solid var(--gold)' : '2px solid var(--border)',
                transition: 'border-color 0.3s ease',
                paddingLeft: '20px',
                marginBottom: '8px',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '24px 0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    color: openIndex === i ? 'var(--gold)' : 'var(--text-primary)',
                    lineHeight: '1.3',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {faq.q}
                </span>

                {/* Icon */}
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    border: `1px solid ${openIndex === i ? 'var(--gold-a50)' : 'var(--border-solid)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.3s ease',
                    backgroundColor: openIndex === i ? 'var(--gold-a08)' : 'transparent',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '1rem',
                      color: openIndex === i ? 'var(--gold)' : 'var(--text-muted)',
                      lineHeight: 1,
                      transform: openIndex === i ? 'rotate(45deg)' : 'rotate(0)',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      display: 'block',
                    }}
                  >
                    +
                  </span>
                </div>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: openIndex === i ? '300px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.8',
                    paddingBottom: '24px',
                  }}
                >
                  {faq.a}
                </p>
              </div>

              {/* Separator */}
              <div
                style={{
                  height: '1px',
                  background: 'var(--border-soft)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
