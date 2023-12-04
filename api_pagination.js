let jelenlegi = 1;
let oldalak = 5;
let url = new URL("https://www.balldontlie.io");
url.pathname = "/api/v1/players";
url.searchParams.set('per_page', oldalak);

function keres(){
    const beirMezo = document.getElementById("szoveg").value;
    url.searchParams.append("search", beirMezo);

    fetch(url)
    .then(response => response.json())
    .then(adat => {
        for(player of adat.data){
            document.getElementById("eredmeny").innerHTML += 
            "Keresztnév: " + player.first_name + " " + "Vezetéknév: " + player.last_name + " " + "Csapata: " + player.team.full_name + "<br>";
        }
        //document.getElementById("eredmeny").innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error("Hiba!" + error))
}

function elozoOldal() {
    if (jelenlegi > 1) {
        jelenlegi--;
        url.searchParams.set('page', jelenlegi);
        document.getElementById("eredmeny").innerHTML = "";
        keres();
    }
}

function kovetkezoOldal() {
    jelenlegi++;
    url.searchParams.set('page', jelenlegi);
    document.getElementById("eredmeny").innerHTML = "";
    keres();
}

// keres();
