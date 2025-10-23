const fs = require('fs').promises;
const path = require('path');

async function renameFile(oldPath, newPath) {
    try {
        // Проверяем существует ли исходный файл
        await fs.access(oldPath);
        
        // Проверяем не существует ли уже файл с новым именем
        try {
            await fs.access(newPath);
            throw new Error('Файл с новым именем уже существует');
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }

        // Переименовываем файл
        await fs.rename(oldPath, newPath);
        console.log(`Файл успешно переименован: ${oldPath} -> ${newPath}`);

    } catch (error) {
        console.error('Ошибка при переименовании файла:', error.message);
        process.exit(1);
    }
}

// Обработка аргументов командной строки
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('Использование: node rename.js old_filename.json new_filename.json');
        process.exit(1);
    }

    const [oldPath, newPath] = args;
    renameFile(oldPath, newPath);
}

module.exports = { renameFile };