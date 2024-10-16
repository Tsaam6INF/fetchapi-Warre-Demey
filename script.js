const frmAddUser = document.querySelector("#frmAddUser");
const frmusername = document.querySelector("#username");
const frmWachtwoord = document.querySelector("#wachtwoord");
const frmNickName = document.querySelector("#nickName");

// action koppelen aan mijn formulier
// maw: is wil iets doen als er op submit wordt gedrukt

frmAddUser.addEventListener("submit", (event) => {
  // zorg ervoor dat het scherm niet refreched
  // en bepaal zelf wat de submit doet
  event.preventDefault();

  // maak je data object op met de info die
  // verstuurd moet worden met de POST
  const data = {
    username: frmusername.value,
    wachtwoord: frmWachtwoord.value,
    nickName: frmNickName.value,
  };

  // set options voor de post
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  // doe de fetch
  fetch("http://192.168.5.113:3000/api/user/addUser ", options)
    .then((resultaat) => resultaat.json())
    .then((data) => console.log(data));
});
