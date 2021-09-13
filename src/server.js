// Dados
const proffys = [
    {
        name: 'Edssaac', 
        avatar: 'https://avatars2.githubusercontent.com/u/65103163?s=460&u=524b27239b2c99eaa44e175c0791bd220a871bd7&v=4', 
        whatsapp: '15997564578', 
        bio: 'Aqui reside uma bela descrição.', 
        subject: 'Programação', 
        cost: '28,79', 
        weekday: [0], 
        time_from: [201], 
        time_to: [1891] 
    },
    {
        name: 'Edssaac', 
        avatar: 'https://avatars2.githubusercontent.com/u/65103163?s=460&u=524b27239b2c99eaa44e175c0791bd220a871bd7&v=4', 
        whatsapp: '15997564578', 
        bio: 'Podemos ver neste local mais uma maravilhosa descrição.', 
        subject: 'Programação', 
        cost: '55,04', 
        weekday: [0], 
        time_from: [201], 
        time_to: [1891] 
    }
]

const subjects = [
    "Administração",
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Engenharias",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Programação",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
]


// Funcionalidades da aplicação
function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render('./views/home.html')
}
function pageStudy(req, res) {
    const filters = req.query
    return res.render('./views/study.html', { proffys, filters, subjects, weekdays })
}
function pageGiveClasses(req, res) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) { // se hoverem dados (data)
        // Encontrando a matéria
        data.subject = getSubject(data.subject)

        // Adicionar data a lista de proffys
        proffys.push(data)

        // E mudar de página
        return res.redirect('./views/study')

    } else { // Se não houverem dados
        return res.render('./views/give-classes.html', { subjects, weekdays })
    }

}


// Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')


// configurar nunjucks (template engine)
nunjucks .configure('src/views', {
    express: server,
    noCache: true,
})


// Inicio e Configuração do Servidor
server // variável
.use(express.static('public')) // usando a pasta raíz
.get('/', pageLanding) // criando os endereços (rotas)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.listen(5500) // selecionando a porta
