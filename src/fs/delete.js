const fs = require('fs').promises;
const path = require('path');

const DATA_DIR = path.join(process.cwd(), 'data/freelancers');
const INDEX_FILE = path.join(process.cwd(), 'data/freelancers_index.json');

async function deleteFreelancer(freelancerId) {
    try {
        // Загружаем индекс
        let index = [];
        try {
            const indexData = await fs.readFile(INDEX_FILE, 'utf8');
            index = JSON.parse(indexData);
        } catch (error) {
            console.error('Индекс фрилансеров не найден');
            process.exit(1);
        }

        // Ищем фрилансера в индексе
        const freelancerIndex = index.findIndex(freelancer => freelancer.id === parseInt(freelancerId));
        
        if (freelancerIndex === -1) {
            throw new Error('Фрилансер не найден');
        }

        const freelancer = index[freelancerIndex];
        const filepath = path.join(DATA_DIR, freelancer.filename);

        // Удаляем файл с данными
        try {
            await fs.unlink(filepath);
        } catch (error) {
            if (error.code !== 'ENOENT') throw error;
        }

        // Удаляем из индекса
        index.splice(freelancerIndex, 1);
        await fs.writeFile(INDEX_FILE, JSON.stringify(index, null, 2));

        console.log(`Фрилансер "${freelancer.name}" (ID: ${freelancerId}) успешно удален`);

    } catch (error) {
        console.error('Ошибка при удалении фрилансера:', error.message);
        process.exit(1);
    }
}

// Обработка аргументов командной строки
if (require.main === module) {
    const args = process.argv.slice(2);
    
    if (args.length < 1) {
        console.log('Использование: node delete.js freelancer_id');
        process.exit(1);
    }

    const freelancerId = args[0];
    deleteFreelancer(freelancerId);
}

module.exports = { deleteFreelancer };