
const pool = require('../db/conection');

async function getProductos() {
  let dbConnection;
  try {
    //consulta a la base de datos a la tabla lista de precios...
    dbConnection = await pool.getConnection();

    const rows = await dbConnection.query('SELECT * FROM Lista_de_Precios');
    return rows;
  } catch (error) {
    throw error;
  } finally {
    //******    Se finaliza la conexión porq las consultas son transaccionales ******* */
    if (dbConnection) dbConnection.end();
  }
}

//********************************************************** */
async function insertarProducto(nombre_producto, precio) {
  let dbConnection;
  try {
    //******* Conexión  ******/
    dbConnection = await pool.getConnection();
    
    await dbConnection.query(`
      CREATE TABLE IF NOT EXISTS Lista_de_Precios (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nombre_producto VARCHAR(255) NOT NULL,
        precio DECIMAL(10, 2) NOT NULL
      )
    `);
    //***  Inserción de un registro a la tabla de la base de datos .... */
    await dbConnection.query('INSERT INTO Lista_de_Precios (nombre_producto, precio) VALUES (?,?)', [nombre_producto, precio]);
    return { mensaje: 'Producto insertado correctamente' };
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) dbConnection.end();
  }
}

async function eliminarProducto(id) {
  let dbConnection;
  try {
    dbConnection = await pool.getConnection();
    await dbConnection.query('DELETE FROM productos WHERE id = ?', [id]);
    return { mensaje: 'Producto eliminado correctamente' };
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) dbConnection.end();
  }
}

async function actualizarProducto(id, nombre, precio) {
  let dbConnection;
  try {
    dbConnection = await pool.getConnection();
    await dbConnection.query('UPDATE productos SET nombre = ?, precio = ? WHERE id = ?', [nombre, precio, id]);
    return { mensaje: 'Producto actualizado correctamente' };
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) dbConnection.end();
  }
}

module.exports = {
  getProductos,
  insertarProducto,
  eliminarProducto,
  actualizarProducto,
};



