const express = require("express");

const mysql = require('mysql');

const app = express();  //aca en esta variable esta todo el servidor
app.use(express.json());
//app. //aca dentro de app están todos los métodos disponibles que se requirieron

//ahora tenemos q escuchar al servidor con listen
// cuando se hace alguna actualización en el código, se debe parar y reiniciar el codigo, con ctrl c y luego iniciar de nuievo (node index.js)...este proceso se facilita instalando NODEMON.
// npx nodemon index.js   esto es como el run dev, q usa el script, con esto escucha cualquier cambio q se hace el el codigo de index.js y reinicia el servidordd...si le hago cualquier cambio a mi cógigo, este escucha y reinicia

//como hay varias solicitudes con user, se usa eñl tunder o el postman
app.use(require("./routes/home.routes"))

app.listen(3000,()=>{
    console.log("Servidor corriendo en el puerto 3000(si sale esto es pq andaaaa!!!)")
});