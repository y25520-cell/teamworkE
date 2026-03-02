let encyclopedia = JSON.parse(localStorage.getItem("souraiZukan")) || [];

const list = document.getElementById("zukanList");

foods.forEach(food => {

    const div = document.createElement("div");
    div.classList.add("zukanItem");

    if (encyclopedia.includes(food.name)) {

        div.innerHTML = `
            <img src="${food.image}" class="zukanImg">
            <h3>${food.name}</h3>
            <p>危険度: ${food.risk}%</p>
        `;

    } else {

        div.innerHTML = `
            <div class="unknownImg">？？？</div>
            <h3>？？？？？？</h3>
            <p>危険度: ???%</p>
        `;
    }

    list.appendChild(div);
});