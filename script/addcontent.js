//Wywołanie funkcji po załadowaniu strony
window.addEventListener("load", addcontent);
//Pobieranie zawartości z pliku "content.json"
function addcontent() {
    $.ajax({
        method: "GET",
        url: "content.json",
        contentType: "application/json",
        dataType: "JSON",
        success: function (content) {
            success(content);
        },
        error: function (content) {
            error(content);
        }
    });
}
//Tworzenie zawartości na stronie za pomocą pętli "each"
function success(content) {
    $("main").html(`
		<div id="content"></div>
	`);

    $.each(content, function (i, item) {
        var name = item.name,
            id = item.id,
            style_element = item.additional_style_element,
            code = item.code,
            number = item.number,
            device_image = item.description.device_image,
            device_image_id = item.description.device_image_id,
            description_less = item.description.description_content_less,
            description_more = item.description.description_content_more,
            symbol = item.description.symbol_image,
            table = item.description.truth_table_image,
            sequence_image = item.sequence.sequence_image,
            sequence_content = item.sequence.sequence_content;

        if (style_element === undefined) {
            var style = "article";
        } else {
            var style = style_element;
        }

        $("#content").append(`

		<!--Bramka ${name}-->

			<div code="${code}" id="${id}"></div>

			<div code="${code}" class="article${style}">

				<div code="${code}" class="name">

					<span code="${code}" class="animation">

						<b code="${code}">${name}</b>
						<b code="${code}">-</b> 

							<div code="${code}" id="paragraf-description-${id}-button" class="general-button paragraf-button" onClick="description(${number})">Opis</div>	

							<b code="${code}">|</b>

							<div code="${code}" id="paragraf-sequence-${id}-button" class="general-button sequence-button" onClick="sequence(${number})">Sekwencje</div>

					</span>

				</div>

				<div code="${code}" id="paragraf-description-${id}">

					<div code="${code}" class="device">

						<div code="${code}" class="device-image">

							<img code="${code}" alt="Miejsce na obrazek" class="device-img" src="${device_image}">

							<a code="${code}" href="${device_image}" data-lightbox="image-${device_image_id}" data-title="Naciśnij ESC aby wyjść" class="scale"><span class="icon"><i code="${code}" class="icon-search"></i><p>Powiększ</p></span></a>

						</div>

					</div>

					<div code="${code}" class="describe">

						<div code="${code}" id="description-${id}-less" class="description">

							<span code="${code}" class="animation">

								${description_less}

								<span code="${code}" id="button-${id}-less" class="description-button" onClick="more(${number})">Pokaż więcej</span>

							</span>

						</div>

						<div code="${code}" id="description-${id}-more" class="description hidden_element">

							<span code="${code}" class="animation">

								${description_more}

								<span code="${code}" id="button-${id}-more" class="description-button" onClick="less(${number})">Pokaż mniej</span>

							</span>

						</div>

					</div>

					<div code="${code}" class="symbol">

						<div code="${code}" class="symbol-img">

							<div code="${code}" class="information">

								<img code="${code}" alt="Miejsce na obraz" title="Symbol dla bramki ${name}" class="symbol-img" src="${symbol}">

								<p code="${code}" class="desc">Symbol dla bramki ${name}</p>

							</div>

						</div>

					</div>

					<div code="${code}" class="truth-table">

						<div code="${code}" class="truth-table-img">

							<div code="${code}" class="information">

								<img code="${code}" alt="Miejsce na obraz" title="Tabela prawdy dla bramki ${name}" class="truth-table-img" src="${table}">

								<p code="${code}" class="desc">Tabela prawdy dla bramki ${name}</p>

							</div>

						</div>

					</div>

				</div>

				<div code="${code}" class="hidden_element" id="paragraf-sequence-${id}">

					<div code="${code}" class="sequence">

						<div code="${code}" class="sequence-image">

							<div code="${code}" class="information">

								<img code="${code}" alt="Miejsce na obraz" title="Sekwencja dla bramki ${name}" class="sequence-img" src="${sequence_image}">

								<p code="${code}" class="desc sequence-desc">Sekwencja dla bramki ${name}</p>

							</div>

						</div>

					</div>

					<div code="${code}" class="describe">

						<div code="${code}" class="sequence-description">

							<span code="${code}" class="animation">

							 	${sequence_content}

							</span>

						</div>

					</div>

				</div>

			</div>
`)
    });
    //Wywołanie funkcji która utworzy pasek progressu na stronie
    progress();
}
//Komunikat jeżeli pobieranie się nie powiodło
function error(content) {
    $("main").html(`
		<div id="content">
            <div class="error"><span class="error_text">Pobranie zawartości nie powiodło się.</span></div>
        </div>
	`);
}
