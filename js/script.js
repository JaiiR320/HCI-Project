function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
    emptyCheck();
}

function drop(ev) {
    if (ev.target.className != "slot") {
        return;
    }
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));
    emptyCheck();
}

function emptyCheck(){
    var kitchen = document.getElementById('kitchen');
    var server = document.getElementById('server');
    var inventory = document.getElementById('inventory');
    for (var i = 0; i < kitchen.children.length; i++) {
        if (kitchen.children[i].children.length == 0) {
            kitchen.children[i].className = "slot";
        } else {
            kitchen.children[i].className = "taken slot";
        }
    }
    for (var i = 0; i < server.children.length; i++) {
        if (server.children[i].children.length == 0) {
            server.children[i].className = "slot";
        } else {
            server.children[i].className = "taken slot";
        }
    }
    for (var i = 0; i < inventory.children.length; i++) {
        if (inventory.children[i].children.length == 0) {
            inventory.children[i].className = "slot";
        } else {
            inventory.children[i].className = "taken slot";
        }
    }
}

function addCard(){
    var name = document.getElementById('formname').value;
    var currentCards = document.getElementsByClassName('card');
    
    for (var i = 0; i < currentCards.length; i++){
        if (currentCards[i].id == name) {
            return;
        }
    }
    
    var notes = document.getElementById('formnotes').value;
    console.log("attempting to add card");
    var inv = document.getElementById("inventory");
    for (var i = 0; i < inv.children.length; i++) {
        if (inv.children[i].className != "taken slot") {
            inv.children[i].className = "taken slot";
            var div = document.createElement("div");
            div.id = name;
            div.className = "card";
            div.draggable = true;
            div.setAttribute("ondragstart", "drag(event)");
            var h2 = document.createElement("h2");
            h2.innerHTML = name;
            div.appendChild(h2);
            var div2 = document.createElement("div");
            div2.className = "notes";
            var p = document.createElement("p");
            p.innerHTML = notes;
            div2.appendChild(p);
            div.appendChild(div2);
            inv.children[i].appendChild(div)
            console.log("added " + name + " to slot " + inv.children[i].id)
            return;
        }
    }
}
