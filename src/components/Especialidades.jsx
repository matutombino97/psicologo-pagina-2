import { useState } from 'react';

// Custom SVG icons — specific to each therapy area
function IconIndividual() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

function IconPareja() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4l3 3" />
      <path d="M16.5 4.5l1 1" />
    </svg>
  );
}

function IconCrisis() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
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
    desc: 'Un espacio personal de escucha y acción. Desarrollamos recursos prácticos y basados en evidencia que fortalecen tu bienestar emocional y toma de decisiones.',
    tags: ['Ansiedad', 'Depresión', 'Autoestima'],
  },
  {
    id: 'pareja',
    Icon: IconPareja,
    title: 'Terapia de Pareja',
    desc: 'Acompañamiento especializado en comunicación, resolución de conflictos y reconstrucción de acuerdos para consolidar un vínculo sano y consciente.',
    tags: ['Comunicación', 'Conflicto', 'Vínculos'],
  },
  {
    id: 'vocacional',
    Icon: IconVocacional,
    title: 'Orientación Vocacional',
    desc: 'Para jóvenes en transición académica o adultos en búsqueda de un cambio de rumbo laboral. Clarificamos metas, fortalezas e intereses reales.',
    tags: ['Jóvenes', 'Carrera', 'Identidad'],
  },
  {
    id: 'crisis',
    Icon: IconCrisis,
    title: 'Acompañamiento en Crisis',
    desc: 'Intervención y contención en momentos de quiebre emocional agudo: duelos, separaciones o pérdidas laborales, orientada a recuperar el equilibrio.',
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

      <div className="section-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header (Asymmetric on desktop, cleanly stacked on mobile) */}
        <div
          className="section-reveal especialidades-header"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '64px',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--terracotta)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
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
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Áreas de trabajo
            </h2>
          </div>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              color: 'var(--text-body)',
              maxWidth: '420px',
              lineHeight: '1.75',
              margin: 0,
            }}
          >
            Cada proceso terapéutico es único. Trabajamos desde un enfoque clínico basado en evidencia, adaptado a tus necesidades y objetivos particulares.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '24px',
          }}
        >
          {SPECIALTIES.map((spec, i) => (
            <div
              key={spec.id}
              className="section-reveal card-hover"
              style={{
                transitionDelay: `${i * 70}ms`,
                backgroundColor: 'var(--surface)',
                border: hoveredId === spec.id ? '1px solid var(--gold)' : '1px solid var(--border)',
                boxShadow: hoveredId === spec.id ? '0 8px 24px rgba(0, 0, 0, 0.06)' : 'var(--card-shadow, none)',
                borderRadius: '8px',
                padding: '36px 28px',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseEnter={() => setHoveredId(spec.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Top accent indicator on hover */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '2px',
                  backgroundColor: 'var(--gold)',
                  transform: hoveredId === spec.id ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />

              <div>
                {/* Custom SVG Icon */}
                <div
                  style={{
                    color: hoveredId === spec.id ? 'var(--gold)' : 'var(--text-muted)',
                    marginBottom: '20px',
                    transition: 'color 0.25s ease',
                    display: 'flex',
                  }}
                >
                  <spec.Icon />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '12px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {spec.title}
                </h3>

                {/* High Contrast Descriptive Text (Accessibility Enhanced) */}
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: '400',
                    color: 'var(--text-body)',
                    lineHeight: '1.7',
                    marginBottom: '24px',
                  }}
                >
                  {spec.desc}
                </p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '28px' }}>
                  {spec.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.7rem',
                        fontWeight: '500',
                        color: 'var(--text-body)',
                        backgroundColor: 'var(--gold-a05)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: '4px',
                        padding: '4px 10px',
                        letterSpacing: '0.03em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Enhanced Action CTA (High contrast & interactive hover) */}
              <div>
                <a
                  href="#agenda"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.825rem',
                    fontWeight: '600',
                    color: hoveredId === spec.id ? 'var(--text-on-dark-accent)' : 'var(--text-primary)',
                    backgroundColor: hoveredId === spec.id ? 'var(--gold)' : 'var(--gold-a08)',
                    border: hoveredId === spec.id ? '1px solid var(--gold)' : '1px solid var(--border-solid)',
                    padding: '10px 18px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  Consultar
                  <svg
                    width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                    style={{
                      transition: 'transform 0.25s ease',
                      transform: hoveredId === spec.id ? 'translateX(3px)' : 'translateX(0)',
                    }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
