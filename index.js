require("dotenv").config();
let express = require("express");
let massive = require("massive");
let products_controller = require("./products_controller");
let { SERVER_PORT, CONNECTION_STRING } = process.env;

let app = express();

app.use(express.json());

massive(CONNECTION_STRING)
  .then(databaseConnection => {
    app.set("db", databaseConnection);
    console.log("What is our status??");
    app.listen(SERVER_PORT, () => {
      console.log(`${SERVER_PORT} Shokupanmen are toasty!`);
    });
  })
  .catch(err => console.log(err));

app.post("/api/products", products_controller.create);
app.get("/api/products", products_controller.getAll);
app.get("/api/products/:id", products_controller.getOne);
app.put("/api/products/:id", products_controller.update);
app.delete("/api/products/:id", products_controller.delete);
