const button = document.getElementById('addButton');
const sumDisplay = document.getElementById('sumDisplay');
let a = prompt("1 dan 100 gacha son kiriting")
let sum = 0;

if (!isNaN(a) && a <= 100) {
    button.addEventListener('click', () => {
        sum += Number(a);
        sumDisplay.textContent = `
        Umumiy yig 'indi: ${sum}`;


    });
} else {
    alert(" son kiriting")
}