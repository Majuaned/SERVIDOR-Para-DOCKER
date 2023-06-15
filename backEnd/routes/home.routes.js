
//ningun app andara, para eso debo importar de uevo de expres

const router = require("express").Router();

//desestrucrtura el objeto...

const {getProductos, postProducto, putProducts, deleteProducts} = require("../controllers/products.controllers")

// para simplificar los req y res...q estan en los controladores se uusa su equivalente q esta en Productscontrolers

router.get("/productos", getProductos)        

// router.get("/productos", getProductos)

router.post("/productos", postProducto)
    
    //console.log(req.body)
    //va a aparecer en consola undefined, pq expres no reconoce json. por lo cual se usa el expres llamandolo (lin 4).
    //res.send(`<h3>Petición post para cargar un nuevo usuario</h3>`)
// })

router.put("/update", putProducts);

router.delete("/user", deleteProducts);

module.exports = router;
// estos cambios no significan nada, para eso hay q exportarlos