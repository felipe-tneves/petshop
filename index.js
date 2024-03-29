const custonExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/conexao')
const Tabelas = require('./infraestrutura/database/tabelas')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log("Conectado com o banco de dados")

        Tabelas.init(conexao)
        const app = custonExpress()

        app.listen(3000, () => console.log('Servidor rodando'))
    }
})