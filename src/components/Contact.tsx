import { MapPin, Phone, Mail } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id:       i,
  size:     Math.random() * 9 + 3,
  left:     Math.random() * 100,
  delay:    Math.random() * 9,
  duration: Math.random() * 10 + 13,
  opacity:  Math.random() * 0.13 + 0.04,
  blurred:  i % 3 === 0,
  colorA:   i % 2 === 0 ? 'rgba(180,140,100,0.9)' : 'rgba(120,170,120,0.7)',
  colorB:   i % 2 === 0 ? 'rgba(180,130,60,0.4)'  : 'rgba(80,140,80,0.3)',
}));

const contactInfo = [
  {
    icon: MapPin,
    title: 'Headquarters',
    lines: ['123 Stone Avenue, Industrial Area,', 'New Delhi - 110001'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 93015 70972', '+91 93015 70972'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['keshavb266@gmail.com', 'keshavb266@gmail.com'],
  },
];

/* ── Types ── */
interface ContactItem {
  icon: React.ElementType;
  title: string;
  lines: string[];
}
interface ContactInfoItemProps {
  item: ContactItem;
  index: number;
  inView: boolean;
}

function ContactInfoItem({ item, index, inView }: ContactInfoItemProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="flex items-start gap-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity:    inView ? 1 : 0,
        transform:  inView ? 'translateX(0)' : 'translateX(-24px)',
        transition: `opacity 0.6s ease ${0.3 + index * 0.15}s, transform 0.6s ease ${0.3 + index * 0.15}s`,
      }}
    >
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
        style={{
          background:  hovered ? '#5C3D2E' : 'rgba(92,61,46,0.1)',
          border:      `1.5px solid ${hovered ? '#5C3D2E' : 'rgba(92,61,46,0.2)'}`,
          boxShadow:   hovered ? '0 6px 20px rgba(92,61,46,0.3)' : 'none',
          transition:  'all 0.35s ease',
          transform:   hovered ? 'scale(1.08)' : 'scale(1)',
        }}
      >
        <Icon
          size={18}
          style={{ color: hovered ? '#ffffff' : '#5C3D2E', transition: 'color 0.3s ease' }}
        />
      </div>

      <div>
        <h3
          className="font-bold text-gray-800 mb-1 text-sm"
          style={{ fontFamily: "Palatino, 'Book Antiqua', Georgia, serif" }}
        >
          {item.title}
        </h3>
        {item.lines.map((line, i) => (
          <p key={i} className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

/* ── Submit button ── */
function SubmitButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden w-full font-mono text-xs font-bold tracking-[4px] py-4 rounded-md cursor-pointer"
      style={{
        background:  hovered ? '#4a3124' : '#5C3D2E',
        color:       '#ffffff',
        border:      'none',
        boxShadow:   hovered ? '0 10px 32px rgba(92,61,46,0.45)' : '0 4px 16px rgba(92,61,46,0.25)',
        transform:   hovered ? 'translateY(-2px)' : 'translateY(0)',
        transition:  'all 0.35s cubic-bezier(0.25,0.8,0.25,1)',
      }}
    >
      <span
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)',
          transform:  hovered ? 'translateX(200%)' : 'translateX(-200%)',
          transition: 'transform 0.65s ease',
        }}
      />
      SEND MESSAGE →
    </button>
  );
}

/* ══════════════════════════════════════
   MAIN CONTACT COMPONENT
══════════════════════════════════════ */
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', interest: '', message: '',
  });
  const [focused,   setFocused]   = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [inView,    setInView]    = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width:        '100%',
    padding:      '12px 16px',
    border:       `1.5px solid ${focused === field ? '#5C3D2E' : 'rgba(92,61,46,0.2)'}`,
    borderRadius: 6,
    outline:      'none',
    background:   focused === field ? 'rgba(92,61,46,0.02)' : '#ffffff',
    color:        '#1f2937',
    fontFamily:   'Georgia, serif',
    fontSize:     '0.9rem',
    transition:   'all 0.3s ease',
    boxShadow:    focused === field ? '0 0 0 3px rgba(92,61,46,0.08)' : 'none',
  });

  const labelStyle: React.CSSProperties = {
    display:       'block',
    fontSize:      10,
    fontWeight:    700,
    color:         '#5C3D2E',
    letterSpacing: '2.5px',
    marginBottom:  6,
    fontFamily:    'monospace',
  };

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1);      opacity: 0;   }
          8%   { opacity: 1; }
          92%  { opacity: 0.7; }
          100% { transform: translateY(-110vh) scale(0.5); opacity: 0;   }
        }
        @keyframes orbFloat {
          0%   { transform: translate(0px, 0px)    scale(1);    }
          50%  { transform: translate(22px, 16px)  scale(1.06); }
          100% { transform: translate(-12px, 22px) scale(0.96); }
        }
        @keyframes beamPulse {
          0%, 100% { opacity: 1;   }
          50%      { opacity: 0.3; }
        }
        @keyframes shimmerSweep {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg);   }
          to   { transform: rotate(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.4; transform: scale(1);   }
          50%      { opacity: 1;   transform: scale(1.6); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes fadeSlideRight {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes shimmerTitle {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes successPop {
          0%   { transform: scale(0.85); opacity: 0; }
          60%  { transform: scale(1.04); }
          100% { transform: scale(1);    opacity: 1; }
        }
      `}</style>

      <section
        id="contact"
        ref={ref}
        className="relative py-24 min-h-screen overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #faf8f5 0%, #f0ebe3 45%, #f7f4ee 100%)' }}
      >

        {/* ── Orbs ── */}
        <div className="absolute pointer-events-none"
             style={{ width: 480, height: 480, top: '-8%', left: '-6%',
               background: 'radial-gradient(circle, rgba(180,140,100,0.12) 0%, transparent 70%)',
               animation: 'orbFloat 18s ease-in-out infinite alternate' }} />
        <div className="absolute pointer-events-none"
             style={{ width: 360, height: 360, top: '50%', left: '65%',
               background: 'radial-gradient(circle, rgba(90,140,90,0.09) 0%, transparent 70%)',
               animation: 'orbFloat 22s ease-in-out infinite alternate-reverse', animationDelay: '4s' }} />
        <div className="absolute pointer-events-none"
             style={{ width: 280, height: 280, top: '25%', left: '35%',
               background: 'radial-gradient(circle, rgba(200,170,110,0.08) 0%, transparent 70%)',
               animation: 'orbFloat 15s ease-in-out infinite alternate', animationDelay: '2s' }} />

        {/* ── Diagonal beams ── */}
        <div className="absolute pointer-events-none"
             style={{ top: '-12%', left: '-6%', width: '55%', height: '75%',
               background: 'linear-gradient(135deg, rgba(210,180,140,0.14) 0%, transparent 60%)',
               transform: 'rotate(-14deg)', animation: 'beamPulse 7s ease-in-out infinite' }} />
        <div className="absolute pointer-events-none"
             style={{ bottom: '-18%', right: '-6%', width: '42%', height: '60%',
               background: 'linear-gradient(315deg, rgba(100,160,110,0.07) 0%, transparent 60%)',
               transform: 'rotate(-14deg)', animation: 'beamPulse 9s ease-in-out infinite reverse',
               animationDelay: '3s' }} />

        {/* ── Dot grid ── */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle, rgba(92,61,46,0.07) 1px, transparent 1px)',
               backgroundSize: '36px 36px' }} />

        {/* ── Shimmer sweep ── */}
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: 'linear-gradient(105deg, transparent 38%, rgba(255,255,255,0.20) 50%, transparent 62%)',
               backgroundSize: '200% 100%', animation: 'shimmerSweep 8s linear infinite' }} />

        {/* ── Floating particles ── */}
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              width:      p.size,
              height:     p.size,
              left:       `${p.left}%`,
              bottom:     '-6%',
              opacity:    p.opacity,
              background: `radial-gradient(circle, ${p.colorA} 0%, ${p.colorB} 100%)`,
              filter:     p.blurred ? 'blur(2.5px)' : 'none',
              boxShadow:  `0 0 ${p.size * 1.5}px ${p.colorA}`,
              animation:  `floatUp ${p.duration}s ease-in-out ${p.delay}s infinite`,
            }}
          />
        ))}

        {/* ── Spinning squares ── */}
        <div className="absolute top-24 right-8 w-20 h-20 pointer-events-none border border-[#5C3D2E]/10"
             style={{ transform: 'rotate(12deg)', animation: 'spinSlow 35s linear infinite' }} />
        <div className="absolute top-32 right-14 w-10 h-10 pointer-events-none border border-[#5C3D2E]/10"
             style={{ animation: 'spinSlow 22s linear infinite reverse' }} />
        <div className="absolute bottom-28 left-8 w-16 h-16 pointer-events-none border border-emerald-800/10"
             style={{ transform: 'rotate(-12deg)', animation: 'spinSlow 28s linear infinite' }} />
        <div className="absolute bottom-40 left-16 w-8 h-8 pointer-events-none border border-amber-800/10"
             style={{ animation: 'spinSlow 18s linear infinite reverse' }} />

        {/* ── Glowing dots ── */}
        {[
          { t: '18%', l: '8%',  s: 5, c: 'rgba(180,140,100,0.5)', dur: 4 },
          { t: '65%', l: '4%',  s: 4, c: 'rgba(90,140,90,0.4)',   dur: 5 },
          { t: '35%', l: '92%', s: 6, c: 'rgba(180,140,100,0.4)', dur: 6 },
          { t: '80%', l: '88%', s: 4, c: 'rgba(90,140,90,0.35)',  dur: 4 },
          { t: '12%', l: '52%', s: 5, c: 'rgba(180,140,100,0.3)', dur: 7 },
        ].map((d, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              top:        d.t,
              left:       d.l,
              width:      d.s,
              height:     d.s,
              background: d.c,
              boxShadow:  `0 0 ${d.s * 3}px ${d.c}`,
              animation:  `glowPulse ${d.dur}s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}

        {/* ══════════════════════════
            MAIN CONTENT
        ══════════════════════════ */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div
            className="text-center mb-14"
            style={{
              opacity:    inView ? 1 : 0,
              transform:  inView ? 'translateY(0)' : 'translateY(28px)',
              transition: 'opacity 0.7s ease, transform 0.7s ease',
            }}
          >
            <div className="inline-block mb-5">
              <span className="text-sm font-semibold text-emerald-700 tracking-[5px] border border-emerald-700
                               px-5 py-1.5 bg-emerald-50/70 backdrop-blur-sm font-mono uppercase">
                Get In Touch
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3"
              style={{
                fontFamily:            "Palatino, 'Book Antiqua', Georgia, serif",
                background:            'linear-gradient(135deg, #1f2937 20%, #5C3D2E 55%, #1f2937 90%)',
                backgroundSize:        '300% auto',
                WebkitBackgroundClip:  'text',
                WebkitTextFillColor:   'transparent',
                backgroundClip:        'text',
                animation:             inView ? 'shimmerTitle 5s linear infinite' : 'none',
              }}
            >
              Start Your Journey With Stone Shadow
            </h2>
            <p
              className="text-xl italic text-amber-800"
              style={{ fontFamily: "Palatino, 'Book Antiqua', Georgia, serif" }}
            >
              Crafted for Interiors &amp; Exteriors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* ── Left: Info ── */}
            <div
              style={{
                opacity:    inView ? 1 : 0,
                transform:  inView ? 'translateX(0)' : 'translateX(-32px)',
                transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
              }}
            >
              <p className="text-gray-600 text-base leading-relaxed mb-10"
                 style={{ fontFamily: 'Georgia, serif' }}>
                Whether you are an architect, interior designer, or homeowner, our team is ready
                to assist you in selecting the perfect stone for your vision.
              </p>

              <div className="space-y-7">
                {contactInfo.map((item, i) => (
                  <ContactInfoItem key={i} item={item} index={i} inView={inView} />
                ))}
              </div>

              {/* Working hours card */}
              <div
                className="mt-10 p-5 rounded-xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(92,61,46,0.08) 0%, rgba(92,61,46,0.04) 100%)',
                  border:     '1px solid rgba(92,61,46,0.15)',
                  opacity:    inView ? 1 : 0,
                  transform:  inView ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.6s ease 0.65s, transform 0.6s ease 0.65s',
                }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div style={{
                    width: 28, height: 1.5,
                    background: 'linear-gradient(90deg, #5C3D2E, transparent)',
                    borderRadius: 2,
                  }} />
                  <span className="text-[10px] font-mono font-bold tracking-[3px] text-[#5C3D2E]">
                    WORKING HOURS
                  </span>
                </div>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Georgia, serif' }}>
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div
              style={{
                opacity:    inView ? 1 : 0,
                transform:  inView ? 'translateX(0)' : 'translateX(32px)',
                transition: 'opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s',
              }}
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background:     'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  border:         '1px solid rgba(92,61,46,0.12)',
                  boxShadow:      '0 20px 60px rgba(92,61,46,0.1), 0 4px 16px rgba(0,0,0,0.05)',
                  padding:        '36px 32px',
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position:   'absolute',
                  top: 0, left: 0, right: 0,
                  height:     3,
                  background: 'linear-gradient(90deg, #5C3D2E, #d4a847, #5C3D2E)',
                }} />

                {/* Success overlay */}
                {submitted && (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl z-20"
                    style={{
                      background: 'rgba(255,255,255,0.97)',
                      animation:  'successPop 0.45s ease forwards',
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ background: 'rgba(92,61,46,0.1)', border: '2px solid #5C3D2E' }}
                    >
                      <span style={{ fontSize: '1.8rem' }}>✓</span>
                    </div>
                    <h3
                      className="text-xl font-bold text-gray-800 mb-2"
                      style={{ fontFamily: "Palatino, 'Book Antiqua', Georgia, serif" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Georgia, serif' }}>
                      We'll get back to you shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* First + Last */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {([
                      { label: 'FIRST NAME', field: 'firstName', placeholder: 'John' },
                      { label: 'LAST NAME',  field: 'lastName',  placeholder: 'Doe'  },
                    ] as { label: string; field: keyof typeof formData; placeholder: string }[]).map(
                      ({ label, field, placeholder }) => (
                        <div key={field}>
                          <label style={labelStyle}>{label}</label>
                          <input
                            type="text"
                            placeholder={placeholder}
                            value={formData[field]}
                            onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                            onFocus={() => setFocused(field)}
                            onBlur={() => setFocused('')}
                            style={inputStyle(field)}
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>EMAIL ADDRESS</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      style={inputStyle('email')}
                    />
                  </div>

                  {/* Interest */}
                  <div>
                    <label style={labelStyle}>STONE INTEREST</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      onFocus={() => setFocused('interest')}
                      onBlur={() => setFocused('')}
                      style={{ ...inputStyle('interest'), cursor: 'pointer' }}
                    >
                      <option value="">Select Stone Type</option>
                      <option value="cobblestone">Cobble Stone</option>
                      <option value="wallcladding">Wall Cladding</option>
                      <option value="sandstone">Sandstone Flooring</option>
                      <option value="stonecraft">Stone Craft</option>
                      <option value="special">Special Stones</option>
                      <option value="fountain">Wall Fountain</option>
                      <option value="carving">Stone Carving</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>MESSAGE</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                      style={{ ...inputStyle('message'), resize: 'none' }}
                    />
                  </div>

                  <SubmitButton />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;