import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cliente, coches, mecanicos } from 'src/app/interfaces/interfaces';
import { CocheService } from 'src/app/services/coche.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  coche: coches;
  cliente: cliente;
  mecanico: mecanicos;

  constructor(private cocheService: CocheService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerFactura();
  }

  obtenerFactura(): void {
    let id = this.ruta.snapshot.paramMap.get('idCoche')
    this.cocheService.getPorId(id).subscribe(result => {
      if (result['estado'] != "error") {
        this.coche = result['coche'];
        this.cliente = result['coche'].cliente;
        this.mecanico = result['coche'].mecanico;
        console.log(result['coche'])
        /*result.listaMecanicos.forEach((c: coches) => {
          this.coche = c;
          console.log(c)
        });*/
      }
    })
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
  
  volver() {
    window.history.back();
  }
}
