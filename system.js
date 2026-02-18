let day = 1;
let hp = 100;

const foods = [

    { name: "鬼門のラーメン", risk: 95, heal: 5, image: "kimonramen"},
    { name: "やさしく学べる線形数学", risk: 34, heal: 15, image: "senkeimath"},
    { name: "やさしく学べる離散数学", risk: 61, heal: 20, image: "risanmath"},
    { name: "寿司", risk: 5, heal: 10, image: "img/sushi.png" },
    { name: "ハンバーガー", risk: 15, heal: 25, image: "img/burger.png" },
    { name: "怪しいキノコ", risk: 40, heal: 35, image: "img/mushroom.png" },
    { name: "腐った肉", risk: 65, heal: 50, image: "img/meat.png" },
    { name: "水", risk: 1, heal: 5, image: "img/water.png" },
    { name: "玉子豆腐", risk: 99, heal: 100, image: "img/drug.png" },
    { name: "スティックのり", risk: 70, heal: 10, image: "img/nori.png" },
    { name: "どんぐり", risk: 10, heal: 5, image: "img/donguri.png" },
    { name: "消臭ビーズ", risk: 50, heal: 20, image: "img/syousyuu.png" },
    { name: "入浴剤", risk: 50, heal: 20, image: "img/drug.png" }, 
    { name: "スマホ", risk: 80, heal: 5, image: "img/drug.png" },
    { name: "空気", risk: 0, heal:0, image: "img/drug.png" },
    { name: "蚊取り線香の灰", risk: 60, heal: 10, image: "img/katorisenkou.png" },
    { name: "トースターの底に溜まったパン粉", risk: 30, heal: 20, image: "img/drug.png" },
    { name: "醤油の口の部分にできる結晶", risk: 50, heal: 10, image: "img/syou.png" },
    { name: "乾燥剤", risk: 70, heal: 20, image: "img/drug.png" },
    { name: "保冷剤", risk: 70, heal: 20, image: "img/drug.png" },
    { name: "歯磨き粉", risk: 10, heal: 10, image: "img/drug.png" },
    { name: "キャットフード", risk: 10, heal: 10, image: "img/catfood.png" },
    { name: "ゆでる前のパスタ", risk: 10, heal: 20, image: "img/drug.png" },
    { name: "しゃもじについたカピカピの米", risk: 10, heal: 30, image: "img/kapikapi.png" },
    { name: "消しゴム", risk: 10, heal: 10, image: "img/eraser.png" },
    { name: "鉛筆の芯", risk: 20, heal: 5, image: "img/pen.png" },
    { name: "鼻セレブ", risk: 5, heal: 10, image: "img/serebu.png" },
    { name: "灯油", risk: 70, heal: 30, image: "img/oil.png" },
    { name: "輪ゴム", risk: 20, heal: 10, image: "img/gomu.png" },
    { name: "化粧水", risk: 30, heal: 30, image: "img/facewater.png" },
    { name: "たくまの腕", risk: 70, heal: 70, image: "img/takuma.png" },
    { name: "ミャクミャク", risk: 80, heal: 60, image: "img/myaku.png" },
    { name: "Fキー", risk: 35, heal: 15, image: "img/key.png" },
    { name: "つらら", risk: 20, heal: 20, image: "img/turara.png" },
    { name: "チョウチンアンコウのここ", risk: 85, heal: 20, image: "img/anko.png" },
    { name: "カエルのたまご", risk: 45, heal: 30, image: "img/kaeru.png" },
    { name: "天然芝", risk: 30, heal: 30, image: "img/shiba.png" },
    { name: "けーしんの耳たぶ", risk: 78, heal: 60, image: "img/keshin.png" },
];


let currentFood;

function nextFood() {
    //乱数生成
    currentFood = foods[Math.floor(Math.random() * foods.length)];
    //食べ物の名前、危険度切り替え
    document.getElementById("foodName").textContent = currentFood.name;
    document.getElementById("risk").textContent = currentFood.risk;

    // 画像切り替え
    document.getElementById("foodImage").src = currentFood.image;
}

function eat() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    if (randomNumber <= currentFood.risk) {
        document.getElementById("message").textContent =
            "死亡";
        disableButtons();
        return;
    }

    hp += currentFood.heal;
    hp = Math.min(hp, 150);

    document.getElementById("message").textContent =
        "生存！";

    nextDay();
}

function skip() {
    hp -= 15;

    if (hp <= 0) {
        document.getElementById("message").textContent = "餓死…";
        disableButtons();
        return;
    }

    document.getElementById("message").textContent = "食べなかった…";
    nextDay();
}

function nextDay() {
    day++;

    document.getElementById("day").textContent = day;
    document.getElementById("hp").textContent = hp;

    nextFood();
}

function disableButtons() {
    document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

nextFood();