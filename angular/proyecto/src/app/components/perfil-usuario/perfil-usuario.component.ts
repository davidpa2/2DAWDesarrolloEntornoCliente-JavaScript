import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { mecanicos } from 'src/app/interfaces/interfaces';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  nombre: String
  apellidos: String
  dni: String
  tlf: String
  email: String

  regForm: FormGroup;
  /*nombres:string[]=["Paco","Juan","Valle","Fran","Sabri","David","DaniPA"];
  apellidos:string[]=["Pérez","Gallardo","Lópes","Fenan","Ojea","Pajeou","Safra"];*/

  constructor(public serviceMecanico: MecanicoService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.mostrarMecanico();

    this.regForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      tlf: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    })
  }

  mostrarMecanico(): void {
    let id = this.ruta.snapshot.paramMap.get('id')
    this.serviceMecanico.buscarMecanicoId(id).subscribe(result => {
      if (result['estado'] != "error") {
        result.listaMecanicos.forEach((m: mecanicos) => {
          this.nombre = m.nombre
          this.apellidos = m.apellidos
          this.dni = m.dni
          this.tlf = m.tlf
          this.email = m.email
        });
      }
    })
  }
}
