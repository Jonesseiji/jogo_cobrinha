// adicionar um contador ao jogo
let jogo = setInterval(iniciarJogo, 100);

let elemento = document.querySelector('#contador');
		let contador = 0;
		
		setInterval(() => elemento.innerHTML = contador++,);