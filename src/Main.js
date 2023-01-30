"use strict"

window.onload = function() {
	// Random.seed = new Date(document.getElementById("seed").value);
	document.getElementById("seed").value = new Date();
	
}

function run(){
	
	Random.seed = new Date(document.getElementById("seed").value);
	// alert(Random.seed);
	let [teamA, teamB] = makeTeam(Member);
	let i = 1;
	for (let i=0; i<3; i++){
		document.getElementById("p"+(i+1)).innerText = teamA[i];
		if (i != 2){
			// document.getElementById("c"+(i+1)).innerText = getRandomChamp(champList);
			document.getElementById("c"+(i+1)).innerText = getRandomChamp(champList) + "\nsub : " + getRandomChamp(champList);
		}
	}
	for (let i=0; i<3; i++){
		document.getElementById("p"+(i+4)).innerText = teamB[i];
		if (i != 2){
			// document.getElementById("c"+(i+4)).innerText = getRandomChamp(champList);
			document.getElementById("c"+(i+4)).innerText = getRandomChamp(champList) + "\nsub : " + getRandomChamp(champList);
		}
	}
}
