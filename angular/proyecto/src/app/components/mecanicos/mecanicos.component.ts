import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mecanicos',
  templateUrl: './mecanicos.component.html',
  styleUrls: ['./mecanicos.component.css']
})
export class MecanicosComponent implements OnInit {

  mecanicos:string[]=["Paco","Juan","Valle","Fran","Sabri","David","DaniPA","Alehandro"];

  constructor() { }

  ngOnInit(): void {
  }

}
