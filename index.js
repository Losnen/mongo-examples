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

    console.log('Usuario creado');
});

//Obtenemos todos los usuarios
User.find({}, (err, users) => {
    if (err) console.log(err);

    console.log(users);
});

// Buscar el usuario Samuel
User.find({ nombre: 'Samuel' }, (err, user) => {
    if (err) console.log(err);

    console.log(user);
});

// Buscar el usuario con ID 1
User.findById(1, (err, user) => {
    if (err) console.log(err);

    console.log(user);
});

// Buscar el usuario Samuel
// Actualizar el nombre a Samu
User.findOneAndUpdate({ username: 'Samuel' }, { username: 'Samu' }, (err, user) => {
    if (err) console.log(err);

    console.log(user);
});

// Buscar el usuario con ID 1
// Actualizar el nombre a Samu
User.findByIdAndUpdate(1, { username: 'Samu' }, (err, user) => {
    if (err) console.log(err);

    console.log(user);
});

// Buscar el usuario Samuel y elimnarlo
User.findOneAndRemove({ username: 'Samuel' }, (err) => {
    if (err) console.log(err);

    console.log('Usuario eliminado');
});

// Buscar el usuario con id 1 y borrarlo
User.findByIdAndRemove(1, (err) => {
    if (err) console.log(err);

    console.log('Usuario eliminado');
});
