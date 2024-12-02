
// foction for  form
const nameInput = document.getElementById("nameR");
const ageInput = document.getElementById("age");
const rankInput = document.getElementById("ranck");
// VERFICTION
const nameRegex = /^[A-Za-z][A-Za-z ]{0,19}$/;
const ageRegex = /^(1[8-9]|[2-4][0-9]|5[0-5])$/;
const rankRegex = /^(3[0-9]|[4-9][0-9])$/;

// GET CART FOR PALYERS POSITION 
const gk = document.getElementById("GK");
const cb1 = document.getElementById("CB1");
const cb2 = document.getElementById("CB2");
const lb = document.getElementById("LB");
const rb = document.getElementById("RB");
const cm1 = document.getElementById("CM1");
const cf = document.getElementById("CF");
const rwf = document.getElementById("RWF");
const lwf = document.getElementById("LWF");
const dmf = document.getElementById("DM");
const cm2 = document.getElementById("CM2");

function butNonForm() {
  const formul = document.getElementById("formul");
  console.log(formul);
  formul.classList.add("DN");
  console.log();
}
function dsplayeForm() {
  var addFormul = document.getElementById("desplform");
  const formul = document.getElementById("formul");
  formul.classList.remove("DN");
  console.log();
}
function verfiction() {
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


// let arrDataPlyers = [];
let getdat = localStorage.getItem("values");
let dataLoc = JSON.parse(getdat);
function addInLocal() {
  const palyerss = {
    Name: document.getElementById("nameR").value,
    pas: document.getElementById("pas").value,
    dri: document.getElementById("dri").value,
    def: document.getElementById("def").value,
    sho: document.getElementById("sho").value,
    pac: document.getElementById("pac").value,
    phy: document.getElementById("phy").value,
    imge1: document.getElementById("iimage").value,
    imge2: document.getElementById("iimage2").value,
    imge3: document.getElementById("iimage3").value,
    position: document.getElementById("position").value,
    ranck: document.getElementById("ranck").value,
    agelanguages: document.getElementById("age").value,
  };
  dataLoc.push(palyerss)
  // arrDataPlyers.push(palyerss);
  localStorage.setItem("values", JSON.stringify(dataLoc));
  console.log(localStorage.getItem("values"));
}


  function dsplyFeomloclal() {
    let getdat = localStorage.getItem("values");
    let dataLoc = JSON.parse(getdat);

    function dsplyPlyer() {
      const containeriChangemo = document.getElementById("containerChangement");
      containeriChangemo.innerHTML = "";
      dataLoc.forEach((player) => {
        const htmltxte = `<div class="olcards" onclick="hh()">
        <div class="just-carte">
            <div class="card-headere">
                <div class="rating">${player.ranck}</div>
                <div class="position">${player.position}</div>
            </div>
            <div class="player-imagee">
                <img src="${player.imge1}" alt="Lionel Messi">
            </div>
            <div class="player-namee">${player.Name}</div>
            <div class="player-statse">
                <div class="state"><span>PAC <br></span>${player.pac}</div>
                <div class="state"><span>SHO<br></span>${player.sho}</div>
                <div class="state"><span>PAS<br></span> ${player.pas}</div>
                <div class="state"><span>DRI<br></span>${player.dri}</div>
                <div class="state"><span>DEF<br></span> ${player.def}</div>
                <div class="state"><span>PHY<br></span> ${player.phy}</div>
            </div>
            <div class="card-footere">
                <div class="logoe"><img src="${player.imge2}" alt=""> </div>
                <div class="logoe"> <img src="${player.imge3}" alt=""></div>
            </div>
        </div>
        </div>
        </div>`;

       

        if (player.position === "GK" && !gk.classList.contains("full")) {
          gk.classList.remove("cart");
          gk.classList.add("full");
          gk.innerHTML = htmltxte;
        } else if (player.position === "CB1" && !cb1.classList.contains("full")){
          console.log(player.position);
          
          cb1.classList.remove("cart");
          cb1.classList.add("full");
          cb1.innerHTML = htmltxte;
        } else if (player.position === "CB2" && !cb2.classList.contains("full")){
          const cb2 = document.getElementById("CB2");
          cb2.classList.remove("cart");
          cb2.classList.add("full");
          cb2.innerHTML = htmltxte;
        } else if (player.position === "LB" && !lb.classList.contains("full")){
          lb.classList.remove("cart");
          lb.classList.add("full");
          lb.innerHTML = htmltxte;
        } else if (player.position === "RB" && !rb.classList.contains("full")){
          rb.classList.remove("cart");
          rb.classList.add("full");
          rb.innerHTML = htmltxte;
        } else if (player.position === "CM1" &&!cm1.classList.contains("full")){
          cm1.classList.remove("cart");
          cm1.classList.add("full");
          cm1.innerHTML = htmltxte;
        } else if (player.position === "CM2" && !cm2.classList.contains("full")){
          cm2.classList.remove("cart");cm2.classList.add("full");cm2.innerHTML = htmltxte;
        } else if (player.position === "DM" &&!dmf.classList.contains("full") ){
          dmf.classList.remove("cart");
          dmf.classList.add("full");
          dmf.innerHTML = htmltxte;
        } else if ( player.position === "LWF" && !lwf.classList.contains("full")){
          lwf.classList.remove("cart");
          lwf.classList.add("full");
          lwf.innerHTML = htmltxte;
        } else if (player.position === "RWF" && !rwf.classList.contains("full")){
          rwf.classList.remove("cart");
          rwf.classList.add("full");
          rwf.innerHTML = htmltxte;
        } else if (player.position === "CF" && !cf.classList.contains("full")){
          cf.classList.remove("cart");
          cf.classList.add("full");
          cf.innerHTML = htmltxte;
        } else {
          const containeriChangemo = document.getElementById(
            "containerChangement"
          );
          if (!document.getElementById(`player-${player.Name}`)) {
            containeriChangemo.innerHTML += htmltxte;
          }
        }
      });
    }

    dsplyPlyer();
  }
  dsplyFeomloclal();




let slectioCart;
let playercard;
function slector1(mptycard) {
  console.log(mptycard.parentElement.id);
  playercard = mptycard.closest(".cart");
  scroll({
    behavior: "smooth",
    top: 10000,
  });
  positiondatafilter(mptycard.parentElement.id);
  slectioCart = true;
}
function positiondatafilter(player) {
  document.getElementById("container-ollPlyers").innerHTML = "";
  for (let ele of data) {
    if (ele.position == player.slice(0, 2)) {
      console.log("kamal");
      let fltertInfo = `<div class="olcard" onclick="hh()">
        <div class="just-cart">
            <div class="card-header">
                <div class="rating">${ele.rating}</div>
                <div class="position">${ele.position}</div>
            </div>
            <div class="player-image">
                <img src="${ele.photo}" alt="Lionel Messi">
            </div>
            <div class="player-name">${ele.name}</div>
            <div class="player-stats">
                <div class="stat"><span>${
                  ele.pace ? "PAC" : "DIV "
                }<br></span>${ele.pace ?? ele.diving}</div>
                <div class="stat"><span>${
                  ele.shooting ? "SHO" : "RAT"
                }<br></span>${ele.shooting ?? ele.rating}</div>
                <div class="stat"><span>${
                  ele.passing ? "PAS" : "HAN"
                }<br></span>${ele.passing ?? ele.handling}</div>
                <div class="stat"><span>${
                  ele.passing ? "DRI" : "REF"
                }<br></span>${ele.dribbling ?? ele.reflexes}</div>
                <div class="stat"><span>${
                  ele.passing ? "DEF" : "KIC"
                }<br></span> ${ele.defending ?? ele.kicking}</div>
                <div class="stat"><span>${
                  ele.passing ? "PHY" : "SPE"
                }<br></span>${ele.physical ?? ele.speed}</div>
            </div>
            <div class="card-footer">
                <div class="logo"><img src="${ele.logo}" alt=""> </div>
                <div class="logo"> <img src="${ele.flag}" alt=""></div>
            </div>
        </div>
        </div>
        </div>`;
      document.getElementById("container-ollPlyers").innerHTML += fltertInfo;
    }
  }
}

function hh() {
  scroll({
    behavior: "smooth",
    top: 0,
  });
}
document
  .getElementById("container-ollPlyers")
  .addEventListener("click", function (e) {
    console.log(e.target.closest(".olcard"));
    playercard.appendChild(e.target.closest(".olcard"));
  });
