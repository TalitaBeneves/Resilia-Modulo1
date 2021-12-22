//**************Fase 1 - Chiquinha**************

function Responder() {
  
  while(true) {    
    let option;
    option = prompt("1- Chiquinha tenta fugir para sair com os amigos. \n 2- Chiquinha fica em casa e obedece as ordens do pai.");
    
    if (option == 1) {
      alert("Parabéns!! Vamos para a próxima fase!");
      location.replace("../Chiquinha/ChiquinhaFase2.html");
      break;
    } else if (option == 2) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    }
    alert ("Responda com 1 ou 2.");
  }

}

//**************Fase 2 - Chiquinha**************

function ResponderFase2() {

  while(true) {    
    let option;
    option = prompt("1- Chiquinha A REBELDE pega a bolsa e sai correndo. \n 2- Chiquinha pensa que isso é uma loucura e volta para casa");
    
    if (option == 1) {
      alert("Parabéns!! Vamos para a próxima fase!");
      location.replace("../Chiquinha/ChiquinhaFase3.html");
      break;
    } else if (option == 2) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    }
    alert ("Responda com 1 ou 2.");
  }
}

//**************Fase 3 - Chiquinha**************

function ResponderFase3() {
  while(true) {    
    let option;
    option = prompt("1-  Chiquinha pega o dinheiro e da para o seu pai pagar o aluguel. \n 2- Chiquinha pega o dinheiro e vai para a festa com seus amigos e gasta tudo.");
    
    if (option == 1) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    } else if (option == 2) {
      alert("Parabéns!! Você Venceu 🏆");
      location.replace("../Win/win.html");
      break;
    }
    alert ("Responda com 1 ou 2.");
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