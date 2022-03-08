import { Component, OnInit } from '@angular/core';
import { mecanicos } from 'src/app/interfaces/interfaces';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent implements OnInit {

  //mecanicos:string[]=["Paco","Juan","Valle","Fran","Sabri","David","DaniPA","Alehandro"];

  listaMecanicos: mecanicos[] = [];
  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit(): void {
    this.obtenerMecanicos();
  }

  obtenerMecanicos() {
    this.mecanicoService.listarMecanicos().subscribe(result => {
      if (result['estado'] != "error") {
        console.log('hola hola');

        result.listaMecanicos.forEach((m: mecanicos) => {
          this.listaMecanicos.push(m)
        });
      }
    })
  }

}
