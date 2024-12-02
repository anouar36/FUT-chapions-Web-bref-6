const url = "assets/data/players.json";
let data;
fetch(url)
  .then((response) => response.json())
  .then((res) => {
    data = res.players;
    console.log(data);
    let rows = "";
    data.forEach((player) => {
      rows += `<div class="olcard" >
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
                <div class="stat"><span>${
                  player.pace ? "PAC" : "DIV "
                } <br></span>${player.pace ?? player.diving}</div>
                <div class="stat"><span>${
                  player.shooting ? "SHO" : "RAT"
                }<br></span>${player.shooting ?? player.rating}</div>
                <div class="stat"><span>${
                  player.passing ? "PAS" : "HAN"
                }<br></span> ${player.passing ?? player.handling}</div>
                <div class="stat"><span>${
                  player.passing ? "DRI" : "REF"
                }<br></span>${player.dribbling ?? player.reflexes}</div>
                <div class="stat"><span>${
                  player.passing ? "DEF" : "KIC"
                }<br></span> ${player.defending ?? player.kicking}</div>
                <div class="stat"><span>${
                  player.passing ? "PHY" : "SPE"
                }<br></span> ${player.physical ?? player.speed}</div>
            </div>
            <div class="card-footer">
                <div class="logo"><img src="${player.logo}" alt=""> </div>
                <div class="logo"> <img src="${player.flag}" alt=""></div>
            </div>
        </div>
        </div>
        </div>`;
      document.getElementById("container-ollPlyers").innerHTML = rows;
    });
  })
  .catch((error) => console.log(error));
