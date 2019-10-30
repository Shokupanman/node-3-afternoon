module.exports = {
  create: (req, res) => {
    const db = req.app.get("db");

    db.create_product([name, description, price, image_url])
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(`uh oh, we gotta ${err}`));
  },

  getOne: (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;

    db.read_product()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(`uh oh, we gotta ${err}`));
  },

  getAll: (req, res) => {
    const db = req.app.get("db");

    db.read_products()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(`uh oh, we gotta ${err}`));
  },

  update: (req, res) => {
    const db = req.app.get("db");

    db.update_product()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(`uh oh, we gotta ${err}`));
  },

  delete: (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;

    db.delete_product()
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => console.log(`uh oh, we gotta ${err}`));
  }
};
