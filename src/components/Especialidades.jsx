import { useState } from 'react';

// Custom SVG icons — specific to each therapy area
function IconIndividual() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconPareja() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="8" r="3" />
      <path d="M2 20c0-3 2.7-5.5 6-5.5" />
      <path d="M22 20c0-3-2.7-5.5-6-5.5" />
      <path d="M9 14.5c1-0.5 2-0.5 3 0s2 0.5 3 0" />
    </svg>
  );
}

function IconVocacional() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
      <path d="M16.5 4.5l1 1" />
    </svg>
  );
}

function IconCrisis() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function IconSectionTag() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M1 6h10M6 1l5 5-5 5" />
    </svg>
  );
}

const SPECIALTIES = [
  {
    id: 'individual',
    Icon: IconIndividual,
    title: 'Terapia Individual',
    desc: 'Un espacio personal de escucha y acción. Trabajamos en equipo para desarrollar recursos internos que mejoren tu calidad de vida y bienestar emocional.',
    tags: ['Ansiedad', 'Depresión', 'Autoestima'],
  },
  {
    id: 'pareja',
    Icon: IconPareja,
    title: 'Terapia de Pareja',
    desc: 'Acompañamos parejas en conflicto, comunicación y reconstrucción del vínculo. Herramientas concretas para construir una relación más sana y conectada.',
    tags: ['Comunicación', 'Conflicto', 'Vínculos'],
  },
  {
    id: 'vocacional',
    Icon: IconVocacional,
    title: 'Orientación Vocacional',
    desc: 'Para jóvenes en transición o adultos en busca de un nuevo rumbo profesional. Clarificamos valores, habilidades e intereses para tomar decisiones conscientes.',
    tags: ['Jóvenes', 'Carrera', 'Identidad'],
  },
  {
    id: 'crisis',
    Icon: IconCrisis,
    title: 'Acompañamiento en Crisis',
    desc: 'Intervención especializada en momentos de quiebre emocional agudo: duelos, separaciones, pérdidas laborales. Contención inmediata y plan de acción.',
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
          top: 0, left: 0, right: 0,
          height: '1px',
          background: 'var(--divider-accent)',
        }}
      />

      {/* Subtle corner glow — replaces generic giant "E" letter */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '320px',
          height: '320px',
          background: 'radial-gradient(ellipse at 100% 100%, var(--gold-a05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '16px',
              }}
            >
              <IconSectionTag />
              Especialidades
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
                border: hoveredId === spec.id ? '1px solid var(--gold-a30)' : '1px solid var(--border)',
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
                  top: 0, left: 0, right: 0,
                  height: '2px',
                  backgroundColor: 'var(--gold)',
                  transform: hoveredId === spec.id ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />

              {/* Custom SVG Icon */}
              <div
                style={{
                  color: hoveredId === spec.id ? 'var(--gold)' : 'var(--text-muted)',
                  marginBottom: '20px',
                  transition: 'color 0.3s ease',
                  display: 'flex',
                }}
              >
                <spec.Icon />
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
                <svg
                  width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  style={{
                    transition: 'transform 0.2s ease',
                    transform: hoveredId === spec.id ? 'translateX(4px)' : 'translateX(0)',
                  }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
