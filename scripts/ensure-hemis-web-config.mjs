import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const htmlPath = resolve("public/css-game/index.html");
const requiredScripts = [
  '<script src="hemis-config.js"></script>',
  '<script src="hemis-bootstrap.js"></script>',
];

let html = readFileSync(htmlPath, "utf8");

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

for (const script of requiredScripts) {
  html = html.replace(new RegExp(`\\n?\\s*${escapeRegExp(script)}\\s*\\n?`, "g"), "\n");
}

html = html.replace(/\n{3,}/g, "\n\n");

const injection = `\t\t${requiredScripts.join("\n\t\t")}\n`;

if (html.includes("</head>")) {
  html = html.replace("</head>", `${injection}\n\t</head>`);
} else if (html.includes('<script src="index.js"></script>')) {
  html = html.replace(
    '<script src="index.js"></script>',
    `${injection}\t\t<script src="index.js"></script>`,
  );
} else {
  throw new Error(`No se encontro un punto seguro para inyectar scripts en ${htmlPath}`);
}

writeFileSync(htmlPath, html);
console.log("[hemis] index.html contiene hemis-config.js y hemis-bootstrap.js");
