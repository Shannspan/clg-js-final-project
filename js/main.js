document.getElementById("marine-park").style.backgroundColor ="#D5D3D9";

wrappers = document.querySelector(".wrapper");

wrappers.style.backgroundColor = "#cca2ab";


const gameTitle = document.getElementById("game-title");

function popShell() {
  gameTitle.style.color = "#355B97";
  gameTitle.innerHTML = "Let's play Shell Tac Toe!"
}

gameTitle.addEventListener("mouseover",popShell);


//Function for Index page Select favourite shell

const select = document.querySelector('select');
const para = document.getElementById("selector-output");

select.addEventListener('change', setShell);

function setShell() {
  const choice = select.value;

  if (choice === 'cowry') {
    para.textContent = 'Often used in ancient times as currency! Cowry shells stay shiny due to the animal covering the outside of the shell with part of its body during its life';
  } else if (choice === 'trochus') {
    para.textContent = 'A spiralling shell of a marine snail that rises to a conical point. Trochus have been a mainstay of fashion for decades - the "mother of pearl" finish used for buttons and jewellery.';
  } else if (choice === 'clam') {
    para.textContent = 'The northern waters of Western Australia are home to five of the seven known giant clam species. Maxing out at 260 kgs the largest variety is equally remarkable due to the vivid blue colouring of the living animal.';
  } else if (choice === 'turban') {
    para.textContent = 'Often referred to as "periwinkles", this spiral shelled marine snail is unusual because it keeps itself safe with a hard shell door called the operculum.Turban shell operculum are round, flat with a spiral from the centre and are often called "cats eyes".';
  } else {
    para.textContent = '';
  }
}

//declare an object literal using properties only
const beachProfile = {
  name: "Turtle Cliffs",
  location: "5 km South of Coral Bay",
  type: "Very soft sand, driving on beach is not recommended",
  vehicle: "4WD required"
};
console.log(beachProfile.location);

//declare an object literal using properties and method
 const beachProfile2 = {
  name: "Five Fingers Reef",
  location: "4.5 km South of Coral Bay",
  type: "alternating hard and soft sand",
  vehicle: "4WD is required",
  beach: function() {console.log(this.name + " is " + this.location);
 }
 };
//Fetch data - sent to console as per method
 beachProfile2.beach();
