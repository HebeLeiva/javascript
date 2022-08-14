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
    libros.push(new Libro("El señor de los anillos - La comunidad de anillo", "J.R.R. Tolkien", "978-84-450-7178-6", 3610))
    libros.push(new Libro("Cementerio de animales", "Stephen King", "978-950-07-3165-2", 3285))
    libros.push(new Libro("Crónica de Dalkey", "Flann O'Brien", "978-84-935578-1-2", 2250))
    libros.push(new Libro("Roma invicta", "Javier Negrete", "978-950-02-0816-1", 7743))
    libros.push(new Libro("La saga de los Romanov", "Jean des Cars", "978-950-02-0853-6", 3960))
    libros.push(new Libro("Yo, Claudio", "Robert Graves", "84-487-0612-9", 3845))
    libros.push(new Libro("El juego del ángel", "Carlos Ruíz Zafón", "978-950-49-1899-8", 6860))
    libros.push(new Libro("Juego de tronos - Canción de hielo y fuego I", "George R.R. Martin", "978-950-644-227-9", 6614))
    libros.push(new Libro("El tiempo entre costuras", "María Dueñas", "978-987-58-0594-1", 2670))
}

function cargarCarrito() {

    carrito.push(new Libro("El enigma de París", "Pablo De Santis", "978-958-42-1686-1", 1730))
    carrito.push(new Libro("Las legiones malditas", "Santiago Posteguillo", "978-846-66-2674-3", 6400))
    carrito.push(new Libro("El universo elegante", "Brian Greene", "84-8432-264-5", 4800))

}

precargoLibros()

cargarCarrito()



const botonVerCarrito = document.querySelector("#verCarrito")
botonVerCarrito.addEventListener("click", mostrarCarrito)





function mostrarCarrito() {
    
    const productosCarrito = document.getElementById("productosCarrito")
    carrito.forEach(libro => {
        productosCarrito.innerHTML += `<tr>
                                            <td>${libro.titulo}</td>
                                            <td>${libro.autor}</td>
                                            <td>$ ${libro.precioConIVA()}</td>
                                        <tr>`
    })
}

totalCarrito()

function totalCarrito() {
    
    total.innerHTML = `<p>TOTAL: $ ${finalizarCompra()}</p>`

}


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

// function promocionDescuento(){
  
//     let desc = ((parseInt(prompt("Ingrese el porcentaje de descuento para la promoción:"))) / 100) 
//     let resultado = libros.map(libro => {
//         return {
//             titulo: libro.titulo,
//             autor: libro.autor,
//             precio: (libro.precio * IVA) - (libro.precio * IVA  * desc)
//         }
//     })
//     console.table(resultado)

// }

function precioConIVA() {
    return parseFloat((this.precio * IVA).toFixed(2))
}



function finalizarCompra() {

    let totalCompra = carrito.reduce((acc,libro) => acc + (libro.precio * IVA), 0)
        return totalCompra.toFixed(2)
    
}
