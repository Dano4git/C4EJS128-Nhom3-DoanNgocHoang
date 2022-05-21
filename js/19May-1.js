function init () {
    const nope= document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    // Code ở đây
    //B1
    button.addEventListener("click", () => {
    	paragraph.innerText = "Tôi giàu sau khi học lập trình tại mindX";
    });
    //B2
    nope.addEventListener("mouseover", () => {
  	  nope.style.color = "#ffffff";
  	  nope.style.background = "#ff0000";
    });
    //B3
    nope.addEventListener("mouseout", () => {
  	  nope.style.color = "";
  	  nope.style.background = "";
    });
    //B4
        nope.addEventListener("click", () => {
  	  let answer = confirm("Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?");
      if (answer == true) { nope.innerText = "Tôi rất tiếc"; }
    });
}

window.addEventListener("load", init);
// load Event là 
const sum = 10 + 10;
