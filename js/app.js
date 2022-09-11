const seccion = document.querySelector("#catalogo")
const loader = document.querySelector(".loader")
const URL = "js/libros.json"
let libros = []
let catalogoHTML = ""
let carrito = JSON.parse(localStorage.getItem("carrito")) || []


const retornoCatalogo = (libro)=> {
    return `<div class="col-lg-4 cadaLibro pb-5 px-3">
                <img src=${libro.imagen} class="tapaLibro img-fluid img-thumbnail mx-auto d-block">
                <h2 class="pt-1">${libro.titulo}</h2>
                <h3 class="px-3">${libro.autor}</h3>
                <h4 class="px-3">${libro.isbn}</h4>
                <p class="precio px-3">$ ${libro.precio}</p>
                <button type="button" class="btn btn-primary" id="btnAgregar${libro.id}">Agregar al carrito</button>

            </div>`
                  
}



const catalogoError = ()=>{
    return `<div class="error-catalogo text-center">
                <div class="emojiError">❌</div>
                <p>Hubo un error al cargar el catálogo, Por favor, intenta más tarde</p>
            </div>`
}

const cargarCatalogo = async () =>{
    await fetch('js/libros.json')
        .then ((response)=> response.json())
        .then ((data)=> {
            libros = data
            libros.forEach(libro => {
                catalogoHTML += retornoCatalogo(libro)
                
            });
            seccion.innerHTML = catalogoHTML
                    
        })
        .catch((error)=>{
            seccion.innerHTML = catalogoError()
        })
        .finally(()=> loader.innerHTML = "")
        botonAgregar()
}



function botonAgregar() {
    libros.forEach((libro) => {
        document.querySelector(`#btnAgregar${libro.id}`).addEventListener("click", () => {
            agregarAlCarrito(libro)
            sa("Se agregó el libro a tu carrito", '#855eC0')   
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

function borrarLibro() {
    carrito.forEach((libro) => {
        document.querySelector(`#btnQuitar${libro.id}`).addEventListener("click", () => {
            carrito = carrito.filter((libroFilter) => libroFilter.id !== libro.id)
            renderizarCarrito()
            sa("Se quitó el libro de tu carrito", '#254e99') 
        })
        
    })
}

function vaciarCarrito() {
    const vaciarCarrito = document.querySelector("#vaciarCarrito")
    const carritoDiv = document.querySelector("#carritoDiv")
    vaciarCarrito.addEventListener("click", () => {
        totalCarrito.innerText = 0
        localStorage.clear()
        carritoDiv.innerHTML = ""
        numeroCarrito.innerText = 0
    })
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
   
    totalCarrito.innerText = carrito.reduce((acc, libro) => acc + libro.cantidad * libro.precio, 0)
    
    numeroCarrito.innerText = carrito.length

}

function comprar() {
    const comprar = document.querySelector("#comprar")
    
    comprar.addEventListener("click", () => {
        carrito.length = 0
        totalCarrito.innerText = 0
        localStorage.clear()
        carritoDiv.innerHTML = ""
        numeroCarrito.innerText = 0
        sa("Gracias por tu compra!!", '#b36b93')
    })
           
}

const sa = (mensaje, fondo)=>{
    Swal.fire({
        text: mensaje,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
        background: fondo,
        color: 'white'
    })
}

cargarCatalogo()
botonAgregar()
renderizarCarrito()
vaciarCarrito()
comprar()