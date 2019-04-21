//Mniej/Wiecej Opisu
function setlisteners_more_less () {
    for (let i=0; i < 6; i++) {
        var more_button = document.getElementsByClassName("more")[i];
        more_button.addEventListener("click", more);
        var less_button = document.getElementsByClassName("less")[i];
        less_button.addEventListener("click", less);
    }
}
function less () {
    var gate_id = $(this).attr("forgate");
    console.log(gate_id);
    document.getElementById('description-' + gate_id + '-less').style.display = "inline";
    document.getElementById('description-' + gate_id + '-more').style.display = "none";
    document.getElementById('button-' + gate_id + '-less').style.display = "inline";
    document.getElementById('button-' + gate_id + '-more').style.display = "none";
}
function more () {
    console.log(gate_id);
    var gate_id = $(this).attr("forgate");
    document.getElementById('description-' + gate_id + '-less').style.display = "none";
    document.getElementById('description-' + gate_id + '-more').style.display = "inline";
    document.getElementById('button-' + gate_id + '-less').style.display = "none";
    document.getElementById('button-' + gate_id + '-more').style.display = "inline";
}
