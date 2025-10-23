const fs = require('fs').promises;
const path = require('path');

const INDEX_FILE = path.join('./freelancers_data', 'freelancers_index.json');

function getSpecializationText(specialization) {
    const specializations = {
        'development': '💻 Разработка',
        'design': '🎨 Дизайн', 
        'marketing': '📈 Маркетинг',
        'writing': '✏️ Копирайтинг'
    };
    return specializations[specialization] || specialization;
}

function getExperienceText(experience) {
    const experiences = {
        'senior': 'Сеньор',
        'middle': 'Миддл',
        'junior': 'Джун'
    };
    return experiences[experience] || experience;
}

async function listFreelancers() {
    try {
        // Загружаем индекс
        let index = [];
        try {
            const indexData = await fs.readFile(INDEX_FILE, 'utf8');
            index = JSON.parse(indexData);
        } catch (error) {
            console.log('Индекс фрилансеров не найден или пуст');
            return;
        }

        if (index.length === 0) {
            console.log('Фрилансеры не найдены');
            return;
        }

        console.log('\n=== КАТАЛОГ ФРИЛАНСЕРОВ ===');
        index.forEach((freelancer, index) => {
            console.log(`${index + 1}. ${freelancer.name}`);
            console.log(`   Специализация: ${getSpecializationText(freelancer.specialization)}`);
            console.log(`   Опыт: ${getExperienceText(freelancer.experience)}`);
            console.log(`   Ставка: $${freelancer.hourlyRate}/час`);
            console.log(`   ID: ${freelancer.id}`);
            console.log('---');
        });

        console.log(`Всего фрилансеров: ${index.length}`);

    } catch (error) {
        console.error('Ошибка при получении списка фрилансеров:', error.message);
        process.exit(1);
    }
}

// Обработка аргументов командной строки
if (require.main === module) {
    listFreelancers();
}

module.exports = { listFreelancers };