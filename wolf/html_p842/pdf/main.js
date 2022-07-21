var x = document.querySelector('.output');
//
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Der Webbrowser unterstützt das Geolocation API nicht";
    }
}
//
function showPosition(position) {
    var pos = "Breitengrad: " + position.coords.latitude;
    pos += "<br>Längengrad: " + position.coords.longitude;
    x.innerHTML = pos;
}