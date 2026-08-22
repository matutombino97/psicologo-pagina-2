import heroBg from '../assets/hero.jpg';

function IconCalendar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconArrowDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 13l5 5 5-5M12 4v14" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '120px',
        paddingBottom: '48px',
      }}
    >
      {/* Background Image (Consulting room / Studio) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 35%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Directional Overlay: Solid & legible on the left, translucent on the right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--hero-bg-image-overlay)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Grainy texture overlay */}
      <div className="grain-overlay" />

      {/* Main Content (Editorial Left-Aligned Flow) */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '24px',
          paddingBottom: '64px',
        }}
      >
        {/* Top Context Indicator — Discreet Editorial Tag (No UI pill capsule) */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              display: 'inline-block',
              opacity: 0.85,
            }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600',
              color: 'var(--text-muted)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            Palermo · Presencial & Online
          </span>
        </div>

        {/* Editorial Headline with Typographic Weight Contrast */}
        <div style={{ maxWidth: '840px', marginBottom: '32px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
              margin: 0,
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
                fontWeight: '500',
                color: 'var(--terracotta)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Psicoterapia individual basada en evidencia
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.75rem, 6vw, 4.8rem)',
                fontWeight: '800',
                color: 'var(--text-primary)',
                letterSpacing: '-0.04em',
                marginBottom: '6px',
              }}
            >
              Entender el origen.
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.25rem, 5.2vw, 4.1rem)',
                fontWeight: '300',
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                opacity: 0.9,
              }}
            >
              Transformar tu día a día.
            </span>
          </h1>
        </div>

        {/* Narrative Subtext */}
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(1.05rem, 1.3vw, 1.15rem)',
            fontWeight: '400',
            color: 'var(--text-body)',
            maxWidth: '560px',
            lineHeight: '1.75',
            marginBottom: '44px',
          }}
        >
          Un espacio seguro y confidencial donde desarmar lo que abruma y construir recursos prácticos para tu bienestar emocional y tus vínculos.
        </p>

        {/* Primary CTA and Secondary Link */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#agenda"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.95rem',
              fontWeight: '600',
              color: 'var(--text-on-dark-accent)',
              textDecoration: 'none',
              backgroundColor: 'var(--gold)',
              padding: '16px 32px',
              borderRadius: '6px',
              letterSpacing: '0.01em',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-light)';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <IconCalendar />
            Reservar consulta
          </a>

          <a
            href="#sobre-mi"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.9rem',
              fontWeight: '500',
              color: 'var(--text-muted)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 0',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
          >
            Conocer el espacio
            <IconArrowDown />
          </a>
        </div>
      </div>

      {/* Bottom Editorial Pillars — Pure Layout Integration (No cards, no boxes, no shadows) */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid var(--border-soft)',
          paddingTop: '28px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
          }}
        >
          {[
            {
              index: '01',
              title: 'Metodología TCC',
              desc: 'Herramientas prácticas orientadas a objetivos claros y cambios sostenibles.',
            },
            {
              index: '02',
              title: 'Modalidad Flexible',
              desc: 'Consultorio en Palermo o sesiones online para todo el país y el exterior.',
            },
            {
              index: '03',
              title: 'Espacio Seguro',
              desc: 'Acompañamiento profesional ético, confidencial y sin juicios.',
            },
          ].map((item) => (
            <div key={item.index} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  color: 'var(--text-dim)',
                  letterSpacing: '0.08em',
                  marginTop: '2px',
                }}
              >
                {item.index}
              </span>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    margin: '0 0 4px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.825rem',
                    color: 'var(--text-muted)',
                    margin: 0,
                    lineHeight: '1.55',
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
