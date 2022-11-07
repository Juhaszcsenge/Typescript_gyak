import {Book} from './Book_interface';
import {Ebook} from './Ebook';
import {PaperBook} from './PaperBook';
require('./style.css')

let booklist : Book[] = [];
let cim  = (document.getElementById('cim') as HTMLInputElement)
let ar  = (document.getElementById('ar') as HTMLInputElement)
let isbnSzam  = (document.getElementById('isbnSzam') as HTMLInputElement)
let suly  = (document.getElementById('suly') as HTMLInputElement)
let meret  = (document.getElementById('meret') as HTMLInputElement)
let hibamezo  = (document.getElementById('hiba') as HTMLDivElement)

function cimcheck(cim : string) : boolean  {
    if (cim.length >= 1 && cim != "") {
        return true;
    }
    return false;
}
function arCheck(ar : number) : boolean { 
    if (ar >=0) {return true}
    return false;
}
function sulyCheck(suly : number) : boolean { 
    if (suly > 0) {return true }
    return false;
}
function meretCheck(meret : number) : boolean { 
    if (meret > 0) {return true }
    return false;
}
function isbnCheck(isbn : string) : boolean {
    let sampleRegEx = new RegExp('^[+ 0-9]{13}$') ;
    if (sampleRegEx.test(isbn)) { return true; } 
    console.log(sampleRegEx.test(isbn))
    return false;
}   
function radioCheck() : void {
    if ((document.getElementById('paperBook') as HTMLInputElement).checked) {
    (document.getElementById('meret') as HTMLInputElement).disabled = true;
    (document.getElementById('suly') as HTMLInputElement).disabled = false;
     suly.textContent = "";
    }
    else {
        (document.getElementById('meret') as HTMLInputElement).disabled = false;
        (document.getElementById('suly') as HTMLInputElement).disabled = true;
        meret.textContent = "";

    }
 }

function checkAll() {
    if ((document.getElementById('paperBook') as HTMLInputElement).checked) {
        hibamezo.textContent = ""
        if(cimcheck(cim.value) && arCheck(parseInt(ar.value)) && isbnCheck(isbnSzam.value) && sulyCheck(parseInt(suly.value)) ) {
            booklist.push(new PaperBook(cim.value, parseInt(ar.value), isbnSzam.value, parseInt(suly.value)))
            console.log(booklist)
        }
        else {
            hibamezo.textContent = ""
            console.log("valami nem jó")
            if(!cimcheck(cim.value)) {
                hibamezo.textContent ="Hibás a cim"
            }
            else if(!arCheck(parseInt(ar.value))) {
                hibamezo.textContent ="Az ár nem lehet negatív"
            } else if (!isbnCheck(isbnSzam.value)) {
                hibamezo.textContent ="Az isbn 13 karakteres lehet és csak számok";
            } else if (!sulyCheck(parseInt(suly.value))) {
                hibamezo.textContent ="a súly nem lehet negatív";
            }
        }
    } else {
        hibamezo.textContent = ""
        if(cimcheck(cim.value) && arCheck(parseInt(ar.value)) && isbnCheck(isbnSzam.value) && meretCheck(parseInt(suly.value)) ) {
            booklist.push(new Ebook(cim.value, parseInt(ar.value), isbnSzam.value, parseInt(meret.value)))
            console.log(booklist)
        }
        else {
            hibamezo.textContent = ""
            console.log("valami nem jó")
            if(!cimcheck(cim.value)) {
                hibamezo.textContent ="Hibás a cim"
            }
            else if(!arCheck(parseInt(ar.value))) {
                hibamezo.textContent ="Az ár nem lehet negatív"
            } else if (!isbnCheck(isbnSzam.value)) {
                hibamezo.textContent ="Az isbn 13 karakteres lehet és csak számok";
            } else if (!sulyCheck(parseInt(meret.value))) {
                hibamezo.textContent ="a méret nem lehet negatív";
            }
        }
    }
}

    
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('paperBook')?.addEventListener('click', ()=> {
        radioCheck()
        suly.value = " ";

    } )
    document.getElementById('ebook')?.addEventListener('click', () => {
        radioCheck()
        meret.value = " ";

    })
    document.getElementById('submit')?.addEventListener('click', checkAll)

})