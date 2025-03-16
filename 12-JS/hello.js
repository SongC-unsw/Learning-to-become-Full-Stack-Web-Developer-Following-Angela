const square = document.getElementById("blue");

// 初始化内联样式，确保style.left和style.top有值
if (!square.style.left) square.style.left = "0px";
if (!square.style.top) square.style.top = "0px";

const moveSquare = (left, top) => {
    const currentSquareLeft = parseInt(square.style.left, 10) || 0;
    square.style.left = (currentSquareLeft + left) + 'px';
    
    const currentSquareTop = parseInt(square.style.top, 10) || 0;
    square.style.top = (currentSquareTop + top) + 'px';
}

const handler = (event) => {
    console.log(event.key);
    
    switch (event.key) {
        case 'ArrowDown':
            moveSquare(0,1);
            break;
        case 'ArrowUp':
            moveSquare(0,-1);
            break;
        case 'ArrowLeft':
            moveSquare(-1,0);
            break;
        case 'ArrowRight':
            moveSquare(1,0);
            break;
    }
}

const checkbox = document.getElementById("checkbox");
const textbox = document.getElementById("textbox");

textbox.addEventListener('keypress', (event) => {
    if (event.charCode < 97 || event.charCode > 122) {
        event.preventDefault();
        alert("only type lower case")
    }
    
})

document.addEventListener('keydown', handler);