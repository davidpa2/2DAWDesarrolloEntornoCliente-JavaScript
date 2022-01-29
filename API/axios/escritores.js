/* 
Para usar jsonPlaceholder como una API REST falsa para simular el funcionamiento de una BD,
lo primero que debemos de tener es nodejs, por tanto, habrá que seguir los pasos:
1) Visitar nodejs.org y descargar la versión que deseemmos o necesitemos
2) Instalar nodejs que hemos descargado
3) Podemos comprobar si se ha instalado bien desde el terminal de windows o del de Visual Studio Code con node -v 
4) Entrar en la página jsonPlaceholder que es la API que vamos a usar y enlazar con json-serve
5) Acceder y abajo viene como instalar json-serve para poder simular la API REST
6) Comando de instalación con el gestor de paquetes npm de nodejs: npm install -g json-server
7) Descargar la versión core de insomnia para manejar la API Falsa ( https://insomnia.rest/download/)
8) Iniciar insomnia
9) Ejecutar desde un terminal de visual estudio code: json-server -w -p puerto json, donde puerto
    por defecto es el 3333, pero podemos elegir otro para evitar conflictos, ej. 5555,
    y donde json es el objeto json a usar
    
    json-server -w -p 5555 escritores.json
    
10) Realizar las peticiones y pruebas necesarias
*/
const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();

const getAll = async () => {
    try {
        let respuesta = await axios.get("http://localhost:5555/escritores"),
            json = await respuesta.data;

        console.log(json);

        json.forEach((el) => {
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".pais").textContent = el.pais;
            $template.querySelector(".nacimiento").textContent = el.nacimiento;
            $template.querySelector(".muerte").textContent = el.muerte;
            $template.querySelector(".edit").dataset.id = el.id;
            $template.querySelector(".edit").dataset.nombre = el.nombre;
            $template.querySelector(".edit").dataset.pais = el.pais;
            $template.querySelector(".edit").dataset.nacimiento = el.nacimiento;
            $template.querySelector(".edit").dataset.muerte = el.muerte;
            $template.querySelector(".delete").dataset.id = el.id;

            /* creación de la variable clone para importar el nodo con el segundo parámetro a true
            para que cree lo importe con el contenido porque si fuera false lo crearía vacío,
            y añadimos el nodo como hijo al fragmento, para luego añadir el fragmento al documento*/
            let $clone = d.importNode($template, true);
            $fragment.appendChild($clone);
        });

        $table.querySelector("tbody").appendChild($fragment);
    } catch (err) {
        let message = err.statusText || "Ocurrió un error";
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

/*asignación del listener para el evento DOMContentLoaded y 
ejecutamos getAll(que en este caso será una función asíncrona) */
d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async (e) => {
    console.log(e.target.id.value)
    //preguntamos si es el formulario quien origina el evento
    if (e.target === $form) {
        //detener la ejecución del botón, porque el procesamiento se hará por ajax
        e.preventDefault();

        if (!e.target.id) {
            //Create - POST
            try {                
                //creación de objeto options con las opciones de la petición fetch
                let options = {
                    method: "POST",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        pais: e.target.pais.value,
                        nacimiento: e.target.nacimiento.value,
                        muerte: e.target.muerte.value,
                    })
                };
                let respuesta = await axios("http://localhost:5555/escritores", options);
                let json = await respuesta.data;

                //Cada vez que se realize una acción se recargará la página
                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            //Update - PUT
            try {
                alert("hola"+ e.target.dataset.id.value)
                let options = {
                    method: "PUT",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    data: JSON.stringify({
                        nombre: e.target.nombre.value,
                        pais: e.target.pais.value,
                        nacimiento: e.target.nacimiento.value,
                        muerte: e.target.muerte.value,
                    }),
                };
                let respuesta = await axios(`http://localhost:5555/escritores/${e.target.id.value}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        }
        //resetear los campos del formulario una vez editado un registro
        $form.nombre.value = null;
        $form.pais.value = null;
        $form.nacimiento.value = null;
        $form.muerte.value = null;
        $form.id.value = null;
    }
});

d.addEventListener("click", async (e) => {
    if (e.target.matches(".edit")) {
        $titulo.textContent = "Editando a " + e.target.dataset.nombre;
        $form.nombre.value = e.target.dataset.nombre;
        $form.pais.value = e.target.dataset.pais;
        $form.nacimiento.value = e.target.dataset.nacimiento;
        $form.muerte.value = e.target.dataset.muerte;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(
            `¿Estás seguro de eliminar el id ${e.target.dataset.id}?`
        );

        if (isDelete) {
            //Delete - DELETE
            try {
                let options = {
                    method: "DELETE",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                };
                let respuesta = await axios(`http://localhost:5555/escritores/${e.target.dataset.id}`, options);
                let json = await respuesta.data;

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});