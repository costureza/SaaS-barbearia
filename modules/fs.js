const { error } = require('console');
const fs = require ('fs');
const path = require ('path');

//criar uma pasta
fs.mkdir(path.join(__dirname, '/test'), (error)=>{
    if (error){
        return console.log('Erro:', error)
    }
    console.log('Pasta criada com sucesso!');
})

//criar arquivo

fs.writeFile(path.join(__dirname, '/test', 'test.html'), 'Hello genza: para inciar o nodemom: execute esse comando - npm run start-dev', (error)=>{
    if(error){
        return console.log('Erro:', error)
    }
    console.log('Arquivo criado com sucesso!');
});