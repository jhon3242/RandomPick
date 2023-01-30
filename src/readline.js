let fs = require('fs');
let array = fs.readFileSync('/Users/choewonjun/Documents/coding/project/RandomPick/src/champion.txt').toString().split("\n");
let num = 0;
let re = 1;
let data = "";
for(i in array) {
    // console.log(array[i]);
	if (num == re) {
		re += 4;
		data += array[i] + "\n";
	}
	num++;
}

