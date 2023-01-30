"use strick"

const Member = {
	tr1 : ["김종현", "김현태"],
	tr2 : ["최원준", "한윤상"],
	tr3 : ["백경민", "정연성"],
}

function makeTeam(member) {
	let teamA = [];
	let teamB = [];
	Object.values(member).forEach(arr => {
		let i = getRandomNum(0, 2);
		teamA.push(arr[i]);
		teamB.push(arr[Math.abs(i - 1)]);
	})
	return [teamA,teamB];
}
// let [a, b] = makeTeam(Member);
// console.log(a);
// console.log(b);
// alert(a);
// alert(b);


