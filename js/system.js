// 最高スコア読み込み
let highScore = localStorage.getItem("souraiHighScore");
highScore = highScore ? Number(highScore) : 0;
document.getElementById("highScore").textContent = highScore;

// 図鑑データ読み込み
let encyclopedia = JSON.parse(localStorage.getItem("souraiZukan")) || [];

let day = 1;
let hp = 50;
let currentFood;

document.body.style.backgroundColor = "antiquewhite";

// 食べ物表示
function nextFood() {

    currentFood = foods[Math.floor(Math.random() * foods.length)];

    document.getElementById("foodName").textContent = currentFood.name;

    // 生存経験があるものだけ危険度表示
    if (encyclopedia.includes(currentFood.name)) {
        document.getElementById("risk").textContent = currentFood.risk;
    } else {
        document.getElementById("risk").textContent = "？？？";
    }

    document.getElementById("foodImage").src = currentFood.image;
}

// 食べる
function eat() {

    btnkill();

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    //死亡
    if (randomNumber <= currentFood.risk) {

        document.getElementById("message").textContent = currentFood.death;
        saveScore();
        document.body.style.backgroundColor = "rgba(156, 21, 21, 0.658)";
        disableButtons();
        return;
    }

    //生存成功

    // 図鑑登録
    if (!encyclopedia.includes(currentFood.name)) {
        encyclopedia.push(currentFood.name);
        localStorage.setItem("souraiZukan", JSON.stringify(encyclopedia));
    }

    //危険度を表示
    document.getElementById("risk").textContent = currentFood.risk;

    document.getElementById("souraiimg").src = "img/good.png";

    hp += currentFood.heal;
    hp = Math.min(hp, 150);

    document.getElementById("hp").textContent = hp;
    document.getElementById("message").textContent =
        currentFood.name + "を食べた！";

    document.getElementById("nextBtn").style.display = "inline";
}

// 食べない
function skip() {

    btnkill();

    hp -= 15;

    if (hp <= 0) {
        document.getElementById("message").textContent = "餓死…";
        saveScore();
        disableButtons();
        return;
    }

    document.getElementById("hp").textContent = hp;
    document.getElementById("message").textContent = "食べなかった…";
    document.getElementById("nextBtn").style.display = "inline";
}

// 次の日
function nextDay() {

    day++;

    document.getElementById("day").textContent = day;
    document.getElementById("message").textContent = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("souraiimg").src = "img/taiki.png";

    btnlife();
    nextFood();
}

// ボタン制御
function btnkill() {
    document.getElementById("eatBtn").style.display = "none";
    document.getElementById("skipBtn").style.display = "none";
}

function btnlife() {
    document.getElementById("eatBtn").style.display = "inline";
    document.getElementById("skipBtn").style.display = "inline";
}

function disableButtons() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
    document.getElementById("souraiimg").src = "img/si.png";
}

// スコア保存
function saveScore() {
    if (day > highScore) {
        highScore = day;
        localStorage.setItem("souraiHighScore", highScore);
        document.getElementById("highScore").textContent = highScore;
    }
}

nextFood();