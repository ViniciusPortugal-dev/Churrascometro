let inputA = document.getElementById("adultos")
let inputC = document.getElementById("criancas")
let inputD = document.getElementById("duracao")

let inputR = document.getElementById("resultado")







function calcular() {
    let adultos = inputA.value
    let criancas = inputC.value
    let duracao = inputD.value

    
    
  
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<h2 class="result-info">Você vai precisar de:</h2>`
  resultado.innerHTML += `
    <div class="result-block">
      <p>${qdtTotalCarne/1000} Kg de Carne</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <p>${Math.ceil(qdtTotalCerveja/355)} latas de Cerveja</p>
    </div>
  `
  resultado.innerHTML += `
    <div class="result-block">
      <p>${Math.ceil(qdtTotalBebidas/2000)} garrafas de Bebidas</p>
    </div>
    </br>
    </br>
    </br>
    </br>
    </br>
  `


    


   
    
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
        
    } else {
        return 400;
        
    }
    
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
        
    } else {
        return 1200;
        
    }
    
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
        
    } else {
        return 1000;
        
    }
    
}