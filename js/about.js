
let users = [
    {surname: "Nagy", firstname: "Károly", age:26},
    {surname: "Kis", firstname: "Imola", age:19},
    {surname: "Mesterházy", firstname: "Gábor", age:26},
    {surname: "Mircse", firstname: "Jenő", age:26},
    {surname: "Batorfy", firstname: "Dénes", age:26},
    {surname: "Mérges", firstname: "Károly", age:26},
]

let  tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
let createButtonGroup = parent => {
    let group = document.createElement ("div");
    group.className = "btn-group";

    let btnInfo = document.createElement ("button");
    btnInfo.className = "btn-info btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    let btnDanger = document.createElement ("button");
    btnInfo.className ="btn-danger btn";
    btnInfo.innerHTML = '<i class="fas fa-sync-alt"></i>';

    group.appendChild(btnInfo);
    group.appendChild(btnDanger);

    let td = document.createElement("td");
    td.appendChild(group);
    parent.appendChild(td);
}
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr)
    for (let value of Object.values(users[k])) {
        createTD(value, tr);
    }

    createButtonGroup(tr);
    tableBody.appendChild(tr);
}