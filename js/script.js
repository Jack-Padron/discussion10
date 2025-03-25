let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

console.log("javascript file is linked");
// Answers

// Question 1
let hostName = document.getElementById("host-name");

hostName.innerHTML = "Jack";

//Question 2
let instructionsButton = document.getElementById("instruction_button");
instructionsButton.addEventListener("click", function(){
    // console.log("button has been clicked");
    let questions = document.querySelectorAll(".question");
    // console.log(questions);
    questions.forEach(function(){
        for(let question of questions){
            if(question.style.display == "none"){
                question.style.display = "block";
                instructionsButton.innerHTML = "Hide Instructions";
            } else {
                question.style.display = "none";
                instructionsButton.innerHTML = "Show Instructions";
            }
        }
    })
})

//Question 3
let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");

firstNameInput.addEventListener("input", function() {
    if (firstNameInput.value.trim().toLowerCase() === "john") {
        lastNameInput.value = "Doe";
    } else {
        lastNameInput.value = "";
    }
});

//Question 4


//Question 5


//Question 6


//Question 7


//Question 8


//Extra challenge: reset button

