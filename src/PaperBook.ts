import {Book} from './Book_interface';

export class PaperBook implements Book {
    title: string;
    price: number;
    isbn: string; 
    weight  : number;
    public constructor(title: string, price: number, isbn: string , weight: number) { 
        this.title = title;
        this.price = price;
        this.isbn = isbn;
        this.weight = weight;
    }


}

// importáljuk a Könyv oszályt a lkönyv interfészből
// majd exportáljuk a papírkönyv osztályt ami megvalósítja a könyvet
// hozzáadjuk a megadott változókhoz még a súlyt is mert az volt a feladatban PaperBook
//weight: a könyv súlya grammban (szám)
// majd konstruktort generálunk