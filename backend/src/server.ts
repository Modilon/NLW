import express from 'express';

const app =  express();

app.get('/users', (request, response)=>{
    return response.json({message : "Hello World"});
})

//serve para mudar a porta de acesso para a localhost:3333
app.listen(3333);

