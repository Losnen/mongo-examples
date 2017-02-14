const User = require('./lib/schema');

//Creamos un usuario
let ramos = User({
    nombre: "Samuel",
    apellidos: "Ramos",
    telefono: 1111
});

//Lo guardamos
ramos.save((err) => {
    if (err) console.log(err);

    console.log('User created!');
});

//Obtenemos todos los usuarios
User.find({}, (err, users) => {
  if (err) throw err;

  console.log(users);
});
