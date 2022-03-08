import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CocheService } from 'src/app/services/coche.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { cliente, coches } from 'src/app/interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-coche',
  templateUrl: './registro-coche.component.html',
  styleUrls: ['./registro-coche.component.css']
})
export class RegistroCocheComponent implements OnInit {

  regForm: FormGroup;
  regForm2: FormGroup;
  fotoCoche: string;
  listaClientes: cliente[] = [];
  //coche: Coche = new Coche();

  constructor(public service: CocheService, public serviceCliente: ClienteService, private route: Router) { }

  ngOnInit(): void {
    this.listarClientes();

    this.regForm = new FormGroup({
      marca: new FormControl('', [Validators.required]),
      modelo: new FormControl('', [Validators.required]),
      km: new FormControl('', [Validators.required]),
      cliente: new FormControl('', [Validators.required]),
      averias: new FormControl('', [Validators.required]),
      descripcionAveria: new FormControl('', [Validators.required]),
      fotoCoche: new FormControl('', [Validators.required]),
      mecanico: new FormControl('', [Validators.required])
    })

    this.regForm2 = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      tlf: new FormControl('', [Validators.required]),
      gmail: new FormControl('', [Validators.required])
    })
  }

  registerClient(): void {

    this.serviceCliente.addClient(this.regForm2.value.nombre, this.regForm2.value.apellidos,
      this.regForm2.value.dni, this.regForm2.value.tlf, this.regForm2.value.gmail)
      .subscribe(result => {
        if (result['estado'] != "error") {
          console.log('Cliente insertado correctamente')
        }
      })

    window.location.reload();
  }

  registerCar(): void {

    console.log(this.regForm.value.averias);

    this.service.addCar(this.regForm.value.marca, this.regForm.value.modelo, this.regForm.value.km,
      this.regForm.value.averias, this.regForm.value.descripcionAveria, this.fotoCoche, "en cola", null, null,
      this.listaClientes[this.regForm.value.cliente - 1])
      .subscribe(result => {
        if (result['estado'] != "error") {
          console.log('Coche insertado correctamente')
        }
      })

    window.location.href = 'http://localhost:4200/taller';
    //this.route.navigate(['/taller']);
  }

  guardarImagen() {

    let imgCoche: any = document.getElementById('imgCoche');
    imgCoche.classList.remove("d-none");

    const inputImg: any = document.getElementById('fotoCocheInput');

    //El file reader sirve para leer un blob o un file
    const reader = new FileReader();
    //Leer la imagen del input y cargarla en un ArrayBuffer. Desemboca un evento loadend y su atributo result
    //contiene un ArrayBuffer con los datos del archivo
    reader.readAsArrayBuffer(inputImg.files[0]);
    //Tras cargar la imagen la convertimos a base64
    reader.onload = (e: any) => {
      //btoa() convierte a base 64 desde una cadena de datos binarios
      this.fotoCoche = btoa(
        // Uint8Array es un array tipado de datos binarios
        //reduce() Aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) lo reduce a un único valor.
        new Uint8Array(e.target.result).reduce((data, byte) => data + String.fromCharCode(byte), '')
      );
      console.log(this.fotoCoche);
    };
  }

  listarClientes() {
    this.serviceCliente.getClientes().subscribe(result => {
      if (result['estado'] != "error") {
        console.log('hola hola');

        result.listaClientes.forEach((c: cliente) => {
          this.listaClientes.push(c)
        });
      }
    })
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