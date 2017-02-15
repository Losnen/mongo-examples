# Mongo and Mongoose Examples

## Ejemplos

* Save
* Update
* Delete

## Querying

Ejemplo de consulta en el que se muestran los usuarios que se llaman Samuel y que fueron creados el mes pasado.

```JavaScript
let monthAgo = new Date();
monthAgo.setMonth(monthAgo.getMonth() - 1);

User.find({ nombre: 'Samuel' }).where('created_at').gt(monthAgo).exec((err, users) => {
    if (err)  console.log(err);

    console.log(users);
});
```
