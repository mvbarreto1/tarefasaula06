//function contarVogais(texto) {
    
  //  const vogais = 'aeiouAEIOU';
    
   
    //let contador = 0;
    
  
    //for (let i = 0; i < texto.length; i++) {
        
      //  if (vogais.includes(texto[i])) {
        //    contador++;
        //}
    //}
    
    
    //return contador;
//}

//const stringUsuario = 'Beterraba';
//console.log(contarVogais(stringUsuario)); 

//-----  QUESTÃO DOIS -----

function quadrado(numero) {
    return numero * numero;
}

const numero = 5;
console.log(`O quadrado de ${numero} é ${quadrado(numero)}`);

//------ QUESTÃO TRÊS -----

function calcularCirculo(raio) {
    const pi = Math.PI;
    const area = pi * raio * raio;
    const perimetro = 2 * pi * raio;
    
    return {
        area: area,
        perimetro: perimetro
    };
}


const raio = 5;
const resultados = calcularCirculo(raio);
console.log(`Para um círculo com raio ${raio}:`);
console.log(`Área: ${resultados.area}`);
console.log(`Perímetro: ${resultados.perimetro}`);

//----------- QUESTÃO QUATRO ----------


function ehPrimo(numero) {
    if (numero <= 1) {
        return false; 
    }
    if (numero <= 3) {
        return true; 
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false; 
    }
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false; 
        }
    }
    return true;
}


function verificarNumeroPrimo() {
    const entrada = prompt("Digite um número para verificar se é primo:");
    const numero = parseInt(entrada, 10);

    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido.");
    } else {
        const resultado = ehPrimo(numero);
        if (resultado) {
            console.log(`${numero} é um número primo.`);
        } else {
            console.log(`${numero} não é um número primo.`);
        }
    }
}


verificarNumeroPrimo();
