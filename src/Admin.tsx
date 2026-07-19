import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import logo from './assets/logo-cropped.png';

const PASS = 'fixitfirst2026';
const SITE_URL = 'https://fixitfirst.surge.sh/';
const VCARD_URL = `BEGIN:VCARD\nVERSION:3.0\nFN:Ruben\nORG:Fix-It First\nTEL;TYPE=CELL:+19416619500\nURL:https://fixitfirst.surge.sh/\nADR:;;Charlotte County;FL;;;US\nEND:VCARD`;

const INFO = {
  name: 'Fix It First by Ruben',
  phone: '(941) 661-9500',
  area: 'Charlotte County, FL',
  tagline: 'Odd Jobs · Home Maintenance · Small Repairs',
  web: 'fixitfirst.surge.sh',
};

const SERVICES = [
  'Drywall Patching & Repair',
  'Cabinet & Door Repairs',
  'Painting & Touch-ups',
  'Screen Repair',
  'Furniture Assembly',
  'TV Mounting & Hanging',
  'Pressure Washing',
  'Gutter Cleaning',
  'Fixture Swaps',
  'Minor Fence Repair',
];

const cardStyle: React.CSSProperties = {
  fontFamily: 'monospace',
  boxSizing: 'border-box',
  flexShrink: 0,
};

/* ── Business Card Front ───────────────────────────────────────── */
function BizCardFront() {
  return (
    <div style={{ ...cardStyle, width: '3.5in', height: '2in', background: '#000', color: '#fff', border: '1px solid #27272a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.2in' }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5 }}>
        <img src={logo} alt="logo" style={{ height: '0.45in', objectFit: 'contain', objectPosition: 'left', marginBottom: 2 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase' }}>Odd Jobs</div>
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase' }}>Home Maintenance</div>
          <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.12em', color: '#fff', textTransform: 'uppercase' }}>Small Repairs</div>
        </div>
        <div style={{ fontSize: 13, color: '#ef4444', fontWeight: 'bold' }}>{INFO.phone}</div>
        <div style={{ fontSize: 8, color: '#a1a1aa' }}>{INFO.area}</div>
        <div style={{ fontSize: 7, color: '#52525b' }}>{INFO.web}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
        <QRCodeSVG value={VCARD_URL} size={52} bgColor="#000" fgColor="#ffffff" level="M" />
        <div style={{ fontSize: 5, color: '#52525b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Save Contact</div>
        <QRCodeSVG value={SITE_URL} size={52} bgColor="#000" fgColor="#ffffff" level="M" />
        <div style={{ fontSize: 5, color: '#52525b', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Website</div>
      </div>
    </div>
  );
}

/* ── Business Card Back ────────────────────────────────────────── */
function BizCardBack() {
  return (
    <div style={{ ...cardStyle, width: '3.5in', height: '2in', background: '#dc2626', color: '#fff', border: '1px solid #27272a', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: '0.15in', gap: 12 }}>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
        <div style={{ fontSize: 7, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase' }}>What We Fix</div>
        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.3)' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px 10px' }}>
          {SERVICES.slice(0, 8).map(s => (
            <div key={s} style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.85)', letterSpacing: '0.04em' }}>· {s}</div>
          ))}
        </div>
        <div style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.3)' }} />
        <div style={{ fontSize: 5.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Scan for a free estimate</div>
      </div>
      <QRCodeSVG value={SITE_URL} size={60} bgColor="#dc2626" fgColor="#ffffff" level="M" />
    </div>
  );
}

/* ── Lawn Sign Front ───────────────────────────────────────────── */
function LawnSignFront() {
  return (
    <div style={{ ...cardStyle, width: '100%', maxWidth: 560, aspectRatio: '3/2', background: '#000', border: '5px solid #dc2626', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 28 }}>
      <img src={logo} alt="logo" style={{ height: 64, objectFit: 'contain' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>Odd Jobs</div>
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>Home Maintenance</div>
        <div style={{ fontSize: 10, fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff' }}>Small Repairs</div>
      </div>
      <div style={{ fontSize: 34, fontWeight: 900, color: '#ef4444', letterSpacing: '0.05em', textAlign: 'center', lineHeight: 1 }}>{INFO.phone}</div>
      <div style={{ fontSize: 8, color: '#a1a1aa', letterSpacing: '0.3em', textTransform: 'uppercase' }}>{INFO.area}</div>
      <div style={{ fontSize: 6, color: '#52525b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{INFO.web}</div>
    </div>
  );
}

/* ── Lawn Sign Back (same as front) ───────────────────────────── */
const LawnSignBack = LawnSignFront;

/* ── T-Shirt Front ─────────────────────────────────────────────── */
function TShirtFront() {
  return (
    <div style={{ ...cardStyle, width: 280, background: '#111', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '36px 28px' }}>
      <div style={{ fontSize: 7, color: '#52525b', letterSpacing: '0.2em', textTransform: 'uppercase' }}>— FRONT CHEST —</div>
      <img src={logo} alt="logo" style={{ height: 72, objectFit: 'contain' }} />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', textAlign: 'center' }}>Odd Jobs</div>
        <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', textAlign: 'center' }}>Home Maintenance</div>
        <div style={{ fontSize: 9, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', textAlign: 'center' }}>Small Repairs</div>
      </div>
      <div style={{ fontSize: 10, color: '#ef4444', fontWeight: 'bold', letterSpacing: '0.1em' }}>{INFO.phone}</div>
      <div style={{ fontSize: 6.5, color: '#52525b', letterSpacing: '0.15em', textTransform: 'uppercase' }}>{INFO.area}</div>
    </div>
  );
}

/* ── T-Shirt Back ──────────────────────────────────────────────── */
function TShirtBack() {
  return (
    <div style={{ ...cardStyle, width: 280, background: '#111', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: '36px 28px' }}>
      <div style={{ fontSize: 7, color: '#52525b', letterSpacing: '0.2em', textTransform: 'uppercase' }}>— BACK CENTER —</div>
      <img src={logo} alt="logo" style={{ height: 48, objectFit: 'contain' }} />
      <div style={{ fontSize: 8, fontWeight: 900, letterSpacing: '0.25em', textTransform: 'uppercase', color: '#ef4444', textAlign: 'center' }}>What We Fix</div>
      <div style={{ fontSize: 9, fontWeight: 'bold', color: '#fff', textAlign: 'center', letterSpacing: '0.1em' }}>{INFO.phone}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, width: '100%' }}>
        {SERVICES.map(s => (
          <div key={s} style={{ fontSize: 7, color: '#a1a1aa', letterSpacing: '0.06em', textAlign: 'center' }}>{s}</div>
        ))}
      </div>
      <QRCodeSVG value={SITE_URL} size={52} bgColor="#111111" fgColor="#ffffff" level="M" />
    </div>
  );
}

/* ── Admin Shell ───────────────────────────────────────────────── */
const ITEMS = [
  {
    id: 'bizcard',
    label: 'Business Card',
    specs: '3.5" × 2" · Print both sides · Vistaprint / GotPrint',
    sides: [
      { label: 'Front', el: <BizCardFront /> },
      { label: 'Back', el: <BizCardBack /> },
    ],
  },
  {
    id: 'lawnsign',
    label: 'Lawn Sign',
    specs: '18" × 12" · Corrugated plastic · 2 sides · Send to local sign shop at full scale',
    sides: [
      { label: 'Front', el: <LawnSignFront /> },
      { label: 'Back', el: <LawnSignBack /> },
    ],
  },
  {
    id: 'tshirt',
    label: 'T-Shirt',
    specs: 'Dark fabric · DTG or screen print · Front chest + back center',
    sides: [
      { label: 'Front', el: <TShirtFront /> },
      { label: 'Back', el: <TShirtBack /> },
    ],
  },
];

export default function Admin() {
  const [pass, setPass] = useState('');
  const [authed, setAuthed] = useState(false);
  const [err, setErr] = useState(false);

  const attempt = () => {
    if (pass === PASS) { setAuthed(true); setErr(false); }
    else setErr(true);
  };

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#09090b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace' }}>
        <div style={{ background: '#18181b', border: '1px solid #27272a', padding: 40, width: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ color: '#ef4444', fontWeight: 900, fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Fix It First</div>
          <div style={{ color: '#fff', fontWeight: 900, fontSize: 14, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Admin Panel</div>
          <input
            type="password"
            value={pass}
            autoFocus
            onChange={e => { setPass(e.target.value); setErr(false); }}
            onKeyDown={e => e.key === 'Enter' && attempt()}
            placeholder="Password"
            style={{ background: '#09090b', border: `1px solid ${err ? '#ef4444' : '#3f3f46'}`, color: '#fff', padding: '12px 16px', fontSize: 13, fontFamily: 'monospace', outline: 'none', width: '100%', boxSizing: 'border-box' }}
          />
          {err && <div style={{ color: '#ef4444', fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Incorrect password</div>}
          <button onClick={attempt} style={{ background: '#dc2626', color: '#fff', border: 'none', padding: 14, fontFamily: 'monospace', fontWeight: 900, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#09090b', fontFamily: 'monospace', color: '#fff' }}>
      <style>{`@media print { .no-print { display: none !important; } .printable { page-break-after: always; } }`}</style>

      <header className="no-print" style={{ borderBottom: '1px solid #27272a', padding: '16px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <span style={{ color: '#ef4444', fontWeight: 900, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Fix It First · </span>
          <span style={{ fontWeight: 900, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Printables</span>
        </div>
        <button onClick={() => window.print()} style={{ background: '#dc2626', color: '#fff', border: 'none', padding: '10px 20px', fontFamily: 'monospace', fontWeight: 900, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', cursor: 'pointer' }}>
          Print All
        </button>
      </header>

      <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 56 }}>
        {ITEMS.map(item => (
          <div key={item.id} className="printable">
            <div className="no-print" style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{item.label}</div>
              <div style={{ fontSize: 10, color: '#71717a', letterSpacing: '0.08em', marginTop: 4 }}>{item.specs}</div>
            </div>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
              {item.sides.map(side => (
                <div key={side.label}>
                  <div className="no-print" style={{ fontSize: 9, color: '#52525b', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>{side.label}</div>
                  {side.el}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
