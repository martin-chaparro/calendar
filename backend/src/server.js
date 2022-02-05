const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { dbConnection } = require('./database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 4002;

    this.environment = process.env.NODE_ENV;

    this.paths = {
      api: "/api",
      frontend: "/",
    };

    //conecto la db
    this.dbConection();

    //middlewares
    this.middlewares();

    //Rutas de Aplicacion
    this.routes();
  }

  // express instance
  getExpressInstance() {
    return this.app;
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    // Lectura y parseo del body
    this.app.use(express.json());

    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use(this.paths.api, require("./routes/api"));
    this.app.use(this.paths.frontend, require('./routes/frontend'));
  }

  dbConection() {
    dbConnection();
  }

  start() {
    this.app.listen(this.port, async () => {
      console.log(`||--> Http server running in port:${this.port} <--||`);
    });
  }
}

module.exports = Server;
