function agregarLibros() {
    
    let title = prompt("Ingrese el título del libro:")
    let aut = prompt("Ingrese el nombre del autor:")
    let codigo = prompt("Ingrese el código ISBN:")
    let importe = parseInt(prompt("Ingrese el precio:"))
        libros.push(new Libro(title, aut, codigo, importe))
        console.table(libros)
    
}

function precargoLibros() {

    libros.push(new Libro("Breve historia del tiempo", "Stephen W. Hawking", "84-253-2758-X", 4700))
    libros.push(new Libro("El club del crimen de los jueves", "Richard Osman", "978-950-852-327-3", 4300))
    libros.push(new Libro("La horda primitiva", "Julia Coria", "978-987-670-692-6", 3700))
    libros.push(new Libro("El universo elegante", "Brian Greene", "84-8432-264-5", 5600))
    libros.push(new Libro("El séptimo círculo del infierno", "Santiago Posteguillo", "978-950-49-6009-6", 4100))
    libros.push(new Libro("El enigma de París", "Pablo De Santis", "978-958-42-1686-1", 4300))
    libros.push(new Libro("Las intermitencias de la muerte", "José Saramago", "987-04-0234-8", 4400))
    libros.push(new Libro("La biblioteca de los libros rechazados", "David Foenkinos", "978-987-738-334-8", 4000))
}


function recorrerLibros() {

    for (let libro of libros){
        console.table(libro)
    }
}

function precioConIVA() {
    
    let indice = parseInt(prompt("Ingrese el número de índice del libro que desea consultar el precio con IVA:"))
    if (isNaN(indice)){
        console.error("El índice ingresado no es un número.")
    } else if (indice > (libros.length)){
        console.error("El índice ingresado es inexistente.")
    } else {
        confirm("El precio con IVA del libro selecionado es de $ " + libros[indice].precioConIVA())
    }
}

