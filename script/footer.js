//Wywołanie funkcji po załadowaniu strony
window.addEventListener("load", footer);
function footer() {
    $("footer").html(`
        <div id="footer">
            <span class="footer--text"><span class="bramki">Bramki</span>&nbsp;logiczne - symbol, opis, tabela prawdy</span> 
        </div>
    `);
}
