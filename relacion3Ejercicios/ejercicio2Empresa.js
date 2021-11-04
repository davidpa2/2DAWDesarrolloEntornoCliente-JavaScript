class Empresa {
  constructor(nombreEmpresa, direccion, telefono, nif) {
    this.nombreEmpresa = nombreEmpresa;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
  }
}

class Cliente {
  constructor(numCliente, dni, nombre, domicilio, cp, ciudad, provincia) {
    this.numCliente = numCliente;
    this.dni = dni;
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.cp = cp;
    this.ciudad = ciudad;
    this.provincia = provincia;
  }
}

class Producto {
  constructor(descripcion, precio, cantidad) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

class DatosFactura {
  constructor(importe, formaPago) {
    this.importe = importe;
    this.formaPago = formaPago;
  }
}

class Factura extends DatosFactura {
  constructor(Empresa, Cliente, importeTotal, formaPago) {
    super(Empresa, Cliente);
    this.importeTotal = importeTotal;
    this.formaPago = formaPago;
  }

  total(productos) {
    for (var i = 0; i < productos.length; i++) {
      document.write(
        productos[i].cantidad +
          " unidades de " +
          productos[i].descripcion +
          " a precio " +
          productos[i].precio +
          " representando un subtotal de " +
          productos[i].precio * productos[i].cantidad +
          "€<br>"
      );
      console.log(
        productos[i].cantidad +
          " unidades de " +
          productos[i].descripcion +
          " a precio " +
          productos[i].precio +
          " representando un subtotal de " +
          productos[i].precio * productos[i].cantidad +
          "€<br>"
      );
      this.importeTotal += productos[i].cantidad * productos[i].precio;
    }
    console.log("TOTAL = " + this.importeTotal + " euros");
    document.write("TOTAL = " + this.importeTotal + " euros");
  }
}
