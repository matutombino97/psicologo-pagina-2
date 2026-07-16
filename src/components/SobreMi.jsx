export default function SobreMi() {
  const pills = [
    'Enfoque Cognitivo-Conductual',
    'Adultos y Jóvenes',
    '+8 años de experiencia',
  ];

  return (
    <section
      id="sobre-mi"
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top border accent */}
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

      <div
        className="section-inner"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Left: Real photo */}
        <div
          className="section-reveal-left sobre-mi-photo-wrapper"
          style={{ position: 'relative' }}
        >
          {/* Main photo frame */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              backgroundColor: 'var(--surface)',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid var(--gold-a12)',
            }}
          >
            {/* Real photo */}
            <img
              src="/psicologa.png"
              alt="Lic. María González — Psicóloga Clínica"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
              }}
            />

            {/* Credential badge */}
            <div
              className="sobre-mi-badge-credential"
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '-24px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--gold-a20)',
                borderRadius: '8px',
                padding: '16px 20px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--gold)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                }}
              >
                Lic.
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Psicología
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.65rem',
                  color: 'var(--gold)',
                  marginTop: '8px',
                }}
              >
                Mat. 12.345
              </div>
            </div>

            {/* Decorative top accent */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--top-accent-line)',
              }}
            />
          </div>

          {/* Years badge */}
          <div
            className="sobre-mi-badge-years"
            style={{
              position: 'absolute',
              top: '40px',
              left: '-20px',
              backgroundColor: 'var(--terracotta)',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'var(--text-on-dark-accent)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              8+
            </div>
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.65rem',
                color: 'var(--text-on-terra)',
                marginTop: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Años
            </div>
          </div>
        </div>

        {/* Right: Text content */}
        <div className="section-reveal-right">
          {/* Eyebrow */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '24px',
                height: '1px',
                backgroundColor: 'var(--gold)',
              }}
            />
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Sobre mí
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '700',
              color: 'var(--text-primary)',
              lineHeight: '1.1',
              marginBottom: '8px',
              letterSpacing: '-0.02em',
            }}
          >
            María González
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              marginBottom: '32px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Licenciada en Psicología · UBA
          </p>

          {/* Pills */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '36px',
            }}
          >
            {pills.map((p) => (
              <span
                key={p}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: '400',
                  color: 'var(--gold)',
                  backgroundColor: 'var(--gold-a08)',
                  border: '1px solid var(--gold-a25)',
                  borderRadius: '100px',
                  padding: '6px 14px',
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              color: 'var(--text-body)',
              lineHeight: '1.9',
              marginBottom: '24px',
            }}
          >
            Soy psicóloga clínica con más de ocho años de experiencia acompañando adultos y jóvenes 
            en procesos de cambio significativos. Me especializo en Terapia Cognitivo-Conductual, 
            un enfoque basado en evidencia que nos permite identificar y transformar los patrones 
            de pensamiento que afectan el bienestar emocional.
          </p>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              color: 'var(--text-body)',
              lineHeight: '1.9',
            }}
          >
            Creo en una terapia humana, práctica y sin rodeos. Mi objetivo es que cada sesión 
            sea una herramienta real para tu vida cotidiana.
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'var(--divider-gold-to-right)',
              margin: '36px 0',
            }}
          />

          {/* Quick stats */}
          <div style={{ display: 'flex', gap: '40px' }}>
            {[
              { num: 'UBA', label: 'Formación' },
              { num: 'USAL', label: 'Posgrado' },
              { num: 'Palermo', label: 'Consultorio' },
            ].map((s) => (
              <div key={s.num}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--gold)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    marginTop: '2px',
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
