const input = document.querySelector("#search-input");
const button = document.querySelector("button");
const hamburger = document.querySelector(".hamburger");
const navLogo =document.getElementById("nav-logo");
const navSocial = document.getElementById("nav-social");

window.onscroll = function() {
    stickHeader();
}
const header = document.querySelector("header")

let sticky = header.offsetTop;

function stickHeader(){
    if(window.pageYOffset > sticky){
        header.classList.add("stick-header");
    } else {
        header.classList.remove("stick-header");
    } 

}
hamburger.addEventListener("click", (e) => {
    navLogo.classList.toggle("show");
    navSocial.classList.toggle("show");
});

button.addEventListener("click",(e) =>{
    e.preventDefault();
    let inputText = input.value;
    let capName = inputText.charAt(0).toUpperCase() + inputText.slice(1);

    champsName = capName;  
    getChampsData(champsName);
    removeChamps();
});

async function getChampsData(champsName){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champsName}.json`;
    try {
        const response = await axios.get(champsUrl);
        //Champions Image:
        const dotJpeg = "_0.jpg";
        let champsImage = response.data.data[champsName].image.full
        champsImage = champsImage.substring(0, champsImage.length -4);
        champsImage = champsImage.concat(dotJpeg);
        //Champions description/lore
        let champsLore = response.data.data[champsName].lore;
        displayChamp(champsImage, champsName, champsLore);
    } catch(error){
        console.log(error);
    }
};

function displayChamp(champsImage, champsName, champsLore){
    let champsContainer = document.querySelector(".champions-container");
    let champsDiv = document.createElement("div");
    champsDiv.setAttribute("class", "champs-box-single");
    champsDiv.innerHTML = `
    <img class="single-champs-image" src="asset/splash/${champsImage}" alt="Image of ${champsName}"><div><h2 class="champs-title">${champsName}</h2></div><div class="champs-lore">${champsLore}</div>
    `
    champsContainer.appendChild(champsDiv);
}

async function getAllChamps(){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json`;
    try {
        const response = await axios.get(champsUrl);
        let objNames = response.data.data;
        getAllNames(objNames);
    } catch(error){
        console.log(error);
    }
};
getAllChamps();


function getAllNames(objNames){

    let list = document.querySelector(".champions-container");

    for(const property in objNames){

        const dotJpeg = "_0.jpg";
        let champsName = property;
        let champsImage = objNames[property].image.full;
        champsImage = champsImage.substring(0, champsImage.length -4);
        champsImage = champsImage.concat(dotJpeg);
        let champsDiv = document.createElement("div");
        champsDiv.setAttribute("class", "champs-box");
        champsDiv.innerHTML = `
        <div class="zoom"><img class="${champsName}" src="asset/loading/${champsImage}" alt="Image of ${champsName}"><h2 class="champImg">${champsName}</h2></div>
        `
        list.appendChild(champsDiv);
        
        autocomplete(champsName);
    }
    let champsBox = document.querySelectorAll(".champs-box img");
        champsBox.forEach((champsBox) => {
            champsBox.addEventListener("click", (e) =>{
                e.preventDefault();
                let champsName = champsBox.className;
                champsName = String(champsName);
                champsName = champsName.charAt(0).toUpperCase() + champsName.slice(1);
                
                removeChamps();
                getChampsData(champsName);
            })
        })
}

function removeChamps(){
    const removeChamps = document.querySelector(".champions-container");
    while(removeChamps.lastChild){
        removeChamps.removeChild(removeChamps.lastChild);
    }
}

let names = [];
function autocomplete(allNames) {
    names.push(allNames);
    console.log(names)
}