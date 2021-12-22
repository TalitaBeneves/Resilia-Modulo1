//**************Fase 1 - Sr.Madruga**************

function Responder() {
  
  while(true) {    
    let option;
    option = prompt("1- Sr.Madruga quebra o porquinho para pagar o aluguel e se livra da divida. \n 2- Sr.Madruga continua evitando o seu Barriga.");
    
    if (option == 1) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;

    } else if (option == 2) {
      alert("Parabéns!! Vamos para a próxima fase!");
      location.replace("../Sr.Madruga/MadrugaFase2.html");
      break;
    }
    alert ("Responda com 1 ou 2.")
  }

}

//**************Fase 2 - Sr.Madruga**************


function ResponderFase2() {

  while(true) {    
    let option;
    option = prompt("1- Sr.Madruga corre para a rua antes que o Sr.Barriga o veja. \n 2- Sr.Madruga tenta entrar em alguma casa para se esconder.");
    
    if (option == 1) {
      alert("Parabéns!! Vamos para a próxima fase!");
      location.replace("../Sr.Madruga/MadrugaFase3.html");
      break;
    } else if (option == 2) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    }
    alert ("Responda com 1 ou 2.");
  }
}

//**************Fase 3 - Sr.Madruga**************

function ResponderFase3() {
  while(true) {    
    let option;
    option = prompt("1- Chaves entra no seu barril e fica choramingando \n 2- Chaves conta pro seu Barriga sobre a velhinha e pede o dinheiro.");
    
    if (option == 1) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    } else if (option == 2) {
      alert("Parabéns!! Você Venceu 🏆");
      location.replace("../Win/win.html");
      break;
    }
    alert ("Responda com 1 ou 2.")
  }
}


//*********Voltar ao Menu*********

function Voltar() {
  let confirmou;
  confirmou = confirm("Tem certeza que deseja voltar ao menu inicial?");

  if(confirmou == true) {
    location.assign("../index.html");
  }else {
    location.reload();
  }

}