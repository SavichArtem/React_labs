const fs = require('fs');
const path = require('path');

const readFileStream = (filename) => {
  const readStream = fs.createReadStream(filename, { encoding: 'utf8' });

  readStream
    .on('data', (chunk) => {
      console.log(chunk);
    })
    .on('error', (err) => {
      console.error(`Ошибка чтения: ${err.message}`);
    })
    .on('end', () => {
      console.log('Чтение файла завершено');
    });
};

const [, , filename] = process.argv;
if (!filename) {
  console.error('Использование: node read.js <filename>');
  process.exit(1);
}

readFileStream(filename);