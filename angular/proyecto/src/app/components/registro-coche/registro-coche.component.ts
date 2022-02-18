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

}