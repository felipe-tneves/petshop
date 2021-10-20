const fs = require('fs');
const path = require('path');

module.exports = (caminho, nomeDoArquivo, callbackImagemCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido){
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
    
        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))
    }else{
        const erro = "Tipo é inválido"
        console.log('Erro! Tipo inválido')
        callbackImagemCriada(erro)
    }

}



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