const dataBase = require('./db')
const createProffy = require('./createProffy')


dataBase.then(async (db) => {
    // Inserir dados.

    proffyValue = {
        name: 'Edssaac',
        avatar: 'https://avatars2.githubusercontent.com/u/65103163?s=460&u=524b27239b2c99eaa44e175c0791bd220a871bd7&v=4',
        whatsapp: '1890907887',
        bio: 'Uma bela biografia reside aqui!'
    }

    classValue = {
        subject: 'Programação', 
        cost: '28', 
        // proffy id <- db
    }
    
    classScheduleValues = [
        // class id <- db
        {
        weekday: 0, 
        time_from: 201, 
        time_to: 1891 
        },
        {
            weekday: 4, 
            time_from: 121, 
            time_to: 3891 
        }   
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)
})