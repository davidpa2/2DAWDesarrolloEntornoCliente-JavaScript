import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-coche',
  templateUrl: './registro-coche.component.html',
  styleUrls: ['./registro-coche.component.css']
})
export class RegistroCocheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showNewClientForm() {
    var btnAnnadirCoche = <HTMLElement>document.querySelector("#btnAnnadirCoche");
    var btnNuevoCliente = <HTMLElement>document.querySelector("#btnNuevoCliente");
    var formNewClient = <HTMLElement>document.getElementById("formNewClient");

    var classList = formNewClient.classList;

    classList.forEach(element => {      
      if (element == "d-none") {
        formNewClient.classList.remove("d-none");
        formNewClient.classList.add("d-block");
        btnAnnadirCoche.classList.add("disabled");
        btnNuevoCliente.setAttribute("value", "Cancelar");

      } else if (element == "d-block") {
        formNewClient.classList.remove("d-block");
        formNewClient.classList.add("d-none");
        btnAnnadirCoche.classList.remove("disabled");
        btnNuevoCliente.setAttribute("value", "¿Nuevo cliente?");
      }
    });
  }

  /*
  //Mostrar la imagen cargada en el input-text del registro de coches
var inputImagen = document.getElementById("fotoCocheInput");
var imgCoche = document.getElementById("imgCoche");

inputImagen.addEventListener("change", function (){
    // Los archivos seleccionados, pueden ser muchos o uno
    const archivos = inputImagen.files;
    // Si no hay archivos salimos de la función y quitamos la imagen
    if (!archivos || !archivos.length) {
        imgCoche.src = "";
        return;
    }
    // Ahora tomamos el primer archivo, el cual vamos a previsualizar
    const primerArchivo = archivos[0];
    // Lo convertimos a un objeto de tipo objectURL
    const objectURL = URL.createObjectURL(primerArchivo);
    // Y a la fuente de la imagen le ponemos el objectURL
    imgCoche.src = objectURL;
});*/
}