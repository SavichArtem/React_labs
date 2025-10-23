const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(__dirname, '../../data/freelancers');
const INDEX_FILE = path.join(__dirname, '../../data/freelancers_index.json');

async function createFreelancer(name, specialization, experience, hourlyRate, completedProjects, rating, skills) {
    try {
        // Создаем директорию если не существует
        await fs.mkdir(DATA_DIR, { recursive: true });
        
        // Загружаем индекс
        let index = [];
        try {
            const indexData = await fs.readFile(INDEX_FILE, 'utf8');
            index = JSON.parse(indexData);
        } catch (error) {
            // Файл не существует, создаем новый индекс
        }

        // Создаем уникальный ID
        const id = Date.now().toString();
        const filename = `freelancer_${id}.json`;
        const filepath = path.join(DATA_DIR, filename);

        // Проверяем существует ли файл
        try {
            await fs.access(filepath);
            throw new Error('Ошибка операции FS: Фрилансер уже существует');
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }

        // Парсим навыки
        const skillsArray = skills.split(',').map(skill => skill.trim());

        // Создаем данные фрилансера
        const freelancerData = {
            id: parseInt(id),
            name,
            specialization,
            experience,
            hourlyRate: parseInt(hourlyRate),
            completedProjects: parseInt(completedProjects),
            rating: parseFloat(rating),
            skills: skillsArray,
            reviews: 0,
            createdAt: new Date().toISOString()
        };

        // Сохраняем данные фрилансера
        await fs.writeFile(filepath, JSON.stringify(freelancerData, null, 2));

        // Добавляем в индекс
        const indexEntry = {
            id: parseInt(id),
            name,
            specialization,
            experience,
            hourlyRate: parseInt(hourlyRate),
            filename
        };
        
        index.push(indexEntry);
        await fs.writeFile(INDEX_FILE, JSON.stringify(index, null, 2));

        console.log(`Фрилансер "${name}" успешно создан с ID: ${id}`);
        return id;

    } catch (error) {
        console.error('Ошибка при создании фрилансера:', error.message);
        process.exit(1);
    }
}

// Обработка аргументов командной строки
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 7) {
        console.log('Использование: node create.js "Имя Фрилансера" "специализация" "опыт" "ставка" "проекты" "рейтинг" "навыки"');
        process.exit(1);
    }

    const [name, specialization, experience, hourlyRate, completedProjects, rating, skills] = args;
    createFreelancer(name, specialization, experience, hourlyRate, completedProjects, rating, skills);
}

module.exports = { createFreelancer };