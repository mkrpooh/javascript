function showTypeOf() {
    console.log(typeof true);
    console.log(typeof false);
    console.log(typeof 4711);
    console.log(typeof 22.22);
    console.log(typeof 'Wildsteig');
    console.log(typeof function() {});
    console.log(typeof {});
    console.log(typeof []);
    console.log(typeof null);
    console.log(typeof undefined);
    console.log(typeof Symbol('B'));
    //
    document.write("<h1>Typ von true: " + typeof true + "</h1><br />");
    document.write("Typ von false: " + typeof false + "<br />");
    document.write("Typ von 4711: " + typeof 4711 + "<br />");
    document.write("Typ von 22.22: " + typeof 22.22 + "<br />");
    document.write("Typ von \"Wildsteig\": " + typeof 'Wildsteig' + "<br />");
    document.write("Typ von function() {}: " + typeof function() {} + "<br />");
    document.write("Typ von {}: " + typeof {} + "<br />");
    document.write("Typ von []: " + typeof [] + "<br />");
    document.write("Typ von null: " + typeof null + "<br />");
    document.write("Typ von undefined: " + typeof undefined + "<br />");
    document.write("<h1>Typ von Symbol(\'B\'): " + typeof Symbol('B') + "</h1><br />");
}