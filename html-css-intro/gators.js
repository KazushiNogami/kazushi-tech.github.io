'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function gators() {
    const numbers = document.getElementById('green-input').value;
    console.log(numbers);
    for (let i = 0; i < numbers; i++) {
        // const input = document.createElement("🐊");
        const gator = document.createElement("li");
        gator.innerText = "🐊";
        document.getElementsByClassName('blue-box')[0].appendChild(gator);
    }
}

const target = document.getElementById('green-button')
target.addEventListener("click", gators)
