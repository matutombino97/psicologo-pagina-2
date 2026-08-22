import { useState } from 'react';

const CATEGORIES = [
  { id: 'ansiedad', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>, title: 'Ansiedad y estrés', desc: 'Preocupaciones constantes, ataques de pánico, tensión crónica y sobrecarga' },
  { id: 'relaciones', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>, title: 'Relaciones y vínculos', desc: 'Conflictos de pareja, dinámicas familiares, comunicación asertiva y límites' },
  { id: 'duelo', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>, title: 'Duelo y pérdidas', desc: 'Acompañamiento en separaciones, fallecimientos y pérdidas significativas' },
  { id: 'autoestima', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>, title: 'Autoestima e identidad', desc: 'Inseguridad, autoexigencia desmedida, autoconcepto y toma de decisiones' },
  { id: 'trabajo', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>, title: 'Trabajo y burnout', desc: 'Agotamiento mental laboral, desmotivación profesional y balance de vida' },
  { id: 'orientacion', icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>, title: 'Orientación inicial', desc: 'Primera consulta abierta para explorar qué estás sintiendo y definir objetivos' },
];

const MODALITIES = [
  { id: 'presencial', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>, title: 'Presencial', desc: 'Consultorio en Palermo, CABA' },
  { id: 'online', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, title: 'Online', desc: 'Videollamada cómoda desde cualquier lugar' },
  { id: 'sin-preferencia', icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"/><path d="M3 12h18"/><path d="m18.36 5.64-12.72 12.72"/><path d="m5.64 5.64 12.72 12.72"/></svg>, title: 'Sin preferencia', desc: 'Coordinamos según disponibilidad mutua' },
];

const TIME_OPTIONS = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

const STEP_LABELS = ['Motivo', 'Modalidad', 'Horario', 'Confirmación'];

function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}
function getMaxDate() {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().split('T')[0];
}

function formatDateNatural(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const days = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  const d = new Date(year, parseInt(month) - 1, parseInt(day));
  return `${days[d.getDay()]} ${parseInt(day)} de ${months[parseInt(month) - 1]}`;
}

const inputStyle = {
  width: '100%',
  backgroundColor: 'var(--input-bg)',
  border: '1.5px solid var(--border-solid)',
  borderRadius: '6px',
  padding: '14px 16px',
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.95rem',
  color: 'var(--text-primary)',
  outline: 'none',
  transition: 'border-color 0.2s ease, background-color 0.2s ease',
  colorScheme: 'var(--color-scheme)',
};

export default function SchedulingWidget() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModality, setSelectedModality] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const cat = CATEGORIES.find((c) => c.id === selectedCategory);
    const mod = MODALITIES.find((m) => m.id === selectedModality);
    const dateNatural = formatDateNatural(selectedDate);
    const text = encodeURIComponent(
      `Hola! Me gustaría consultar disponibilidad para una sesión en Raíz Terapia.\n\n` +
      `📌 Motivo: ${cat?.title}\n` +
      `📌 Modalidad: ${mod?.title}\n` +
      `📌 Fecha preferida: ${dateNatural}${selectedTime ? ` a las ${selectedTime}hs` : ''}\n\n` +
      `👤 Nombre: ${form.nombre}\n` +
      (form.telefono ? `📞 WhatsApp: ${form.telefono}\n` : '') +
      (form.email ? `✉️ Email: ${form.email}\n` : '') +
      (form.mensaje ? `\n💬 Detalle adicional: ${form.mensaje}\n` : '') +
      `\n¿Tienen disponibilidad? ¡Muchas gracias!`
    );
    window.open(`https://wa.me/5492615000000?text=${text}`, '_blank');
    setSubmitted(true);
  };

  const canNext = () => {
    if (step === 1) return !!selectedCategory;
    if (step === 2) return !!selectedModality;
    if (step === 3) return !!selectedDate;
    return false;
  };

  return (
    <section
      id="agenda"
      style={{
        backgroundColor: 'var(--bg-agenda)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top accent line */}
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

      <div style={{ maxWidth: '920px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div className="section-reveal" style={{ marginBottom: '56px', textAlign: 'center' }}>
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '0.75rem',
              fontWeight: '600',
              color: 'var(--terracotta)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '16px',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M1 6h10M6 1l5 5-5 5" />
            </svg>
            Agenda Inteligente
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              color: 'var(--text-agenda-heading)',
              lineHeight: '1.1',
              letterSpacing: '-0.03em',
              margin: '0 0 16px 0',
            }}
          >
            Reservá tu primera consulta
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1.025rem',
              color: 'var(--text-agenda-body)',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: '1.7',
            }}
          >
            Un proceso guiado y sin compromiso. Elegís el motivo, modalidad y horario de preferencia para consultar disponibilidad directa por WhatsApp.
          </p>
        </div>

        {/* Widget card */}
        <div
          className="section-reveal"
          style={{
            backgroundColor: 'var(--surface)',
            border: '1px solid var(--border-solid)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.18)',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {/* Progress header */}
          <div style={{ padding: '32px 36px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.8rem',
                  fontWeight: '800',
                  color: 'var(--gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Paso {step} de 4
              </span>
              <span
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-body)',
                }}
              >
                {STEP_LABELS[step - 1]}
              </span>
            </div>

            {/* Progress track */}
            <div
              style={{
                height: '4px',
                backgroundColor: 'var(--border-solid)',
                borderRadius: '2px',
                marginBottom: '36px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: `${(step / 4) * 100}%`,
                  backgroundColor: 'var(--gold)',
                  borderRadius: '2px',
                  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>
          </div>

          {/* Step content */}
          <div style={{ padding: '0 36px 36px', minHeight: '340px' }}>

            {/* ── STEP 1: ¿Qué estás atravesando? ── */}
            {step === 1 && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  ¿Qué estás atravesando?
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.925rem',
                    color: 'var(--text-body)',
                    marginBottom: '28px',
                  }}
                >
                  Seleccioná la opción que mejor represente tu motivo de consulta actual.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '14px',
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        textAlign: 'left',
                        padding: '22px 20px',
                        backgroundColor:
                          selectedCategory === cat.id
                            ? 'var(--surface-hover)'
                            : 'var(--input-bg)',
                        border:
                          selectedCategory === cat.id
                            ? '2px solid var(--gold)'
                            : '1.5px solid var(--border-solid)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '125px',
                        boxShadow:
                          selectedCategory === cat.id
                            ? '0 4px 18px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--gold)'
                            : 'none',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== cat.id) {
                          e.currentTarget.style.borderColor = 'var(--gold-light)';
                          e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== cat.id) {
                          e.currentTarget.style.borderColor = 'var(--border-solid)';
                          e.currentTarget.style.backgroundColor = 'var(--input-bg)';
                        }
                      }}
                    >
                      {/* Top icon and active check badge */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <div style={{ color: selectedCategory === cat.id ? 'var(--gold)' : 'var(--text-muted)', transition: 'color 0.2s ease' }}>
                          {cat.icon}
                        </div>
                        {selectedCategory === cat.id && (
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              backgroundColor: 'var(--gold)',
                              color: 'var(--text-on-dark-accent)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.75rem',
                              fontWeight: '800',
                            }}
                          >
                            ✓
                          </span>
                        )}
                      </div>

                      <div>
                        <div
                          style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.95rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '6px',
                          }}
                        >
                          {cat.title}
                        </div>
                        <div
                          style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.825rem',
                            color: 'var(--text-body)',
                            lineHeight: '1.55',
                            fontWeight: '400',
                          }}
                        >
                          {cat.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 2: Modalidad ── */}
            {step === 2 && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  ¿Cómo preferís atenderte?
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.925rem',
                    color: 'var(--text-body)',
                    marginBottom: '28px',
                  }}
                >
                  Elegí si buscás atención en consultorio presencial o sesión online.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {MODALITIES.map((mod) => (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => setSelectedModality(mod.id)}
                      style={{
                        textAlign: 'center',
                        padding: '32px 20px',
                        backgroundColor:
                          selectedModality === mod.id
                            ? 'var(--surface-hover)'
                            : 'var(--input-bg)',
                        border:
                          selectedModality === mod.id
                            ? '2px solid var(--gold)'
                            : '1.5px solid var(--border-solid)',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        position: 'relative',
                        boxShadow:
                          selectedModality === mod.id
                            ? '0 4px 18px rgba(0, 0, 0, 0.2), 0 0 0 1px var(--gold)'
                            : 'none',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedModality !== mod.id) {
                          e.currentTarget.style.borderColor = 'var(--gold-light)';
                          e.currentTarget.style.backgroundColor = 'var(--surface-hover)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedModality !== mod.id) {
                          e.currentTarget.style.borderColor = 'var(--border-solid)';
                          e.currentTarget.style.backgroundColor = 'var(--input-bg)';
                        }
                      }}
                    >
                      {selectedModality === mod.id && (
                        <span
                          style={{
                            position: 'absolute',
                            top: '14px',
                            right: '14px',
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--gold)',
                            color: 'var(--text-on-dark-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: '800',
                          }}
                        >
                          ✓
                        </span>
                      )}
                      <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center', color: selectedModality === mod.id ? 'var(--gold)' : 'var(--text-muted)', transition: 'color 0.2s ease' }}>
                        {mod.icon}
                      </div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.2rem',
                          fontWeight: '700',
                          color: 'var(--text-primary)',
                          marginBottom: '6px',
                        }}
                      >
                        {mod.title}
                      </div>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.85rem',
                          color: 'var(--text-body)',
                          lineHeight: '1.5',
                        }}
                      >
                        {mod.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ── STEP 3: Elegí fecha y horario ── */}
            {step === 3 && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  ¿Cuándo te viene bien?
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.925rem',
                    color: 'var(--text-body)',
                    marginBottom: '28px',
                    lineHeight: '1.6',
                  }}
                >
                  Elegí tu fecha y horario preferido. Vamos a confirmar la disponibilidad directamente por WhatsApp.
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                    gap: '24px',
                  }}
                >
                  {/* Date picker */}
                  <div>
                    <label
                      htmlFor="fecha-picker"
                      style={{
                        display: 'block',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '10px',
                      }}
                    >
                      Fecha de preferencia *
                    </label>
                    <input
                      id="fecha-picker"
                      type="date"
                      min={getMinDate()}
                      max={getMaxDate()}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      style={{
                        ...inputStyle,
                        cursor: 'pointer',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-solid)')}
                    />
                    {selectedDate && (
                      <p
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.85rem',
                          fontWeight: '600',
                          color: 'var(--gold)',
                          marginTop: '8px',
                        }}
                      >
                        {formatDateNatural(selectedDate)}
                      </p>
                    )}
                  </div>

                  {/* Time picker */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        color: 'var(--gold)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '10px',
                      }}
                    >
                      Horario de preferencia
                    </label>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '8px',
                      }}
                    >
                      {TIME_OPTIONS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(selectedTime === t ? '' : t)}
                          style={{
                            padding: '10px 6px',
                            borderRadius: '6px',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.85rem',
                            fontWeight: selectedTime === t ? '700' : '500',
                            cursor: 'pointer',
                            backgroundColor:
                              selectedTime === t
                                ? 'var(--gold-a20)'
                                : 'var(--input-bg)',
                            border:
                              selectedTime === t
                                ? '2px solid var(--gold)'
                                : '1px solid var(--border-solid)',
                            color: selectedTime === t ? 'var(--text-primary)' : 'var(--text-body)',
                            transition: 'all 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            if (selectedTime !== t) {
                              e.currentTarget.style.borderColor = 'var(--gold-light)';
                              e.currentTarget.style.color = 'var(--text-primary)';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedTime !== t) {
                              e.currentTarget.style.borderColor = 'var(--border-solid)';
                              e.currentTarget.style.color = 'var(--text-body)';
                            }
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ── STEP 4: Confirmación ── */}
            {step === 4 && !submitted && (
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  Casi listo
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.925rem',
                    color: 'var(--text-body)',
                    marginBottom: '24px',
                  }}
                >
                  Completá tus datos de contacto y abrimos WhatsApp con el mensaje listo para enviar.
                </p>

                {/* Summary chips */}
                <div
                  style={{
                    backgroundColor: 'var(--surface-hover)',
                    border: '1px solid var(--border-solid)',
                    borderRadius: '8px',
                    padding: '16px 20px',
                    marginBottom: '28px',
                    display: 'flex',
                    gap: '24px',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { label: 'Motivo', value: CATEGORIES.find((c) => c.id === selectedCategory)?.title },
                    { label: 'Modalidad', value: MODALITIES.find((m) => m.id === selectedModality)?.title },
                    { label: 'Fecha', value: formatDateNatural(selectedDate) + (selectedTime ? ` (${selectedTime}hs)` : '') },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.68rem',
                          fontWeight: '600',
                          color: 'var(--gold)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '3px',
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    {[
                      { id: 'nombre', label: 'Nombre completo', type: 'text', required: true, placeholder: 'Tu nombre y apellido' },
                      { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
                      { id: 'telefono', label: 'WhatsApp', type: 'tel', required: false, placeholder: '+54 9 11 0000-0000' },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          style={{
                            display: 'block',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.72rem',
                            fontWeight: '600',
                            color: 'var(--text-body)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            marginBottom: '8px',
                          }}
                        >
                          {field.label} {field.required && '*'}
                        </label>
                        <input
                          id={field.id}
                          type={field.type}
                          required={field.required}
                          placeholder={field.placeholder}
                          value={form[field.id]}
                          onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                          style={inputStyle}
                          onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                          onBlur={(e) => (e.target.style.borderColor = 'var(--border-solid)')}
                        />
                      </div>
                    ))}
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label
                      htmlFor="mensaje"
                      style={{
                        display: 'block',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.72rem',
                        fontWeight: '600',
                        color: 'var(--text-body)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px',
                      }}
                    >
                      Comentario adicional (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Contanos brevemente qué te gustaría trabajar o alguna preferencia de horario específica..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'var(--gold)')}
                      onBlur={(e) => (e.target.style.borderColor = 'var(--border-solid)')}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#25D366',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      cursor: 'pointer',
                      boxShadow: '0 4px 16px rgba(37, 211, 102, 0.25)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1ebe59';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 22px rgba(37, 211, 102, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#25D366';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 16px rgba(37, 211, 102, 0.25)';
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Consultar disponibilidad por WhatsApp
                  </button>
                </form>
              </div>
            )}

            {/* ── Éxito ── */}
            {submitted && (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div
                  style={{
                    marginBottom: '20px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l3 3 5-5" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.85rem',
                    fontWeight: '800',
                    color: 'var(--gold)',
                    marginBottom: '12px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  ¡Consulta enviada con éxito!
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '1rem',
                    color: 'var(--text-body)',
                    maxWidth: '420px',
                    margin: '0 auto',
                    lineHeight: '1.7',
                  }}
                >
                  Abrimos WhatsApp con tu mensaje listo. Te responderemos a la brevedad para coordinar la fecha definitiva.
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          {!submitted && (
            <div
              style={{
                padding: '24px 36px',
                borderTop: '1px solid var(--border-solid)',
                backgroundColor: 'var(--surface)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <button
                type="button"
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: step === 1 ? 'var(--text-disabled)' : 'var(--text-body)',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: step === 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { if (step > 1) e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { if (step > 1) e.currentTarget.style.color = 'var(--text-body)'; }}
              >
                ← Atrás
              </button>

              {step < 4 && (
                <button
                  type="button"
                  onClick={() => canNext() && setStep(step + 1)}
                  disabled={!canNext()}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: canNext() ? 'var(--text-on-dark-accent)' : 'var(--text-muted)',
                    backgroundColor: canNext() ? 'var(--gold)' : 'var(--surface-hover)',
                    border: canNext() ? '1.5px solid var(--gold)' : '1.5px solid var(--border-solid)',
                    borderRadius: '6px',
                    padding: '14px 32px',
                    cursor: canNext() ? 'pointer' : 'not-allowed',
                    boxShadow: canNext() ? '0 4px 14px rgba(0, 0, 0, 0.18)' : 'none',
                    opacity: canNext() ? 1 : 0.65,
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={(e) => {
                    if (canNext()) {
                      e.currentTarget.style.backgroundColor = 'var(--gold-light)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (canNext()) {
                      e.currentTarget.style.backgroundColor = 'var(--gold)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  Continuar →
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
