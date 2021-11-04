class Circunferencia{
	//constructor
	constructor(radio){
		this.radio=radio;
	}
	//método para calcular el área de la circunferencia
	calculoArea () {
		document.write("El área de la circunferencia de radio " + this.radio + " es " + Math.PI*this.radio*this.radio + "<br>");
	  }
	//método para calcular longitud de la circunferencia
	calculoLongitud(){
		document.write("La longitud de la circunferencia de radio " + this.radio + " es " + 2*Math.PI*this.radio + "<br>");
	}
}
class Esfera extends Circunferencia {
	constructor(radio,material){
		super(radio);
		this.material=material;
	}
calculoVolumen(){
		document.write("El volumen de la esfera de " + this.material + 
		" de radio " + this.radio + " es " +
		4/3*Math.PI*this.radio*this.radio*this.radio);
	}
}
