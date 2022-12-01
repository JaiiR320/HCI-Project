function allowDrop(ev) {
    console.log(ev.target);
    if (ev.target.className == "taken slot" && ev.target.className != "slot") {
        return;
    }
    console.log('allowDrop');
    ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData('text', ev.target.id);
    ev.target.className = "card";
    ev.target.parentNode.className = "slot";

}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData('text');
	ev.target.appendChild(document.getElementById(data));
    ev.target.className = "taken slot";
}

function addCard(){
    var name = document.getElementById('formname').value;
    var notes = document.getElementById('formnotes').value;
    
    var inv = document.getElementById("inventory");
    for (var i = 0; i < inv.children.length; i++) {
        if (inv.children[i].classList.length == 1) {
            console.log(inv.children[i].id);
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

            break;
        }
    }
}
