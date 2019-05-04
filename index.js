var identity;
function allowDrop(ev){
ev.preventDefault();
}
function dragStar(ev){

    identity = ev.target.id;
}

function drop(ev){
ev.target.append(document.getElementById(identity))
}