import envalid from 'envalid';
import fs from 'fs';
import { generateExternalDocs } from './externalDoc';
import pretty from 'pretty';

const file = `problems-and-medications.xml`;
// const file = `EMERGE/Patient-0.xml`;

const file_path = fs.readFileSync(`${__dirname.split(`\\`).splice(0, 3).join(`\\`)}/src/files/${file}`)

const app = async () => await generateExternalDocs(file_path);

app().then(res => null);
app().then(res => {
  const filename = `${__dirname.split(`\\`).splice(0, 3).join(`\\`)}/build/test.html`;

  const stream = fs.createWriteStream(filename);

  stream.once('open', () => {
    console.log(res)

    const html = pretty(`
      <body>
        ${res}
        <style>body{background-color: #f6f6f6; font-family: Arial;}</style>
      </body>
    `)

    stream.end(html);
  })
});