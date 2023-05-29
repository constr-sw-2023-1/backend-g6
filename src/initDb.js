const sequelize = require('./config/database');
const Class = require('./models/Class');
const Shift = require('./models/Shift');
const { v4: uuidv4 } = require('uuid');
chance = require('chance').Chance();

async function createFakeData() {
    // Cria os três dados de turno
    const shiftData = [
        { id: uuidv4(), period: 'Manhã' },
        { id: uuidv4(), period: 'Tarde' },
        { id: uuidv4(), period: 'Noite' }
    ];

    const shifts = await Shift.bulkCreate(shiftData);

    // Cria as turmas associando um turno aleatório
    for (let i = 0; i < 10; i++) {
        const randomShift = shifts[Math.floor(Math.random() * shifts.length)];

        await Class.create({
            numClass: Math.floor(Math.random() * 500) + 1,
            year: new Date().getFullYear(),
            semester: Math.floor(Math.random() * 2) + 1,
            schedule: [{ weekDay: chance.integer({ min: 1, max: 7 }), schedule: chance.string() }],
            classShiftId: randomShift.id
        });
    }
}

// Sincroniza os modelos com o banco de dados e cria dados falsos
sequelize.sync({ force: true })
    .then(() => createFakeData())
    .catch(error => console.log(error));
