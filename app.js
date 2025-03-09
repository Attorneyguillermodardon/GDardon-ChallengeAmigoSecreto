

let nombres = []


function agregarAmigo() {
        let input = document.getElementById("amigo");   
        let nombre = input.value.trim();

if (nombre === "") {
    alert ("Por favor, ingresa un nombre válido, carnal");
    return;
}



nombres.push(nombre);
actualizarLista();
input.value = "";
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nombres.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);


    });
}


function sortearAmigo(){
     if (nombres.length === 0) {
         alert("No hay nombres en la lista para sortear, brother.");
         return
     }

     let indiceAleatorio = Math.floor(Math.random() * nombres.length);
     let amigoSecreto = nombres[indiceAleatorio];

     document.getElementById("resultado").innerHTML = amigoSecreto;

}