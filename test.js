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
