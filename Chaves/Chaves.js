//**************Fase 1 - Chaves**************

function Responder() {
  
  while(true) {    
    let option;
    option = prompt("1- Você ajuda a senhora com a compras e depois pede ela um dinheiro em troca \n 2- Você ignora a senhora e continua chorando.");
    
    if (option == 1) {
      alert("Parabéns!! Vamos para a próxima fase!");
      location.replace("../Chaves/ChavesFase2.html");
      break;
    } else if (option == 2) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    }
    alert ("Responda com 1 ou 2.")
  }

}

//**************Fase 2 - Chaves**************

function ResponderFase2() {

  while(true) {    
    let option;
    option = prompt("1- Você grita com a senhora e rouba as compras como pagamento. \n 2- Você diz que entende e volta para vila.");
    
    if (option == 1) {
      alert("GAMER OVER MANINHO(A) 😝");
      location.replace("../gameOver/over.html");
      break;
    } else if (option == 2) {
      alert("Parabéns!! Vamos para a próxima fase!");
      location.replace("../Chaves/ChavesFase3.html");
      break;
    }
    alert ("Responda com 1 ou 2.");
    break;
  }
}

//**************Fase 3 - Chaves**************

function ResponderFase3() {
  while(true) {    
    let option;
    option = prompt("1- Chaves entra no seu barril e fica choramingando \n 2- Chaves conta para o Sr.Barriga sobre a senhora e pede um dinheiro para poder sair com seus amigos");
    
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