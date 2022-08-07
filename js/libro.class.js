class Libro {
    
    constructor (titulo, autor, isbn, precio) {
        this.titulo = titulo
        this.autor = autor
        this.isbn = isbn
        this.precio = precio
    }

    precioConIVA () {
        return parseFloat((this.precio * IVA).toFixed(2))
    }
}