import { useRef, useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    initials: 'L.M.',
    name: 'Laura M.',
    stars: 5,
    text:
      'Después de años de intentarlo sola, encontrar este espacio fue un punto de inflexión real. María tiene una capacidad increíble para hacer que te sientas comprendida sin juzgarte.',
  },
  {
    initials: 'F.R.',
    name: 'Federico R.',
    stars: 5,
    text:
      'Lo que más me sorprendió fue la practicidad del enfoque. No solo hablamos de cómo me siento, sino que desarrollé herramientas concretas que uso todos los días.',
  },
  {
    initials: 'C.V.',
    name: 'Carla V.',
    stars: 5,
    text:
      'Empecé la terapia en un momento muy oscuro, con muchas dudas. Hoy puedo decir que transformó mi relación conmigo misma. Completamente recomendable.',
  },
  {
    initials: 'M.S.',
    name: 'Marcos S.',
    stars: 5,
    text:
      'La atención online funciona perfectamente. La puntualidad, la claridad de sus explicaciones y la calidez del vínculo hacen toda la diferencia.',
  },
  {
    initials: 'V.P.',
    name: 'Valentina P.',
    stars: 5,
    text:
      'Fui por orientación vocacional y encontré mucho más que eso. Un proceso que me ayudó a conocerme y tomar decisiones con mucha más claridad.',
  },
];

function StarRating({ stars }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < stars ? 'var(--gold)' : 'var(--text-disabled)', fontSize: '0.75rem' }}>
          ★
        </span>
      ))}
    </div>
  );
}

function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
      style={{
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1px solid var(--border)',
        backgroundColor: disabled ? 'transparent' : 'var(--surface)',
        color: disabled ? 'var(--text-disabled)' : 'var(--text-body)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.25s ease',
        fontSize: '1.1rem',
        boxShadow: disabled ? 'none' : 'var(--card-shadow, none)',
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = 'var(--gold)';
          e.currentTarget.style.color = 'var(--gold)';
          e.currentTarget.style.backgroundColor = 'var(--gold-a08)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = 'var(--border)';
          e.currentTarget.style.color = 'var(--text-body)';
          e.currentTarget.style.backgroundColor = 'var(--surface)';
        }
      }}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
  );
}

export default function Testimonios() {
  const trackRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const gap = 20;

  useEffect(() => {
    const updateCardsPerView = () => {
      const w = window.innerWidth;
      if (w <= 768) setCardsPerView(1);
      else if (w <= 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const totalPages = Math.ceil(TESTIMONIALS.length / cardsPerView);

  const scrollToIndex = (pageIndex) => {
    const clamped = Math.max(0, Math.min(pageIndex, totalPages - 1));
    setCurrentIndex(clamped);
    
    const cardIndex = Math.min(clamped * cardsPerView, TESTIMONIALS.length - 1);

    if (trackRef.current) {
      const card = trackRef.current.children[cardIndex];
      if (card) {
        trackRef.current.scrollTo({
          left: card.offsetLeft - trackRef.current.offsetLeft,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-primary)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'var(--divider-accent-soft)',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* Header */}
        <div
          className="section-reveal"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '48px',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: 'var(--terracotta)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                display: 'block',
                marginBottom: '16px',
              }}
            >
              ✦ Testimonios
            </span>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '300',
                color: 'var(--text-primary)',
                lineHeight: '1.1',
              }}
            >
              Voces de quienes{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold)' }}>confían</span>
            </h2>
          </div>

          {/* Arrow controls */}
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <ArrowButton
              direction="left"
              onClick={() => scrollToIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
            />
            <ArrowButton
              direction="right"
              onClick={() => scrollToIndex(currentIndex + 1)}
              disabled={currentIndex >= totalPages - 1}
            />
          </div>
        </div>

        {/* Cards track — contained, no overflow visible */}
        <div
          ref={trackRef}
          className="section-reveal testimonials-track"
          style={{
            /* Override the full-bleed padding — keep it inside the 1200px container */
            paddingLeft: '0',
            paddingRight: '0',
            scrollPaddingLeft: '0',
            scrollPaddingRight: '0',
            scrollSnapType: 'x mandatory',
            overflowX: 'auto',
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="testimonial-card"
            >
              {/* Quote mark */}
              <div
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '4rem',
                  color: 'var(--gold-a20)',
                  lineHeight: '1',
                  marginBottom: '16px',
                  marginTop: '-12px',
                }}
              >
                "
              </div>

              {/* Stars */}
              <div style={{ marginBottom: '16px' }}>
                <StarRating stars={t.stars} />
              </div>

              {/* Quote text */}
              <p
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.9rem',
                  color: 'var(--text-body)',
                  lineHeight: '1.8',
                  marginBottom: '28px',
                }}
              >
                {t.text}
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--gold-a12)',
                    border: '1px solid var(--gold-a25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '0.85rem',
                    fontWeight: '600',
                    color: 'var(--gold)',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--text-primary)',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                      marginTop: '2px',
                    }}
                  >
                    Paciente verificada
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div
          className="section-reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px',
          }}
        >
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir a testimonio ${i + 1}`}
              style={{
                width: currentIndex === i ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: currentIndex === i ? 'var(--gold)' : 'var(--border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
