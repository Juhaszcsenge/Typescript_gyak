import {Book} from './Book_interface'; // importáljuk a köny osztályt a köny intefészből

export class Ebook implements Book { // exportáljuk az Ebook osztályból a Book-ot hogy megvalósíthassa
    title: string;
    price: number;
    isbn: string; 
    size : number;
    public constructor(title: string, price: number, isbn: string , size: number) { 
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.size = size;
    }

// importáljuk a Könyv oszályt a lkönyv interfészből
// majd exportáljuk a papírkönyv osztályt ami megvalósítja a könyvet
// hozzáadjuk a megadott változókhoz még a súlyt is mert az volt a feladatban PaperBook
//weight: a könyv súlya grammban (szám)
// majd konstruktort generálunk
}
