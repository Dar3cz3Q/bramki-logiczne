//Zmiana pomiedzy sekwencja a bramkami
var ids = [
	'or',
	'and',
	'not',
	'nor',
	'nand',
	'xor',
];

function description(id) {
	document.getElementById('paragraf-description-' + ids[id] + '').style.display = "inline"
	document.getElementById('paragraf-sequence-' + ids[id] + '').style.display = "none";
	document.getElementById('paragraf-description-' + ids[id] + '-button').style.color = "#c34f4f";
	document.getElementById('paragraf-sequence-' + ids[id] + '-button').style.color = "#ffffff";
}

function sequence(id) {
	document.getElementById('paragraf-description-' + ids[id] + '').style.display = "none";
	document.getElementById('paragraf-sequence-' + ids[id] + '').style.display = "inline";
	document.getElementById('paragraf-description-' + ids[id] + '-button').style.color = "#ffffff";
	document.getElementById('paragraf-sequence-' + ids[id] + '-button').style.color = "#c34f4f";
}
