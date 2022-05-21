@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap");
:root {
  --radius: 20px;
}
.login {
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: var(--radius);
  box-shadow: 2px 2px 10px 1px rgba(102,45,45,0.49);
  width: 300px;
  height: 270px;
  padding: 6px;
  background: white;
}
body, button, input {
  background: #D6D6D6;
  font-family: "DM Sans", sans-serif;
}
 .dp-flex {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  /*border: 1px solid black;*/
} 
.dp-flex > * {
  margin: 4px;
}
.dp-flex > h2,a {
  text-align: center;
}
.save-user-ip {
  font-size: 13px;
}
.seperate-line {
  border-bottom: 1px solid #dadde1;
  margin: 5px 5px;
}
#btn-login {
  background: navy;
  
}
#btn-signup {
  background: seagreen;
}
#btn-login, #btn-signup {
  font-size: 15px;
  font-weight: bold;
  color: white;
  height: 35px;
  border-radius: var(--radius);
  cursor: pointer;
}
a {
  text-decoration: none;
}
a:hover { text-decoration: underline; }
#ip-mail, #ip-pass {
  background: white;
  padding: 7px 8px;
  border-radius: var(--radius);
}
