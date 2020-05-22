const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./ws.db')

db.serialize(function(){
    //criar a tabela
    
    /* db.run(`
        ALTER TABLE ideas
        ADD description TEXT;
    `) */
    
     db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
        );
        `) 
    //inserir
    /* const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES(?, ?, ?, ?, ?);
    `
    const values = [
        "http://imagem",
        "Curso de Programação",
        "Estudo",
        "Loren bla bla bla",
        "http://rocketseat.com.br"
    ]
    db.run(query, values, function(err){
        if(err) return console.log(err)
    }) */

    //consultar
     db.all(`SELECT * FROM ideas`, function(err, rows){
        if(err) return console.log(err)
        console.log(rows)
    })
   
    //deletar

    /* db.run(`DELETE FROM ideas WHERE id = ?`, [], function(err){
        if(err) return console.log(err)
        console.log("DELETEI ", this)
    }) */
})

module.exports = db