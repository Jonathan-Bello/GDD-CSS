const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.resolve(__dirname, "../..");

const assets = [
  ["design 1", "src/assets/svgs/arte/design 1.svg"],
  ["fondo_cueva", "src/assets/svgs/arte/fondo_cueva.svg"],
  ["Robot_Sideview", "src/assets/svgs/arte/Robot_Sideview 1.svg"],
  ["heavy_front", "src/assets/svgs/arte/robots-enemigos/heavy_full_front 1.svg"],
  ["heavy_side_alt", "src/assets/svgs/arte/robots-enemigos/robot_heavy (2) 1.svg"],
  ["heavy_side", "src/assets/svgs/arte/robots-enemigos/robot_heavy 1.svg"],
  ["scout_side", "src/assets/svgs/arte/robots-enemigos/robot_scout 1.svg"],
  ["scout_front", "src/assets/svgs/arte/robots-enemigos/scout_full_front 1.svg"],
  ["avatar_me1", "src/assets/svgs/arte/avatar/me1.svg"],
];

async function main() {
  const cellW = 420;
  const cellH = 520;
  const labelH = 44;
  const composites = [];

  for (let i = 0; i < assets.length; i += 1) {
    const [name, rel] = assets[i];
    const file = path.join(root, rel);
    const svg = fs.readFileSync(file);
    const meta = await sharp(svg).metadata();
    const rendered = await sharp(svg)
      .resize({
        width: cellW - 40,
        height: cellH - labelH - 32,
        fit: "inside",
        withoutEnlargement: true,
      })
      .png()
      .toBuffer();
    const renderedMeta = await sharp(rendered).metadata();
    const label = Buffer.from(`
      <svg width="${cellW}" height="${labelH}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#111716"/>
        <text x="18" y="28" font-family="Arial" font-size="18" fill="#EDEDED">${name} (${meta.width}x${meta.height})</text>
      </svg>
    `);
    const cell = await sharp({
      create: {
        width: cellW,
        height: cellH,
        channels: 4,
        background: "#F7F5EE",
      },
    })
      .composite([
        { input: label, left: 0, top: 0 },
        {
          input: rendered,
          left: Math.round((cellW - renderedMeta.width) / 2),
          top: labelH + 16,
        },
      ])
      .png()
      .toBuffer();

    composites.push({
      input: cell,
      left: (i % 3) * cellW,
      top: Math.floor(i / 3) * cellH,
    });
  }

  const sheet = path.join(__dirname, "svg-style-contact-sheet.png");
  await sharp({
    create: {
      width: cellW * 3,
      height: cellH * 3,
      channels: 4,
      background: "#D8D0C1",
    },
  })
    .composite(composites)
    .png()
    .toFile(sheet);

  console.log(sheet);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
