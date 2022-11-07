"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ebook_1 = require("./Ebook");
const PaperBook_1 = require("./PaperBook");
require('./style.css');
let booklist = [];
let cim = document.getElementById('cim');
let ar = document.getElementById('ar');
let isbnSzam = document.getElementById('isbnSzam');
let suly = document.getElementById('suly');
let meret = document.getElementById('meret');
let hibamezo = document.getElementById('hiba');
function cimcheck(cim) {
    if (cim.length >= 1 && cim != "") {
        return true;
    }
    return false;
}
function arCheck(ar) {
    if (ar >= 0) {
        return true;
    }
    return false;
}
function sulyCheck(suly) {
    if (suly > 0) {
        return true;
    }
    return false;
}
function meretCheck(meret) {
    if (meret > 0) {
        return true;
    }
    return false;
}
function isbnCheck(isbn) {
    let sampleRegEx = new RegExp('^[+ 0-9]{13}$');
    if (sampleRegEx.test(isbn)) {
        return true;
    }
    console.log(sampleRegEx.test(isbn));
    return false;
}
function radioCheck() {
    if (document.getElementById('paperBook').checked) {
        document.getElementById('meret').disabled = true;
        document.getElementById('suly').disabled = false;
        suly.textContent = "";
    }
    else {
        document.getElementById('meret').disabled = false;
        document.getElementById('suly').disabled = true;
        meret.textContent = "";
    }
}
function checkAll() {
    if (document.getElementById('paperBook').checked) {
        hibamezo.textContent = "";
        if (cimcheck(cim.value) && arCheck(parseInt(ar.value)) && isbnCheck(isbnSzam.value) && sulyCheck(parseInt(suly.value))) {
            booklist.push(new PaperBook_1.PaperBook(cim.value, parseInt(ar.value), isbnSzam.value, parseInt(suly.value)));
            console.log(booklist);
        }
        else {
            hibamezo.textContent = "";
            console.log("valami nem jó");
            if (!cimcheck(cim.value)) {
                hibamezo.textContent = "Hibás a cim";
            }
            else if (!arCheck(parseInt(ar.value))) {
                hibamezo.textContent = "Az ár nem lehet negatív";
            }
            else if (!isbnCheck(isbnSzam.value)) {
                hibamezo.textContent = "Az isbn 13 karakteres lehet és csak számok";
            }
            else if (!sulyCheck(parseInt(suly.value))) {
                hibamezo.textContent = "a súly nem lehet negatív";
            }
        }
    }
    else {
        hibamezo.textContent = "";
        if (cimcheck(cim.value) && arCheck(parseInt(ar.value)) && isbnCheck(isbnSzam.value) && meretCheck(parseInt(suly.value))) {
            booklist.push(new Ebook_1.Ebook(cim.value, parseInt(ar.value), isbnSzam.value, parseInt(meret.value)));
            console.log(booklist);
        }
        else {
            hibamezo.textContent = "";
            console.log("valami nem jó");
            if (!cimcheck(cim.value)) {
                hibamezo.textContent = "Hibás a cim";
            }
            else if (!arCheck(parseInt(ar.value))) {
                hibamezo.textContent = "Az ár nem lehet negatív";
            }
            else if (!isbnCheck(isbnSzam.value)) {
                hibamezo.textContent = "Az isbn 13 karakteres lehet és csak számok";
            }
            else if (!sulyCheck(parseInt(meret.value))) {
                hibamezo.textContent = "a méret nem lehet negatív";
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c;
    (_a = document.getElementById('paperBook')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        radioCheck();
        suly.value = " ";
    });
    (_b = document.getElementById('ebook')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        radioCheck();
        meret.value = " ";
    });
    (_c = document.getElementById('submit')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', checkAll);
});
