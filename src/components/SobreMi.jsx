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
        backgroundColor: '#0F0F0F',
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
          background: 'linear-gradient(to right, transparent, rgba(200, 169, 110, 0.25), transparent)',
        }}
      />

      {/* Subtle large background text */}
      <div
        style={{
          position: 'absolute',
          left: '-4%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(120px, 20vw, 300px)',
          fontWeight: '700',
          color: 'rgba(200, 169, 110, 0.03)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        Yo
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: '80px',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Left: Photo placeholder */}
        <div
          className="section-reveal-left"
          style={{
            position: 'relative',
          }}
        >
          {/* Main photo frame */}
          <div
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              backgroundColor: '#1E1A18',
              borderRadius: '4px',
              overflow: 'hidden',
              border: '1px solid rgba(200, 169, 110, 0.12)',
            }}
          >
            {/* Warm gradient placeholder photo */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  radial-gradient(ellipse 80% 60% at 50% 30%, rgba(200, 169, 110, 0.12) 0%, transparent 60%),
                  radial-gradient(ellipse 60% 80% at 30% 80%, rgba(212, 132, 90, 0.08) 0%, transparent 50%),
                  linear-gradient(180deg, #2A2018 0%, #1A1614 50%, #0F0F0F 100%)
                `,
              }}
            />

            {/* Silhouette-like figure hint */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: '85%',
                background: 'linear-gradient(to top, rgba(30,26,24,0.6) 0%, rgba(40,32,26,0.4) 60%, transparent 100%)',
                borderRadius: '100px 100px 0 0',
              }}
            />

            {/* Initials overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '5rem',
                  fontWeight: '300',
                  color: 'rgba(200, 169, 110, 0.2)',
                  lineHeight: 1,
                }}
              >
                MG
              </div>
            </div>

            {/* Credential badge */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                right: '-24px',
                backgroundColor: '#1E1A18',
                border: '1px solid rgba(200, 169, 110, 0.2)',
                borderRadius: '8px',
                padding: '16px 20px',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#C8A96E',
                  lineHeight: 1,
                }}
              >
                Lic.
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.7rem',
                  color: '#8A7F79',
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
                  color: '#C8A96E',
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
                background: 'linear-gradient(to right, #C8A96E, transparent)',
              }}
            />
          </div>

          {/* Years badge */}
          <div
            style={{
              position: 'absolute',
              top: '40px',
              left: '-20px',
              backgroundColor: '#D4845A',
              borderRadius: '8px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '2rem',
                fontWeight: '600',
                color: '#0F0F0F',
                lineHeight: 1,
              }}
            >
              8+
            </div>
            <div
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.65rem',
                color: 'rgba(15,15,15,0.7)',
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
                backgroundColor: '#C8A96E',
              }}
            />
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: '#C8A96E',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              Sobre mí
            </span>
          </div>

          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '300',
              color: '#E8DDD4',
              lineHeight: '1.1',
              marginBottom: '8px',
            }}
          >
            María González
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.9rem',
              color: '#8A7F79',
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
                  color: '#C8A96E',
                  backgroundColor: 'rgba(200, 169, 110, 0.08)',
                  border: '1px solid rgba(200, 169, 110, 0.25)',
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
              color: '#B8ADA5',
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
              color: '#B8ADA5',
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
              background: 'linear-gradient(to right, rgba(200, 169, 110, 0.2), transparent)',
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
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#C8A96E',
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.75rem',
                    color: '#8A7F79',
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
