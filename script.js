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
};

async function getAllChamps(){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json`;
    try {
        const response = await axios.get(champsUrl);
        // console.log("Response Data ",response);
        let objNames = response.data.data;
        // console.log(repsponse.data);
        getName(objNames);
        // renderChamps(response.data.data);
    } catch(error){
        console.log(error);
    }
};
getAllChamps();


function getName(objNames){
    // console.log("allChamps: ",objNames);
    let list = document.querySelector(".champions-container");
    for(const property in objNames){
        const dotJpeg = "_0.jpg";
        let champsName = property;
        let champsImage = objNames[property].image.full;
        champsImage = champsImage.substring(0, champsImage.length -4);
        champsImage = champsImage.concat(dotJpeg);
        
        console.log(champsImage);
        let champsSpan = document.createElement("span");
        champsSpan.setAttribute("class", "champs-box");
        champsSpan.innerHTML = `
        <img class="champs-image" src="asset/loading/${champsImage}" alt="Image of ${champsName}"><h2>${champsName}</h2>
        `
        list.appendChild(champsSpan);

   }
}