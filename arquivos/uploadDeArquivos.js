//file systen - sistemas de arquivos 
const fs = require('fs');

//fazendo o upload atraves do buffer de memoria
//lendo o arquivo
// fs.readFile('./assets/astronauta.jpg', (erro, buffer) => {
//     console.log('imagem foi bufferizada')
//     console.log(buffer)

//     //escrevendo o arquivo
//     fs.writeFile('./assets/astronauta2.jpg', buffer, (erro) => {
//         console.log('imagem foi escrita')
//     })

// })

//fazendo upload de arquivos por stram
//pipe transforma em arquivo de escrita
//on chama um evento 
fs.createReadStream('./assets/astronauta.jpg')
    .pipe(fs.createWriteStream('./assets/astronauta-stram.jpg'))
    .on('finish', () => console.log('Imagem escrita com sucesso'))