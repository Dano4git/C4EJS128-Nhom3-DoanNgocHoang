function init () {
    const ipMail= document.getElementById("ip-mail");
    const ipPass= document.getElementById("ip-pass");
    const btnLogIn = document.getElementById("btn-login");
    const btnSignUp = document.getElementById("btn-signup");
    const styleDiv = document.getElementsByClassName("login");
    
    let loginBackground = btnLogIn.style.background;
    let signupBackground = btnSignUp.style.background;
    let messages = document.createElement("p");
    messages.style.color = "red";
    messages.style.fontSize = "12px";
    // Code ở đây
    btnLogIn.addEventListener("click", (event) => {
    	event.preventDefault();
    })
    btnLogIn.addEventListener("click", () => {  // submit can be use
    	if (ipMail.value === "") {
      	 messages.innerHTML = "Email must not be empty" ;
         
      	 insertAfter(ipPass, messages);
         /* styleDiv[0].style.height = "290px"; */
      } else if (!(/\@gmail\.com/i.test(ipMail.value))) {
      	messages.innerHTML = "Email must be an email (@gmail.com)" ;
        insertAfter(ipPass, messages);
      	/* alert("Email must be an email (@gmail.com)"); */
      } else if (ipPass.value.length <= 7) {      
    		messages.innerHTML = "Password must be included more than 8 characters";
        insertAfter(ipPass, messages);
      } else {
      	if (ipMail.value === "doanhoang@gmail.com" && ipPass.value === "123456789") {
        	messages.innerHTML = "OK!";
          insertAfter(ipPass, messages);
        } else {
        	messages.innerHTML = "Wrong email or password!";
          insertAfter(ipPass, messages);
        }
      }
 /*      alert(ipMail.value === "doanhoang@gmail.com");
      alert(ipPass.value === "123456789"); */
    });
   
    btnLogIn.addEventListener("mouseover", () => {
  	  btnLogIn.style.background = "#1338BE";
    });
    
    btnLogIn.addEventListener("mouseout", () => {
  	  btnLogIn.style.background = loginBackground;
    });
    
    btnSignUp.addEventListener("mouseover", () => {
  	btnSignUp.style.background = "mediumseagreen";
    });
  
    btnSignUp.addEventListener("mouseout", () => {
  	  btnSignUp.style.background = signupBackground;
    });
    
    function insertAfter(referenceNode, newNode) {
  		referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
}


window.addEventListener("load", init);
// load Event là 
const sum = 10 + 10;
