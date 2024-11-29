const url = "assets/data/players.json";
fetch(url)
.then(response => response.json())
.then(res=>{
    const data=res.players;
    console.log(data)
    let rows ='';
    data.forEach(player => {
        rows+= `<div class="card">
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
        </div>`
    })
    console.log(rows)
    document.getElementById('container-player').innerHTML=rows;
    
})
.catch(error => console.log(error));

// foction for  form

const nameInput = document.getElementById("name");
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
  console.log()
}
function addp(){
    var addFormul= document.getElementById('addp')
    const formul = document.getElementById("formul");
    formul.classList.remove("DN");
  console.log()


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

//   if (rankRegex.test(powersInputs.value)) {
//     alert("pac is corecte");
//   } else {
//     alert("pawers is not corecte");
//   }
}

// add object for form
// let arr =[];
// const palyerss = {
//     firstName: document.getElementById('name').value,
//     lastName: document.getElementById('pas').value,
//     age: document.getElementById('dri').value,
//     city: document.getElementById('def').value,
//     occupation: document.getElementById('phy').value,
//     hobbies: document.getElementById('iimage3').value,
//     isMarried: document.getElementById('iimage2').value,
//     languages: document.getElementById('iimage').value,
//     languages: document.getElementById('position').value,
//     languages: document.getElementById('ranck').value,
//     languages: document.getElementById('age').value
//   };
//   console.log(palyerss.firstName)

 
//   function addInLocal(){
//     localStorage.setItem('values', JSON.stringify(palyerss))
//   }
const inputField = document.getElementById('nameR');

addEventListener('input', () => {
    const palyerss = {
            firstName:inputField.value,
            lastName: document.getElementById('pas').value,
            age: document.getElementById('dri').value,
            city: document.getElementById('def').value,
            occupation: document.getElementById('phy').value,
            hobbies: document.getElementById('iimage3').value,
            isMarried: document.getElementById('iimage2').value,
            languages: document.getElementById('iimage').value,
            languages: document.getElementById('position').value,
            languages: document.getElementById('ranck').value,
            languages: document.getElementById('age').value
          };
            console.log(palyerss)

});
//   let firstName = document.getElementById("nameR");
//   console.log(inputField.value)























