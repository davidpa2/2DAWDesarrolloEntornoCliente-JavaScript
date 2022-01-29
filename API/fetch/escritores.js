const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $titulo = d.querySelector(".crud-titulo"),
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment();


/*definición de función asíncrona getAll para utilizar los await
y tendremos try catch para el manejo de errores */
const getAll = async () => {
    try {
        /* asignamos a la variable respuesta la ejecución del método fetch con la URL
        como primer parámetro y como no pasamos el segundo parámetro, por defecto es GET,
        y una vez obtenida la respuesta a la petición, vamos a asignar a la variable json
        la respuesta con los registros tras ejecutar el método  json de las promesas de 
        la API de fetch */
        let respuesta = await fetch("http://localhost:5555/escritores");
        let json = await respuesta.json();
        // si el parámetro ok de la respuesta es false, se dispara el error para el catch
        console.log(respuesta);
        if (!respuesta.ok) throw {
            status: respuesta.status,
            statusText: respuesta.statusText
        };
        // para comprobar podemos mostrar la respuesta de la variable json en consola.
        console.log(json);
        /* mostramos con la variable template cada una de las filas de la tabla
        con el contenido de cada registro que devuelve la variable json, para lo cual
        nos basaremos en las clases creadas en el documento HTML */
        json.forEach((el) => {
            $template.querySelector(".nombre").textContent = el.nombre;
            $template.querySelector(".pais").textContent = el.pais;
            $template.querySelector(".nacimiento").textContent = el.nacimiento;
            $template.querySelector(".muerte").textContent = el.muerte;
            /* creamos un data-atribute (dataset) para asignarle los datos correspondientes
               y así poder editar después el contenido de los registros en el formulario, de
               esta forma el mismo formulario me sirve para editar o dar de alta */
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
        // ahora ya agregamos en el body de la tabla al fragmento como nodo hijo
        $table.querySelector("tbody").appendChild($fragment);
        //capturamos el error 
    } catch (err) {
        // asignamos el error a la variable mensaje o bien un error personalizado si viene vacío statusText
        let message = err.statusText || "Ocurrió un error";
        //insertamos el error justo detrás de la tabla con el parámetro afterend
        $table.insertAdjacentHTML(
            "afterend",
            `<p><b>Error ${err.status}: ${message}</b></p>`
        );
    }
};

/*asignación del listener para el evento DOMContentLoaded y 
ejecutamos getAll(que en este caso será una función asíncrona) */
d.addEventListener("DOMContentLoaded", getAll);

/*evento para detectar envío de los datos de formulario, mediante el click en 
  los botones de cada uno de los registros*/
d.addEventListener("submit", async (e) => {
    //preguntamos si es el formulario quien origina el evento
    if (e.target === $form) {
        //detener la ejecución del botón, porque el procesamiento se hará por ajax
        e.preventDefault();
        /*si el value del elemento oculto del formulario es vacío ejecutaremos
        la acción de crear, mientras que si trae un id haremos la función 
        de editar con ese id  */
        if (!e.target.id.value) {
            //Create - POST
            //implemntamos el try-catch de la función asíncrona para manejar éxito-error
            try {
                //creación de objeto options con las opciones de la petición fetch
                let options = {
                    // método POST 
                    method: "POST",
                    // cabeceras donde cada opción de las cabeceras es como un objeto
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    // cuerpo con el objeto json convertido a cadena gracias al método stringify
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        pais: e.target.pais.value,
                        nacimiento: e.target.nacimiento.value,
                        muerte: e.target.muerte.value,
                    }),
                },
                    /* variable respuesta para obtener la peticion json con la variable
                    options como parámetro, es decir, las opciones para fetch se le pasan
                    con el objeto options */
                    respuesta = await fetch("http://localhost:5555/escritores", options),
                    json = await respuesta.json();
                // en caso de que el parámetro ok venga a false disparamos error
                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                // mensaje de error
                let message = err.statusText || "Ocurrió un error";
                // insertar error debajo del formulario
                $form.insertAdjacentHTML(
                    "afterend",
                    `<p><b>Error ${err.status}: ${message}</b></p>`
                );
            }
        } else {
            //Update - PUT
            try {
                let options = {
                    method: "PUT",
                    headers: { "Content-type": "application/json; charset=utf-8" },
                    body: JSON.stringify({
                        nombre: e.target.nombre.value,
                        pais: e.target.pais.value,
                        nacimiento: e.target.nacimiento.value,
                        muerte: e.target.muerte.value,
                    }),
                },
                    // obtenemos la respuesta y esperamos a que se obtenga con away
                    respuesta = await fetch(
                        `http://localhost:5555/escritores/${e.target.id.value}`,
                        options
                    ),
                    json = await respuesta.json();

                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

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
        $form.id.value = e.target.dataset.id;
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
                },
                    respuesta = await fetch(`http://localhost:5555/escritores/${e.target.dataset.id}`, options);
                json = await respuesta.json();

                if (!respuesta.ok) throw {
                    status: respuesta.status,
                    statusText: respuesta.statusText
                };

                location.reload();
            } catch (err) {
                let message = err.statusText || "Ocurrió un error";
                alert(`Error ${err.status}: ${message}`);
            }
        }
    }
});