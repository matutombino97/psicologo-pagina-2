import { useState, useRef, useEffect } from 'react';

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
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const cardWidth = trackRef.current.children[0]?.offsetWidth || 300;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(SPECIALTIES.length - 1, Math.max(0, index)));
  };

  const scrollToIndex = (index) => {
    if (trackRef.current && trackRef.current.children[index]) {
      const card = trackRef.current.children[index];
      trackRef.current.scrollTo({
        left: card.offsetLeft - trackRef.current.offsetLeft,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

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
            marginBottom: '48px',
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
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
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
            Cada proceso terapéutico es único. Trabajamos desde un enfoque clínico basado en evidencia, adaptado a tus necesidades particulares.
          </p>
        </div>

        {/* Cards container: Grid on desktop, Swipeable Horizontal Carousel on mobile */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="especialidades-track"
        >
          {SPECIALTIES.map((spec, i) => (
            <div
              key={spec.id}
              className="section-reveal card-hover especialidades-card"
              style={{
                transitionDelay: `${i * 70}ms`,
                backgroundColor: 'var(--surface)',
                border: hoveredId === spec.id ? '1.5px solid var(--gold)' : '1px solid var(--border)',
                boxShadow: hoveredId === spec.id ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                borderRadius: '8px',
                padding: '32px 24px',
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
                    marginBottom: '16px',
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
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '10px',
                    lineHeight: '1.2',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {spec.title}
                </h3>

                {/* High Contrast Descriptive Text */}
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: '400',
                    color: 'var(--text-body)',
                    lineHeight: '1.65',
                    marginBottom: '20px',
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
                        fontSize: '0.68rem',
                        fontWeight: '500',
                        color: 'var(--text-body)',
                        backgroundColor: 'var(--gold-a08)',
                        border: '1px solid var(--border-soft)',
                        borderRadius: '4px',
                        padding: '3px 8px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <div>
                <a
                  href="#agenda"
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: hoveredId === spec.id ? 'var(--text-on-dark-accent)' : 'var(--text-primary)',
                    backgroundColor: hoveredId === spec.id ? 'var(--gold)' : 'var(--gold-a08)',
                    border: hoveredId === spec.id ? '1px solid var(--gold)' : '1px solid var(--border-solid)',
                    padding: '9px 16px',
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

        {/* Mobile Carousel Indicators / Dots */}
        <div className="especialidades-mobile-dots">
          {SPECIALTIES.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir al servicio ${i + 1}`}
              style={{
                width: activeIndex === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === i ? 'var(--gold)' : 'var(--border-solid)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
