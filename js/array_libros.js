function precargoLibros() {

    libros.push(new Libro(1, 'img/breve.jpg', "Breve historia del tiempo", "Stephen W. Hawking", "84-253-2758-X", 2000))
    libros.push(new Libro(2, 'img/elegante.jpeg', "El universo elegante", "Brian Greene", "84-8432-264-5", 4800))
    libros.push(new Libro(3, 'img/septimo.jpeg', "El séptimo círculo del infierno", "Santiago Posteguillo", "978-950-49-6009-6", 4690))
    libros.push(new Libro(4, 'img/paris.jpeg', "El enigma de París", "Pablo De Santis", "978-958-42-1686-1", 1730))
    libros.push(new Libro(5, 'img/intermitencias.jpeg', "Las intermitencias de la muerte", "José Saramago", "987-04-0234-8", 3399))
    libros.push(new Libro(6, 'img/rechazados.jpeg', "La biblioteca de los libros rechazados", "David Foenkinos", "978-987-738-334-8", 3949))
    libros.push(new Libro(7, 'img/legiones.jpeg', "Las legiones malditas", "Santiago Posteguillo", "978-846-66-2674-3", 6400))
    libros.push(new Libro(8, 'img/anillos.jpeg', "El señor de los anillos - La comunidad de anillo", "J.R.R. Tolkien", "978-84-450-7178-6", 3610))
    libros.push(new Libro(9, 'img/animales.jpeg', "Cementerio de animales", "Stephen King", "978-950-07-3165-2", 3285))
    libros.push(new Libro(10, 'img/dalkey.jpeg', "Crónica de Dalkey", "Flann O'Brien", "978-84-935578-1-2", 2250))
    libros.push(new Libro(11, 'img/invicta.jpeg', "Roma invicta", "Javier Negrete", "978-950-02-0816-1", 7743))
    libros.push(new Libro(12, 'img/romanov.jpeg', "La saga de los Romanov", "Jean des Cars", "978-950-02-0853-6", 3960))
    libros.push(new Libro(13, 'img/claudio.jpeg', "Yo, Claudio", "Robert Graves", "84-487-0612-9", 3845))
    libros.push(new Libro(14, 'img/juego.jpeg', "El juego del ángel", "Carlos Ruíz Zafón", "978-950-49-1899-8", 6860))
    libros.push(new Libro(15, 'img/tronos.jpeg', "Juego de tronos - Canción de hielo y fuego I", "George R.R. Martin", "978-950-644-227-9", 6614))
    libros.push(new Libro(16, 'img/costuras.jpeg', "El tiempo entre costuras", "María Dueñas", "978-987-58-0594-1", 2670))
    libros.push(new Libro(17, 'img/jueves.jpeg', "El club del crimen de los jueves", "Richard Osman", "978-950-852-327-3", 3020))
    libros.push(new Libro(18, 'img/primitiva.jpeg',"La horda primitiva", "Julia Coria", "978-987-670-692-6", 2660))
}


let carrito = JSON.parse(localStorage.getItem("carrito")) || []


function mostrarCatalogo() {
    const catalogo = document.getElementById("catalogo")
    libros.forEach((libro) => {
        catalogo.innerHTML += `<div class="col-lg-4 cadaLibro pb-5 px-3">
                                    <img src=${libro.imagen} class="tapaLibro img-fluid img-thumbnail mx-auto d-block">
                                    <h2 class="pt-1">${libro.titulo}</h2>
                                    <h3 class="px-3">${libro.autor}</h3>
                                    <h4 class="px-3">${libro.isbn}</h4>
                                    <p class="precio px-3">$ ${libro.precio}</p>
                                    <button type="button" class="btn btn-primary" id="btnAgregar${libro.id}">Agregar al carrito</button>

                                </div>`
    })
    botonAgregar()
  
}


function botonAgregar() {
    libros.forEach((libro) => {
        document.querySelector(`#btnAgregar${libro.id}`).addEventListener("click", () => {
            agregarAlCarrito(libro)
        })
    })
}


function agregarAlCarrito(libro) {

    let existe = carrito.some((libroSome) => libroSome.id === libro.id)
    if (existe === false){
        libro.cantidad = 1
        carrito.push(libro)
    }else {
        let libroFind = carrito.find((libroFind) => libroFind.id === libro.id)
        libroFind.cantidad++
        }
        renderizarCarrito()
}


function renderizarCarrito() {
    const carritoDiv = document.querySelector("#carritoDiv")
    carritoDiv.innerHTML = ""
    carrito.forEach((libro) => {
        carritoDiv.innerHTML += `<div class="col-lg-12 mostrarCarrito pt-5 px-2">
                                    <h2 class="pt-1">${libro.titulo}</h2>
                                    <h3 class="px-3">${libro.autor}</h3>
                                    <p class="px-3">Cantidad: ${libro.cantidad}</p>
                                    <p class="precio px-3">$ ${libro.precio}</p>
                                    <button type="button" class="btn btn-primary" id="btnQuitar${libro.id}">Quitar del carrito</button>
                                </div>`
    })

    localStorage.setItem("carrito", JSON.stringify(carrito))
    borrarLibro()
}


function borrarLibro() {
    carrito.forEach((libro) => {
        document.querySelector(`#btnQuitar${libro.id}`).addEventListener("click", () => {
            carrito = carrito.filter((libroFilter) => libroFilter.id !== libro.id)
            renderizarCarrito()
        })
    })
}


precargoLibros()
mostrarCatalogo()
renderizarCarrito()

