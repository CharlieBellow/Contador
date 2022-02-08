var currentNumberWrapper = document.getElementById('currentNumber');

var currentNumber = 0;

function increment() {
	currentNumber = currentNumber + 1;
	currentNumberWrapper.innerHTML = currentNumber;
  desabilitarMais();
  //desabilitarMenos();
}

/*function verifyNUmber(currentNumberWrapper) {
  if (currentNumberWrapper < 0) {
    currentNumberWrapper.innerHTML.style.color = 'red';
  }

}*/

function decrement() {
	currentNumber = currentNumber - 1;
	currentNumberWrapper.innerHTML = currentNumber;
	//verifyNumber()
}

function desabilitarMais() {
	// verificar se o Nº é 10
	// se for 10 desabilita o botão

	var listaElementosMais = document.getElementsByName('adicionar');
	var botaoMais = listaElementosMais[0];
  var listaElementosMenos = document.getElementsByName('subtrair');
  var botaoMenos = listaElementosMenos[0];
  
	if (currentNumber === 10) {
		// desabilita o botão
		botaoMais.disabled = true;
	} else if (currentNumber === -10) {
		botaoMenos.disabled = true;
  } else if (currentNumber < 0) {
    document.getElementById('currentNumber').style.color = '#ff0000';
  } else if (currentNumber > 0) {
    document.getElementById('currentNumber').style.color = '#000000';
  } else {
    botaoMais.disabled = false;
    botaoMenos.disabled = false;
  }
  


	/*while (currentNumber === 10) {
		botaoMais.disabled = true;
	}*/
}


/*function desabilitarMenos() {
	var listaElementosMenos = document.getElementsByName('subtrair')
  var listaElementosMenos = document.getElementsByTagName('button');
	var botaoMenos = listaElementosMenos[0];
	if (currentNumber === -10) {
		botaoMenos.disabled = true;
	} else if (currentNumber > -10) {
		botaoMenos.disabled = false;
  }
  console.log(botaoMenos);
}
*/



//console.log(botao);

// Desafio:
// fazer com o add event listener
// fazer o botão ser desabilitado quando a soma chegar a 10
// colocar o texto em vermelho quando for negativo

// Desafio Gustavo:

// colocar um style desabilitado no botão
// quando o resultado não for mais 10 (n < 10), reabilitar o botão 
// quando chegar em -10 desabilitar o botão -
// pintar o número de vermelho quando ele for negativo