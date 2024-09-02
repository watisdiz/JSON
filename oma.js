// Fetch JSON data Mocky URL
fetch('https://run.mocky.io/v3/a6e8c032-c997-4bcf-8e2a-8b40ff4e8ea2')
    .then(function (response) {
        return response.json(); // Muunnetaan vastaus JSON-muotoon
    })
    .then(function (responseJson) {
        // Kutsutaan funktiota ja välitetään sille json-vastaus
        kerro(responseJson);
    })
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";
    });

// Funktio JSON-datan käsittelyyn
function kerro(data) {
    var teksti = ""; // Määritellään muuttuja, johon tulostettava tieto kerätään

    // Lisätään otsikko
    teksti += "<h1>" + data.otsikko + "</h1>";

    // Lisätään kuvaus
    teksti += "<p>" + data.kuvaus + "</p>";

    // Lisätään kuva JSON-datan kuva-kentästä
    teksti += "<div>";
    teksti += "<img src='" + data.kuva + "' alt='Kuva' style='width: 100%; max-width: 600px; height: auto;'>";
    teksti += "</div>";

    // Lisätään opintojakson tiedot yhdelle riville kuvan alle
    teksti += "<p><strong>Opintojakso " + data.opintojakso.nimi + " " + data.opintojakso.tunnus + " " + data.opintojakso.opintopisteet + " op</strong></p>";

    // Lisätään sisalto-taulukon tiedot listana
    teksti += "<ul>";
    for (var i = 0; i < data.opintojakso.sisalto.length; i++) {
    teksti += "<li>" + data.opintojakso.sisalto[i] + "</li>";
    }
    teksti += "</ul>";

    // Lisätään tekniikat ja niiden linkit
    teksti += "<h3>Linkit</h3>";
    teksti += "<ul>";
    for (var i = 0; i < data.tekniikat.length; i++) {
    teksti += "<li><a href='" + data.tekniikat[i].linkki + "'>" + data.tekniikat[i].aihe + "</a></li>";
    }
    teksti += "</ul>";

    // Teksti-muuttujan sisällön tulostus HTML-elementtiin
    document.getElementById("vastaus").innerHTML = teksti;
}
