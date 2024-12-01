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
                <div class="stat"><span>SHO<br></span>${player.shooting}</div>
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
// VERFICTION 
const nameRegex = /^[A-Za-z][A-Za-z ]{0,19}$/;
const ageRegex = /^(1[8-9]|[2-4][0-9]|5[0-5])$/;
const rankRegex = /^(3[0-9]|[4-9][0-9])$/;

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
let arrDataPlyers = [];
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

  arrDataPlyers.push(palyerss);
  localStorage.setItem("values", JSON.stringify(arrDataPlyers));
  console.log(localStorage.getItem("values"));
  function dsplyFeomloclal() {
    let getdat = localStorage.getItem("values");
    let dataLoc = JSON.parse(getdat);

    function dsplyPlyer(){
  const containeriChangemo = document.getElementById("containerChangement");
  containeriChangemo.innerHTML = "";
  
      
      dataLoc.forEach(player =>{
        const htmltxte=`<div class="olcardS">
      <div class="just-carte">
          <div class="card-headere">
              <div class="ratinge">${player.ranck}</div>
              <div class="positione">${player.position}</div>
          </div>
          <div class="player-imagee">
              <img src="https://cdn.sofifa.net/players/209/981/25_120.png" alt="Lionel Messi">
          </div>
          <div class="player-namee">${player.Name}</div>
          <div class="player-statse">
              <div class="state"><span>PAC<br></span>${player.pac}</div>
              <div class="state"><span>SHO<br></span> ${player.sho}</div>
              <div class="state"><span>PAS<br></span>${player.pas}</div>
              <div class="state"><span>DRI<br></span>${player.dri}</div>
              <div class="state"><span>DEF<br></span> ${player.def}</div>
              <div class="state"><span>PHY<br></span> ${player.phy}</div>
          </div>
          <div class="card-footere">
              <div class="logoe"><img src="/assets/images/${player.imge2}" alt=""> </div>
              <div class="logoe"> <img src="/assets/images/${player.imge3}" alt=""></div>
          </div>
      </div>
      </div>
      </div>`
        console.log(player);
        const gk = document.getElementById("GK"); 
        const cb1 = document.getElementById("CB1");
        const cb2 = document.getElementById("CB2");
        const lb = document.getElementById("LB"); 
        const rb = document.getElementById("RB"); 
        const cm1 = document.getElementById("CM1"); 
        const cf = document.getElementById("CF"); 
        const rwf = document.getElementById("RWF"); 
        const lwf = document.getElementById("LWF"); 
        const dmf = document.getElementById("DMF"); 
        const cm2 = document.getElementById("CM2");       
    
      if(player.position === 'GK' && !gk.classList.contains("full")){
      gk.classList.remove("cart"); 
      gk.classList.add("full");
      gk.innerHTML = htmltxte ;
      } else if(player.position === 'CB1' && !cb1.classList.contains("full") ){  
           cb1.classList.remove("cart"); 
           cb1.classList.add("full");
           cb1.innerHTML = htmltxte;
           }
           else if(player.position === 'CB2' && !cb2.classList.contains("full")){
               const cb2 = document.getElementById("CB2");  
               cb2.classList.remove("cart"); 
               cb2.classList.add("full");
               cb2.innerHTML= htmltxte;
               }else if(player.position === 'LB' && !lb.classList.contains("full")){
             lb.classList.remove("cart"); 
             lb.classList.add("full");
             lb.innerHTML= htmltxte;
             }else if(player.position === 'RB'&& !rb.classList.contains("full")){
              rb.classList.remove("cart"); 
              rb.classList.add("full");
              rb.innerHTML= htmltxte;
             }          else if(player.position === 'CM1' && !cm1.classList.contains("full")){
              cm1.classList.remove("cart"); 
              cm1.classList.add("full");
              cm1.innerHTML= htmltxte;
                   } else if(player.position === 'CM2' && !cm2.classList.contains("full")){
                cm2.classList.remove("cart"); 
                cm2.classList.add("full");
                cm2.innerHTML= htmltxte;
                }else if(player.position === 'DMF' && !dmf.classList.contains("full")){
                  dmf.classList.remove("cart"); 
                  dmf.classList.add("full");
                  dmf.innerHTML= htmltxte;
                  
                  }else if(player.position === 'LWF' && !lwf.classList.contains("full")){
                    lwf.classList.remove("cart"); 
                    lwf.classList.add("full");
                    lwf.innerHTML= htmltxte;
                    }else if(player.position === 'RWF' && !rwf.classList.contains("full")){
                      rwf.classList.remove("cart"); 
                      rwf.classList.add("full");
                      rwf.innerHTML= htmltxte;
                      }else if(player.position === 'CF' && !cf.classList.contains("full")){
                        cf.classList.remove("cart"); 
                        cf.classList.add("full");
                        cf.innerHTML= htmltxte;
                        }else {
                          const containeriChangemo= document.getElementById("containerChangement")
                          if (!document.getElementById(`player-${player.Name}`)) {
                            containeriChangemo.innerHTML += htmltxte;
                          }
                        }
                  } )             

    }

    dsplyPlyer();
  }
  dsplyFeomloclal();
  
  




}


