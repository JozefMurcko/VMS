// Zadefinovanie globálnych premenných.
let searchFieldEl;
let searchSubmitBtnEl;
let autocompleteEl;
let roomNameEl;
let roomNumberEl;
let roomFloorEl;
let roomDescriptionEl;
let floorMapEl;

let homeSection;
let mapSection;
let mapSectionTitle;

let errorEl;

/***
 * Zoznam všetkých poschodí na škole.
 * Slúži na pridelenie SVG obrázku k názvu poschodia.
 * Kľúč je presný názov poschodia ako sa bude neskôr zobrazovať a je napísaný aj nižšie v roomsData.
 * Hodnota je relatívna cesta k SVG obrázku aj s .svg príponou.
 * @type {*[]}
 */
const floorsData = {
    'prízemie': 'floor-plans/floor-1.svg',
    '1. poschodie': 'floor-plans/floor-2.svg',
    '2. poschodie': 'floor-plans/floor-3.svg',
    '3. poschodie': 'floor-plans/floor-4.svg',
    '4. poschodie': 'floor-plans/floor-5.svg'
};

/***
 * Zoznam všetkých miestností na škole.
 * Každá miestnosť obsahuje field id, name, floor a description
 * @type {*[]}
 */
const roomsData = [
    {
        id: '2',
        name: 'Zástupca Ing. Zoltán Tóth',
        floor: 'prízemie',
        description: 'Zástupca riaditeľa školy pre praktické vyučovanie.'
    },
    {
        id: '4',
        name: 'Zástupkyňa PhDr. Amália Havrilová',
        floor: 'prízemie',
        description: 'Zástupkyňa riaditeľa školy pre všeobecno-vzdelávacie predmety.'
    },
    {
        id: '5',
        name: 'Zástupkyňa Ing. Soňa Krempaská',
        floor: 'prízemie',
        description: 'Zástupkyňa riaditeľa školy pre odborné predmety.'
    },
    {
        id: '6',
        name: 'Zástupca Ing. Milan Schvarzbacher, MBA',
        floor: 'prízemie',
        description: 'Zástupca riaditeľa školy pre ekonomické a technické úlohy.'
    },
    {
        id: '7',
        name: 'Učebňa č. 7',
        floor: 'prízemie',
        description: 'Toto je učebňa cudzích jazykov.'
    },
    {
        id: '8',
        name: 'Kabinet - Molitorisová, Kovalčinová, Čekanová, Ďuratná, Lechman, Nemsila',
        floor: 'prízemie',
        description: 'Kabinet učiteľov: Ing. Izabela Molitorisová, Ing. Kovalčinová Bernarda, Ing. Adriana Čekanová, Ing. Ľudmila Ďuratná, Ing. Ján Lechman, Ing. Pavol Nemsila'
    },
    {
        id: '9',
        name: 'Výťah',
        floor: 'prízemie',
        description: ''
    },
    {
        id: '10',
        name: 'Toalety ženy',
        floor: 'prízemie',
        description: ''
    },
    {
        id: '11',
        name: 'Miestnosť č. 11',
        floor: 'prízemie',
        description: 'Toto je konferenčná miestnosť.'
    },
    {
        id: '12',
        name: 'Toalety muži',
        floor: 'prízemie',
        description: ''
    },
    {
        id: '13',
        name: 'Učebňa č. 13',
        floor: 'prízemie',
        description: 'Táto učebna nemá umývadlo.'
    },
    {
        id: '14',
        name: 'Miestnosť č. 14',
        floor: 'prízemie',
        description: 'Táto miestnosť slúži ako kancelária hospodárky školy - Mária Jufková.'
    },
    {
        id: '15',
        name: 'Miestnosť č. 15',
        floor: 'prízemie',
        description: 'Táto miestnosť slúži ako kancelária účtovníčky školy - Viera Kadounová.'
    },
    {
        id: '16',
        name: 'Miestnosť č. 16',
        floor: 'prízemie',
        description: ''
    },
    {
        id: '17',
        name: 'Miestnosť č. 17',
        floor: 'prízemie',
        description: 'Personálna a mzdová agenda -Marcela Paláščáková.'
    },
    {
        id: '18',
        name: 'Spoločenská miestnosť',
        floor: 'prízemie',
        description: 'Toto je spoločenská miestnosť.'
    },
    {
        id: '19',
        name: 'Sekretariát',
        floor: 'prízemie',
        description: 'Sekretariát riaditeľa školy.'
    },
    {
        id: '20',
        name: 'Riaditeľna',
        floor: 'prízemie',
        description: 'Riaditeľ školy Ing. Štefan Krištín.'
    },
    {
        id: '21',
        name: 'Vrátnica',
        floor: 'prízemie',
        description: ''
    },
    /***
     * 1.poschodie
     ***/
    {
        id: '22',
        name: 'Kabinet - Trnková, Fabianová, Skalská',
        floor: '1. poschodie',
        description: 'Kabinet učiteľov: Ing. Jana Trnková, Mgr. Monika Fabianová, Mgr. Lenka Skalská'
    },
    {
        id: '23',
        name: 'Toalety muži',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '24',
        name: 'Učebňa č. 24',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '25',
        name: 'Učebňa č. 25',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '26a',
        name: 'Učebňa č. 26a',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '26b',
        name: 'Učebňa č. 26b',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '27',
        name: 'Učebňa č. 27',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '28a',
        name: 'Učebňa č. 28a',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '28b',
        name: 'Učebňa č. 28b',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '29',
        name: 'Učebňa č. 29',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '30',
        name: 'Učebňa č. 30',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '31',
        name: 'Kabinet - Gmiter, Kollár, Barutiak, Copko, Keusch, Bučko',
        floor: '1. poschodie',
        description: 'Kabinet učiteľov: Ing. Jozef Gmiter, Ing.Lukáš Kollár, Ing. Miroslav Barutiak, Ing. Michal Copko, Ing. Peter Keusch, Ing Radoslav Bučko'
    },
    {
        id: '32',
        name: 'Výťah',
        floor: '1. poschodie',
        description: ''
    },
    {
        id: '33',
        name: 'Toalety ženy',
        floor: '1. poschodie',
        description: ''
    },
    /***
     * 2.poschodie
     ***/
    {
        id: '34',
        name: 'Kabinet - Zimovčáková, Dittelová, Kusendová, Englerová',
        floor: '2. poschodie',
        description: 'Kabinet učiteľov: Mgr. Gabriela Zimovčáková, Mgr. Eva Dittelová, Mgr. Jana Kusendová, Mgr. Melánia Englerová'
    },
    {
        id: '35',
        name: 'Toalety muži',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '37',
        name: 'Učebňa č.37',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '38a',
        name: 'Učebňa č.38a',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '38b',
        name: 'Učebňa č.38b',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '39',
        name: 'Učebňa č.39',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '40',
        name: 'Učebňa č.40',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '41a',
        name: 'Učebňa č.41a',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '41b',
        name: 'Učebňa č.41b',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '42',
        name: 'Kabinet - Malachovská, Šalagovičová, Kinčeková, Kopinová, Študencová, Pučanová',
        floor: '2. poschodie',
        description: 'Kabinet učiteľov: Mgr. Gabriela Malachovská, PaedDr. Darina Šalagovičová, Mgr. Ivana Kinčeková, Mgr. Táňa Kopinová, Mgr. Andrea Študencová, Mgr. Soňa Pučanová'
    },
    {
        id: '43',
        name: 'Výťah',
        floor: '2. poschodie',
        description: ''
    },
    {
        id: '44',
        name: 'Toalety ženy',
        floor: '2. poschodie',
        description: ''
    },
    /***
     * 3.poschodie
     ***/
    {
        id: '45',
        name: 'Kabinet - Psota, Berta, Doboš',
        floor: '3. poschodie',
        description: 'Kabinet učiteľov: Ing. Peter Psota, Ing. Peter Berta, Ing. Milan Doboš'
    },
    {
        id: '46',
        name: 'Toalety muži',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '47',
        name: 'Učebňa č.47',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '48',
        name: 'Učebňa č.48',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '49',
        name: 'Učebňa č.49',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '50',
        name: 'Učebňa č.50',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '51',
        name: 'Učebňa č.51',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '52',
        name: 'Učebňa č.52',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '53',
        name: 'Učebňa č.53',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '54',
        name: 'Kabinet - Žatkovič, Stano, Pallai',
        floor: '3. poschodie',
        description: 'Kabinet učiteľov: Ing. Alexander Žatkovič, Ing. Dušan Stano, Ing. Eduard Pallai'
    },
    {
        id: '54a',
        name: 'Výťah',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '55',
        name: 'Miestnosť č.55',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '56',
        name: 'Toalety ženy',
        floor: '3. poschodie',
        description: ''
    },
    /***
     * 4.poschodie
     ***/
    {
        id: '57',
        name: 'Kabinet - Oratorová, Oberhaus',
        floor: '4. poschodie',
        description: 'Kabinet učiteľov: Mgr. Alica Oratorová, Rasa Oberhaus'
    },
    {
        id: '58',
        name: 'Toalety muži',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '59',
        name: 'Učebňa č.59',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '59',
        name: 'Učebňa č.59',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '59',
        name: 'Učebňa č.59',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '59',
        name: 'Učebňa č.59',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '59',
        name: 'Učebňa č.59',
        floor: '3. poschodie',
        description: ''
    },
    {
        id: '59',
        name: 'Učebňa č.59',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '64b',
        name: 'Učebňa č.64b',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '65',
        name: 'Kabinet - Hrivňáková, Ploščica, Vargová, Smatanová, Geročová, Halušková, Očkaiková, Karaffová',
        floor: '4. poschodie',
        description: 'Kabinet učiteľov: Mgr. Mária Hrivňáková, Mgr. Jozef Ploščica, Mgr. Viera Vargová, Mgr. Petra Smatanová, Mgr. Janka Geročová, Mgr. Mária Halušková, PaedDr. Jarmila Očkaiková, RNDr. Estera Karaffová'
    },
    {
        id: '65a',
        name: 'Výťah',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '66',
        name: 'Miestnosť č.66',
        floor: '4. poschodie',
        description: ''
    },
    {
        id: '67',
        name: 'Toalety ženy',
        floor: '4. poschodie',
        description: ''
    },
];

/***
 * Hlavná funkcia, ktorá sa zavolá keď je DOM hotový.
 */
function main() {
    //Toto vyselectuje jednotlive elementy v aplikácií a uloží ich do globálnych premenních, aby sa dali neskôr používať v aplikáci
    searchFieldEl = document.getElementById('search');
    searchSubmitBtnEl = document.getElementById('search-btn');
    autocompleteEl = document.getElementById('autocomplete');

    roomNameEl = document.getElementById('room-name');
    roomNumberEl = document.getElementById('room-number');
    roomFloorEl = document.getElementById('room-floor');
    roomDescriptionEl = document.getElementById('room-description');
    floorMapEl = document.getElementById('floorMap');

    homeSection = document.getElementById('home-section');
    mapSection = document.getElementById('map-section');
    mapSectionTitle = document.getElementById('map-section-title');

    errorEl = document.getElementById('error');

    //Pre error box zaregistruje na kliknutie to že zmizne.
    errorEl.onclick = function () {
        errorEl.style.display = 'none'
    };

    // Pre search input field zaregistruje to že po každom stlačení klávesi sa aktualizuje autocomplete.
    searchFieldEl.onkeyup = function (event) {
        const searchValue = event.target.value;
        updateAutocomplete(getAutocompleteOptions(searchValue))
    }
}


/***
 * Funkcia ktora po zavolani aktualizuje obsah autocomplete boxu
 * Ak niesu ziadne vysledky pre autocomplete schova autocomplete a ak su zobrazi ho.
 * @param options Zoznam moznosti ktore sa maju zobrazit v autocomplite
 */
function updateAutocomplete(options) {
    // Ak nie su ziadne navrhovane vysledky schova autocomplit box
    if (options.length > 0) {
        autocompleteEl.classList.add('open');
    } else {
        // Inak ak su nejake tak ho zobrazi
        autocompleteEl.classList.remove('open');
    }

    // Vytvori premennu do ktorej sa postupne popridavaju HTMLka vsetkych navrhovanych moznosti
    let output = '';

    // Pre kazdu moznost prida k output stringu HTMLko pre dacu moznost
    options.forEach(function (option) {
        output += `<div class="autocomplete-item" onClick="autocompleteClickHandler('${option.id}')">${option.name}<i>(${option.floor})</i></div>`
    });

    //Nakoniec sa pospajany string so vsetkymi navrhovanimi moznostami nastavy ako obsah autocomplit boxu
    autocompleteEl.innerHTML = output;
}

/***
 * Funkcia ktora vrati zo vsetkych miestnosti tie miestnosti ktore v nazve obsahuju hodnotu ktora je zadana ako searchValue argument
 * @param searchValue hodnota ktora sa bude hladat v name parametroch miestnosti
 * @returns {*[]} Vracia array miestnosti ktore maju v nazve vyhladavany retazec
 */
function getAutocompleteOptions(searchValue) {
    return roomsData.filter(function (room) {
        if (room.name.indexOf(searchValue) !== -1) {
            return true;
        }
        return false;
    });
}

/***
 * Zobrazi chybovu hlasku v boxe na vyhladavanim
 * @param errorMessage
 */
function showError(errorMessage) {
    errorEl.innerText = errorMessage;
    errorEl.style.display = 'flex';
}

/***
 * Funkcia ktora spracuvava kliknutie na submit button co vyhladavacom formualri
 */
function searchSubmitBtnHandler() {
    //Vytiahne aktualnu hodnutu search fieldu
    const searchValue = searchFieldEl.value;

    // Ak je field prazdny vypise chybu
    if (searchValue.length === 0) {
        showError('Vyhladavany nazov ucebne je prilis kratky');
        return;
    }

    // Vyhlada vyhovujuce meistnosti
    const rooms = getAutocompleteOptions(searchValue)

    // Ak nenaslo ziadne meistnsoti tak zobrazi chybu
    if (rooms.length === 0) {
        showError('Nenasla sa ziadna miesnost');
        return;
    }

    //Zobrazi mapu pre prvu meistnost v zoznamie miestnosti ktore sa nasli
    showMapForRoom(rooms[0])
}

/***
 * Toto Je funcia ktora sa zavola po kliknuti na niektoru polozku v autocomplite alebo pri submitnuti formularu
 * @param roomId Cislo miestnsoti ktora bolo vybrana
 */
function autocompleteClickHandler(roomId) {
    const room = getRoomById(roomId);
    showMapForRoom(room);
}

/***
 * Funkcia ktora podla ID miestnosti vrati cely obiekt miestnosti
 * @param roomId ID miestnsoti ktoru hladame
 * @returns {*} Obiekt miestnosti
 */
function getRoomById(roomId) {
    return roomsData.find(function (room) {
        return room.id === roomId
    })
}

/***
 * Funkcia ktora prijme obiekt miestnosti a zobrazi ho v HTMLku
 * @param room obiek miestnosti ktora sa ma zobrazit
 */
function showMapForRoom(room) {
    mapSection.style.display = 'flex';
    mapSectionTitle.innerText = 'Navigácia k ' + room.name;

    roomNameEl.innerText = room.name;
    roomNumberEl.innerText = room.id;
    roomFloorEl.innerText = room.floor;
    roomDescriptionEl.innerText = room.description;

    //Toto vyberie podla miestnosti ziska cestu k obrazku mapy
    const imgPath = floorsData[room.floor];

    // Prida event listener na to ze sa SVGcko nacitalo aby sa zavolala funkcia ktora zvyrazni elementy v SVGcku.
    floorMapEl.addEventListener('load', function () {
        //Zavola funkciu ktora v SVGcku vyznaci cestu a zvyrazni cielovu miestnost
        outlineRoomAndPath(room.id);
    });

    //Toto nastavi atribut z ktoreho sa nacitava SVGcko na cestu pre obrazok aktualneho poschodia
    floorMapEl.setAttribute('data', imgPath);


    //Po zobrazeni mapy nascrolluje na mapu
    mapSection.scrollIntoView({
        behavior: 'smooth'
    });
}

/***
 * Tato funkcia podla najde podla IDcka roomky element cesty a samotnej miestnosti a zobrazi/zvyrazni ho.
 * @param roomId
 */
function outlineRoomAndPath(roomId) {
    //Z object elementu vyberie SVG DOM aktualneho svg. Sluzi to na to aby sme mohli upravovat SVGcko z javascriptu
    // TOTO FUNGUJE AK JE STRANKA SKUSTENA NA HTTP. URL MUSI BYT HTTP://LOCALHOST !!!!!
    const floorMapSVG = floorMapEl.contentDocument;

    //Ako prve sa chceme ubezpecit ze ziadna cesta ani miestnost nieje zvyraznena. V podstate schovame uplne vsetky cesti a nastavime vypln roomiek na defaultnu

    //Toto selectne uplne vsetky elementy ktore maju IDcko patriace cestam
    //Selektor *[id^="VMS-PATH"] znamena: vsetky elementy ktorych atribut id začina stringom VMS-PATH
    // Ref: https://www.w3schools.com/cssref/sel_attr_begin.asp
    const allPaths = floorMapSVG.querySelectorAll('*[id^="VMS-PATH"]');

    //Presne to iste ale pre miestnosti
    const allRooms = floorMapSVG.querySelectorAll('*[id^="VMS-ROOM"]');

    //Pre kazdu cestu nastavi style display na none
    allPaths.forEach(function (path) {
        path.style.display = 'none'
    });

    //Pre kazdu miestnost nastavi style display na none
    allRooms.forEach(function (room) {
        room.style.fill = 'none'
    });
    const currentPath = floorMapSVG.querySelector('*[id="VMS-PATH-' + roomId + '"]');
    const currentRoom = floorMapSVG.querySelector('*[id="VMS-ROOM-' + roomId + '"]');

    currentPath.style.display = 'block';
    currentRoom.style.fill = '#278eff';
}

/***
 * Registruje event listener na DOMContentLoaded co zabezpecuje ze funckia main() sa zavola ked bude stranka pripravena
 */
document.addEventListener('DOMContentLoaded', function (event) {
    main();
});