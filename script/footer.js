//Wywołanie funkcji po załadowaniu strony
window.addEventListener("load", footer);
//Pobranie aktualnej daty oraz dodanie zawartości na stronę
function footer() {
    const currentDate = new Date();
    var day = currentDate.getDay();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var date = '' + day + '-' + month + '-' + year + '';
    $("footer").html(`
        <div id="footer">
            <span><b>Bramki&nbsp;logiczne&nbsp;&copy;&nbsp;Wszelkie&nbsp;prawa&nbsp;zastrzeżone&nbsp;|&nbsp;${date}</b></span> 
        </div>
    `);
}
