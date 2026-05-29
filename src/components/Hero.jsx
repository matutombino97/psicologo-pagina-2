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
        backgroundColor: '#1A1614',
      }}
    >
      {/* Background: layered gradients simulating warm photo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 70% 40%, rgba(200, 169, 110, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(212, 132, 90, 0.06) 0%, transparent 50%),
            linear-gradient(135deg, #0F0F0F 0%, #1A1614 40%, #1E1A18 100%)
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
          color: 'rgba(200, 169, 110, 0.04)',
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
          background: 'linear-gradient(to bottom, transparent, rgba(200, 169, 110, 0.3), transparent)',
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
              backgroundColor: '#C8A96E',
            }}
          />
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: '500',
              color: '#C8A96E',
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
            color: '#E8DDD4',
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
              color: '#C8A96E',
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
            color: '#8A7F79',
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
              color: '#0F0F0F',
              textDecoration: 'none',
              backgroundColor: '#C8A96E',
              padding: '16px 36px',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#D4BB8A';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#C8A96E';
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
              color: '#E8DDD4',
              textDecoration: 'none',
              border: '1px solid rgba(232, 221, 212, 0.25)',
              padding: '16px 36px',
              borderRadius: '4px',
              letterSpacing: '0.02em',
              transition: 'all 0.25s ease',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = 'rgba(200, 169, 110, 0.5)';
              e.target.style.color = '#C8A96E';
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(232, 221, 212, 0.25)';
              e.target.style.color = '#E8DDD4';
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
            backgroundColor: 'rgba(30, 26, 24, 0.85)',
            border: '1px solid rgba(200, 169, 110, 0.2)',
            padding: '12px 20px',
            borderRadius: '8px',
            backdropFilter: 'blur(12px)',
          }}
        >
          <span style={{ color: '#C8A96E', fontSize: '1rem' }}>✦</span>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.875rem',
              color: '#E8DDD4',
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
                  color: '#C8A96E',
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.75rem',
                  color: '#8A7F79',
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
            color: '#8A7F79',
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
            background: 'linear-gradient(to bottom, #C8A96E, transparent)',
          }}
        />
      </div>
    </section>
  );
}
