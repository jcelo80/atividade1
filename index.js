function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
  
    if (isNaN(peso) || isNaN(altura)) {
      alert("Por favor, insira valores válidos para peso e altura.");
      return;
    }
  
    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);
  
    document.getElementById("resultado").innerHTML = "Seu IMC é " + imc.toFixed(2) + " e você está classificado como " + classificacao;
    
  }
  
  function classificarIMC(imc) {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc < 25) {
      return "Peso normal";
    } else if (imc < 30) {
      return "Sobrepeso";
    } else if (imc < 35) {
      return "Obesidade grau I";
    } else if (imc < 40) {
      return "Obesidade grau II";
    } else {
      return "Obesidade grau III";
    }
  }
  