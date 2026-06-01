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
      {/* Background: layered gradients simulating warm photo */}
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

      {/* Large decorative number */}
      <div
        style={{
          position: 'absolute',
          right: '-2%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(200px, 30vw, 500px)',
          fontWeight: '700',
          color: 'var(--gold-a04)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      >
        M
      </div>

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
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 40px 160px',
          width: '100%',
        }}
      >
        {/* Eyebrow label */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
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
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0' }}>
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
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'var(--gold-light)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'var(--gold)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
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
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'var(--gold-a50)';
              e.target.style.color = 'var(--gold)';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'var(--text-primary-a25)';
              e.target.style.color = 'var(--text-primary)';
            }}
          >
            Conocer más →
          </a>
        </div>

        {/* Spacer so badge doesn't overlap */}
        <div style={{ height: '64px' }} />

        {/* Floating badge — inline in flow, below CTAs */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: 'var(--surface-glass)',
            border: '1px solid var(--gold-a20)',
            padding: '12px 20px',
            borderRadius: '8px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span style={{ color: 'var(--gold)', fontSize: '1rem' }}>✦</span>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.875rem',
              color: 'var(--text-primary)',
              fontWeight: '400',
            }}
          >
            +200 pacientes acompañados
          </span>
        </div>

        {/* Stats row — top right */}
        <div
          style={{
            position: 'absolute',
            top: '140px',
            right: '40px',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'flex-end',
            display: 'flex',
          }}
          className="hidden lg:flex"
        >
          {[
            { num: '+8', label: 'años de\nexperiencia' },
            { num: '98%', label: 'satisfacción\nde pacientes' },
          ].map((s) => (
            <div key={s.num} style={{ textAlign: 'right' }}>
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '2.5rem',
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
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                  whiteSpace: 'pre-line',
                  textAlign: 'right',
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
