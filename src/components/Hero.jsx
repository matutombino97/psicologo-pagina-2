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
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        paddingTop: '110px',
        paddingBottom: '40px',
      }}
    >
      {/* Background Image from Unsplash (Minimalist warm consulting office) */}
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

      {/* Brand-consistent Directional Gradient Overlay (ensures visibility & text contrast in both themes) */}
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

      {/* Main Content Area */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '32px',
          paddingBottom: '48px',
        }}
      >
        {/* Top Context Indicator */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '28px',
            padding: '6px 14px',
            borderRadius: '100px',
            backgroundColor: 'var(--gold-a08)',
            border: '1px solid var(--border)',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#25D366',
              boxShadow: '0 0 8px rgba(37, 211, 102, 0.6)',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600',
              color: 'var(--text-primary)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            Consultorio Palermo · Atención Presencial & Online
          </span>
        </div>

        {/* Editorial Headline */}
        <div style={{ maxWidth: '880px', marginBottom: '28px' }}>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              lineHeight: '1.04',
              letterSpacing: '-0.035em',
              margin: 0,
            }}
          >
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.4rem, 2.8vw, 2.2rem)',
                fontWeight: '400',
                color: 'var(--text-muted)',
                marginBottom: '10px',
                letterSpacing: '-0.01em',
              }}
            >
              Psicoterapia individual basada en evidencia
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2.6rem, 6vw, 4.8rem)',
                fontWeight: '800',
                color: 'var(--text-primary)',
                letterSpacing: '-0.04em',
                marginBottom: '8px',
              }}
            >
              Entender el origen.
            </span>
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(2rem, 4.8vw, 3.8rem)',
                fontWeight: '600',
                color: 'var(--gold)',
                letterSpacing: '-0.03em',
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
            fontSize: 'clamp(1.05rem, 1.35vw, 1.2rem)',
            fontWeight: '400',
            color: 'var(--text-body)',
            maxWidth: '620px',
            lineHeight: '1.7',
            marginBottom: '40px',
          }}
        >
          Un espacio seguro y confidencial donde desarmar lo que abruma y construir recursos prácticos para tu bienestar emocional y tus vínculos.
        </p>

        {/* Action Group */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
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
              borderRadius: '8px',
              letterSpacing: '0.01em',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 16px var(--gold-a20)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--gold-light)';
              e.currentTarget.style.transform = 'translateY(-2px)';
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
              padding: '12px 16px',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
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

      {/* Bottom Editorial Pillars — Authentic, non-generic value points */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid var(--border)',
          paddingTop: '28px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
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
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  color: 'var(--gold)',
                  opacity: 0.8,
                  marginTop: '1px',
                }}
              >
                {item.index}
              </span>
              <div>
                <h4
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.95rem',
                    fontWeight: '700',
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
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                    margin: 0,
                    lineHeight: '1.5',
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
