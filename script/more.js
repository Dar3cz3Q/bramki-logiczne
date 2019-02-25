//Mniej/Wiecej Opisu
var ids = [
	'or',
	'and',
	'not',
	'nor',
	'nand',
	'xor',
];

function more(id) {
	document.getElementById('description-' + ids[id] + '-less').style.display = "none";
	document.getElementById('description-' + ids[id] + '-more').style.display = "inline";
	document.getElementById('button-' + ids[id] + '-less').style.display = "none";
	document.getElementById('button-' + ids[id] + '-more').style.display = "inline";
}

function less(id) {
	document.getElementById('description-' + ids[id] + '-less').style.display = "inline";
	document.getElementById('description-' + ids[id] + '-more').style.display = "none";
	document.getElementById('button-' + ids[id] + '-less').style.display = "inline";
	document.getElementById('button-' + ids[id] + '-more').style.display = "none";
}
