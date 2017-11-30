function digital_root(num) {
	if (num < 10) {
		return num
	};

	sum=0;
	while (num != 0) {
		sum+=num%10;
		num= parseInt(num/10);
	}

	return digital_root(sum);
}

#iterate

function fibs(num) {
	retarr=[1,1];
	if (num==0){
		return []
	}
	else if (num ==1) {
		return [1]
	}
	else if (num==2) {
		return retarr
	}
	else {
		for (i=3; i<num+1; i++) {
			retarr.push(retarr[retarr.length-1]+retarr[retarr.length-2])
		}
		return retarr
	}
}

#recursive

function fibs(num) {
	retarr=[1,1];
	if (num==0){
		return []
	}
	else if (num ==1) {
		return [1]
	}
	else if (num==2) {
		return retarr
	}
	else {
		prev_fibs= fibs(num-1);
		prev_fibs.push(retarr[retarr.length-1]+retarr[retarr.length-2])
	}
	return retarr;
}

#pair_sum

function pair_sum(arr, k) {
	let seen = new Set();
	let answer = new Set();
	for (let i=0; i<arr.length; i++){
		let num = arr[i];
		if (seen.has(k-num)){
			answer.add([Math.min(arr[i], k-arr[i]), Math.max(arr[i], k-arr[i])]);
		} else {
			seen.add(num);
		}
	}
	return answer;
}

#productify

function productify(arr) {
	let prod = arr.map(x=>1);
	lower_prod=1;
	for (let i=0; i<arr.length; i++){
		prod[i]= prod[i]*lower_prod;
		lower_prod=lower_prod*arr[i];
	}
	upper_prod=1;
	for (let i=arr.length-1; i>-1; i--){
		prod[i]= prod[i]*upper_prod;
		upper_prod=uppoer_prod*arr[i];
	}
	return prod;
}

#rand7
function rand5(){
	return Math.floor(Math.random()*5);
}

function rand7(){
	let num = 5*rand5()+rand5();
	if (num<21){
		return num%7;
	} else {
	rand7();
	}
}

function rand25(){
	let num = 5*rand5()+rand5();
	if (num<21){
		return num;
	} else {
		rand25();
	}
}




