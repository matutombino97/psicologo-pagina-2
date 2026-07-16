import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Agenda', href: '#agenda' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '14px 40px' : '24px 40px',
        backgroundColor: scrolled ? 'var(--navbar-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--gold-a12)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo */}
      <a
        href="#inicio"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: '700',
          color: 'var(--gold)',
          textDecoration: 'none',
          letterSpacing: '-0.03em',
        }}
      >
        Raíz Terapia
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex" style={{ gap: '40px', alignItems: 'center' }}>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.875rem',
              fontWeight: '400',
              color: 'var(--text-body)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--text-primary)')}
            onMouseLeave={(e) => (e.target.style.color = 'var(--text-body)')}
          >
            {l.label}
          </a>
        ))}
        <ThemeToggle />
        <a
          href="#agenda"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.875rem',
            fontWeight: '500',
            color: 'var(--text-on-dark-accent)',
            textDecoration: 'none',
            backgroundColor: 'var(--terracotta)',
            padding: '10px 24px',
            borderRadius: '100px',
            letterSpacing: '0.03em',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'var(--terracotta-dark)';
            e.target.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'var(--terracotta)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Reservar Consulta
        </a>
      </div>

      {/* Mobile: theme toggle + burger */}
      <div className="flex md:hidden" style={{ gap: '12px', alignItems: 'center' }}>
        <ThemeToggle />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                backgroundColor: 'var(--gold)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform:
                  menuOpen && i === 0
                    ? 'rotate(45deg) translate(4.5px, 4.5px)'
                    : menuOpen && i === 2
                    ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                    : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'var(--navbar-mobile-bg)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--gold-a15)',
            padding: '24px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#agenda"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: 'var(--text-on-dark-accent)',
              textDecoration: 'none',
              backgroundColor: 'var(--terracotta)',
              padding: '12px 24px',
              borderRadius: '100px',
              textAlign: 'center',
              marginTop: '8px',
            }}
          >
            Reservar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}
