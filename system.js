let day = 1;
let hp = 100;
document.body.style.backgroundColor = "antiquewhite";

const foods = [

    { name: "鬼門のラーメン", risk: 95, heal: 5, image: "img/kimonramen.jpeg"},
    { name: "やさしく学べる線形数学", risk: 34, heal: 15, image: "img/senkeimath.jpg"},
    { name: "やさしく学べる離散数学", risk: 61, heal: 20, image: "img/risanmath.jpg"},
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
    { name: "寿司", risk: 5, heal: 10, image: "img/sushi.png", death: ""} ,
    { name: "ハンバーガー", risk: 15, heal: 25, image: "img/burger.png", death: "" },
    { name: "怪しいキノコ", risk: 40, heal: 35, image: "img/mushroom.png", death: "" },
    { name: "腐った肉", risk: 65, heal: 50, image: "img/meat.png", death: "" },
    { name: "水", risk: 1, heal: 5, image: "img/water.png", death: "" },
    { name: "玉子豆腐", risk: 99, heal: 100, image: "img/drug.png", death: "全身の体調が悪くなり死亡した" },
    { name: "スティックのり", risk: 70, heal: 10, image: "img/nori.png", death: "" },
    { name: "どんぐり", risk: 10, heal: 5, image: "img/donguri.png", death: "" },
    { name: "消臭ビーズ", risk: 50, heal: 20, image: "img/syousyuu.png", death: "" },
    { name: "入浴剤", risk: 50, heal: 20, image: "img/drug.png", death: "" }, 
    { name: "スマホ", risk: 80, heal: 5, image: "img/drug.png", death: "" },
    { name: "空気", risk: 0, heal:0, image: "img/drug.png", death: "" },
    { name: "蚊取り線香の灰", risk: 60, heal: 10, image: "img/katorisenkou.png", death: "" },
    { name: "トースターの底に溜まったパン粉", risk: 30, heal: 20, image: "img/drug.png", death: "" },
    { name: "醤油の口の部分にできる結晶", risk: 50, heal: 10, image: "img/syou.png", death: "" },
    { name: "乾燥剤", risk: 70, heal: 20, image: "img/drug.png", death: "" },
    { name: "保冷剤", risk: 70, heal: 20, image: "img/drug.png", death: "" },
    { name: "歯磨き粉", risk: 10, heal: 10, image: "img/drug.png", death: "" },
    { name: "キャットフード", risk: 10, heal: 10, image: "img/catfood.png", death: "" },
    { name: "ゆでる前のパスタ", risk: 10, heal: 20, image: "img/drug.png", death: "" },
    { name: "しゃもじについたカピカピの米", risk: 10, heal: 30, image: "img/kapikapi.png", death: "" },
    { name: "消しゴム", risk: 10, heal: 10, image: "img/eraser.png", death: "" },
    { name: "鉛筆の芯", risk: 20, heal: 5, image: "img/pen.png", death: "" },
    { name: "鼻セレブ", risk: 5, heal: 10, image: "img/serebu.png", death: "" },
    { name: "灯油", risk: 70, heal: 30, image: "img/oil.png", death: "" },
    { name: "輪ゴム", risk: 20, heal: 10, image: "img/gomu.png", death: "" },
    { name: "化粧水", risk: 30, heal: 30, image: "img/facewater.png", death: "" },
    { name: "たくまの腕", risk: 70, heal: 70, image: "img/takuma.png", death: "" },
    { name: "ミャクミャク", risk: 80, heal: 60, image: "img/myaku.png", death: "" },
    { name: "Fキー", risk: 35, heal: 15, image: "img/key.png", death: "" },
    { name: "つらら", risk: 20, heal: 20, image: "img/turara.png", death: "" },
    { name: "チョウチンアンコウのここ", risk: 85, heal: 20, image: "img/anko.png", death: "" },
    { name: "カエルのたまご", risk: 45, heal: 30, image: "img/kaeru.png", death: "" },
    { name: "天然芝", risk: 30, heal: 30, image: "img/shiba.png", death: "" },
    { name: "けーしんの耳たぶ", risk: 78, heal: 60, image: "img/keshin.png", death: "" },
    { name: "寿司", risk: 5, heal: 10, image: "img/sushi.png", death: "アニサキスは非情、死"} ,
    { name: "ハンバーガー", risk: 15, heal: 25, image: "img/burger.png", death: "思っているよりも火は通っていなかった、死" },
    { name: "怪しいキノコ", risk: 40, heal: 35, image: "img/mushroom.png", death: "この見た目でセーフなわけないだろ、死" },
    { name: "腐った肉", risk: 65, heal: 50, image: "img/meat.png", death: "カビ熟成は危険、死" },
    { name: "水", risk: 1, heal: 5, image: "img/water.png", death: "ガンジス川は汚い、死" },
    { name: "玉子豆腐", risk: 99, heal: 100, image: "img/drug.png", death: "全身の体調が悪くなり死亡した、死" },
    { name: "スティックのり", risk: 70, heal: 10, image: "img/nori.png", death: "のり食って無事なわけないだろ、死" },
    { name: "どんぐり", risk: 10, heal: 5, image: "img/donguri.png", death: "虫、遺体" },
    { name: "消臭ビーズ", risk: 50, heal: 20, image: "img/syousyuu.png", death: "二度と口臭ケアの心配はありません、死" },
    { name: "入浴剤", risk: 50, heal: 20, image: "img/anmika.png", death: "アンミカと混浴で死" }, 
    { name: "スマホ", risk: 80, heal: 5, image: "img/sumaho.png", death: "爆破した、死" },
    { name: "空気", risk: 1, heal:1, image: "img/kuuki.png", death: "肺が弱っている、死" },
    { name: "蚊取り線香の灰", risk: 60, heal: 10, image: "img/katorisenkou.png", death: "お前は蚊以下、死" },
    { name: "トースターの底に溜まったパン粉", risk: 30, heal: 20, image: "img/panko.png", death: "ガン、死" },
    { name: "醤油の口の部分にできる結晶", risk: 50, heal: 10, image: "img/syou.png", death: "高血圧、死" },
    { name: "乾燥剤", risk: 70, heal: 20, image: "img/kansou.png", death: "食うなって書いてあんだろ、死" },
    { name: "保冷剤", risk: 70, heal: 20, image: "img/horeizai.png", death: "ひえひえ、死" },
    { name: "歯磨き粉", risk: 10, heal: 10, image: "img/anmika2.png", death: "すーすー、死" },
    { name: "キャットフード", risk: 10, heal: 10, image: "img/catfood.png", death: "テリアンってなんだよ、死" },
    { name: "ゆでる前のパスタ", risk: 10, heal: 20, image: "img/mama.png", death: "硬い、死" },
    { name: "しゃもじについたカピカピの米", risk: 10, heal: 30, image: "img/kapikapi.png", death: "固い、死" },
    { name: "消しゴム", risk: 10, heal: 10, image: "img/eraser.png", death: "消された、死" },
    { name: "鉛筆の芯", risk: 20, heal: 5, image: "img/pen.png", death: "シャーペンならいけた、死" },
    { name: "鼻セレブ", risk: 5, heal: 10, image: "img/serebu.png", death: "あまくて、おいしい、死" },
    { name: "灯油", risk: 70, heal: 30, image: "img/oil.png", death: "は？、死" },
    { name: "輪ゴム", risk: 20, heal: 10, image: "img/gomu.png", death: "食感はよかった、死" },
    { name: "化粧水", risk: 30, heal: 30, image: "img/facewater.png", death: "にが、死" },
    { name: "たくまの腕", risk: 70, heal: 70, image: "img/takuma.png", death: "しゃああああああああ！！！！雑魚がああああああああ！！" },
    { name: "ミャクミャク", risk: 80, heal: 60, image: "img/myaku.png", death: "ミャクミャクになる、死" },
    { name: "Fキー", risk: 35, heal: 15, image: "img/key.png", death: "F、死" },
    { name: "つらら", risk: 20, heal: 20, image: "img/turara.png", death: "雪、汚い、死" },
    { name: "チョウチンアンコウのここ", risk: 85, heal: 20, image: "img/anko.png", death: "交尾してしまった、あああああああ！！" },
    { name: "カエルのたまご", risk: 45, heal: 30, image: "img/kaeru.png", death: "タピオカブーム再来" },
    { name: "人工芝", risk: 30, heal: 30, image: "img/shiba.png", death: "間のゴムがアクセント、死" },
    { name: "けーしんの耳たぶ", risk: 78, heal: 60, image: "img/keshin.png", death: "福は訪れなかった、浄土" },
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
    //食べる食べないボタン削除
    btnkill();
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    //死亡する場合
    if (randomNumber <= currentFood.risk) {
        document.getElementById("message").textContent =currentFood.death;
        //ボタン無無効化
        document.body.style.backgroundColor = "rgba(156, 21, 21, 0.658)";
        disableButtons();
        return;
    }

    hp += currentFood.heal;
    hp = Math.min(hp, 150);

    document.getElementById("hp").textContent = hp;
    document.getElementById("message").textContent =currentFood.name + "を食べた！";

    //次の日ボタン作成
    document.getElementById("nextBtn").style.display = "inline";
}

function skip() {
    btnkill();

    hp -= 15;
    if (hp <= 0) {
        document.getElementById("message").textContent = "餓死…";
        disableButtons();
        return;
    }
    document.getElementById("hp").textContent = hp;
    document.getElementById("message").textContent = "食べなかった…";
    document.getElementById("nextBtn").style.display = "inline";
}

function nextDay() {
    day++;

    document.getElementById("day").textContent = day;
    document.getElementById("message").textContent = "";
    document.getElementById("nextBtn").style.display = "none";

    btnlife();
    nextFood();
}

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
}

nextFood();