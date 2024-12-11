const odpowiedziLista = [
    "Świetnie!",
    "Kto gra główną rolę?",
    "Lubisz filmy tego reżysera?",
    "Będę 10 minut wcześniej",
    "Może kupimy popcorn?",
    "Ja wolę Colę",
    "Zaproszę jeszcze Grześka",
    "Tydzień temu też byłem w kinie na Diunie",
    "Ja funduję bilety"
];

function wyslijWiadomosc() {
    const poleTekstowe = document.getElementById('wiadomosc');
    const sekcjaCzatu = document.getElementById('chat');

    const sekcjaJolka = document.createElement('section');
    sekcjaJolka.className = 'jolka';

    const obrazekJolka = document.createElement('img');
    obrazekJolka.setAttribute('src', 'Jolka.jpg');
    obrazekJolka.setAttribute('alt', 'Jolanta Nowak');

    const tekstJolka = document.createElement('p');
    tekstJolka.innerText = poleTekstowe.value;

    sekcjaJolka.appendChild(obrazekJolka);
    sekcjaJolka.appendChild(tekstJolka);
    sekcjaCzatu.appendChild(sekcjaJolka);

    sekcjaCzatu.scrollTop = sekcjaCzatu.scrollHeight;

    poleTekstowe.value = '';
}

function generujOdpowiedz() {
    const indeksOdpowiedzi = Math.floor(Math.random() * odpowiedziLista.length);
    const wybranaOdpowiedz = odpowiedziLista[indeksOdpowiedzi];
    const sekcjaCzatu = document.getElementById('chat');

    const sekcjaKrzysiek = document.createElement('section');
    sekcjaKrzysiek.className = 'krzysiek';

    const obrazekKrzysiek = document.createElement('img');
    obrazekKrzysiek.setAttribute('src', 'Krzysiek.jpg');
    obrazekKrzysiek.setAttribute('alt', 'Krzysztof Łukasiński');

    const tekstKrzysiek = document.createElement('p');
    tekstKrzysiek.innerText = wybranaOdpowiedz;

    sekcjaKrzysiek.appendChild(obrazekKrzysiek);
    sekcjaKrzysiek.appendChild(tekstKrzysiek);
    sekcjaCzatu.appendChild(sekcjaKrzysiek);

    sekcjaCzatu.scrollTop = sekcjaCzatu.scrollHeight;
}
