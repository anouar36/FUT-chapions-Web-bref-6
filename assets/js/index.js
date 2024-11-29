const url = "assets/data/players.json";
fetch(url)
  .then((response) => response.json())
  .then((res) => {
    const data = res.players;
    console.log(data);
    let rows = "";
    data.forEach((player) => {
      rows += `<div class="olcard">
        <div class="just-cart">
            <div class="card-header">
                <div class="rating">${player.rating}</div>
                <div class="position">${player.position}</div>
            </div>
            <div class="player-image">
                <img src="${player.photo}" alt="Lionel Messi">
            </div>
            <div class="player-name">${player.name}</div>
            <div class="player-stats">
                <div class="stat"><span>PAC <br></span>${player.pace}</div>
                <div class="stat"><span>SHO <br></span>${player.shooting}</div>
                <div class="stat"><span>PAS<br></span> ${player.passing}</div>
                <div class="stat"><span>DRI<br></span>${player.dribbling}</div>
                <div class="stat"><span>DEF<br></span> ${player.defending}</div>
                <div class="stat"><span>PHY<br></span> ${player.physical}</div>
            </div>
            <div class="card-footer">
                <div class="logo"><img src="${player.logo}" alt=""> </div>
                <div class="logo"> <img src="${player.flag}" alt=""></div>
            </div>
        </div>
        </div>
        </div>`;
    });
    console.log(rows);
    document.getElementById("container-ollPlyers").innerHTML = rows;
  })
  .catch((error) => console.log(error));

// foction for  form

const nameInput = document.getElementById("nameR");
const ageInput = document.getElementById("age");
const rankInput = document.getElementById("ranck");

function handelChange() {
  const fileInput = document.getElementById("iimage");
  console.log(fileInput);
  const selctchange = document.getElementById("selectimge");
  console.log(selctchange);
  const dilUrl = URL.createObjectURL(fileInput.files[0]);
  console.log(dilUrl);
  selctchange.src = dilUrl;
}
function handelChang() {
  const fileInput2 = document.getElementById("iimage2");
  console.log(fileInput2);
  const selctchange2 = document.getElementById("selectimge2");
  console.log(selctchange2);
  const dilUrl2 = URL.createObjectURL(fileInput2.files[0]);
  console.log(dilUrl2);
  selctchange2.src = dilUrl2;
}
function handelChan() {
  const fileInput3 = document.getElementById("iimage3");
  console.log(fileInput3);
  const selctchange3 = document.getElementById("selectim3");
  console.log(selctchange3);
  const dilUrl3 = URL.createObjectURL(fileInput3.files[0]);
  console.log(dilUrl3);
  selctchange3.src = dilUrl3;
}
function butNonForm() {
  const formul = document.getElementById("formul");
  console.log(formul);
  formul.classList.add("DN");
  console.log();
}
function addp() {
  var addFormul = document.getElementById("addp");
  const formul = document.getElementById("formul");
  formul.classList.remove("DN");
  console.log();
}

const nameRegex = /^[A-Za-z][A-Za-z ]{0,19}$/;
const ageRegex = /^(1[8-9]|[2-4][0-9]|5[0-5])$/;
const rankRegex = /^(3[0-9]|[4-9][0-9])$/;

function altt() {
  if (nameRegex.test(nameInput.value)) {
    alert("anwar");
  } else {
    alert("hmar");
  }
  if (ageRegex.test(ageInput.value)) {
    alert("age is corecte");
  } else {
    alert("age is not corecte");
  }
  if (rankRegex.test(rankInput.value)) {
    alert("ranck is corecte");
  } else {
    alert("rank is not corecte");
  }
}

// add object for form
let arrDataPlyers = [];
function addInLocal() {
  const palyerss = {
    Name: document.getElementById("nameR").value,
    pas: document.getElementById("pas").value,
    dri: document.getElementById("dri").value,
    def: document.getElementById("def").value,
    phy: document.getElementById("phy").value,
    imge1: document.getElementById("iimage3").value,
    imge2: document.getElementById("iimage2").value,
    imge3: document.getElementById("iimage").value,
    position: document.getElementById("position").value,
    ranck: document.getElementById("ranck").value,
    agelanguages: document.getElementById("age").value,
  };

  arrDataPlyers.push(palyerss);
  localStorage.setItem("values", JSON.stringify(arrDataPlyers));

  console.log(localStorage.getItem("values", palyerss.firstName));

  function dsplyFeomloclal() {
    let getdat = localStorage.getItem("values", palyerss);
    let dataLoc = JSON.parse(getdat);
  }
  dsplyFeomloclal();
}
