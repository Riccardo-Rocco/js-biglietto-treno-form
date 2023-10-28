document.getElementById('calcola').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const cognome = document.getElementById('cognome').value;
    const chilometri = parseFloat(document.getElementById('chilometri').value);
    const eta = parseInt(document.getElementById('eta').value);

    const prezzoPerKm = 0.21;
    let prezzoTotale = chilometri * prezzoPerKm;
    let sconto = "Nessuna offerta";

    if (eta < 18) {
        prezzoTotale *= 0.8;
        sconto = "Sconto Minorenni";
    } else if (eta > 65) {
        prezzoTotale *= 0.6;
        sconto = "Sconto Silver";
    }

    const codiceCP = Math.floor(Math.random() * 1000000).toString().padStart(6, "0");

    document.getElementById('nomeCognomeOutput').innerText = `${nome} ${cognome}`;
    document.getElementById('offertaOutput').innerText = sconto;
    document.getElementById('codiceCPOutput').innerText = codiceCP;
    document.getElementById('prezzoOutput').innerText = `€${prezzoTotale.toFixed(2)}`;

    document.getElementById('bigliettoOutput').style.display = "block";
});
