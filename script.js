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
        console.log("Response Data ",response);
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
    console.log("allChamps: ",objNames);
    let arrOfNames = Object.keys(objNames);
    let list = document.querySelector(".champions-container");
    arrOfNames.forEach((name) => {
        let champsDiv = document.createElement("div");
        champsDiv.innerHTML = `
        <div>${name}</div>`
        list.appendChild(champsDiv);
        getImage(objNames, name);
    });
    
}

function getImage(objNames,name){
    console.log("Images: ",objNames[name].image.full);


}