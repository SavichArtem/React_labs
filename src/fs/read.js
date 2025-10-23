const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'data/freelancers');

function getSpecializationText(specialization) {
    const specializations = {
        'development': 'Разработка',
        'design': 'Дизайн', 
        'marketing': 'Маркетинг',
        'writing': 'Копирайтинг'
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

async function readFreelancer(freelancerId) {
    try {
        const filename = `freelancer_${freelancerId}.json`;
        const filepath = path.join(DATA_DIR, filename);

        // Читаем данные фрилансера
        const freelancerData = await fs.readFile(filepath, 'utf8');
        const freelancer = JSON.parse(freelancerData);

        console.log('\n=== ПРОФИЛЬ ФРИЛАНСЕРА ===');
        console.log(`ФИО: ${freelancer.name}`);
        console.log(`Специализация: ${getSpecializationText(freelancer.specialization)}`);
        console.log(`Опыт: ${getExperienceText(freelancer.experience)}`);
        console.log(`Ставка: $${freelancer.hourlyRate}/час`);
        console.log(`Выполнено проектов: ${freelancer.completedProjects}`);
        console.log(`Рейтинг: ${freelancer.rating}/5`);
        console.log(`Отзывы: ${freelancer.reviews}`);
        console.log(`Навыки: ${freelancer.skills.join(', ')}`);
        console.log(`ID: ${freelancer.id}`);
        console.log(`В системе с: ${new Date(freelancer.createdAt).toLocaleString()}`);

        return freelancer;

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error('Фрилансер не найден');
        } else {
            console.error('Ошибка при чтении профиля фрилансера:', error.message);
        }
        process.exit(1);
    }
}

// Обработка аргументов командной строки
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.log('Использование: node read.js freelancer_id');
        process.exit(1);
    }

    const freelancerId = args[0];
    readFreelancer(freelancerId);
}

module.exports = { readFreelancer };