import express, { request, response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');
    
    response.json([
        'Luiz',
        'Rosi',
        'Cecilia',
        '?'
    ]);
});

app.post('/users', (request, response) => {
    const user = {
        name: 'Titi',
        email: 'titi@titi.com'
    };

    return response.json(user);
});

app.listen(3333);
