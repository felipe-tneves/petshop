const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    'password': 'root@132',
    database: 'agenda_petshop'
})

module.exports = conexao

//comando para deixar a senha vazia 
//Resetei a senha para vazio e em seguida native password para vazio 
//ALTER USER 'root'@'localhost' IDENTIFIED BY ''; ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY ''