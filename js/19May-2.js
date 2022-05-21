function init () {
    const nope= document.getElementById("nope");
    
    const btnLogIn = document.getElementById("btn-login");
    const btnSignUp = document.getElementById("btn-signup");
    
    const paragraph = document.getElementById("status");

    // Code ở đây
    //B1
    button.addEventListener("click", () => {
    	paragraph.innerText = "Tôi giàu sau khi học lập trình tại mindX";
    });
    //B2
    btnLogIn.addEventListener("mouseover", () => {
  	  btnLogIn.style.background = "red";
    });
    //B3
    nope.addEventListener("mouseout", () => {
  	  nope.style.color = "";
  	  nope.style.background = "";
    });
}


window.addEventListener("load", init);
// load Event là 
const sum = 10 + 10;
