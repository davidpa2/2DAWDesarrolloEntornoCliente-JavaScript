import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //Función dedicada imprimir la sección de la factura
  imprimir() {
    var newstr: HTMLElement = document.getElementById("impresion") as HTMLElement;
    var template: HTMLElement = document.getElementById("plantillaImpresion") as HTMLElement;
    var oldstr = document.body.innerHTML;
    //Establecer como cuerpo del documento la plantilla más el div de contenido a imprimir 
    document.body.innerHTML = template.innerHTML + newstr.innerHTML;
    window.print(); //Abrir el modal de impresión con el cuerpo establecido
    document.body.innerHTML = oldstr; //Es importante devolver el body como estaba 
    window.location.href = "/Factura"; //Por cuestión de funcionalidad, mandar al mismo sitio y recargar
    //return false;
  }
}
