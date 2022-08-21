class Libro {
    
    constructor (id, imagen, titulo, autor, isbn, precio) {
        this.id = id
        this.imagen = imagen
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
        this.precio = precio
    }

    // precioConIVA () {
    //     return parseFloat((this.precio * IVA).toFixed(2))
    // }
}