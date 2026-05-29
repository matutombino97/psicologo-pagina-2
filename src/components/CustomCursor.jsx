import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const move = (e) => setPos({ x: e.clientX, y: e.clientY });

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '40px' : '8px',
          height: isHovering ? '40px' : '8px',
          backgroundColor: isHovering ? 'transparent' : '#D4845A',
          border: isHovering ? '1.5px solid #D4845A' : 'none',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease, border 0.25s ease',
          mixBlendMode: 'normal',
        }}
      />
      {/* Glow halo */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          transform: 'translate(-50%, -50%)',
          width: isClicking ? '60px' : '32px',
          height: isClicking ? '60px' : '32px',
          backgroundColor: 'rgba(212, 132, 90, 0.08)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'width 0.4s ease, height 0.4s ease, opacity 0.3s ease',
          filter: 'blur(8px)',
        }}
      />
    </>
  );
}
