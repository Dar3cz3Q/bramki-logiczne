//Zmiana pomiedzy sekwencja a bramkami
function setlisteners_seque_desc () {
    for (let i=0; i < 5; i++) {
        var sequence_button = document.getElementsByClassName("sequence-button")[i];
        sequence_button.addEventListener("click", sequence);
        var paragraf_button = document.getElementsByClassName("paragraf-button")[i];
        paragraf_button.addEventListener("click", paragraf);
    }
}
function sequence () {
    var gate_id = $(this).attr("forgate");
    document.getElementById('paragraf-description-' + gate_id + '').style.display = "none";
    document.getElementById('paragraf-sequence-' + gate_id + '').style.display = "inline";
    document.getElementById('paragraf-description-' + gate_id + '-button').style.color = "#ffffff";
    document.getElementById('paragraf-sequence-' + gate_id + '-button').style.color = "#c34f4f";
}
function paragraf () {
    var gate_id = $(this).attr("forgate");
    document.getElementById('paragraf-description-' + gate_id + '').style.display = "inline";
    document.getElementById('paragraf-sequence-' + gate_id + '').style.display = "none";
    document.getElementById('paragraf-description-' + gate_id + '-button').style.color = "#c34f4f";
    document.getElementById('paragraf-sequence-' + gate_id + '-button').style.color = "#ffffff";
}