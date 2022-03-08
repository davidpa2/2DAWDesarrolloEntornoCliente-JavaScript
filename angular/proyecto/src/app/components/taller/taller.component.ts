import { Component, OnInit } from '@angular/core';
import { CocheService } from 'src/app/services/coche.service';
import { coches } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent implements OnInit {

  listaCoches: coches[] = [];

  constructor(private cocheService: CocheService) { }

  ngOnInit(): void {
this.obtenerCoches();
  }

  obtenerCoches() {
    this.cocheService.get().subscribe(result => {
      if(result['estado'] != "error"){
        console.log('hola hola');
        
        result.listaCoches.forEach((c: coches) => {
          this.listaCoches.push(c)
        });
      }
    })
  }

  async actualizarCoches(){
    
  }
}

