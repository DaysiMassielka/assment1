let nombre;
let apellido;
let cafe;

    nombre = prompt ("Ingresa tu nombre");
    apellido = prompt ("Ingresa  tu apellido");
    cafe = prompt ("te apetece un cafe?");

   if (cafe === "si") {
   console.log("!Bienvenid@ toma tu cafe calentito "  + nombre + ' ' + apellido);

} else if (cafe === "no") {
    
     console.log("Bienvenido hoy no hay cafe "  + nombre + ' ' + apellido);
}