import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {

  nombres:string[]=["Paco","Juan","Valle","Fran","Sabri","David","DaniPA"];
  apellidos:string[]=["Pérez","Gallardo","Lópes","Fenan","Ojea","Pajeou","Safra"];

  constructor() { }

  ngOnInit(): void {
  }

}
