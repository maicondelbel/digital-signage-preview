$(document).ready(function() {

	var qrcode = new QRCode("qrcode", {
		width: 90,
		height: 90
	});

	function makeQRCode(link) {
		qrcode.clear();
		qrcode.makeCode(link);
	};
	
	function getExameFeed() {
		$.getJSON('https://lastro-api-l77nw6nd6a-rj.a.run.app/api/exame/', function($data) {
			$("#titulo").html($data.title);
			$("#descricao").html($data.description);
			$('#loading').hide();
			makeQRCode($data.link);
			setTimeout(getExameFeed, 20000);
		}).done(function() {
			$('#loading').hide();
		});
	};

	getExameFeed();	

});