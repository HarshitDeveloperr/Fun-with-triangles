const inputs = document.querySelectorAll("#input-box");
const istrianglebtn = document.querySelector("#is-tri-button");
const outputEl = document.querySelector("#output");

function sumOFAngels(angel1,angel2,angel3){
    const sum = angel1 + angel2 + angel3;
    
    return sum;
}


function istriangle(){


    const sum = sumOFAngels(Number(inputs[0].value) ,
        Number(inputs[1].value) ,
        Number(inputs[2].value) );

    if(sum === 180){
       outputEl.innerText = "Yay! Angels form a triangle!";
    }else{
        outputEl.innerText = "No,it doesn't form a triangle";
    }


}


istrianglebtn.addEventListener("click", istriangle);
