import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const directoryPath = path.dirname(fileURLToPath(import.meta.url));

function processDirectory(directory) {
  fs.readdir(directory, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
      const filePath = path.join(directory, file);
      if (fs.statSync(filePath).isDirectory()) {
        processDirectory(filePath);
      } else if (path.extname(file) === '.webp') {
        const newFilePath = path.join(directory, 'small_' + file);

        sharp(filePath)
          .resize(30)
          .toFile(newFilePath, (err) => {
            if (err) {
              console.log('Error occurred: ' + err);
            } else {
              console.log('File resized and saved to ' + newFilePath);
            }
          });
      }
    });
  });
}

processDirectory(directoryPath);
