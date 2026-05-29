import { useState } from 'react';

const CATEGORIES = [
  { id: 'ansiedad', icon: '🌊', title: 'Ansiedad y estrés', desc: 'Preocupaciones, ataques de pánico, tensión crónica' },
  { id: 'relaciones', icon: '🤝', title: 'Relaciones y vínculos', desc: 'Pareja, familia, comunicación, límites' },
  { id: 'duelo', icon: '🕊️', title: 'Duelo y pérdidas', desc: 'Procesar pérdidas afectivas o materiales' },
  { id: 'autoestima', icon: '🌱', title: 'Autoestima e identidad', desc: 'Seguridad personal, autoconcepto, identidad' },
  { id: 'trabajo', icon: '💼', title: 'Trabajo y burnout', desc: 'Agotamiento laboral, estrés laboral, carrera' },
  { id: 'orientacion', icon: '🧭', title: 'No sé bien, necesito orientación', desc: 'Primera consulta de exploración abierta' },
];

const MODALITIES = [
  { id: 'presencial', icon: '🏛️', title: 'Presencial', desc: 'Consultorio en Palermo, CABA' },
  { id: 'online', icon: '💻', title: 'Online', desc: 'Videollamada cómoda desde casa' },
  { id: 'sin-preferencia', icon: '✨', title: 'Sin preferencia', desc: 'Elegí el que más convenga' },
];

const TIME_OPTIONS = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

const STEP_LABELS = ['Motivo', 'Modalidad', 'Horario', 'Confirmación'];

// Get today + 60 days as min/max for the date picker
function getMinDate() {
  const d = new Date();
  d.setDate(d.getDate() + 1); // at least tomorrow
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
  backgroundColor: 'rgba(42, 37, 34, 0.6)',
  border: '1px solid rgba(200, 169, 110, 0.15)',
  borderRadius: '8px',
  padding: '12px 16px',
  fontFamily: '"DM Sans", sans-serif',
  fontSize: '0.9rem',
  color: '#E8DDD4',
  outline: 'none',
  transition: 'border-color 0.2s ease',
  colorScheme: 'dark',
};

export default function SchedulingWidget() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedModality, setSelectedModality] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);

  const progress = ((step - 1) / 3) * 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    const cat = CATEGORIES.find((c) => c.id === selectedCategory);
    const mod = MODALITIES.find((m) => m.id === selectedModality);
    const dateNatural = formatDateNatural(selectedDate);
    const text = encodeURIComponent(
      `Hola! Me gustaria consultar disponibilidad para una sesion.\n\n` +
      `- Motivo: ${cat?.title}\n` +
      `- Modalidad: ${mod?.title}\n` +
      `- Fecha preferida: ${dateNatural}${selectedTime ? ` a las ${selectedTime}hs` : ''}\n` +
      `- Nombre: ${form.nombre}\n` +
      (form.telefono ? `- Tel: ${form.telefono}\n` : '') +
      (form.mensaje ? `\nMensaje: ${form.mensaje}\n` : '') +
      `\nHay disponibilidad? Gracias!`
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
        backgroundColor: '#1A1614',
        padding: '100px 0',
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
          background: 'linear-gradient(to right, transparent, rgba(200, 169, 110, 0.4), transparent)',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        {/* Section header */}
        <div className="section-reveal" style={{ marginBottom: '64px', textAlign: 'center' }}>
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
            ✦ Agenda Inteligente
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
            Reservá tu primera consulta
          </h2>
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '1rem',
              color: '#8A7F79',
              marginTop: '16px',
              maxWidth: '480px',
              margin: '16px auto 0',
              lineHeight: '1.7',
            }}
          >
            Un proceso simple y sin compromiso. Elegís fecha y horario de preferencia 
            y consultamos disponibilidad directamente por WhatsApp.
          </p>
        </div>

        {/* Widget card */}
        <div
          className="section-reveal"
          style={{
            backgroundColor: '#1E1A18',
            border: '1px solid rgba(200, 169, 110, 0.12)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* Progress header */}
          <div style={{ padding: '32px 40px 0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
              }}
            >
              {STEP_LABELS.map((label, i) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '6px',
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.75rem',
                      fontWeight: '500',
                      backgroundColor:
                        i + 1 < step ? '#C8A96E' : i + 1 === step ? '#D4845A' : 'rgba(42, 37, 34, 1)',
                      color: i + 1 <= step ? '#0F0F0F' : '#8A7F79',
                      border:
                        i + 1 === step
                          ? '2px solid #D4845A'
                          : i + 1 < step
                          ? '2px solid #C8A96E'
                          : '2px solid rgba(200, 169, 110, 0.15)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {i + 1 < step ? '✓' : i + 1}
                  </div>
                  <span
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.65rem',
                      color: i + 1 === step ? '#C8A96E' : '#8A7F79',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                    className="hidden sm:block"
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Progress track */}
            <div
              style={{
                height: '2px',
                backgroundColor: 'rgba(42, 37, 34, 1)',
                borderRadius: '1px',
                marginBottom: '40px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${progress}%`,
                  backgroundColor: '#C8A96E',
                  borderRadius: '1px',
                  transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </div>
          </div>

          {/* Step content */}
          <div style={{ padding: '0 40px 40px', minHeight: '320px' }}>

            {/* ── STEP 1: ¿Qué estás atravesando? ── */}
            {step === 1 && (
              <div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: '#E8DDD4',
                    marginBottom: '8px',
                  }}
                >
                  ¿Qué estás atravesando?
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    color: '#8A7F79',
                    marginBottom: '28px',
                  }}
                >
                  Seleccioná la opción que más se acerque a tu situación.
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                    gap: '12px',
                  }}
                >
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      style={{
                        textAlign: 'left',
                        padding: '20px',
                        backgroundColor:
                          selectedCategory === cat.id
                            ? 'rgba(212, 132, 90, 0.1)'
                            : 'rgba(42, 37, 34, 0.6)',
                        border:
                          selectedCategory === cat.id
                            ? '1.5px solid rgba(212, 132, 90, 0.6)'
                            : '1.5px solid rgba(42, 37, 34, 0.8)',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedCategory !== cat.id) {
                          e.currentTarget.style.border = '1.5px solid rgba(200, 169, 110, 0.3)';
                          e.currentTarget.style.backgroundColor = 'rgba(42, 37, 34, 0.9)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedCategory !== cat.id) {
                          e.currentTarget.style.border = '1.5px solid rgba(42, 37, 34, 0.8)';
                          e.currentTarget.style.backgroundColor = 'rgba(42, 37, 34, 0.6)';
                        }
                      }}
                    >
                      <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{cat.icon}</div>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: '500',
                          color: selectedCategory === cat.id ? '#D4845A' : '#E8DDD4',
                          marginBottom: '4px',
                        }}
                      >
                        {cat.title}
                      </div>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.75rem',
                          color: '#8A7F79',
                          lineHeight: '1.5',
                        }}
                      >
                        {cat.desc}
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
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: '#E8DDD4',
                    marginBottom: '8px',
                  }}
                >
                  ¿Cómo preferís atenderte?
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    color: '#8A7F79',
                    marginBottom: '28px',
                  }}
                >
                  La disponibilidad se confirma por WhatsApp en el paso siguiente.
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                    gap: '16px',
                  }}
                >
                  {MODALITIES.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModality(mod.id)}
                      style={{
                        textAlign: 'center',
                        padding: '28px 20px',
                        backgroundColor:
                          selectedModality === mod.id
                            ? 'rgba(212, 132, 90, 0.12)'
                            : 'rgba(42, 37, 34, 0.6)',
                        border:
                          selectedModality === mod.id
                            ? '1.5px solid rgba(212, 132, 90, 0.7)'
                            : '1.5px solid rgba(42, 37, 34, 0.8)',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedModality !== mod.id) {
                          e.currentTarget.style.border = '1.5px solid rgba(200, 169, 110, 0.3)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedModality !== mod.id) {
                          e.currentTarget.style.border = '1.5px solid rgba(42, 37, 34, 0.8)';
                        }
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{mod.icon}</div>
                      <div
                        style={{
                          fontFamily: '"Cormorant Garamond", serif',
                          fontSize: '1.25rem',
                          color: selectedModality === mod.id ? '#D4845A' : '#E8DDD4',
                          marginBottom: '6px',
                        }}
                      >
                        {mod.title}
                      </div>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.75rem',
                          color: '#8A7F79',
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
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: '#E8DDD4',
                    marginBottom: '8px',
                  }}
                >
                  ¿Cuándo te viene bien?
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    color: '#8A7F79',
                    marginBottom: '32px',
                    lineHeight: '1.6',
                  }}
                >
                  Elegí tu fecha y horario de preferencia. Vamos a confirmar la disponibilidad 
                  directamente por WhatsApp — sin necesidad de crear una cuenta.
                </p>

                {/* Info banner */}
                <div
                  style={{
                    backgroundColor: 'rgba(200, 169, 110, 0.05)',
                    border: '1px solid rgba(200, 169, 110, 0.15)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    marginBottom: '28px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                  }}
                >
                  <span style={{ color: '#C8A96E', fontSize: '1rem', marginTop: '1px', flexShrink: 0 }}>💬</span>
                  <p
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.8rem',
                      color: '#8A7F79',
                      lineHeight: '1.6',
                      margin: 0,
                    }}
                  >
                    Tu preferencia se enviará por WhatsApp. La psicóloga confirmará el turno 
                    dentro de las <strong style={{ color: '#C8A96E' }}>24 horas hábiles</strong>.
                  </p>
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                    gap: '20px',
                  }}
                >
                  {/* Date picker */}
                  <div>
                    <label
                      htmlFor="fecha-picker"
                      style={{
                        display: 'block',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.7rem',
                        color: '#C8A96E',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        marginBottom: '10px',
                      }}
                    >
                      📅 Fecha de preferencia *
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
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.15)')}
                    />
                    {selectedDate && (
                      <p
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.8rem',
                          color: '#C8A96E',
                          marginTop: '8px',
                          fontStyle: 'italic',
                        }}
                      >
                        {formatDateNatural(selectedDate)}
                      </p>
                    )}
                  </div>

                  {/* Time picker — styled buttons grid */}
                  <div>
                    <label
                      style={{
                        display: 'block',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.7rem',
                        color: '#C8A96E',
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        marginBottom: '10px',
                      }}
                    >
                      🕐 Horario de preferencia
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
                          onClick={() => setSelectedTime(selectedTime === t ? '' : t)}
                          style={{
                            padding: '9px 4px',
                            borderRadius: '6px',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.8rem',
                            cursor: 'pointer',
                            backgroundColor:
                              selectedTime === t
                                ? 'rgba(212, 132, 90, 0.2)'
                                : 'rgba(42, 37, 34, 0.5)',
                            border:
                              selectedTime === t
                                ? '1.5px solid #D4845A'
                                : '1px solid rgba(200, 169, 110, 0.15)',
                            color: selectedTime === t ? '#D4845A' : '#8A7F79',
                            transition: 'all 0.15s ease',
                          }}
                          onMouseEnter={(e) => {
                            if (selectedTime !== t) {
                              e.currentTarget.style.borderColor = 'rgba(200, 169, 110, 0.35)';
                              e.currentTarget.style.color = '#E8DDD4';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (selectedTime !== t) {
                              e.currentTarget.style.borderColor = 'rgba(200, 169, 110, 0.15)';
                              e.currentTarget.style.color = '#8A7F79';
                            }
                          }}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.72rem',
                        color: '#8A7F79',
                        marginTop: '10px',
                        fontStyle: 'italic',
                      }}
                    >
                      Opcional — podés dejarlo sin seleccionar
                    </p>
                  </div>
                </div>

                {/* Preview de lo que se enviará */}
                {selectedDate && (
                  <div
                    style={{
                      marginTop: '24px',
                      padding: '16px 20px',
                      backgroundColor: 'rgba(37, 211, 102, 0.04)',
                      border: '1px solid rgba(37, 211, 102, 0.12)',
                      borderRadius: '10px',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.72rem',
                        color: '#25D366',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '8px',
                      }}
                    >
                      Vista previa del mensaje de WhatsApp
                    </p>
                    <p
                      style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.82rem',
                        color: '#8A7F79',
                        lineHeight: '1.7',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {`Hola! Me gustaria consultar disponibilidad.\n- Fecha: ${formatDateNatural(selectedDate)}${selectedTime ? ` a las ${selectedTime}hs` : ''}\n- Motivo: ${CATEGORIES.find(c => c.id === selectedCategory)?.title}\n- Modalidad: ${MODALITIES.find(m => m.id === selectedModality)?.title}`}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* ── STEP 4: Confirmación ── */}
            {step === 4 && !submitted && (
              <div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.75rem',
                    fontWeight: '400',
                    color: '#E8DDD4',
                    marginBottom: '8px',
                  }}
                >
                  Casi listo ✦
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.9rem',
                    color: '#8A7F79',
                    marginBottom: '28px',
                  }}
                >
                  Completá tus datos y abrimos WhatsApp con todo listo para enviar.
                </p>

                {/* Summary chips */}
                <div
                  style={{
                    backgroundColor: 'rgba(200, 169, 110, 0.05)',
                    border: '1px solid rgba(200, 169, 110, 0.12)',
                    borderRadius: '10px',
                    padding: '14px 18px',
                    marginBottom: '24px',
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                  }}
                >
                  {[
                    { label: 'Motivo', value: CATEGORIES.find((c) => c.id === selectedCategory)?.title },
                    { label: 'Modalidad', value: MODALITIES.find((m) => m.id === selectedModality)?.title },
                    { label: 'Fecha', value: formatDateNatural(selectedDate) + (selectedTime ? ` — ${selectedTime}hs` : '') },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.65rem',
                          color: '#C8A96E',
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                          marginBottom: '3px',
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: '0.875rem',
                          color: '#E8DDD4',
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
                      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                  >
                    {[
                      { id: 'nombre', label: 'Nombre completo', type: 'text', required: true, placeholder: 'Tu nombre y apellido' },
                      { id: 'email', label: 'Email', type: 'email', required: true, placeholder: 'tu@email.com' },
                      { id: 'telefono', label: 'WhatsApp', type: 'tel', required: false, placeholder: '+54 9 261 000-0000' },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          style={{
                            display: 'block',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.7rem',
                            color: '#8A7F79',
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
                          onFocus={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.5)')}
                          onBlur={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.15)')}
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
                        fontSize: '0.7rem',
                        color: '#8A7F79',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px',
                      }}
                    >
                      Algo más que quieras contarme (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Contanos brevemente qué estás atravesando..."
                      style={{
                        ...inputStyle,
                        resize: 'vertical',
                      }}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(200, 169, 110, 0.15)')}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      backgroundColor: '#25D366',
                      border: 'none',
                      borderRadius: '10px',
                      padding: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '12px',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: '#fff',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#1ebe59';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#25D366';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Abrir WhatsApp y consultar disponibilidad
                  </button>

                  <p
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.72rem',
                      color: '#8A7F79',
                      textAlign: 'center',
                      marginTop: '12px',
                    }}
                  >
                    Se va a abrir WhatsApp con el mensaje pre-completado. No se confirma ningún turno hasta que la psicóloga responda.
                  </p>
                </form>
              </div>
            )}

            {/* ── Éxito ── */}
            {submitted && (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '3rem',
                    color: '#C8A96E',
                    marginBottom: '16px',
                  }}
                >
                  ✦
                </div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '2rem',
                    fontWeight: '400',
                    color: '#C8A96E',
                    marginBottom: '12px',
                  }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '1rem',
                    color: '#8A7F79',
                    maxWidth: '380px',
                    margin: '0 auto',
                    lineHeight: '1.7',
                  }}
                >
                  Abrimos WhatsApp con tu solicitud lista. La psicóloga va a confirmarte 
                  la disponibilidad pronto. ¡Gracias!
                </p>
              </div>
            )}
          </div>

          {/* Navigation */}
          {!submitted && (
            <div
              style={{
                padding: '24px 40px',
                borderTop: '1px solid rgba(42, 37, 34, 0.8)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <button
                onClick={() => setStep(Math.max(1, step - 1))}
                disabled={step === 1}
                style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.875rem',
                  color: step === 1 ? '#3A3532' : '#8A7F79',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: step === 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { if (step > 1) e.currentTarget.style.color = '#E8DDD4'; }}
                onMouseLeave={(e) => { if (step > 1) e.currentTarget.style.color = '#8A7F79'; }}
              >
                ← Atrás
              </button>

              {step < 4 && (
                <button
                  onClick={() => canNext() && setStep(step + 1)}
                  disabled={!canNext()}
                  style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: canNext() ? '#0F0F0F' : '#3A3532',
                    backgroundColor: canNext() ? '#C8A96E' : 'rgba(42, 37, 34, 0.6)',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px 28px',
                    cursor: canNext() ? 'pointer' : 'not-allowed',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (canNext()) {
                      e.currentTarget.style.backgroundColor = '#D4BB8A';
                      e.currentTarget.style.transform = 'scale(1.02)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (canNext()) {
                      e.currentTarget.style.backgroundColor = '#C8A96E';
                      e.currentTarget.style.transform = 'scale(1)';
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
