// SVG icon components — custom, no generic unicode symbols
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
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
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'var(--bg-warm)',
      }}
    >
      {/* Background: layered gradients */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, var(--hero-radial-1) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 20% 80%, var(--hero-radial-2) 0%, transparent 50%),
            var(--hero-gradient)
          `,
        }}
      />

      {/* Grainy texture overlay */}
      <div className="grain-overlay" />

      {/* Thin diagonal rule — replaces giant decorative letter */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '38%',
          background: 'linear-gradient(to left, var(--gold-a03) 0%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Vertical line accent */}
      <div
        style={{
          position: 'absolute',
          left: '40px',
          top: '20%',
          bottom: '20%',
          width: '1px',
          background: 'var(--vertical-accent)',
        }}
      />

      {/* Content */}
      <div className="hero-content">
        {/* Eyebrow label */}
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
              display: 'inline-block',
              width: '32px',
              height: '1px',
              backgroundColor: 'var(--gold)',
            }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: 'var(--gold)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
            }}
          >
            Psicología Clínica · Buenos Aires
          </span>
        </div>

        {/* Main headline */}
        <h1
          style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3rem, 7vw, 7rem)',
            fontWeight: '300',
            color: 'var(--text-primary)',
            lineHeight: '1.05',
            letterSpacing: '-0.02em',
            maxWidth: '900px',
            marginBottom: '32px',
          }}
        >
          Tu bienestar mental,{' '}
          <span
            style={{
              fontStyle: 'italic',
              color: 'var(--gold)',
            }}
          >
            en manos
          </span>{' '}
          del especialista adecuado.
        </h1>

        {/* Subtext */}
        <p
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
            fontWeight: '300',
            color: 'var(--text-muted)',
            maxWidth: '520px',
            lineHeight: '1.8',
            marginBottom: '52px',
          }}
        >
          Un espacio seguro y confidencial donde construís herramientas para tu vida. 
          Con enfoque cognitivo-conductual y atención personalizada para adultos y jóvenes.
        </p>

        {/* CTA Row */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
          <a
            href="#agenda"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.95rem',
              fontWeight: '500',
              color: 'var(--text-on-dark-accent)',
              textDecoration: 'none',
              backgroundColor: 'var(--gold)',
              padding: '16px 36px',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
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
            Reservar Ahora
          </a>
          <a
            href="#sobre-mi"
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.95rem',
              fontWeight: '400',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              border: '1px solid var(--text-primary-a25)',
              padding: '16px 36px',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--gold-a50)';
              e.currentTarget.style.color = 'var(--gold)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--text-primary-a25)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
          >
            Conocer más
            <IconArrowRight />
          </a>
        </div>

        {/* Stats strip */}
        <div className="hero-stats-strip">
          {[
            { num: '+8', label: 'Años de experiencia' },
            { num: '+200', label: 'Pacientes acompañados' },
            { num: '100%', label: 'Confidencialidad garantizada' },
          ].map((s, i) => (
            <div
              key={s.num}
              className="hero-stat-item"
              style={{
                paddingRight: '40px',
                paddingLeft: i === 0 ? '0' : '40px',
                borderLeft: i === 0 ? 'none' : '1px solid var(--gold-a20)',
              }}
            >
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '2rem',
                  fontWeight: '300',
                  color: 'var(--gold)',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginTop: '6px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.65rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            writingMode: 'vertical-rl',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'var(--scroll-line)',
          }}
        />
      </div>
    </section>
  );
}
