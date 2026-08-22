export default function SobreMi() {
  const pills = [
    'Enfoque Cognitivo-Conductual (TCC)',
    'Adultos y Jóvenes',
    'Terapia Basada en Evidencia',
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
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.12)',
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

            {/* Credential badge — High contrast solid card, fully legible over the blazer */}
            <div
              className="sobre-mi-badge-credential"
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border-solid)',
                borderRadius: '8px',
                padding: '14px 18px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                }}
              >
                Lic. María González
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  color: 'var(--gold)',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                Psicología Clínica
              </div>
              <div
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.68rem',
                  color: 'var(--text-muted)',
                  marginTop: '6px',
                  fontWeight: '500',
                }}
              >
                Mat. Nacional 12.345
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

          {/* Years badge — Kept on photo as prominent visual anchor */}
          <div
            className="sobre-mi-badge-years"
            style={{
              position: 'absolute',
              top: '32px',
              left: '-20px',
              backgroundColor: 'var(--terracotta)',
              borderRadius: '6px',
              padding: '14px 18px',
              textAlign: 'center',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: '800',
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
                fontWeight: '600',
                color: 'var(--text-on-terra)',
                marginTop: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}
            >
              Años de Experiencia
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
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '20px',
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
              Sobre mí
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: '800',
              color: 'var(--text-primary)',
              lineHeight: '1.1',
              marginBottom: '8px',
              letterSpacing: '-0.03em',
            }}
          >
            María González
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.85rem',
              fontWeight: '500',
              color: 'var(--terracotta)',
              marginBottom: '28px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Licenciada en Psicología · UBA (M.N. 12.345)
          </p>

          {/* Value Quality Pills — Redundancy eliminated */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
              marginBottom: '32px',
            }}
          >
            {pills.map((p) => (
              <span
                key={p}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  color: 'var(--text-body)',
                  backgroundColor: 'var(--gold-a05)',
                  border: '1px solid var(--border-soft)',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  letterSpacing: '0.02em',
                }}
              >
                {p}
              </span>
            ))}
          </div>

          {/* High Contrast Narrative Bio */}
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.025rem',
              color: 'var(--text-body)',
              lineHeight: '1.85',
              marginBottom: '20px',
              fontWeight: '400',
            }}
          >
            Soy psicóloga clínica con más de ocho años de experiencia acompañando a adultos y jóvenes en procesos de cambio significativos. Me especializo en Terapia Cognitivo-Conductual (TCC), un enfoque basado en evidencia científica que nos permite identificar y transformar de raíz los patrones que afectan tu bienestar.
          </p>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.025rem',
              color: 'var(--text-body)',
              lineHeight: '1.85',
              marginBottom: '36px',
              fontWeight: '400',
            }}
          >
            Creo en una psicoterapia humana, cálida y sin rodeos abstractos. Mi objetivo es que cada sesión se traduzca en herramientas prácticas que puedas aplicar de inmediato en tu vida cotidiana.
          </p>

          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: 'var(--border-solid)',
              marginBottom: '32px',
            }}
          />

          {/* Credentials with Clear Typographic Hierarchy */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '24px' }}>
            {[
              { val: 'UBA', label: 'Formación de Grado' },
              { val: 'USAL', label: 'Posgrado Clínico' },
              { val: 'Palermo', label: 'Consultorio Presencial' },
            ].map((s) => (
              <div key={s.val}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.65rem',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.68rem',
                    fontWeight: '600',
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
      </div>
    </section>
  );
}
