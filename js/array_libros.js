function agregarLibros() {
    
    let title = prompt("Ingrese el título del libro:")
    let aut = prompt("Ingrese el nombre del autor:")
    let codigo = prompt("Ingrese el código ISBN:")
    let importe = parseInt(prompt("Ingrese el precio:"))
        libros.push(new Libro(title, aut, codigo, importe))
        console.table(libros)
    
}

function precargoLibros() {

    libros.push(new Libro("Breve historia del tiempo", "Stephen W. Hawking", "84-253-2758-X", 2000))
    libros.push(new Libro("El club del crimen de los jueves", "Richard Osman", "978-950-852-327-3", 3020))
    libros.push(new Libro("La horda primitiva", "Julia Coria", "978-987-670-692-6", 2660))
    libros.push(new Libro("El universo elegante", "Brian Greene", "84-8432-264-5", 4800))
    libros.push(new Libro("El séptimo círculo del infierno", "Santiago Posteguillo", "978-950-49-6009-6", 4690))
    libros.push(new Libro("El enigma de París", "Pablo De Santis", "978-958-42-1686-1", 1730))
    libros.push(new Libro("Las intermitencias de la muerte", "José Saramago", "987-04-0234-8", 3399))
    libros.push(new Libro("La biblioteca de los libros rechazados", "David Foenkinos", "978-987-738-334-8", 3949))
    libros.push(new Libro("Las legiones malditas", "Santiago Posteguillo", "978-846-66-2674-3", 6400))
    libros.push(new Libro("El tiempo entre costuras", "María Dueñas", "978-987-58-0594-1", 2670))
}

function cargarCarrito() {

    carrito.push(new Libro("El enigma de París", "Pablo De Santis", "978-958-42-1686-1", 1730))
    carrito.push(new Libro("Las legiones malditas", "Santiago Posteguillo", "978-846-66-2674-3", 6400))
    carrito.push(new Libro("El universo elegante", "Brian Greene", "84-8432-264-5", 4800))

}

precargoLibros()

cargarCarrito()

function recorrerLibros() {

    libros.forEach(elemento => {
        console.table(elemento)
    })

}

function buscarPorAutor() {
    
    let aut = prompt("Ingrese el nombre o apellido del autor:")
    const resultado =libros.filter(elemento => elemento.autor.includes(aut))
    console.table(resultado)

}

function buscarPorLibro() {
    
    let book = prompt("Ingrese el libro a buscar:")
    const resultado =libros.filter(elemento => elemento.titulo.includes(book))
    console.table(resultado)

}

function promocionDescuento(){
  
    let desc = ((parseInt(prompt("Ingrese el porcentaje de descuento para la promoción:"))) / 100) 
    let resultado = libros.map(libro => {
        return {
            titulo: libro.titulo,
            autor: libro.autor,
            precio: (libro.precio * IVA) - (libro.precio * IVA  * desc)
        }
    })
    console.table(resultado)

}


function consultarPrecioConIVA() {
    
    let indice = parseInt(prompt("Ingrese el número de índice del libro que desea consultar el precio con IVA:"))

    if (isNaN(indice)){
        console.error("El índice ingresado no es un número.")
    } 
    else if (indice > (libros.length)){
        console.error("El índice ingresado es inexistente.")
    } 
    else {
        confirm("El precio con IVA del libro selecionado es de $ " + libros[indice].precioConIVA())
    }
}

function finalizarCompra() {

    let totalCompra = carrito.reduce((acc,libro) => acc + (libro.precio * IVA), 0)
        console.log("El total a pagar con IVA incluído es de $ ", totalCompra.toFixed(2))
    
}
