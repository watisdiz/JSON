# Oppimistehtävä 3 JSON

Kuinka hain JSON-dataa mock-API:sta JavaScriptin avulla ja näytin sen verkkosivulla. Tehtävään kuului HTML-tiedoston ja JavaScript-tiedoston luominen sekä niiden yhdistäminen, jotta kurssitiedot ja niihin liittyvät linkit voidaan näyttää verkkosivulla.

## Tehdyt tehtävät

### 1. HTML-tiedoston luominen
- Loin `index.html`-nimisen HTML-tiedoston, jossa on `div`-elementti ID:llä `vastaus` datan näyttämistä varten. HTML-tiedostoon lisäsin myös linkin ulkoiseen JavaScript-tiedostoon (`oma.js`).

### 2. JSON-datan haku Mock API:sta
  - Käytin Fetch API:ta hakemaan dataa mock-API-osoitteesta: `https://run.mocky.io/v3/a6e8c032-c997-4bcf-8e2a-8b40ff4e8ea2`.
  - JSON-vastauksen jälkeen kutsuin funktiota, joka käsittelee datan ja näyttää sen verkkosivulla.
  - Toteutin virheenkäsittelyn, jotta käyttäjälle näytetään viesti, jos datan hakeminen epäonnistuu.

### 3. JSON-datan validointi
- Käytin [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)-työkalua JSON-datan validointiin. Tarkistin JSON-datan virheiden välttämiseksi.

### 4. Kurssitietojen näyttäminen
- Näytin JSON-datasta haetut kurssitiedot verkkosivulla `p`-elementin avulla, käyttäen vahvennettua muotoilua.

### 5. Kurssin sisällön näyttäminen (taulukkotieto)
  - Hain kurssin sisällön JSON-datan taulukosta ja näytin sen listana (`<ul>` ja `<li>`-elementit).
  - Käytin `for`-silmukkaa taulukon jäsenten läpikäymiseen ja listaelementtien dynaamiseen luomiseen.

### 6. Tekniikoiden näyttäminen linkkeinä (objektitaulukko)
  - Näytin tekniikat listana, jossa jokainen tekniikka oli linkitetty vastaavaan URL-osoitteeseen.
  - Käytin `for`-silmukkaa tekniikkaobjektien läpikäymiseen, ja loin jokaisesta tekniikasta listaelementin, jossa oli klikkauskelpoinen linkki.

### 7. Kaikkien elementtien integrointi verkkosivulle
- Kirjoitin JavaScript-koodin, joka yhdistää kaikki yllä olevat toiminnot, jotta JSON-data haetaan ja näytetään oikein, mukaan lukien kurssitiedot, sisältö ja tekniikkalinkit.

## Käyttöohjeet
1. Avaa `index.html`-tiedosto verkkoselaimessa.
2. Sivu hakee automaattisesti JSON-datan mock-API:sta.
3. Haettu data, mukaan lukien kurssitiedot, sisältö ja tekniikkalinkit, näytetään verkkosivulla.

## Vianmääritys
- Jos data ei lataudu, varmista, että mock-API-osoite on käytettävissä.
- Käytä selaimen kehitystyökaluja (F12) tarkistaaksesi mahdolliset virheet konsolista.

## Tehtävän rakenne
- `index.html`: Verkkosivun HTML-rakenne.
- `oma.js`: JavaScript-tiedosto, joka vastaa JSON-datan hakemisesta ja näyttämisestä.
