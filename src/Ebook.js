"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ebook = void 0; // létrehozzuk az exports ebookot és értéket adunk neki ami nulla
class Ebook {
    constructor(title, price, isbn, size) {
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.size = size;
    }
}
exports.Ebook = Ebook;

// létrehozzuk az Ebook osztályt majd konstruktort generálunk