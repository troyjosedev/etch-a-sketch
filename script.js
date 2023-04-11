const grid = document.querySelector(".gridContainer");
const userInput = document.getElementById("quantity");
const resetButton = document.querySelector(".reset");
const rainbowButton = document.querySelector(".rainbow");
const chooseColor = document.querySelector(".myColorPicker")
let isDrawing = false;
let currentColor = "black";

createGrid = () => {
    for (let i = 0; i < 256; i++) {
      const div = document.createElement("div");
      div.classList.add("square");
      grid.appendChild(div);
    }
  };
createGrid();

updateGrid = () => {
    grid.innerHTML = "";
    grid.style.setProperty(
        "grid-template-columns", 
        `repeat(${userInput.value}, 2fr)`
    );
    grid.style.setProperty(
        "grid-template-rows",
        `repeat(${userInput.value}, 2fr})`
    );
    
    for (let i = 0; i < userInput.value * userInput.value; i++){
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div)
    }

    updateSquares();
}

 updateSquares = () => {
  const squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener("mouseover", function (event){
            if(isDrawing){
                if(rainbowButton.classList.contains("active")){
                    const red = Math.floor(Math.random() * 256);
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    const color = `rgb(${red}, ${green}, ${blue})`;
                    event.target.style.backgroundColor = color;
                } else {
                    event.target.style.backgroundColor = currentColor;
                }
            }
        })
    })

    squares.forEach((square) => {
        isDrawing = true;
        square.addEventListener("mousemove", function (event){
                if(rainbowButton.classList.contains("active")){
                    const red = Math.floor(Math.random() * 256);
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    const color = `rgb(${red}, ${green}, ${blue})`;
                    event.target.style.backgroundColor = color;
                } else {
                    event.target.style.backgroundColor = currentColor;
                }
        square.addEventListener("mouseup", function (event){
            isDrawing = false;
        })
        })
    })
}
updateSquares();

updateColor = (event) => {
    currentColor = event.target.value;
    rainbowButton.classList.remove("active");
}

chooseColor.addEventListener("change", updateColor);

userInput.addEventListener("change", () => {
    updateGrid()
})

resetButton.addEventListener("click", () => {
    grid.innerHTML = "";
    userInput.value = "";
    grid.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    grid.style.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    currentColor = 'black'
    rainbowButton.classList.remove("active")
    createGrid();
    updateSquares();
    
})

rainbowButton.addEventListener("click", () => {
    rainbowButton.classList.toggle("active");
})












