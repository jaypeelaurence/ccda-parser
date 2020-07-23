import envalid from 'envalid';
import fs from 'fs';
import { Parser } from 'xml2js';
import { Import } from './ccda';

const file = `HL7 Samples/01 CCD-Sample.xml`;
// const file = `HL7 Samples/02 DischargeSummary.xml`;

const file_path = fs.readFileSync(`${__dirname.split(`\\`).splice(0, 3).join(`\\`)}/src/files/${file}`)

const app = async () => await Import(file_path);

app().then(res => null);
// app().then(res => console.log(res));