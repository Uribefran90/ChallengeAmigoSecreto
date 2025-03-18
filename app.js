let amigos = [];

//Capturar el valor del campo de entrada
function agregarAmigo() {
    //Validar la entrada
    if (document.getElementById("amigo").value == "") {
        alert("Por favor, inserte un nombre.");
    } else {
        //Actualizar el array de amigos
        amigos.push(document.getElementById("amigo").value);
        //Limpiar el campo de entrada
        document.getElementById("amigo").value = "";
    console.log(amigos);}
}


/* Visualizar la lista:
Los nombres ingresados aparecerán en una lista
debajo del campo de entrada. */

/* Sorteo aleatorio:
Al hacer clic en el botón "Sortear Amigo", 
se seleccionará aleatoriamente un nombre de la lista 
y se mostrará en la página. */
