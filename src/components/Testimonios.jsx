import { useRef, useState } from 'react';

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
        <span key={i} style={{ color: i < stars ? '#C8A96E' : '#3A3532', fontSize: '0.75rem' }}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonios() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const onMouseUp = () => setIsDragging(false);

  return (
    <section
      style={{
        backgroundColor: '#0F0F0F',
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
          background: 'linear-gradient(to right, transparent, rgba(200, 169, 110, 0.2), transparent)',
        }}
      />

      {/* Header */}
      <div
        className="section-reveal"
        style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', marginBottom: '60px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span
              style={{
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '0.7rem',
                fontWeight: '500',
                color: '#D4845A',
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
                color: '#E8DDD4',
                lineHeight: '1.1',
              }}
            >
              Voces de quienes{' '}
              <span style={{ fontStyle: 'italic', color: '#C8A96E' }}>confían</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.8rem',
              color: '#8A7F79',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            ←  Deslizá para ver más  →
          </p>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        className="section-reveal"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          paddingLeft: 'max(40px, calc((100vw - 1200px) / 2))',
          paddingRight: '40px',
          paddingBottom: '20px',
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          userSelect: 'none',
        }}
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            style={{
              minWidth: '340px',
              backgroundColor: '#1E1A18',
              border: '1px solid rgba(42, 37, 34, 0.8)',
              borderRadius: '12px',
              padding: '36px',
              flexShrink: 0,
              transition: 'border-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 169, 110, 0.2)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(42, 37, 34, 0.8)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '4rem',
                color: 'rgba(200, 169, 110, 0.2)',
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
                color: '#B8ADA5',
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
                  backgroundColor: 'rgba(200, 169, 110, 0.12)',
                  border: '1px solid rgba(200, 169, 110, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  color: '#C8A96E',
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
                    color: '#E8DDD4',
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.7rem',
                    color: '#8A7F79',
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
    </section>
  );
}
