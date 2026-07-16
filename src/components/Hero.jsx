import { useState, useEffect } from 'react';

// SVG icon components — custom, no generic unicode symbols
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
        backgroundColor: 'var(--bg-primary)',
        paddingTop: '80px',
      }}
    >
      {/* Organic Background Radial Glows */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle 600px at 10% 20%, var(--hero-radial-1) 0%, transparent 80%),
            radial-gradient(circle 500px at 90% 80%, var(--hero-radial-2) 0%, transparent 80%),
            var(--hero-gradient)
          `,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Grainy texture overlay */}
      <div className="grain-overlay" />

      {/* Responsive 60/40 Asymmetric Layout Container */}
      <div
        className="section-inner"
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: '64px',
          alignItems: 'center',
          paddingTop: '64px',
          paddingBottom: '80px',
        }}
      >
        {/* Left Side (60% equivalent) — Left-aligned Typography with Irregular hierarchy */}
        <div style={{ textAlign: 'left' }}>
          {/* Eyebrow label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '28px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '1.5px',
                backgroundColor: 'var(--gold)',
              }}
            />
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.75rem',
                fontWeight: '600',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Psicología Clínica · Buenos Aires
            </span>
          </div>

          {/* Irregular Typographic Hierarchy Title */}
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              marginBottom: '32px',
            }}
          >
            {/* Small weight/style line */}
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
                fontWeight: '300',
                color: 'var(--text-muted)',
                marginBottom: '12px',
                letterSpacing: '-0.01em',
              }}
            >
              Un espacio para volver a empezar
            </span>
            {/* Massive Bold line */}
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
                fontWeight: '800',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                letterSpacing: '-0.04em',
                marginBottom: '12px',
              }}
            >
              Desde la raíz.
            </span>
            {/* Medium supportive line */}
            <span
              style={{
                display: 'block',
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                fontWeight: '400',
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              Terapia basada en evidencia.
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(1rem, 1.2vw, 1.125rem)',
              fontWeight: '400',
              color: 'var(--text-muted)',
              maxWidth: '520px',
              lineHeight: '1.7',
              marginBottom: '44px',
            }}
          >
            Acompañamiento psicoterapéutico individual para jóvenes y adultos. Enfoque cognitivo-conductual práctico enfocado en brindarte herramientas reales para tu vida cotidiana.
          </p>

          {/* CTA Row */}
          <div className="hero-cta-row">
            <a
              href="#agenda"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: 'var(--text-on-dark-accent)',
                textDecoration: 'none',
                backgroundColor: 'var(--gold)',
                padding: '18px 36px',
                borderRadius: '8px',
                letterSpacing: '0.02em',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 4px 14px rgba(46, 68, 54, 0.15)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold-light)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(46, 68, 54, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--gold)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 14px rgba(46, 68, 54, 0.15)';
              }}
            >
              <IconCalendar />
              Reservar consulta
            </a>
            <a
              href="#sobre-mi"
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.95rem',
                fontWeight: '500',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                border: '1.5px solid var(--border)',
                padding: '16.5px 36px',
                borderRadius: '8px',
                letterSpacing: '0.02em',
                transition: 'all 0.25s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--gold)';
                e.currentTarget.style.color = 'var(--gold)';
                e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Conocer más
              <IconArrowRight />
            </a>
          </div>
        </div>

        {/* Right Side (40% equivalent) — Real photo in context */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            width: '100%',
          }}
        >
          {/* Framed contextual container */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '0.82',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border-soft)',
              boxShadow: 'var(--card-shadow, 0 10px 40px rgba(0,0,0,0.04))',
            }}
          >
            {/* The real psychologist photo */}
            <img
              src="/psicologa.png"
              alt="Lic. María González — Raíz Terapia"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />

            {/* Subtle soft bottom info card over image instead of floating badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                background: 'linear-gradient(to top, rgba(28, 38, 33, 0.95) 0%, rgba(28, 38, 33, 0.7) 70%, transparent 100%)',
                padding: '28px 24px 20px',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#FFFFFF',
                  marginBottom: '4px',
                  letterSpacing: '-0.01em',
                }}
              >
                Lic. María González
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.75rem',
                  color: 'var(--text-agenda-body)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Matrícula Nacional 12.345 · UBA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
