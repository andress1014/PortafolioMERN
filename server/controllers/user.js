const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
  const user = new User();

  const { name, lastname, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = "false";
  if (!password || !repeatPassword) {
    res.status(400).send({ message: "password required " });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "password not are the same" });
    } else {
      bcrypt.hash(password, null, null, function (err, hash) {
        if (err) {
          res.status(500).send({ message: "Error to encrypt password" });
        } else {
          user.password = hash;
          user.save((err, userStorage) => {
            if (err) {
              res.status(500).send({ meesage: "Error of server" });
            } else {
              if (!userStorage) {
                res.status(404).send({ message: "Error creating user" });
              } else {
                res.status(200).send({ user: userStorage });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = {
  signUp,
};
