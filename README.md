# Challenge amigo secreto 

_En este proyecto utilizamos las funcionalidades de JavaScript que se mencionarán más adelante, las cuales se incluyeron para adaptarlas a un archivo HTML con su respectivo CSS brindados por el equipo de Alura con el fin de que lograramos darle dinamismo y funcionalidad al juego del amigo secreto._

_El juego consiste en colocar el nombre de tus amigos como lo indica el cuadro y despues dar click en el botón de sortear amigo para descubrir cual de tus amigos fué elegido como amigo secreto_

## 🚀 Cómo Visualizar y/o modificar el juego

### 1️⃣  Descargar los archivos y abrir con Live Server

_- Descarga los archivos del repositorio y guardalos en una carpeta_

_- Abre la carpeta en Visual Studio Code y ejecuta la extensión de Live Server para visualizar el juego en tu navegador_

### 2️⃣  Jugar directamente sin modificar el código  

_- Juega en este enlace de GitHub Pages: https://attorneyguillermodardon.github.io/GDardon-ChallengeAmigoSecreto/  
Link pages_

### Algunas funcionalidades interesantes que se utilizaron a parte de las que vimos en el curso de Alura ⌨️

_Con .value.trim() obtenemos el valor en el input habilitado para que el nombre del amigo se guarde en el array sin espacios extras, y como se vió en el curso, usamos .push para añadir los nombres al array._

_Utilizamos .innerHTML para que dentro del codigo JavaScript podamos cambiar el contenido del código HTML y mostrar la modificación en el HTML del juego._

_En la primera aplicación del .innerHTML en nuestro código, lo usamos para limpiar la lista de los nombres ingresados antes de volver a llenarla y evitar que estos se dupliquen._

_En su segunda aplicación en el código, .innerHTML coloca el nombre del amigo secreto sorteado dentro del elemento con el ID "resultado"._

_A diferencia de lo visto en el curso, despues de investigar, en vez de usar for, opté por utilizar .forEach para hacer el código más simple y más breve. Por este motivo, esta función me gusta más._

_El .forEach permite que se recorran los nombres en el array conforme se agregan, crea un Li para cada nombre dentro del elemento ul en el HTML y actualiza la interzaz del usuario para que se muestren los amigos en la página del juego, los cuales terminan de agregarse con la función .appenChild(li)._

_Para no borrar el contenido anterior en la lista, usamos appendChild (), por lo que es una buena práctica incluir esta función al crear la lista en JS, mientras que utilizamos inner.HTML en donde se reemplaza el contenido, como se hace al mostrar el resultado._

_Por último, utilizamos funciones que vimos en el curso para sortear al amigo secreto como Math.floor, Math.random y * nombres.length, asi como getElementById para seleccionar los el ementos en el HTML y los condicionales if para mostrar las alert en el juego._
