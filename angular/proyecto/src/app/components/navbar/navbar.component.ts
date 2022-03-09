import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mecanicos } from 'src/app/interfaces/interfaces';
import { MecanicoService } from 'src/app/services/mecanico.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  mecanico!: mecanicos;

  constructor(private mecanicoService: MecanicoService, private router: Router) { }

  ngOnInit(): void {
    this.recuperarUsuarioLog();

    this.mecanicoService.cambiosEnMecanicosAutenticado.subscribe(data => {
      console.log('Hay un cambio en el usuario autenticado');
      console.log(this.mecanicoService.usuarioAutenticado.email);
      this.mecanico = this.mecanicoService.usuarioAutenticado;
    });
  }

  recuperarUsuarioLog() {
    this.mecanico = JSON.parse(localStorage.getItem("mecanicoAutentificado"))
  }

  cerrarSesion() {
    localStorage.clear();
    //this.router.navigate(['/inicio']);
    window.location.href = "/inicio";
  }
}
