const fs = require('fs').promises;
const path = require('path');

async function copyDirectory(source, destination) {
    try {
        // Создаем целевую директорию
        await fs.mkdir(destination, { recursive: true });

        // Читаем содержимое исходной директории
        const items = await fs.readdir(source);

        for (const item of items) {
            const sourcePath = path.join(source, item);
            const destPath = path.join(destination, item);

            const stat = await fs.stat(sourcePath);

            if (stat.isDirectory()) {
                // Рекурсивно копируем поддиректории
                await copyDirectory(sourcePath, destPath);
            } else {
                // Копируем файлы
                await fs.copyFile(sourcePath, destPath);
                console.log(`Скопирован: ${item}`);
            }
        }

        console.log(`Резервная копия фрилансеров успешно создана в: ${destination}`);
    } catch (error) {
        console.error('Ошибка при создании резервной копии:', error.message);
        process.exit(1);
    }
}

// Обработка аргументов командной строки
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 2) {
        console.log('Использование: node copy.js ./source_folder ./destination_folder');
        process.exit(1);
    }

    const [source, destination] = args;
    copyDirectory(source, destination);
}

module.exports = { copyDirectory };