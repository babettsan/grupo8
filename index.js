const express = require('express');

const app = express();

const stand = [
    {
        id:1,
        name: 'Ivan',
        edad: 19,
        ciudad: 'San Juan',
        grupo: 8
    },
    {
        id:2,
        name: 'Santiago',
        edad: 24,
        ciudad: 'Tucuman',
        grupo: 8
    },
    {
        id:3,
        name: 'Nacho',
        edad: 25,
        ciudad: 'Entre Rios',
        grupo: 8
    },
    {
        id:4,
        name: 'Nico',
        edad: 19,
        ciudad: 'Uruguay',
        grupo: 8
    },
    {
        id:5,
        name: 'Meli',
        edad: 19,
        ciudad: 'Bs As',
        grupo: 8
    },
    {
        id:6,
        name: 'Julio',
        edad: 19,
        ciudad: 'Lima',
        grupo: 8
    },
    {
        id:7,
        name: 'Christopher',
        edad: 19,
        ciudad: 'San Juan',
        grupo: 8
    },{
        id:8,
        name: 'Mauro',
        edad: 19,
        ciudad: 'San Juan',
        grupo: 8
    },
    {
        id:9,
        name: 'Jorge',
        edad: 19,
        ciudad: 'San Juan',
        grupo: 8
    },
    {
        id:10,
        name: 'Barbara',
        edad: 20,
        ciudad: 'San Juan',
        grupo: 8
    }
]

app.get('/', (req,res) => {
    res.send('HELLO WORLD ')
})

app.get('/api', (request,response) => {
    console.log('query',request.query)
    const {name,pepito} = request.query

    if(name){
        let nombre = stand.find( integrante => integrante.name === name)
        return response.json(nombre);
    }
    if(pepito){
        //IMPORTANTE PARA EL CHECK: SABER METODOS DE ARRAYS!!!!!!!!!!!!!!!!!!!
        let filtrados = stand.filter( integrante => integrante.ciudad === pepito)
        return response.json(filtrados);
    }

    return response.json(stand);
})

app.get('/api/:id', (req,res) => {
    console.log('params', req.params)
    const { id } = req.params

    // IMPORTANTE PARA EL CHECK!!!: SABER QUE TIPO DE DATOS VOY A COMPARAR 

    let integranteId = stand.find( int => toString(int.id) === id)
    return res.json(integranteId);

})

app.listen(3030, () => {
    console.log('app listen in port 3030')
})