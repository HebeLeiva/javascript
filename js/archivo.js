debugger

function seleccionarLibro(){
    do{
        libro = prompt("Bienvenido!! \nQué libro desea comprar?: \n1) Las legiones malditas, de Santiago Posteguillo \n2) El juego del angel, de Carlos Ruiz Zafón \n3) Las intermitencias de la muerte, de José Saramago")

    } while (libro != "1" && libro != "2" && libro != "3")

        switch (libro){
            case "1":
                return "Las legiones malditas, de Santiago Posteguillo"
            
            case "2":
                return "El juego del angel, de Carlos Ruiz Zafón"
            
            case "3":
                return "Las intermitencias de la muerte, de José Saramago"
        }
}

function mostrarPrecio(libro){
    if (libro === "Las legiones malditas, de Santiago Posteguillo"){
        return 4500
    } else if (libro === "El juego del angel, de Carlos Ruiz Zafón"){
        return 4800
    } else{
        return 3800
    }
}

function calcularEnvio(){
    
    codigoPostal = parseInt(prompt("Ingrese su Código Postal:"))
    if (codigoPostal >= 1001 && codigoPostal <= 2500){
            return 850
    } else if (codigoPostal >= 2501 && codigoPostal <= 5000){
            return 1000
    } else if (codigoPostal >= 5001 && codigoPostal <= 7500){
            return 1300
    } else if (codigoPostal >= 7501 && codigoPostal <= 9420){
            return 1500
    } else {
        console.warn("El Código Postal ingresado es inexistente")
        
    }
}
function finalizarCompra(precioLibro, costoEnvio){
    let totalCompra = precioLibro + costoEnvio
    alert("Resumen de su compra: \nLibro elegido: " + libroElegido +"\nPrecio $ "+ precioLibro +"\nGastos de Envío: $ "+ costoEnvio + "\nTOTAL $ "+ totalCompra)

}

let libroElegido = seleccionarLibro()
let precioLibro = mostrarPrecio(libroElegido)
let costoEnvio = calcularEnvio()
let totalCompra = finalizarCompra(precioLibro, costoEnvio)


