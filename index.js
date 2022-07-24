// Steps 

// step-1 - create onload handler 
window.onload = () => {
    main();
}

function main(){
    const root = document.getElementById("root");
    const btn = document.getElementById("change-btn");
    const output = document.getElementById("output");

    btn.addEventListener('click', function() {
        const bgColor = generateRGB();

        root.style.backgroundColor = bgColor;
        // output.value = bgColor;
        output.value = bgColor.toUpperCase();
    })
}

// step=2 random color generator function 
function generateRGB() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    // return `rgb(${red},${green},${blue})`
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
console.log(generateRGB())

// step-3 collect all reference  

// step-4 event handle
