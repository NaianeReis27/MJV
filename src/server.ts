import app from "./app";
import AppDataSource from "./data-source";

(async () => {

    await AppDataSource.initialize()
    .catch((err) => {
        console.error("Erro de inicialização", err)
    })
    
    app.listen(3000, () => {
        console.log("Servidor executando")
    })    
})()