const fs = require('fs');
const path = require('path');

const writeFileStream = (filename, name, specialization, experience) => {
  const filePath = path.join(process.cwd(), 'data', filename);
  const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });

  const freelancerData = JSON.stringify({ 
    name, 
    specialization, 
    experience 
  }, null, 2);

  writeStream.write(freelancerData);
  writeStream.end();

  writeStream
    .on('finish', () => {
      console.log(`Данные записаны в ${filename}`);
    })
    .on('error', (err) => {
      console.error(`Ошибка записи: ${err.message}`);
    });
};

const [, , filename, name, specialization, experience] = process.argv;
if (!filename || !name || !specialization || !experience) {
  console.error('Использование: node write.js <filename> "Имя" "Специализация" "Опыт"');
  process.exit(1);
}

writeFileStream(filename, name, specialization, experience);