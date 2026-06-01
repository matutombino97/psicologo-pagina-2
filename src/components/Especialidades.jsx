import { useState } from 'react';

const SPECIALTIES = [
  {
    id: 'individual',
    icon: '◈',
    title: 'Terapia Individual',
    desc:
      'Un espacio personal de escucha y acción. Trabajamos en equipo para desarrollar recursos internos que mejoren tu calidad de vida y bienestar emocional.',
    tags: ['Ansiedad', 'Depresión', 'Autoestima'],
  },
  {
    id: 'pareja',
    icon: '◇',
    title: 'Terapia de Pareja',
    desc:
      'Acompañamos parejas en conflicto, comunicación y reconstrucción del vínculo. Herramientas concretas para construir una relación más sana y conectada.',
    tags: ['Comunicación', 'Conflicto', 'Vínculos'],
  },
  {
    id: 'vocacional',
    icon: '◎',
    title: 'Orientación Vocacional',
    desc:
      'Para jóvenes en transición o adultos en busca de un nuevo rumbo profesional. Clarificamos valores, habilidades e intereses para tomar decisiones conscientes.',
    tags: ['Jóvenes', 'Carrera', 'Identidad'],
  },
  {
    id: 'crisis',
    icon: '◉',
    title: 'Acompañamiento en Crisis',
    desc:
      'Intervención especializada en momentos de quiebre emocional agudo: duelos, separaciones, pérdidas laborales. Contención inmediata y plan de acción.',
    tags: ['Urgencia', 'Duelo', 'Contención'],
  },
];

export default function Especialidades() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="especialidades"
      style={{
        backgroundColor: 'var(--bg-warm)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
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

      {/* Large background letters */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          bottom: '-10%',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(150px, 22vw, 380px)',
          fontWeight: '700',
          color: 'var(--gold-a03)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        E
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div
          className="section-reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '72px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
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
              ✦ Especialidades
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
              Áreas de trabajo
            </h2>
          </div>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              maxWidth: '360px',
              lineHeight: '1.8',
            }}
          >
            Cada proceso terapéutico es único. Trabajamos desde un enfoque basado 
            en evidencia, adaptado a tus necesidades particulares.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {SPECIALTIES.map((spec, i) => (
            <div
              key={spec.id}
              className="section-reveal card-hover"
              style={{
                transitionDelay: `${i * 80}ms`,
                backgroundColor: 'var(--surface)',
                border:
                  hoveredId === spec.id
                    ? '1px solid var(--gold-a30)'
                    : '1px solid var(--border)',
                boxShadow: 'var(--card-shadow, none)',
                borderRadius: '12px',
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onMouseEnter={() => setHoveredId(spec.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Top gold border on hover */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  backgroundColor: 'var(--gold)',
                  transform: hoveredId === spec.id ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />

              {/* Icon */}
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '2rem',
                  color: hoveredId === spec.id ? 'var(--gold)' : 'var(--text-dim)',
                  marginBottom: '20px',
                  transition: 'color 0.3s ease',
                }}
              >
                {spec.icon}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  fontWeight: '500',
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                  lineHeight: '1.2',
                }}
              >
                {spec.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.875rem',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                  marginBottom: '24px',
                }}
              >
                {spec.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '24px' }}>
                {spec.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      backgroundColor: 'var(--border)',
                      borderRadius: '4px',
                      padding: '3px 10px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Consult link */}
              <a
                href="#agenda"
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.8rem',
                  fontWeight: '500',
                  color: hoveredId === spec.id ? 'var(--gold)' : 'var(--text-muted)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Consultar
                <span style={{ transition: 'transform 0.2s ease', transform: hoveredId === spec.id ? 'translateX(4px)' : 'translateX(0)' }}>
                  →
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
