import data from '../data/names.json' assert { type: "json" };

let namesList = data.names;
let lastFiveNames = [];

let generateBtn = document.getElementById('generateBtn');
let clearBtn = document.getElementById('clearBtn');
let pickTxt = document.getElementById('pickTxt');
let pwrLvlTxt = document.getElementById('pwrLvlTxt');
let outputCont = document.getElementById('outputCont');

generateBtn.addEventListener('click', PickName);
clearBtn.addEventListener('click', ClearList);

function PickName() {
    outputCont.classList.remove('d-none');
    let pick, randNum, pwrLvl;
    let count = 0;
    // This makes it so you never have the same person twice in our last five
    do {
        randNum = Math.floor(Math.random() * namesList.length);
        pick = namesList[randNum];
        console.log(pick);
        count++;
    } while (lastFiveNames.includes(pick) && count < 50);

    pickTxt.textContent = namesList[randNum];
    lastFiveNames.unshift(namesList[randNum]);
    
    if (pick.split(' ').length > 1) {
        pwrLvl = Math.floor(Math.random() * 1000) + 9000;
    } else {
        pwrLvl = Math.floor(Math.random() * 5000);
    }
    pwrLvlTxt.textContent = pwrLvl;

    if (lastFiveNames.length > 5) {
        lastFiveNames = lastFiveNames.slice(0, 5);
    }

    ShowLastFive();
}

function ShowLastFive() {
    let namesTxt = '';
    for (let i = 0; i < lastFiveNames.length; i++) {
        namesTxt += lastFiveNames[i] + '\n';
    }
    lastFiveTxt.textContent = namesTxt;
}

function ClearList() {
    outputCont.classList.add('d-none');
    lastFiveNames = [];
    pickTxt.textContent = '';
    lastFiveTxt.textContent = '';
}