// scripts/generate-svg.js
import fs from 'fs';

const R = 27;
const w = R * Math.sqrt(3); // ~46.765
const h = 1.5 * R;          // 40.5

const cols = 26;
const rows = 12;

const width = cols * w; // 1215.89
const height = rows * h; // 486 (12 * 40.5 = 486)

function getCenter(c, r) {
  const isOdd = r % 2 !== 0;
  const x = c * w + (isOdd ? w / 2 : 0);
  const y = r * h;
  return { x, y };
}

function getHexagonPoints(cx, cy, radius = R) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angleDeg = 60 * i - 30; // pointy-topped
    const angleRad = (Math.PI / 180) * angleDeg;
    const px = cx + radius * Math.cos(angleRad);
    const py = cy + radius * Math.sin(angleRad);
    pts.push({ x: px, y: py });
  }
  return pts;
}

function pointsToPath(pts) {
  return pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ') + ' Z';
}

const STYLES = {
  ice: { stroke: '#dbeafe', strokeWidth: 1.2, opacity: 0.8 },
  soft: { stroke: '#bfdbfe', strokeWidth: 1.3, opacity: 0.85 },
  sky: { stroke: '#93c5fd', strokeWidth: 1.4, opacity: 0.9 },
  vibrant: { stroke: '#60a5fa', strokeWidth: 1.5, opacity: 0.95 },
  cyan: { stroke: '#7dd3fc', strokeWidth: 1.4, opacity: 0.9 },
};

// Clusters positioned to match the image layout
const hexagons = [
  // === CLUSTER 1: Upper-Left (Node & rings) ===
  { c: 1, r: 2, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 0, r: 2, type: 'soft' },
  { c: 2, r: 1, type: 'ice' },
  { c: 3, r: 1, type: 'sky' },
  { c: 4, r: 1, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 3, r: 2, type: 'vibrant' },
  { c: 2, r: 2, type: 'cyan' },
  { c: 1, r: 3, type: 'soft' },
  { c: 2, r: 3, type: 'ice' },
  { c: 4, r: 2, type: 'sky' },

  // === CLUSTER 2: Bottom-Left Honeycomb ===
  { c: 0, r: 6, type: 'soft' },
  { c: 1, r: 6, type: 'vibrant' },
  { c: 0, r: 7, type: 'sky' },
  { c: 1, r: 7, type: 'cyan' },
  { c: 2, r: 7, type: 'soft' },
  { c: 0, r: 8, type: 'ice' },
  { c: 1, r: 8, type: 'sky' },
  { c: 2, r: 8, type: 'vibrant' },
  { c: 0, r: 9, type: 'soft' },
  { c: 1, r: 9, type: 'cyan' },
  { c: 2, r: 9, type: 'ice' },
  { c: 3, r: 9, type: 'sky' },
  { c: 1, r: 10, type: 'soft' },
  { c: 2, r: 10, type: 'vibrant' },

  // === CLUSTER 3: Mid-Left Node & Ring ===
  { c: 6, r: 2, type: 'ice' },
  { c: 7, r: 2, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 6, r: 3, type: 'soft' },
  { c: 7, r: 3, type: 'sky' },
  { c: 8, r: 3, type: 'cyan' },
  { c: 6, r: 4, type: 'vibrant' },
  { c: 7, r: 4, type: 'soft' },

  // === CLUSTER 4: Lower Mid-Left Chain ===
  { c: 5, r: 7, type: 'ice' },
  { c: 6, r: 7, type: 'sky' },
  { c: 7, r: 7, type: 'vibrant' },
  { c: 8, r: 7, type: 'soft' },
  { c: 6, r: 8, type: 'cyan' },
  { c: 7, r: 8, type: 'ice' },

  // === CLUSTER 5: Top-Center Isolated Pair ===
  { c: 11, r: 1, type: 'vibrant' },
  { c: 12, r: 1, type: 'sky' },
  { c: 11, r: 2, type: 'ice' },

  // === CLUSTER 6: Center Bottom (Double Rings & Node) ===
  { c: 10, r: 6, type: 'ice' },
  { c: 11, r: 6, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 12, r: 6, type: 'double', stroke: '#60a5fa', innerStroke: '#93c5fd' },
  { c: 13, r: 6, type: 'double', stroke: '#38bdf8', innerStroke: '#bfdbfe' },
  { c: 11, r: 7, type: 'soft' },
  { c: 12, r: 7, type: 'sky' },
  { c: 13, r: 7, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 10, r: 8, type: 'cyan' },
  { c: 11, r: 8, type: 'vibrant' },
  { c: 12, r: 8, type: 'ice' },

  // === CLUSTER 7: Mid-Right Upper Node ===
  { c: 15, r: 2, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 14, r: 2, type: 'soft' },
  { c: 16, r: 2, type: 'cyan' },
  { c: 15, r: 3, type: 'sky' },
  { c: 16, r: 3, type: 'ice' },

  // === CLUSTER 8: Vertical Honeycomb Cascade ===
  { c: 19, r: 1, type: 'sky' },
  { c: 18, r: 2, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 19, r: 2, type: 'soft' },
  { c: 18, r: 3, type: 'vibrant' },
  { c: 19, r: 3, type: 'cyan' },
  { c: 18, r: 4, type: 'sky' },
  { c: 19, r: 4, type: 'soft' },
  { c: 18, r: 5, type: 'ice' },
  { c: 19, r: 5, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 18, r: 6, type: 'vibrant' },
  { c: 19, r: 6, type: 'cyan' },
  { c: 20, r: 6, type: 'soft' },
  { c: 18, r: 7, type: 'sky' },
  { c: 19, r: 7, type: 'ice' },
  { c: 20, r: 7, type: 'vibrant' },

  // === CLUSTER 9: Right Honeycomb Group ===
  { c: 22, r: 2, type: 'soft' },
  { c: 23, r: 2, type: 'vibrant' },
  { c: 24, r: 2, type: 'ice' },
  { c: 22, r: 3, type: 'sky' },
  { c: 23, r: 3, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 24, r: 3, type: 'cyan' },
  { c: 25, r: 3, type: 'soft' },
  { c: 22, r: 4, type: 'ice' },
  { c: 23, r: 4, type: 'vibrant' },
  { c: 24, r: 4, type: 'sky' },
  { c: 25, r: 4, type: 'cyan' },
  { c: 23, r: 5, type: 'soft' },
  { c: 24, r: 5, type: 'node', nodeColor: '#85A2ED', dotColor: '#85A2ED' },
  { c: 25, r: 5, type: 'vibrant' },
  { c: 24, r: 6, type: 'sky' },
  { c: 25, r: 6, type: 'ice' },

  // Connecting line with dot at upper right edge
  { c: 25, r: 1, type: 'node-partial', dotColor: '#85A2ED' },
];

function generateWrappedInstances(cx, cy) {
  const instances = [{ x: cx, y: cy }];
  const dxs = [0];
  const dys = [0];

  if (cx < R * 1.5) dxs.push(width);
  if (cx > width - R * 1.5) dxs.push(-width);

  if (cy < R * 1.5) dys.push(height);
  if (cy > height - R * 1.5) dys.push(-height);

  const res = [];
  for (const dx of dxs) {
    for (const dy of dys) {
      res.push({ x: cx + dx, y: cy + dy });
    }
  }
  return res;
}

let svgLight = '';
let svgNodes = '';

hexagons.forEach(hex => {
  const { x: baseCx, y: baseCy } = getCenter(hex.c, hex.r);
  const instances = generateWrappedInstances(baseCx, baseCy);

  instances.forEach(({ x, y }) => {
    const pts = getHexagonPoints(x, y, R);
    const path = pointsToPath(pts);

    if (hex.type === 'double') {
      const innerPts = getHexagonPoints(x, y, R * 0.78);
      const innerPath = pointsToPath(innerPts);
      svgLight += `  <path d="${path}" stroke="${hex.stroke}" stroke-width="1.4" opacity="0.9" />\n`;
      svgLight += `  <path d="${innerPath}" stroke="${hex.innerStroke}" stroke-width="1.1" opacity="0.8" />\n`;
    } else if (hex.type === 'node') {
      svgNodes += `  <path d="${path}" stroke="${hex.nodeColor}" stroke-width="1.8" />\n`;
      pts.forEach(p => {
        svgNodes += `  <circle cx="${p.x.toFixed(2)}" cy="${p.y.toFixed(2)}" r="3.2" fill="${hex.dotColor}" />\n`;
      });
    } else if (hex.type === 'node-partial') {
      const p1 = pts[4];
      const p2 = pts[5];
      svgNodes += `  <line x1="${p1.x.toFixed(2)}" y1="${p1.y.toFixed(2)}" x2="${p2.x.toFixed(2)}" y2="${p2.y.toFixed(2)}" stroke="#85A2ED" stroke-width="1.6" />\n`;
      svgNodes += `  <circle cx="${p2.x.toFixed(2)}" cy="${p2.y.toFixed(2)}" r="3" fill="${hex.dotColor}" />\n`;
    } else {
      const s = STYLES[hex.type] || STYLES.sky;
      svgLight += `  <path d="${path}" stroke="${s.stroke}" stroke-width="${s.strokeWidth}" opacity="${s.opacity}" />\n`;
    }
  });
});

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width.toFixed(2)} ${height.toFixed(2)}" width="${width.toFixed(2)}" height="${height.toFixed(2)}" fill="none">
  <!-- Light Blue Hexagons -->
${svgLight}
  <!-- Accent Blue Nodes & Connecting Vertices -->
${svgNodes}
</svg>\n`;

fs.writeFileSync('public/images/hexagon-bg.svg', svgContent, 'utf-8');
console.log(`Generated seamless SVG tile: ${width.toFixed(1)} x ${height.toFixed(1)} px`);
