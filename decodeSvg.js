const fs = require('fs');

// Ler o arquivo SVG
const svg = fs.readFileSync('./src/images/icons/Mais.js', 'utf-8');

// Codificar o SVG para base64
const svgBase64 = Buffer.from(svg).toString('base64');

console.log('SVG em base64:', svgBase64);

// Decodificar o SVG base64
const decodedSvg = Buffer.from(svgBase64, 'base64').toString('utf-8');

console.log('SVG decodificado:', decodedSvg);