const seccion = document.querySelector("#catalogo")
const loader = document.querySelector(".loader")
const URL = "js/libros.json"
let libros = []
let catalogoHTML = ""

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
}

cargarCatalogo()