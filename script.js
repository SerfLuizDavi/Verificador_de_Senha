const passwordInput = document.querySelector("#passwordinput");

passwordInput.addEventListener("input", function () {
    const password = this.value;

    const strengthIndicator = document.querySelector(
       "#password-strength-indicator" 
);

  const strengthText = document.querySelector("#password-strength-text");

  const strengths = {
    0:'',
    1: "Muito Fraca",
    2: "Fraca",
    3: "Moderada",
    4: "Forte",
    5: "Muito Forte",
  };

  let score = 0;

    //Requisitos
    
    if (password.match(/[a-z]/)) score ++ 
    if (password.match(/[A-Z]/)) score ++
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^a-zA-z0-9]/)) score++
    if (password.length > 8) score++;

    //Cálculo da %, pq a largura vai ser em %
    const width = (score/5)*100;

    strengthIndicator.style.width = `${width}%`;

    switch(score){
         
        case 1:
            strengthIndicator.style.backgroundColor = "#e70b0b";
            break;
        case 2:
            strengthIndicator.style.backgroundColor = "#FFB74D";
            break;
        case 3:
            strengthIndicator.style.backgroundColor = "#FFF176";
            break;
        case 4:
            strengthIndicator.style.backgroundColor = "blue";
            break;
        case 5:
            strengthIndicator.style.backgroundColor = "#81C784";
            
        default:
            strengthIndicator.style.backgroundColor = "#trasparent";
            break;
    };

    if(password.length>0){
        strengthText.innerHTML = `Força ${strengths[score]}`;
    }
    else{
        strengthText.innerHTML = ""}
});


