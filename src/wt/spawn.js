const { spawn } = require('child_process');
const path = require('path');

const searchTerm = process.argv[2];

if (!searchTerm) {
    console.log('Использование: node spawn.js <слово_для_поиска>');
    process.exit(1);
}

console.log(`Запускаю поиск: "${searchTerm}"`);

// Запускаем отдельный процесс
const child = spawn('node', [
    '-e',
    `
    const fs = require('fs');
    const path = require('path');
    
    // Относительный путь от корня проекта
    const indexPath = path.join(process.cwd(), 'data/freelancers_index.json');
    const indexData = fs.readFileSync(indexPath, 'utf8');
    const data = JSON.parse(indexData);
    const searchTerm = '${searchTerm}';
    
    console.log('Ищу среди ' + data.length + ' фрилансеров...');
    
    // Тяжелая операция с задержкой
    setTimeout(() => {
        const results = data.filter(freelancer => 
            freelancer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            freelancer.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
            freelancer.experience.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        console.log('Найдено: ' + results.length);
        results.forEach(f => console.log('- ' + f.name + ' (' + f.specialization + ')'));
    }, 1000);
    `
]);

child.stdout.on('data', (data) => {
    process.stdout.write(data.toString());
});