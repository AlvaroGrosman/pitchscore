 async function salvar() {
    let id=0;
	let nome=jQuery('#id_nome').val();
	let email=jQuery('#id_email').val();
	let matricula=jQuery('#id_matricula').val();
	let senha=jQuery('#id_senha').val();
	let json={'id':id, 'nome':nome, 'email':email, 'matricula':matricula, 'senha':senha};
	await $.ajax({
			type: 'POST',
			url: '/salvarAvaliador',
			dataType: 'json',
			data: json,
			success: function(result) {
                alert("Salvo com sucesso!");
			},
			error: function() {
				alert('ERRO!');
			}
	});
 }

 jQuery(function() {
	jQuery('#id_btn_salvar').click(function() {
		salvar();
	});
});
 async function salvar() {
    let id=0;
	let nome=jQuery('#id_nome').val();
	let email=jQuery('#id_email').val();
	let matricula=jQuery('#id_matricula').val();
	let senha=jQuery('#id_senha').val();
	let json={'id':id, 'nome':nome, 'email':email, 'matricula':matricula, 'senha':senha};
	await $.ajax({
			type: 'POST',
			url: '/salvarAvaliador',
			dataType: 'json',
			data: json,
			success: function(result) {
                alert("Salvo com sucesso!");
			},
			error: function() {
				alert('ERRO!');
			}
	});
 }

 jQuery(function() {
	jQuery('#id_btn_salvar').click(function() {
		salvar();
	});
});