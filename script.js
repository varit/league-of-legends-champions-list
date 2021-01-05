const input = document.querySelector(".search-input");
const searchBar = document.querySelector(".search-bar")
const searchBarExt = document.querySelector(".search-bar-extend");
const newContainer = document.querySelector(".new-container");
const button = document.querySelector("button");
const hamburger = document.querySelector(".hamburger");
const body = document.querySelector("body"); 
const navLogo =document.getElementById("nav-logo");
const navSocial = document.getElementById("nav-social");
const searchIcon = document.querySelector("#search-icon")
const toggleDarkMode = document.querySelector(".button-dark-mode");
const champsContainer = document.querySelector(".champions-container")
const header = document.querySelector("header")
const sticky = header.offsetTop;

// Event toggling dark mode/theme
toggleDarkMode.addEventListener("click", (e) => {
    champsContainer.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");
    newContainer.classList.toggle("dark-mode");
    input.classList.toggle("dark-mode");
    searchBar.classList.toggle("dark-mode");
})
// Dropdown w/ clickable search options 
newContainer.addEventListener("click", (e) =>{
    let selectSearch = e.target.value;
    getChampsData(selectSearch);
    removeChamps();
})
// Call stickHeader function on window scroll
window.onscroll = function() {
    stickHeader();
}
// Event toggling search bar extension and dropdown search list
searchBar.addEventListener("click",(e) => {
    searchBar.classList.toggle("search-bar-extend");
    searchBar.classList.toggle("static-shadow");
    newContainer.classList.toggle("show");
    e.stopPropagation();
    getOptions();
})
// Clickable search icon
// Takes user serach input and return champions data
searchIcon.addEventListener("click",(e) =>{
    e.preventDefault();
    let inputText = input.value;
    let capName = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    
    champsName = capName;  
    getChampsData(champsName);
    removeChamps();
});
// Logs Enter key to search
// Takes user serach input and return champions data
input.addEventListener("keyup",(e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        let inputText = input.value;
        let capName = inputText.charAt(0).toUpperCase() + inputText.slice(1);
        
        champsName = capName;  
        getChampsData(champsName);
        removeChamps();
    }
});
// Run filter function on search bar click
input.addEventListener("keyup", (e) => {
    filterSearch();
})
// Remove search bar click ativated properties
body.addEventListener("click",(e) => {
    searchBar.classList.remove("search-bar-extend");
    searchBar.classList.remove("static-shadow");
    newContainer.classList.remove("show");
})
// Toggle mobile menu bar
hamburger.addEventListener("click", (e) => {
    navLogo.classList.toggle("show");
    navSocial.classList.toggle("show");
});
// Anchor header/navbar to top of page
function stickHeader(){
    if(window.pageYOffset > sticky){
        header.classList.add("stick-header");
    } else {
        header.classList.remove("stick-header");
    } 

}
// Get champions data given champions name
async function getChampsData(champsName){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion/${champsName}.json`;
    try {
        const response = await axios.get(champsUrl);
        const dotJpeg = "_0.jpg";
        //Champions Image:
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
// Render single champions image, name, and description/lore
function displayChamp(champsImage, champsName, champsLore){
    let champsContainer = document.querySelector(".champions-container");
    let champsDiv = document.createElement("div");
    champsDiv.setAttribute("class", "champs-box-single");
    champsDiv.innerHTML = `
    <img class="single-champs-image" src="asset/splash/${champsImage}" alt="Image of ${champsName}"><div class="champs-title">${champsName}</div><div class="champs-lore">${champsLore}</div>
    `
    champsContainer.appendChild(champsDiv);
    
}
// Get all champions data from API endpoint
async function getAllChamps(){
    const champsUrl = `http://ddragon.leagueoflegends.com/cdn/10.25.1/data/en_US/champion.json`;
    try {
        const response = await axios.get(champsUrl);
        let objNames = response.data.data;
        addAllNames(objNames);
        getOptions(objNames);
    } catch(error){
        console.log(error);
    }
};
getAllChamps();

// Render all champions images and names
function addAllNames(objNames){
    let list = document.querySelector(".champions-container");
    // Add champions images and names to DOM dynamically
    for(const property in objNames){

        const dotJpeg = "_0.jpg";
        let champsName = property;
        let champsImage = objNames[property].image.full;
        champsImage = champsImage.substring(0, champsImage.length -4);
        champsImage = champsImage.concat(dotJpeg);
        let champsDiv = document.createElement("div");
        champsDiv.setAttribute("class", "champs-box");
        champsDiv.innerHTML = `
        <div class="zoom"><img class="${champsName}" src="asset/loading/${champsImage}" alt="Image of ${champsName}"><h2 class="champs-img">${champsName}</h2></div>
        `
        list.appendChild(champsDiv);
        
    }
    // Turn displayed images into clickable path to individual champions page
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
// Clear page of champions displayed data
function removeChamps(){
    const removeChamps = document.querySelector(".champions-container");
    while(removeChamps.lastChild){
        removeChamps.removeChild(removeChamps.lastChild);
    }
}
// Create option for dropdown
function getOptions(objNames){
    for(const property in objNames){
        let name = property;

        const option = document.createElement("option");
        option.value = `${name}`;
        option.textContent = `${name}`;
        newContainer.appendChild(option);
    }   
}
// Filter search input
function filterSearch() {
    let filter = input.value.toUpperCase();
    let option = document.getElementsByTagName("option")

    for (i = 0; i < option.length; i++){ // loop through dropdown option(Champions names)
        let txtValue = option[i];
        txtValue = txtValue.textContent || txtValue.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){ // Get the first index from search word and change it to upper case
            option[i].style.display = ""; // reset hidden words
        } else {
            option[i].style.display = "none"; // hide none matched words
        }
    }
}
