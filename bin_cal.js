var nums = [];
var count = 0;
var tot = 0;
var clean = false;

function btnEvent(button){
	switch(button.toString()) {
	case '1':
		insert(button.toString());
		break;
	case '0':
		insert(button.toString());
		break;
	case 'plus':
		assign();
		break;
	default:
		assign();
		addNums();
		break;
	}
}

// insert new digit on display
function insert(dig){
	if(clean){
		document.getElementById('display').value = "";
		clean = false;
	}
	document.getElementById('display').value += dig;
	console.log('inserted: ' + dig)
}

// assign new digit to the nums array
function assign(){
	clean = true;
	var value = document.getElementById('display').value;
	nums[count] = parseInt(value, 2);
	console.log('assigned: "' + value + '" as "' + parseInt(value, 2) + '" in nums[' + count + ']');
	count++;
}

// add all nums in nums array
function addNums(){
	console.log('------------------------------------------------------------');
	for(i in nums){
		console.log('nums[' + i + '] = "' + nums[i] + '"');
		console.log('tot = "' + tot + '"');
		tot += nums[i];
		console.log('tot + nums[i] = "' + tot + '"');
	}
	document.getElementById('display').value = tot.toString(2);
	nums = [];
	count = 0;
	tot = 0;
}
