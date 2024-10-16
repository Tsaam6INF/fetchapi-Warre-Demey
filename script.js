const frmAddUser = document.querySelector("#frmAddUser");
const frmuserID = document.querySelector("#userID");
const frmRighID = document.querySelector("#rightID");

// action koppelen aan mijn formulier
// maw: is wil iets doen als er op submit wordt gedrukt

frmAddUser.addEventListener("submit", (event) => {
  // zorg ervoor dat het scherm niet refreched
  // en bepaal zelf wat de submit doet
  event.preventDefault();

  // maak je data object op met de info die
  // verstuurd moet worden met de POST
  const data = {
    UserID: frmuserID.value,
    RightID: frmRighID.value,
    nickName: frmNickName.value,
  };

  // set options voor de post
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  // doe de fetch
  fetch("http://192.168.5.113:3000/api/user/addUserright ", options)
    .then((resultaat) => resultaat.json())
    .then((data) => console.log(data));
});
