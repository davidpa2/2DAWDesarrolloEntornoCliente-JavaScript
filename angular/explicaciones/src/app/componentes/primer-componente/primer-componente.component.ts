import { PrimerServicioService } from './../../servicios/primer-servicio.service';
//importanciones necesarias para el funcionamiento del componente
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';





//decorador del componente con un objeto de sus elementos:nombre,vista y hoja de estilos
@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})

//clase para la programación del componente que implementa OnInit, que no es más que una función que 
//se ejecutará al cargar el componente.
export class PrimerComponenteComponent implements OnInit {
  
  estado = "Formulario no enviado";
  //variable para cambiar el nombre del cuadro de texto nombre al pulsar clic en el botón "cambiar nombre"
  defaultNombre ="Alberto";
 //variable para establecer comunicación bidireccional (data binding, banana in box) del componente con la vista
   usuario="";
   //variable para usar ngIF
   mostrarContrasena=false;
   //variable par comprobar funcionamiento de ngSwitch
   semaforo=prompt("Introduzca color del semáforo");

   //array de nombres para explicar funcionamiento ngFor
   nombres=["Miguel","Juan","María"];

   //decorador input para comunicar componente padre app-component a componente hijo primer-componente
   //observar como arriba se ha hecho también la importación correspondiente de input que ya podremos
   //utilizar por interpolación en la vista del componente hijo primer-componente
   // se puede hacer de las dos formas siguientes:
    @Input() padreahijo:any;
    @Input('padreahijo') padreahijo2:any;

  //decorador output para comunicar componente hijo primer-componente a componente padre app-component
   //observar como arriba se ha hecho también la importación correspondiente de ouput que ya podremos
   // y también EventEmitter porque se comunicará a través de un evento, por lo que tendremos que 
   //declarar un evento
   @Output() eventoHijo=new EventEmitter();

   // declaración de variable array módulos donde se guardarán los módulos obtenidos por el servicio
  modulos:any= [];
  modulos2:any= [];
  //variable para gestión del error
  errorMessage="";
  

   //inyección del servicio en el constructor del primer componente, y una vez inyectado
   //ya podremos utilizarlo en 
  constructor(private primerServicio:PrimerServicioService) {  }

  ngOnInit(): void {
    // una vez cargado el Componente, lanzamos nuestra petición al servidor y
    // cargamos en la variable modulos lo obtenido por el servicio
    this.modulos=this.primerServicio.getModulos();
    //comprobemos que funciona el servicio
    console.log(this.modulos);

    // ahora vamos a probar el observer aquí que estará esperando los datos del observable
    // o error para gestión de errores
    this.primerServicio.getModulosHttp().subscribe((datos)=>{this.modulos2=datos;},
                                                   (error)=>{this.errorMessage=error;});
    // y comprobamos
    
  }
//implementación de la función que se debe ejecutar al haber hecho clic en el botón Enviar del formulario de la vista
  onEnviarFormulario(email:any){
    //alert("Enviando formulario");
    this.estado="Formulario enviado";
    console.log(email.value);

    console.log(this.modulos2);

  }
//implementación de la función para cambiar el valor del nombre en el formulario
  onDefaultNombre(){
    this.defaultNombre = 'Pepe';
  }

  onMostrarContrasena(){
    if (this.mostrarContrasena){
      this.mostrarContrasena=false;
    }
    else{
      this.mostrarContrasena=true;
    }    
  }
  //función para enviar evento de hijo a padre y solo hay ya que capturar este evento en el padre
  onEnviarEvento(){
    this.eventoHijo.emit('Mensaje enviado desde hijo a padre');
  }


}
