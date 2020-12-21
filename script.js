const input = document.querySelector("#search-input");
const button = document.querySelector("button");

button.addEventListener("click",(e) =>{
    e.preventDefault();
    let inputText = input.value;
    let capName = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    champsName = capName;
    getChampsData(champsName);
})

async function getChampsData(champsName){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champsName}.json`;
    try {
        const response = await axios.get(champsUrl);
        // console.log(response);
    } catch(error){
        console.log(error);
    }
}

async function getAllChamps(){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json`;
    try {
        const response = await axios.get(champsUrl);
        // console.log(response.data.data);
        // let allChamps = response.data.data;
        // console.log(renderChamps);
         renderChamps(response.data.data);
    } catch(error){
        console.log(error);
    }
}
getAllChamps();

function renderChamps(allChamps){
    // let arr = allChamps;
    // let arr =[2,3,4,5];
    let list = document.querySelector(".champions-container");
    // console.log(list);
    allChamps.forEach((allChamps) => {
        let champsDiv = document.createElement("div");
        champsDiv.innerHTML = `
        <h1>${allChamps}</h1>`
        list.appendChild(champsDiv);
    })
}

renderChamps();