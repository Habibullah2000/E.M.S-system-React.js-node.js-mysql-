
import { createConnection } from 'mysql2/promise';

let connectionPool ;

export async function createConnectionPool(dbConfig) {
    try {
      connectionPool = await createConnection(dbConfig);

      await connectionPool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )
    `);
    await connectionPool.query(`
    CREATE TABLE IF NOT EXISTS employee (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        address VARCHAR(255),
        salary DECIMAL(10, 2),
        image VARCHAR(255)
      )
  `);
      console.log("✨ DB connected successfully 💫");

      return connectionPool;
    } catch (error) {
      console.error('Error establishing database connection:', error);
      throw error;
    }
  }
  

  export function getConnectionPool() {
    return connectionPool;
  }
  