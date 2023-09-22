
/// Calcular costo de viaje ///

function calcularCostoViaje() {
    let precio;
    let pais;
  
    for (;;) {
      pais = prompt("¿A dónde desea viajar? Elija entre Brasil, Uruguay o Chile:");
  
      if (pais === null) {
        alert("No seleccionó un destino. Vuelva a intentarlo más tarde.");
        return; 
      }
  
      pais = pais.toLowerCase();
  
      switch (pais) {
        case "brasil":
          precio = 500;
          break;
        case "uruguay":
          precio = 300;
          break;
        case "chile":
          precio = 400;
          break;
        default:
          alert("No seleccionó un destino válido entre Brasil, Uruguay o Chile. Por favor, intente de nuevo.");
          continue;
      }
  
      if (precio !== undefined) {
        let cantidadPersonas = parseInt(prompt("¿Cuántas personas viajarán?"));
        if (!isNaN(cantidadPersonas) && cantidadPersonas > 0) {
          let costoTotal = precio * cantidadPersonas;
          alert(`El costo total para ${cantidadPersonas} personas a ${pais} es de $${costoTotal}.`);
          return; 
        } else {
          alert("Por favor, ingrese un número válido de personas.");
        }
      }
    }
  }
  
  
  calcularCostoViaje();