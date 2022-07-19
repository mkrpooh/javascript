function Dose(name, preis, gewicht, author, wohntIn) {
    this.name = name;
    this.preis = preis;
    this.gewicht = gewicht;
    this.author =  author;
    this.wohntIn = wohntIn;
    this.printDescription = function () {
        document.write(`<h1>Die Dose beinhaltet: ${this.name} von Schlachter ${this.author}</h1><br />`);
        document.write(`<h2>Die Füllmenge der Dose beträgt: ${this.gewicht} Gramm </h2><br />`);
        document.write(`<h3>Der Preis der Dose beträgt zur Zeit: ${this.preis} € </h3><br />`);
        document.write(`Der Schlachter ${this.author} wohnt in ${this.wohntIn} </h4><br />`);
    }
}
const dose = new Dose(
    'Sauerfleisch',
    '3.10',
    '200',
    'Hermann Mahler',
    '29614 Soltau'
)
dose.printDescription();
const dose1 = new Dose(
    'Hausmacher-Leberwurst',
    '2.60',
    '200',
    'Hermann Mahler',
    '29614 Soltau'
)
dose1.printDescription();