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
    var newstr : HTMLElement = document.getElementById("impresion") as HTMLElement;
    var oldstr = document.body.innerHTML;
    document.body.innerHTML = newstr.innerHTML;
    window.print();
    document.body.innerHTML = oldstr;
    window.location.href = "/Factura";
    //return false;
  }
}
