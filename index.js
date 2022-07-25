// Steps 

let div = null;

// step-1 - create onload handler 
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById("root");
    const changeBtn = document.getElementById("change-btn");
    const output = document.getElementById("output");
    const copyBtn = document.getElementById("copy-btn");

    changeBtn.addEventListener('click', function() {
        const bgColor = generateRGB();

        root.style.backgroundColor = bgColor;
        // output.value = bgColor;
        output.value = bgColor.toUpperCase();
    });

    copyBtn.addEventListener('click', function() {
        window.navigator.clipboard.writeText(output.value);
        if(div !== null) {
            div.remove();
            div = null;
        };   

        generateToastmsg(`${output.value} Copied`);
    });


 
}

// step=2 random color generator function 
function generateRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // return `rgb(${red},${green},${blue})`
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
// console.log(generateRGB());

function generateToastmsg(msg) {
    div = document.createElement("div");
    div.innerText = msg;
    div.style.backgroundColor = "white";
    div.className = "toast-message toast-message-slide-in";

    div.addEventListener('click', function() {
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");

        div.addEventListener("animationend", function() {
            div.remove();
            div = null;
        });
    });



    document.body.appendChild(div);
}












// step-3 collect all reference  

// step-4 event handle
