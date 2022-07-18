const dose = {
    name: '2 Kohlrouladen',
    preis: 7.95,
    author: 'Hermann Mahler',
    wohntIn: '29614 Soltau',
    printDescription: function() {
        console.log(`${this.author}: ${this.name}`);
        document.write(`<h1>Das sind ${this.name} von ${dose.author} <h1><br />`);
    }
}
console.log(dose.name);
console.log(dose.preis);
console.log(dose.author);
console.log(dose.wohntIn);
//
dose.printDescription();