let Random = {
	index : 3,
	chNum : 0,

	set seed(date){
		this._seed = date.getTime();
	},

	get seed(){
		return this._seed;
	},

	getRandomChampNum(){
		let divNum = this._seed / 1000;
		this._seed += 123000;
		if (divNum < 161) {
			return divNum;
		}
		if (divNum % 100 / 10 > 6) {
			return divNum % 100;
		}
		return 100 + (divNum % 100);
	},

	getRandomTeamNum() {
		let str = "" + this._seed;
		let indexNum =  str.charAt(str.length - this.index);
		let result = +indexNum % 2;
		if (++this.index == 6){
			this.index = 3;
		}
		return result;
	}
}

// let now = new Date();
// Random.seed = new Date(now);
// console.log(now);
// let a = Random.getRandomChampNum()
// console.log(a);
// now = new Date("2023-01-30T07:30:02.227Z");
// console.log(now);

// Random.seed = now;
// let result = Random.getRandomChampNum();
// for (let i=0; i<6; i++)
// 	console.log(Random.getRandomTeamNum());