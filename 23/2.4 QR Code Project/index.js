/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import { input } from '@inquirer/prompts';
import { writeFile } from 'node:fs';
import { createWriteStream } from 'node:fs';
import {image}  from "qr-image"

const url = await input({ message: 'Enter the url: ' });
writeFile("url.txt", url, 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
}); 
var qr_svg = image(url, {type: 'svg'})
qr_svg.pipe(createWriteStream(`to man I need by Olivia Deen.svg`));

