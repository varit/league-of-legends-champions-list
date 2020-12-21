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
        console.log(response);
    } catch(error){
        console.log(error);
    }
}