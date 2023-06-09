$(document).ready(function () {

	function getClimaTempo() {
		$.getJSON('https://lastro-api-l77nw6nd6a-rj.a.run.app/api/clima_tempo/', function ($data) {
			$("#cidade").html($data.cidade);
			$("#temperatura").html($data.temperatura);
			$("#descricao").html($data.descricao);
			$("#sensacao").html($data.sensacao);
			$("#umidade").html($data.umidade);
			$("#pressao").html($data.pressao);
			$("#vento").html($data.vento);
			$("#horario").html('Atualizado às: ' + $data.hora);
			$('#icone').attr('src', $data.icone);
			setTimeout(getClimaTempo, 900000);
		}).done(function () {
			getFinance();
		});
	};

	function getFinance() {
		$.getJSON('https://lastro-api-l77nw6nd6a-rj.a.run.app/api/finance/', function ($data) {
			$("#valor").html($data.valor);
			$("#atualizacao").html('Atualizado: ' + $data.data);
			if ($data.tipo_variacao === 'positivo') {
				$("#indice").html('<span style="color: #2FA605;">' + $data.indice + '</span>');
				$('#iconeVariacao').attr('src', 'icones/arrow_up.png');
			} else {
				$("#indice").html('<span style="color: #DC1313;">' + $data.indice + '</span>');
				$('#iconeVariacao').attr('src', 'icones/arrow_down.png');
			}
			setTimeout(getFinance, 300000);
		}).done(function () {
			var owl = $('.owl-carousel');
			owl.owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 10000,
				dots: false,
				mouseDrag: false,
				touchDrag: false
			});
			$('#loading').hide();
		});
	};

	function mostrarHora() {
		$("#hora").html(moment().format('LTS'));
		setTimeout(mostrarHora, 1000);
	}

	$("#data").html(moment().format('dddd') + ', ' + moment().format('LL'));

	getClimaTempo();
	
	mostrarHora();

});