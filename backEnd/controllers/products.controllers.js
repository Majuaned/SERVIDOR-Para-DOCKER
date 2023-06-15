const productModel = require('../models/products.models');

const ctrlProducts = {};

//// *************    METODO GET    *************************
ctrlProducts.getProductos = async (req, res)=>{
    try {
        const productos = await productModel.getProductos();
        res.json(productos);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    //res.send(`<h1>Hola juancito</h1>`)
}
//***************     METODO POST  ******************** */
ctrlProducts.postProducto = async (req, res)=>{
    const { nombre_producto, precio } = req.body;

    if (!nombre_producto || !precio) {
      res.status(400).json({ error: 'Se requiere nombre y precio del producto' });
    } else {
      try {
        const resultado = await productModel.insertarProducto(nombre_producto, precio);
        res.json(resultado);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
      }
    }

    // res.send({
    //     message: "Petición POST"
    // })
}

////*************  METODO PUT   ************************* */
// ctrlProducts.putProducts = (req, res)=>{
//     res.send({
//         message: "Petición PUT"
//     })
// }

// ctrlProducts.deleteProducts = (req, res)=>{
//     res.send({
//         message: "Petición DELETE ...probando con los controlers de encarnación"
//     })
// }


module.exports = ctrlProducts;//exporta el ctrlProducts