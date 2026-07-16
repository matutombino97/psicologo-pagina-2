export default function Footer() {
  const navLinks = ['Inicio', 'Sobre mí', 'Especialidades', 'Agenda'];
  const hrefs = ['#inicio', '#sobre-mi', '#especialidades', '#agenda'];

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-footer)',
        borderTop: '1px solid var(--border)',
        padding: '80px 0 40px',
        position: 'relative',
      }}
    >
      <div className="footer-inner" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '40px',
            marginBottom: '64px',
          }}
        >
          {/* Logo & tagline */}
          <div>
            <a
              href="#inicio"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: '700',
                color: 'var(--gold)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '16px',
                letterSpacing: '-0.03em',
              }}
            >
              Raíz Terapia
            </a>
            <p
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.7',
                maxWidth: '260px',
              }}
            >
              Psicología clínica de alta complejidad. Un espacio para construir 
              el bienestar que merecés.
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
              {[
                {
                  label: 'Instagram',
                  href: 'https://instagram.com',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com',
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-a40)';
                    e.currentTarget.style.color = 'var(--gold)';
                    e.currentTarget.style.backgroundColor = 'var(--gold-a05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-muted)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '24px',
              }}
            >
              Navegación
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {navLinks.map((link, i) => (
                <a
                  key={link}
                  href={hrefs[i]}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h4
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: 'var(--gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '24px',
              }}
            >
              Contacto
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Consultorio en Palermo, CABA', sub: 'Atención presencial' },
                { label: 'Atención Online disponible', sub: 'Todo el país y exterior' },
                { label: '+54 9 261 500-0000', sub: 'WhatsApp / Llamadas' },
              ].map((item) => (
                <div key={item.label}>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.875rem',
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            background: 'var(--border-soft)',
            marginBottom: '32px',
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            © {new Date().getFullYear()} Raíz Terapia · Lic. María González · Mat. Prof. 12.345
          </p>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            Todos los derechos reservados · Confidencialidad garantizada
          </p>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/5492615000000?text=Hola, quiero consultar sobre turnos disponibles"
        target="_blank"
        rel="noopener noreferrer"
        id="whatsapp-float"
        aria-label="Contactar por WhatsApp"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
          zIndex: 900,
          animation: 'pulse-glow 2s ease-in-out infinite',
          transition: 'transform 0.2s ease',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </footer>
  );
}
