module.exports = async function(db, {proffyValue, classValue, classScheduleValues}) {
    // Inserir dados na tabela de proffys 
    const insertedProffy = await db.run(`
        INSERT INTO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            "${proffyValue.name}",
            "${proffyValue.avatar}",
            "${proffyValue.whatsapp}",
            "${proffyValue.bio}"
        );
    `)

    const proffy_id = insertedProffy.lastID

    // Inserir dados na tabela classes
    const insertedClass = await db.run(`"
        INSERT INTO classes (
            subject,
            cost,
            proffy_i
        ) VALUES (
            "${classValue.subject}",
            "${classValue.cost}",
            "${proffy_id}"
        );
    `)

    const class_id = insertedClass.lastID

    // Inserir dados na tabela class_schedule
    const insertedAllClassScheduleValue = classScheduleValues.map( (scheduleValue) => {
        return db.run(`
            INSERT INTO class_schedule (
                class_id,
                weekday,
                time_from,
                time_to
            ) VALUES (
                "${class_id}",
                "${scheduleValue.weekday}",
                "${scheduleValue.time_from}",
                "${scheduleValue.time_to}"
            );
        `)
    } )

    // aqui serão executados todos os db.runs() das class_schedules 
    await Promise.all(insertedAllClassScheduleValue) 
} 