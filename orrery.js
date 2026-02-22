// ──────────────────────────────────────────────
// ORBITAL ELEMENTS from JPL (J2000 epoch)
// Source: https://ssd.jpl.nasa.gov/planets/approx_pos.html
// Each: [name, color, radius_px_display, a_AU, e, I_deg, L_deg, long_peri_deg, long_node_deg, dL_per_century]
// ──────────────────────────────────────────────
const PLANETS = [
  {
    name: 'Mercury',
    color: '#b5b5c8',
    glow: 'rgba(181,181,200,0.6)',
    r: 3.5,
    a: 0.38709893,
    e: 0.20563069,
    I: 7.00487,
    L0: 252.25084,
    dL: 149472.67411175,
    longPeri: 77.45645,
    longNode: 48.33167,
    period: 0.2408, // years
    info: { 'Semi-major axis': '0.387 AU', 'Orbital period': '87.97 days', 'Eccentricity': '0.2056' }
  },
  {
    name: 'Venus',
    color: '#e8c97a',
    glow: 'rgba(232,201,122,0.5)',
    r: 5,
    a: 0.72333199,
    e: 0.00677323,
    I: 3.39471,
    L0: 181.97973,
    dL: 58517.81538729,
    longPeri: 131.53298,
    longNode: 76.68069,
    period: 0.6152,
    info: { 'Semi-major axis': '0.723 AU', 'Orbital period': '224.7 days', 'Eccentricity': '0.0068' }
  },
  {
    name: 'Earth',
    color: '#4fa3e8',
    glow: 'rgba(79,163,232,0.5)',
    r: 5.2,
    a: 1.00000011,
    e: 0.01671022,
    I: 0.00005,
    L0: 100.46435,
    dL: 35999.37244981,
    longPeri: 102.94719,
    longNode: -11.26064,
    period: 1.0,
    info: { 'Semi-major axis': '1.000 AU', 'Orbital period': '365.25 days', 'Eccentricity': '0.0167' }
  },
  {
    name: 'Mars',
    color: '#d9613a',
    glow: 'rgba(217,97,58,0.5)',
    r: 4,
    a: 1.52366231,
    e: 0.09341233,
    I: 1.85061,
    L0: 355.45332,
    dL: 19140.29934243,
    longPeri: 336.04084,
    longNode: 49.57854,
    period: 1.8808,
    info: { 'Semi-major axis': '1.524 AU', 'Orbital period': '686.97 days', 'Eccentricity': '0.0934' }
  },
  {
    name: 'Jupiter',
    color: '#c8a97a',
    glow: 'rgba(200,169,122,0.5)',
    r: 10,
    a: 5.20336301,
    e: 0.04839266,
    I: 1.30530,
    L0: 34.40438,
    dL: 3034.90371757,
    longPeri: 14.75385,
    longNode: 100.55615,
    period: 11.862,
    info: { 'Semi-major axis': '5.203 AU', 'Orbital period': '11.86 years', 'Eccentricity': '0.0484' }
  },
  {
    name: 'Saturn',
    color: '#e2d49a',
    glow: 'rgba(226,212,154,0.4)',
    r: 8.5,
    a: 9.53707032,
    e: 0.05415060,
    I: 2.48446,
    L0: 49.94432,
    dL: 1222.11494724,
    longPeri: 92.43194,
    longNode: 113.71504,
    period: 29.457,
    hasRing: true,
    info: { 'Semi-major axis': '9.537 AU', 'Orbital period': '29.46 years', 'Eccentricity': '0.0542' }
  },
  {
    name: 'Uranus',
    color: '#7de8e8',
    glow: 'rgba(125,232,232,0.4)',
    r: 7,
    a: 19.19126393,
    e: 0.04716771,
    I: 0.76986,
    L0: 313.23218,
    dL: 428.48202785,
    longPeri: 170.96424,
    longNode: 74.22988,
    period: 84.01,
    info: { 'Semi-major axis': '19.19 AU', 'Orbital period': '84.01 years', 'Eccentricity': '0.0472' }
  },
  {
    name: 'Neptune',
    color: '#5b78e8',
    glow: 'rgba(91,120,232,0.4)',
    r: 7,
    a: 30.06896348,
    e: 0.00858587,
    I: 1.76917,
    L0: 304.88003,
    dL: 218.45945325,
    longPeri: 44.97135,
    longNode: 131.72169,
    period: 164.79,
    info: { 'Semi-major axis': '30.07 AU', 'Orbital period': '164.8 years', 'Eccentricity': '0.0086' }
  }
];

// ──────────────────────────────────────────────
// DWARF PLANETS
// Orbital elements from JPL/IAU data
// ──────────────────────────────────────────────
const DWARF_PLANETS = [
  {
    name: 'Ceres',
    color: '#a09880',
    glow: 'rgba(160,152,128,0.5)',
    r: 3,
    a: 2.76596,
    e: 0.07934,
    I: 10.593,
    L0: 291.408,
    dL: 68910.0,
    longPeri: 73.115,
    longNode: 80.329,
    period: 4.60,
    isDwarf: true,
    info: { 'Type': 'Dwarf planet', 'Semi-major axis': '2.766 AU', 'Orbital period': '4.60 years', 'Eccentricity': '0.0793', 'Location': 'Asteroid Belt' }
  },
  {
    name: 'Pluto',
    color: '#c8b49a',
    glow: 'rgba(200,180,154,0.4)',
    r: 3,
    a: 39.48168677,
    e: 0.24880766,
    I: 17.14175,
    L0: 238.92881,
    dL: 522747.9 / 3600,
    longPeri: 224.06676,
    longNode: 110.30347,
    period: 247.94,
    isDwarf: true,
    info: { 'Type': 'Dwarf planet', 'Semi-major axis': '39.48 AU', 'Orbital period': '247.9 years', 'Eccentricity': '0.2488', 'Location': 'Kuiper Belt' }
  },
  {
    name: 'Haumea',
    color: '#d0c8c0',
    glow: 'rgba(208,200,192,0.4)',
    r: 2.5,
    a: 43.218,
    e: 0.19636,
    I: 28.19,
    L0: 121.79,
    dL: 49471.0 / 3600,
    longPeri: 239.508,
    longNode: 122.103,
    period: 284.12,
    isDwarf: true,
    info: { 'Type': 'Dwarf planet', 'Semi-major axis': '43.22 AU', 'Orbital period': '284 years', 'Eccentricity': '0.1964', 'Location': 'Kuiper Belt' }
  },
  {
    name: 'Makemake',
    color: '#e8d8c0',
    glow: 'rgba(232,216,192,0.4)',
    r: 2.5,
    a: 45.791,
    e: 0.16126,
    I: 29.00,
    L0: 143.67,
    dL: 46727.0 / 3600,
    longPeri: 294.834,
    longNode: 79.382,
    period: 309.88,
    isDwarf: true,
    info: { 'Type': 'Dwarf planet', 'Semi-major axis': '45.79 AU', 'Orbital period': '310 years', 'Eccentricity': '0.1613', 'Location': 'Kuiper Belt' }
  },
  {
    name: 'Eris',
    color: '#e0e0e8',
    glow: 'rgba(224,224,232,0.4)',
    r: 3,
    a: 67.864,
    e: 0.43607,
    I: 44.04,
    L0: 205.58,
    dL: 29698.0 / 3600,
    longPeri: 151.639,
    longNode: 35.951,
    period: 559.0,
    isDwarf: true,
    info: { 'Type': 'Dwarf planet', 'Semi-major axis': '67.86 AU', 'Orbital period': '~559 years', 'Eccentricity': '0.4361', 'Location': 'Scattered disc' }
  }
];

let showDwarfs = false;

// ──────────────────────────────────────────────
// ASTEROID BELT
// ~2000 synthetic asteroids with realistic orbital distributions.
// Semi-major axis: 2.2–3.2 AU (main belt), with Kirkwood gaps at
// 2.50 AU (4:1), 2.82 AU (3:1), 2.96 AU (5:2), 3.28 AU (2:1) mean-motion resonances.
// Each asteroid has a fixed random orbit; angular position advances with time.
// ──────────────────────────────────────────────
const ASTEROIDS = (() => {
  const rng = (() => { let s = 0x9e3779b9; return () => { s ^= s<<13; s ^= s>>17; s ^= s<<5; return (s>>>0)/4294967296; }; })();
  const gaps = [[2.50, 0.04], [2.82, 0.03], [2.96, 0.03], [3.28, 0.03]]; // [center, half-width]
  const asteroids = [];
  while (asteroids.length < 2000) {
    const a = 2.2 + rng() * 1.0;       // 2.2–3.2 AU
    // Reject Kirkwood gaps
    if (gaps.some(([gc, gw]) => Math.abs(a - gc) < gw)) continue;
    const e    = rng() * 0.25;           // eccentricity 0–0.25
    const L0   = rng() * 360;            // random initial mean longitude (deg)
    // dL in deg/century: from Kepler's 3rd law, period = a^1.5 years
    const dL   = 360 / (Math.pow(a, 1.5)) * 100; // deg/century
    const longPeri = rng() * 360;
    const longNode = rng() * 360;
    const brightness = 0.3 + rng() * 0.5;
    asteroids.push({ a, e, L0, dL, longPeri, longNode, brightness });
  }
  return asteroids;
})();

// Pre-compute static rotation trig for each asteroid
for (const ast of ASTEROIDS) {
  const w  = (ast.longPeri - ast.longNode) * Math.PI / 180;
  const Om =  ast.longNode * Math.PI / 180;
  ast.cosW = Math.cos(w); ast.sinW = Math.sin(w);
  ast.cosO = Math.cos(Om); ast.sinO = Math.sin(Om);
}

let showBelt = true;

// ──────────────────────────────────────────────
// JUPITER TROJANS
// Real Trojans are gravitationally trapped at Jupiter's L4 (+60°) and L5
// (-60°) Lagrange points and librate around them — they never drift away.
// We model this by storing each Trojan as a FIXED OFFSET from Jupiter's
// instantaneous ecliptic longitude, computed fresh every frame.
// angularOffset: libration around ±60° (±25° spread)
// radialOffset:  spread in AU around Jupiter's orbital radius
// radialAngle:   direction of radial displacement (fixed, random)
// ──────────────────────────────────────────────
const TROJANS = (() => {
  const rng = (() => { let s = 0xdeadbeef; return () => { s ^= s<<13; s ^= s>>17; s ^= s<<5; return (s>>>0)/4294967296; }; })();
  const JUP_a = 5.20336301;
  const trojans = [];
  for (let swarm = 0; swarm < 2; swarm++) {
    const centre = swarm === 0 ? 60 : -60; // L4 leads, L5 trails
    for (let i = 0; i < 800; i++) {
      // Angular offset from Jupiter's longitude (libration around ±60°)
      const angularOffset = centre + (rng() - 0.5) * 50;
      // Radial spread: Trojans aren't exactly on Jupiter's orbit
      const radialOffset  = (rng() - 0.5) * 0.8;  // ±0.4 AU
      const radialAngle   = rng() * Math.PI * 2;   // fixed direction of radial nudge
      const brightness    = 0.25 + rng() * 0.45;
      trojans.push({ angularOffset, radialOffset, radialAngle, brightness, swarm });
    }
  }
  return trojans;
})();

let showTrojans = true;

// ──────────────────────────────────────────────
// KUIPER BELT
// Icy bodies from ~30–50 AU beyond Neptune.
// Includes classical cold/hot populations and scattered disc out to ~80 AU.
// Neptune's 3:2 resonance creates the "plutinos" at ~39.5 AU (Pluto's family).
// ──────────────────────────────────────────────
const KUIPER = (() => {
  const rng = (() => { let s = 0x12345678; return () => { s ^= s<<13; s ^= s>>17; s ^= s<<5; return (s>>>0)/4294967296; }; })();
  const bodies = [];
  while (bodies.length < 1500) {
    let a, e;
    const pop = rng();
    if (pop < 0.20) {
      // Plutinos: 3:2 resonance with Neptune at ~39.4 AU
      a = 39.4 + (rng() - 0.5) * 1.0;
      e = 0.15 + rng() * 0.20;
    } else if (pop < 0.55) {
      // Classical cold belt: 42–47 AU, low eccentricity
      a = 42 + rng() * 5;
      e = rng() * 0.10;
    } else if (pop < 0.80) {
      // Classical hot belt: 35–50 AU, moderate eccentricity
      a = 35 + rng() * 15;
      e = 0.05 + rng() * 0.25;
    } else {
      // Scattered disc: 50–80 AU, high eccentricity
      a = 50 + rng() * 30;
      e = 0.2 + rng() * 0.45;
      // Scattered disc objects can come inside Neptune at perihelion
      if (a * (1 - e) < 30) continue;
    }
    const L0 = rng() * 360;
    const dL = 360 / Math.pow(a, 1.5) * 100;
    const longPeri = rng() * 360;
    const longNode = rng() * 360;
    const brightness = 0.2 + rng() * 0.4;
    const w  = (longPeri - longNode) * Math.PI / 180;
    const Om =  longNode * Math.PI / 180;
    bodies.push({
      a, e, L0, dL, longPeri, longNode, brightness,
      cosW: Math.cos(w), sinW: Math.sin(w),
      cosO: Math.cos(Om), sinO: Math.sin(Om)
    });
  }
  return bodies;
})();

let showKuiper = true;

// ──────────────────────────────────────────────
// JULIAN DATE helpers
// ──────────────────────────────────────────────
function dateToJD(date) {
  // Julian day number from calendar date
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate() + (date.getUTCHours() + date.getUTCMinutes()/60 + date.getUTCSeconds()/3600)/24;
  const A = Math.floor(y/100);
  const B = 2 - A + Math.floor(A/4);
  return Math.floor(365.25*(y+4716)) + Math.floor(30.6001*(m+1)) + d + B - 1524.5;
}

const J2000 = 2451545.0; // JD of J2000.0

function jdToDate(jd) {
  let z = Math.floor(jd + 0.5);
  let f = jd + 0.5 - z;
  let a = z;
  if (z >= 2299161) {
    let alpha = Math.floor((z - 1867216.25)/36524.25);
    a = z + 1 + alpha - Math.floor(alpha/4);
  }
  let b = a + 1524;
  let c = Math.floor((b - 122.1)/365.25);
  let d = Math.floor(365.25*c);
  let e = Math.floor((b - d)/30.6001);
  let day = b - d - Math.floor(30.6001*e) + f;
  let month = e < 14 ? e - 1 : e - 13;
  let year = month > 2 ? c - 4716 : c - 4715;
  const dd = Math.floor(day);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${dd} ${months[month-1]} ${year}`;
}

// ──────────────────────────────────────────────
// PLANET POSITION (simplified circular approximation)
// Returns {x, y} in AU (heliocentric)
// ──────────────────────────────────────────────
function rad(deg) { return deg * Math.PI / 180; }

function planetPosition(planet, jd) {
  // Centuries since J2000 (T)
  const T = (jd - J2000) / 36525;

  // Compute current orbital elements (all in degrees)
  const a = planet.a;
  const e = planet.e;
  const L = planet.L0 + planet.dL * T;       // mean longitude, deg
  const lp = planet.longPeri;                  // longitude of perihelion, deg
  const Om = planet.longNode;                  // longitude of ascending node, deg

  // Mean anomaly M = L - longitude_of_perihelion, normalized to [-180, 180]
  let M = L - lp;
  M = M % 360;
  if (M > 180)  M -= 360;
  if (M < -180) M += 360;

  // Eccentric anomaly — solve Kepler's equation in DEGREES
  // JPL method: e* = (180/pi)*e, work entirely in degrees
  const eStar = (180 / Math.PI) * e;   // degrees
  let E = M + eStar * Math.sin(rad(M));

  // Iterate: dM = M-(E - eStar*sin(E)); dE = dM/(1-e*cos(E)); E += dE
  for (let i = 0; i < 10; i++) {
    const dM = M - (E - eStar * Math.sin(rad(E)));
    const dE = dM / (1 - e * Math.cos(rad(E)));
    E += dE;
    if (Math.abs(dE) < 1e-6) break;
  }

  // Heliocentric coords in orbital plane (x' toward perihelion)
  const Er = rad(E);
  const xp = a * (Math.cos(Er) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(Er);

  // Argument of perihelion (omega_bar = longPeri - longNode) and node angle
  const w  = rad(lp - Om);   // argument of perihelion
  const Om_r = rad(Om);       // longitude of ascending node

  // Rotate xp,yp from orbital plane to ecliptic (ignoring inclination = cos(i)≈1, sin(i)≈0)
  // Full rotation: first by w around z, then by Om around z
  // x_ecl =  xp*(cos(w)*cos(Om) - sin(w)*sin(Om)) - yp*(sin(w)*cos(Om) + cos(w)*sin(Om))
  // y_ecl =  xp*(cos(w)*sin(Om) + sin(w)*cos(Om)) + yp*(cos(w)*cos(Om) - sin(w)*sin(Om))
  const cosW = Math.cos(w), sinW = Math.sin(w);
  const cosO = Math.cos(Om_r), sinO = Math.sin(Om_r);
  const x = xp * (cosW * cosO - sinW * sinO) - yp * (sinW * cosO + cosW * sinO);
  const y = xp * (cosW * sinO + sinW * cosO) + yp * (cosW * cosO - sinW * sinO);
  const r = Math.sqrt(x*x + y*y);

  if (!isFinite(x) || !isFinite(y)) return { x: a, y: 0, r: a };
  return { x, y, r };
}

// ──────────────────────────────────────────────
// CANVAS SETUP
// ──────────────────────────────────────────────
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let W, H, cx, cy;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
  cx = W/2; cy = H/2;
}
resize();
window.addEventListener('resize', resize);

// ──────────────────────────────────────────────
// SCALE: log or linear
// ──────────────────────────────────────────────
let useLog = true;
const MAX_AU = 32;

// Scale an AU *distance* (always positive) to pixels
function auToPixel(au) {
  if (!isFinite(au)) return 0;
  const maxPx = Math.min(W, H) * 0.46;
  if (useLog) {
    return maxPx * Math.log1p(Math.abs(au)) / Math.log1p(MAX_AU);
  } else {
    return maxPx * Math.abs(au) / MAX_AU;
  }
}

// Scale a signed AU coordinate to pixels, preserving sign
function auToPixelSigned(au) {
  if (!isFinite(au)) return 0;
  const sign = au < 0 ? -1 : 1;
  return sign * auToPixel(Math.abs(au));
}

// ──────────────────────────────────────────────
// STATE
// ──────────────────────────────────────────────
let simJD = dateToJD(new Date());
let paused = false;
let direction = 1; // +1 or -1
let speedExp = 30; // slider 0-100 → days/frame

function sliderToDaysPerFrame(v) {
  // 0 → ~0.01 days/frame, 100 → ~3650 days/frame
  return 0.01 * Math.pow(365000, v/100);
}

let daysPerFrame = sliderToDaysPerFrame(30);

// Pan / zoom
let panX = 0, panY = 0, zoom = 1;
let dragging = false, dragStart = { x: 0, y: 0 };

canvas.addEventListener('mousedown', e => {
  dragging = true; dragStart = { x: e.clientX - panX, y: e.clientY - panY };
});
canvas.addEventListener('mousemove', e => {
  if (dragging) {
    panX = e.clientX - dragStart.x;
    panY = e.clientY - dragStart.y;
  }
  handleHover(e.clientX, e.clientY);
});
canvas.addEventListener('mouseup', () => dragging = false);
canvas.addEventListener('mouseleave', () => { dragging = false; hideTooltip(); });
canvas.addEventListener('wheel', e => {
  e.preventDefault();
  const factor = e.deltaY < 0 ? 1.1 : 0.9;
  zoom = Math.max(0.2, Math.min(8, zoom * factor));
}, { passive: false });

// ──────────────────────────────────────────────
// STARS (static background)
// ──────────────────────────────────────────────
const STARS = [];
for (let i = 0; i < 700; i++) {
  STARS.push({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 1.2,
    a: 0.3 + Math.random() * 0.7
  });
}

function drawStars() {
  for (const s of STARS) {
    ctx.globalAlpha = s.a;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;
}

// ──────────────────────────────────────────────
// DRAW
// ──────────────────────────────────────────────
const planetPositions = {}; // screen coords for hover

function draw() {
  ctx.clearRect(0, 0, W, H);

  // Stars
  drawStars();

  ctx.save();
  ctx.translate(cx + panX, cy + panY);
  ctx.scale(zoom, zoom);

  // ── Sun ──
  const sunGrad = ctx.createRadialGradient(0,0,0, 0,0,18);
  sunGrad.addColorStop(0, '#fff8e0');
  sunGrad.addColorStop(0.3, '#ffe066');
  sunGrad.addColorStop(0.7, '#ff8800');
  sunGrad.addColorStop(1, 'rgba(255,80,0,0)');
  ctx.beginPath(); ctx.arc(0,0,18,0,Math.PI*2);
  ctx.fillStyle = sunGrad; ctx.fill();

  // Soft sun halo
  const halo = ctx.createRadialGradient(0,0,10, 0,0,60);
  halo.addColorStop(0, 'rgba(255,180,50,0.12)');
  halo.addColorStop(1, 'rgba(255,100,0,0)');
  ctx.beginPath(); ctx.arc(0,0,60,0,Math.PI*2);
  ctx.fillStyle = halo; ctx.fill();

  // ── Asteroid Belt ──
  if (showBelt) {
    const T = (simJD - J2000) / 36525;
    ctx.save();
    for (const ast of ASTEROIDS) {
      const L = ast.L0 + ast.dL * T;
      let M = (L - ast.longPeri) % 360;
      if (M > 180) M -= 360; if (M < -180) M += 360;
      // Approximate position: for low-e asteroids, E ≈ M (skip Kepler for perf)
      const Mr = M * Math.PI / 180;
      const E  = Mr + ast.e * Math.sin(Mr); // one-step approximation, fine for e<0.25
      const xp = ast.a * (Math.cos(E) - ast.e);
      const yp = ast.a * Math.sqrt(1 - ast.e * ast.e) * Math.sin(E);
      const x_au = xp*(ast.cosW*ast.cosO - ast.sinW*ast.sinO) - yp*(ast.sinW*ast.cosO + ast.cosW*ast.sinO);
      const y_au = xp*(ast.cosW*ast.sinO + ast.sinW*ast.cosO) + yp*(ast.cosW*ast.cosO - ast.sinW*ast.sinO);
      const r = Math.sqrt(x_au*x_au + y_au*y_au);
      if (!isFinite(r) || r === 0) continue;
      const sc = auToPixel(r) / r;
      const ax =  x_au * sc;
      const ay = -y_au * sc;
      ctx.globalAlpha = ast.brightness * 0.55;
      ctx.fillStyle = '#b0a890';
      ctx.fillRect(ax - 0.6, ay - 0.6, 1.2, 1.2);
    }
    ctx.globalAlpha = 1;
    ctx.restore();
  }

  // ── Jupiter Trojans ──
  if (showTrojans) {
    // Get Jupiter's current ecliptic angle (radians) — same math as planetPosition
    // but we just need the heliocentric angle, so read it from Jupiter's pos
    const jupPos = planetPosition(PLANETS[4], simJD); // Jupiter is index 4
    const jupAngle = Math.atan2(jupPos.y, jupPos.x);  // radians, ecliptic frame
    const JUP_a = 5.20336301;

    for (const ast of TROJANS) {
      // Each Trojan sits at a fixed angular offset from Jupiter's current angle
      const theta = jupAngle + ast.angularOffset * Math.PI / 180;
      // Base position on Jupiter's orbit, then apply radial nudge
      const r_base = JUP_a + ast.radialOffset * Math.cos(ast.radialAngle);
      const x_au = r_base * Math.cos(theta) + ast.radialOffset * 0.3 * Math.sin(ast.radialAngle) * Math.cos(theta + Math.PI/2);
      const y_au = r_base * Math.sin(theta) + ast.radialOffset * 0.3 * Math.sin(ast.radialAngle) * Math.sin(theta + Math.PI/2);
      const r = Math.sqrt(x_au*x_au + y_au*y_au);
      if (!isFinite(r) || r === 0) continue;
      const sc = auToPixel(r) / r;
      const ax =  x_au * sc;
      const ay = -y_au * sc;
      // L4 swarm: warm amber; L5 swarm: cooler rose
      ctx.globalAlpha = ast.brightness * 0.6;
      ctx.fillStyle = ast.swarm === 0 ? '#c8a855' : '#c89070';
      ctx.fillRect(ax - 0.6, ay - 0.6, 1.2, 1.2);
    }
    ctx.globalAlpha = 1;
  }

  // ── Kuiper Belt ──
  if (showKuiper) {
    const T = (simJD - J2000) / 36525;
    for (const ast of KUIPER) {
      const L = ast.L0 + ast.dL * T;
      let M = (L - ast.longPeri) % 360;
      if (M > 180) M -= 360; if (M < -180) M += 360;
      const Mr = M * Math.PI / 180;
      const E  = Mr + ast.e * Math.sin(Mr);
      const xp = ast.a * (Math.cos(E) - ast.e);
      const yp = ast.a * Math.sqrt(1 - ast.e * ast.e) * Math.sin(E);
      const x_au = xp*(ast.cosW*ast.cosO - ast.sinW*ast.sinO) - yp*(ast.sinW*ast.cosO + ast.cosW*ast.sinO);
      const y_au = xp*(ast.cosW*ast.sinO + ast.sinW*ast.cosO) + yp*(ast.cosW*ast.cosO - ast.sinW*ast.sinO);
      const r = Math.sqrt(x_au*x_au + y_au*y_au);
      if (!isFinite(r) || r === 0) continue;
      const sc = auToPixel(r) / r;
      const ax =  x_au * sc;
      const ay = -y_au * sc;
      // Icy blue-white tint
      ctx.globalAlpha = ast.brightness * 0.45;
      ctx.fillStyle = '#a8c8e8';
      ctx.fillRect(ax - 0.6, ay - 0.6, 1.2, 1.2);
    }
    ctx.globalAlpha = 1;
  }

  // ── Orbits & Planets ──
  for (const planet of PLANETS) {
    // Trace the orbit by sampling E (eccentric anomaly) evenly.
    // This uses the SAME auToPixel(r)/r scaling as the planet dot,
    // so the dot is guaranteed to sit on the line at all points in the orbit.
    const e = planet.e;
    const a = planet.a;
    const w   = (planet.longPeri - planet.longNode) * Math.PI / 180;
    const Om  = planet.longNode * Math.PI / 180;
    const cosW = Math.cos(w), sinW = Math.sin(w);
    const cosO = Math.cos(Om),  sinO = Math.sin(Om);
    const N = 180; // sample points
    ctx.beginPath();
    for (let i = 0; i <= N; i++) {
      const E = (i / N) * 2 * Math.PI;
      const xp = a * (Math.cos(E) - e);
      const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
      // Rotate to ecliptic frame
      const x_au = xp*(cosW*cosO - sinW*sinO) - yp*(sinW*cosO + cosW*sinO);
      const y_au = xp*(cosW*sinO + sinW*cosO) + yp*(cosW*cosO - sinW*sinO);
      const r = Math.sqrt(x_au*x_au + y_au*y_au);
      const sc = r > 0 ? auToPixel(r) / r : 0;
      const cx2 =  x_au * sc;
      const cy2 = -y_au * sc;
      if (i === 0) ctx.moveTo(cx2, cy2); else ctx.lineTo(cx2, cy2);
    }
    ctx.closePath();
    ctx.strokeStyle = `rgba(80,120,200,0.22)`;
    ctx.lineWidth = 0.8 / zoom;
    ctx.stroke();

    // Position
    const pos = planetPosition(planet, simJD);
    // Scale by radial distance to preserve orbit shape, then apply x/y direction
    const scale = pos.r > 0 ? auToPixel(pos.r) / pos.r : 0;
    const px =  pos.x * scale;
    const py = -pos.y * scale; // flip Y (canvas Y is down)

    // Skip this planet if position is not renderable
    if (!isFinite(px) || !isFinite(py)) continue;

    // Store screen position for hover detection
    planetPositions[planet.name] = { sx: px, sy: py, sr: planet.r };

    // Glow
    const gGrad = ctx.createRadialGradient(px, py, 0, px, py, planet.r * 4);
    gGrad.addColorStop(0, planet.glow);
    gGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.beginPath(); ctx.arc(px, py, planet.r*4, 0, Math.PI*2);
    ctx.fillStyle = gGrad; ctx.fill();

    // Planet disc
    ctx.beginPath(); ctx.arc(px, py, planet.r, 0, Math.PI*2);
    ctx.fillStyle = planet.color; ctx.fill();

    // Saturn rings
    if (planet.hasRing) {
      ctx.save();
      ctx.translate(px, py);
      ctx.scale(1, 0.35);
      ctx.beginPath();
      ctx.arc(0, 0, planet.r * 2.1, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(220,205,140,0.55)';
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(0, 0, planet.r * 2.6, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(220,200,130,0.3)';
      ctx.lineWidth = 2.5;
      ctx.stroke();
      ctx.restore();
    }

    // Label
    ctx.fillStyle = 'rgba(180,210,255,0.7)';
    ctx.font = `${10/zoom}px 'Share Tech Mono', monospace`;
    ctx.textAlign = 'left';
    ctx.fillText(planet.name.toUpperCase(), px + planet.r + 4/zoom, py - planet.r + 4/zoom);
  }

  // ── Dwarf planets ──
  if (showDwarfs) {
    for (const planet of DWARF_PLANETS) {
      const e = planet.e;
      const a = planet.a;
      const w   = (planet.longPeri - planet.longNode) * Math.PI / 180;
      const Om  = planet.longNode * Math.PI / 180;
      const cosW = Math.cos(w), sinW = Math.sin(w);
      const cosO = Math.cos(Om),  sinO = Math.sin(Om);
      const N = 200;
      ctx.beginPath();
      for (let i = 0; i <= N; i++) {
        const E = (i / N) * 2 * Math.PI;
        const xp = a * (Math.cos(E) - e);
        const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
        const x_au = xp*(cosW*cosO - sinW*sinO) - yp*(sinW*cosO + cosW*sinO);
        const y_au = xp*(cosW*sinO + sinW*cosO) + yp*(cosW*cosO - sinW*sinO);
        const r = Math.sqrt(x_au*x_au + y_au*y_au);
        const sc = r > 0 ? auToPixel(r) / r : 0;
        const cx2 =  x_au * sc;
        const cy2 = -y_au * sc;
        if (i === 0) ctx.moveTo(cx2, cy2); else ctx.lineTo(cx2, cy2);
      }
      ctx.closePath();
      ctx.strokeStyle = `rgba(120,100,160,0.25)`;
      ctx.lineWidth = 0.7 / zoom;
      ctx.setLineDash([3/zoom, 4/zoom]);
      ctx.stroke();
      ctx.setLineDash([]);

      const pos = planetPosition(planet, simJD);
      const scale = pos.r > 0 ? auToPixel(pos.r) / pos.r : 0;
      const px =  pos.x * scale;
      const py = -pos.y * scale;
      if (!isFinite(px) || !isFinite(py)) continue;

      planetPositions[planet.name] = { sx: px, sy: py, sr: planet.r };

      // Glow
      const gGrad = ctx.createRadialGradient(px, py, 0, px, py, planet.r * 4);
      gGrad.addColorStop(0, planet.glow);
      gGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.beginPath(); ctx.arc(px, py, planet.r*4, 0, Math.PI*2);
      ctx.fillStyle = gGrad; ctx.fill();

      // Dot (diamond shape to distinguish from planets)
      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(Math.PI/4);
      ctx.fillStyle = planet.color;
      const ds = planet.r * 0.85;
      ctx.fillRect(-ds, -ds, ds*2, ds*2);
      ctx.restore();

      // Label
      ctx.fillStyle = 'rgba(160,140,200,0.65)';
      ctx.font = `${9/zoom}px 'Share Tech Mono', monospace`;
      ctx.textAlign = 'left';
      ctx.fillText(planet.name.toUpperCase(), px + planet.r + 4/zoom, py - planet.r + 4/zoom);
    }
  }

  ctx.restore();
}

// ──────────────────────────────────────────────
// TOOLTIP / HOVER
// ──────────────────────────────────────────────
const tooltip = document.getElementById('tooltip');
let hoveredPlanet = null;

function handleHover(mx, my) {
  const scx = cx + panX, scy = cy + panY;
  let found = null;
  const allBodies = showDwarfs ? [...PLANETS, ...DWARF_PLANETS] : PLANETS;
  for (const planet of allBodies) {
    const pp = planetPositions[planet.name];
    if (!pp) continue;
    const sx = scx + pp.sx * zoom;
    const sy = scy + pp.sy * zoom;
    const dist = Math.hypot(mx - sx, my - sy);
    if (dist < Math.max(pp.sr * zoom + 6, 10)) { found = planet; break; }
  }
  if (found) {
    showTooltip(found, mx, my);
  } else {
    hideTooltip();
  }
}

function showTooltip(planet, mx, my) {
  const pos = planetPosition(planet, simJD);
  tooltip.style.display = 'block';
  tooltip.style.left = (mx + 16) + 'px';
  tooltip.style.top = (my + 16) + 'px';
  let html = `<div class="tip-name">${planet.name}</div>`;
  for (const [k, v] of Object.entries(planet.info)) {
    html += `<div class="tip-row">${k}: <span class="tip-val">${v}</span></div>`;
  }
  html += `<div class="tip-row">Distance from Sun: <span class="tip-val">${pos.r.toFixed(3)} AU</span></div>`;
  tooltip.innerHTML = html;
}

function hideTooltip() {
  tooltip.style.display = 'none';
}

// ──────────────────────────────────────────────
// CONTROLS
// ──────────────────────────────────────────────
const btnPlay   = document.getElementById('btn-play');
const btnRev    = document.getElementById('btn-rev');
const btnFwd    = document.getElementById('btn-fwd');
const btnNow    = document.getElementById('btn-now');
const btnGoto   = document.getElementById('btn-goto');
const btnLog    = document.getElementById('btn-log');
const btnLin    = document.getElementById('btn-lin');
const btnDwarfs = document.getElementById('btn-dwarfs');
const slider    = document.getElementById('speed-slider');
const speedVal  = document.getElementById('speed-val');
const dateVal   = document.getElementById('date-val');
const jdVal     = document.getElementById('jd-val');

btnPlay.addEventListener('click', () => {
  paused = !paused;
  btnPlay.textContent = paused ? '▶' : '⏸';
});
btnRev.addEventListener('click', () => {
  direction = -1; paused = false;
  btnPlay.textContent = '⏸';
});
btnFwd.addEventListener('click', () => {
  direction = 1; paused = false;
  btnPlay.textContent = '⏸';
});
btnNow.addEventListener('click', () => {
  simJD = dateToJD(new Date());
  direction = 1;
});

// Date modal elements — defer until DOM is fully loaded since modal is after the script tag
window.addEventListener('DOMContentLoaded', () => {
  const dateModalOverlay = document.getElementById('date-modal-overlay');
  const dateInput        = document.getElementById('date-input');
  const btnDateCancel    = document.getElementById('btn-date-cancel');
  const btnDateGo        = document.getElementById('btn-date-go');

  // Go to date
  btnGoto.addEventListener('click', () => {
    dateInput.value = jdToISODate(simJD);
    dateModalOverlay.classList.add('open');
    paused = true;
    btnPlay.textContent = '▶';
    setTimeout(() => dateInput.focus(), 50);
  });
  btnDateCancel.addEventListener('click', () => {
    dateModalOverlay.classList.remove('open');
  });
  btnDateGo.addEventListener('click', () => {
    if (dateInput.value) {
      const [y, m, d] = dateInput.value.split('-').map(Number);
      simJD = dateToJD(new Date(Date.UTC(y, m-1, d, 12, 0, 0)));
    }
    dateModalOverlay.classList.remove('open');
  });
  dateInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') btnDateGo.click();
    if (e.key === 'Escape') btnDateCancel.click();
  });
  dateModalOverlay.addEventListener('click', e => {
    if (e.target === dateModalOverlay) btnDateCancel.click();
  });
});

// Asteroid belt toggle
const btnBelt = document.getElementById('btn-belt');
btnBelt.addEventListener('click', () => {
  showBelt = !showBelt;
  btnBelt.classList.toggle('active', showBelt);
});

// Trojan toggle
const btnTrojans = document.getElementById('btn-trojans');
btnTrojans.addEventListener('click', () => {
  showTrojans = !showTrojans;
  btnTrojans.classList.toggle('active', showTrojans);
});

// Kuiper belt toggle
const btnKuiper = document.getElementById('btn-kuiper');
btnKuiper.addEventListener('click', () => {
  showKuiper = !showKuiper;
  btnKuiper.classList.toggle('active', showKuiper);
});

// Dwarf planets toggle
btnDwarfs.addEventListener('click', () => {
  showDwarfs = !showDwarfs;
  btnDwarfs.classList.toggle('active', showDwarfs);
  document.getElementById('dwarf-divider').style.display = showDwarfs ? '' : 'none';
  document.getElementById('dwarf-legend-rows').style.display = showDwarfs ? '' : 'none';
});

btnLog.addEventListener('click', () => {
  useLog = true;
  btnLog.classList.add('active'); btnLin.classList.remove('active');
});
btnLin.addEventListener('click', () => {
  useLog = false;
  btnLin.classList.add('active'); btnLog.classList.remove('active');
});
btnLog.classList.add('active');

slider.addEventListener('input', () => {
  daysPerFrame = sliderToDaysPerFrame(+slider.value);
});

// Helper: JD → ISO date string (YYYY-MM-DD) for the date input
function jdToISODate(jd) {
  let z = Math.floor(jd + 0.5);
  let f = jd + 0.5 - z;
  let a = z >= 2299161
    ? (z + 1 + Math.floor((z-1867216.25)/36524.25) - Math.floor(Math.floor((z-1867216.25)/36524.25)/4))
    : z;
  let b = a + 1524;
  let c = Math.floor((b - 122.1)/365.25);
  let d = Math.floor(365.25*c);
  let e = Math.floor((b-d)/30.6001);
  const day   = Math.floor(b - d - Math.floor(30.6001*e) + f);
  const month = e < 14 ? e-1 : e-13;
  const year  = month > 2 ? c-4716 : c-4715;
  return `${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

function formatSpeed(dpf) {
  if (dpf < 1) return `${dpf.toFixed(2)} d/f`;
  if (dpf < 30) return `${dpf.toFixed(1)} d/f`;
  if (dpf < 365) return `${(dpf/30.44).toFixed(1)} mo/f`;
  return `${(dpf/365.25).toFixed(1)} yr/f`;
}

// ──────────────────────────────────────────────
// LEGEND
// ──────────────────────────────────────────────
const legendRows = document.getElementById('legend-rows');
for (const p of PLANETS) {
  const row = document.createElement('div');
  row.className = 'leg-row';
  row.innerHTML = `<div class="leg-dot" style="background:${p.color};box-shadow:0 0 5px ${p.color}"></div>${p.name}`;
  legendRows.appendChild(row);
}
const dwarfLegendRows = document.getElementById('dwarf-legend-rows');
dwarfLegendRows.style.display = 'none';
for (const p of DWARF_PLANETS) {
  const row = document.createElement('div');
  row.className = 'leg-row dwarf';
  row.innerHTML = `<div class="leg-dot" style="background:${p.color};box-shadow:0 0 4px ${p.color};border-radius:2px;transform:rotate(45deg)"></div>${p.name}`;
  dwarfLegendRows.appendChild(row);
}

// ──────────────────────────────────────────────
// ANIMATION LOOP
// ──────────────────────────────────────────────
function loop() {
  if (!paused) {
    simJD += daysPerFrame * direction;
  }
  daysPerFrame = sliderToDaysPerFrame(+slider.value);
  dateVal.textContent = jdToDate(simJD);
  jdVal.textContent = `JD ${simJD.toFixed(2)}`;
  speedVal.textContent = formatSpeed(daysPerFrame);
  draw();
  requestAnimationFrame(loop);
}

loop();