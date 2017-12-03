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
	return rand7();
	}
}


#move_zeros
function move_zeros(arr){
	let answerarr=[];
	let zerocount=0;
	let len = arr.length;
	for (let i=0; i<len; i++){
		if (arr[i]==0){
			zerocount++;
		} else {
			answerarr.push(arr[i]);
		}
	}
	while (zerocount!=0){
		answerarr.push(0);
		zerocount--;
	}
	return answerarr;
}

#binary
13%2 = 1
6%2 = 0
3%2 = 1
1%2 = 1

1101 = (1*2^3)+(1*2^2)+(1*2^1)+(1*2^0)

function binary(num){
	temp = [];
	while (num!= 0){
		temp.unshift(num%2);
		num=Math.floor(num/2);
	}
	return temp.join('')
}

#permutation

function permutation(array) {

}

#sum_rec
function sum_rec(arr){
	if (arr.length==0){
		return 0
	}
	return arr[0]+ sum_rec(arr.slice(1, arr.length))
}

#weighted_random_index
function weighted_random_index(arr) {
	temp=[];
	for (let i = 0; i<arr.length; i++){
		let num = arr[i]
		while (num!=0){
			temp.push(arr[i]);
			num--;
		}
	}
	console.log(temp)
	let picked= temp[Math.floor(Math.random()*temp.length)]
	return arr.indexOf(picked)
}

#uniq_sub
function uniq_sub(word){
	let temp = new Set();
	for (let i=0; i<word.length; i++){
		let sub = word[i];
		temp.add(sub)
		for (let j=1; j<word.length; j++){
			sub+=word[j];
			temp.add(sub);
		}
	}
	let ans =[];
	temp.forEach(x=>ans.push(x));
	return ans;
}

#find_missing_number
function find_missing_number(arr1, arr2){
	let temp= new Set();
	arr1.forEach(x=> temp.add(x))
	for (let i=0; i<arr2.length; i++){
		if (temp.has(arr2[i])==false){
			return arr2[i]	
		}
	}	
}


