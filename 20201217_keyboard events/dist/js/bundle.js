
// const URL = "https://metrix-ae70b-default-rtdb.firebaseio.com/metrix.json";
// // fetch(URL).then(data => {
// //     return data.json();
// // }).then(data => {
// //     console.log(data);
// // })
// // .catch(err => console.log(err));

// fetch(URL, {
//     "Content-Type": 'applocatin/json',
//     "body": 
// })


let layoutOptionsCounter = 0;
let chartsCounter = 0;
let UIElementsCounter = 0;

let mapMouseOverCounter = 0;

window.addEventListener("load", () => {

    // Lount Option 
    document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    document.getElementById("layoutOptions").addEventListener("click", layoutOptionsClickCount)

    //Charts Counter
    document.getElementById("chartsCounter").innerHTML = chartsCounter;
    document.getElementById("charts").addEventListener("click", ChartsClickCount)

    //UI Element Counter
    document.getElementById("UIElementsCounter").innerHTML = UIElementsCounter;
    document.getElementById("uiElement").addEventListener("click", UiElementClickCount)

    // MAP
    document.getElementById("map").addEventListener("mouseover", mapMouseOver);
    document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter;

    
})

const layoutOptionsClickCount = (event) => {
    
    if (event.type === "click"){
        console.log("event: ", event.type)
        layoutOptionsCounter += 1;
        document.getElementById("layoutOptionsCounter").innerHTML = layoutOptionsCounter;
    }
    
}

const ChartsClickCount = (event) => {
    
    if (event.type === "click"){
        console.log("event: ", event.type)
        chartsCounter += 1;
        document.getElementById("chartsCounter").innerHTML = chartsCounter;
    }
    
}

const UiElementClickCount = (event) => {
    
    if (event.type === "click"){
        console.log("event: ", event.type)
        UIElementsCounter += 1;
        document.getElementById("UIElementsCounter").innerHTML = UIElementsCounter;
    }
    
}






const mapMouseOver = (event) => {
    if (event.type === "mouseover"){
        console.log("event: ", event.type)
        mapMouseOverCounter += 1;
        document.getElementById("mapMouseOver").innerHTML = mapMouseOverCounter;
    }
}