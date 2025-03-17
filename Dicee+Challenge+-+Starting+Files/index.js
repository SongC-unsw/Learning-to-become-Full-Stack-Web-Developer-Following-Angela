let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
const leftDice = document.querySelector(".img1");
const rightDice = document.querySelector(".img2");
const statusBar = document.querySelector(".container h1");
leftDice.setAttribute("src",`./images/dice${randomNumber1}.svg`);
rightDice.setAttribute("src", `./images/dice${randomNumber2}.svg`);

// 设置 SVG 骰子的样式
function styleDice(diceElement) {
    // 使骰子更大
    diceElement.style.width = "120px";
    diceElement.style.height = "120px";
    
    // 等待 SVG 加载完成后修改其颜色
    diceElement.addEventListener('load', function() {
        const svgDoc = diceElement.contentDocument;
        if (svgDoc) {
            // 更改背景颜色为红色
            const rect = svgDoc.querySelector('rect');
            if (rect) {
                rect.setAttribute('fill', 'red');
            }
            
            // 更改点的颜色为白色
            const circles = svgDoc.querySelectorAll('circle');
            circles.forEach(circle => {
                circle.setAttribute('fill', 'white');
            });
        }
    });
}

// 应用样式到骰子
styleDice(leftDice);
styleDice(rightDice);

let playerWon = 0;
if (randomNumber1 === randomNumber2) {
    playerWon = 0;
} else if (randomNumber1 > randomNumber2) {
    playerWon = 1;
} else if (randomNumber1 < randomNumber2) {
    playerWon = 2;
}

switch (playerWon) {

    case 1:
        statusBar.innerText = "🎌 Player 1 Won";
        break;

    case 2:
        statusBar.innerText = "Player 2 Won 🎌";
        break;

    default:
        break;

}