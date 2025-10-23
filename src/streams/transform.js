/* type data\test_freelancer.json | node src\streams\transform.js */

const { Transform } = require('stream');

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    try {
      const data = chunk.toString().trim();
      console.error('Получены данные:', data); // Для отладки
      
      if (!data) return callback();
      
      const freelancer = JSON.parse(data);
      console.error('Распарсенный объект:', freelancer); // Для отладки
      
      const transformed = {
        freelancer_id: freelancer.id || 'unknown',
        personal_info: {
          full_name: freelancer.name || 'Не указано',
          specialization: freelancer.specialization || 'Не указано',
          experience_level: freelancer.experience || 'Не указано'
        },
        work_details: {
          hourly_rate: `${freelancer.hourlyRate || 0} USD/час`,
          completed_projects: freelancer.completedProjects || 0,
          rating: freelancer.rating || 0
        },
        skills_list: freelancer.skills || [],
        metadata: {
          created: freelancer.createdAt || new Date().toISOString(),
          processed: new Date().toISOString()
        }
      };
      
      this.push(JSON.stringify(transformed, null, 2) + '\n');
      callback();
    } catch (err) {
      console.error('Ошибка преобразования:', err.message);
      callback();
    }
  }
});

process.stdin
  .pipe(transformStream)
  .pipe(process.stdout)
  .on('error', (err) => {
    console.error(`Ошибка трансформации: ${err.message}`);
  });