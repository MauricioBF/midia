document.getElementById("Cadrasto").style.display = "none";
document.getElementById("cadastrar").style.display = "block";
document.getElementById("Del").style.display = "none";
document.getElementById("Deletar").style.display = "block";
let vnome = new Array();
let vqt = new Array();
let vurl = new Array();
function cad() {
    let x = document.getElementById("Cadrasto");
    let y = document.getElementById("cadastrar");
    let w = document.getElementById("Deletar");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        w.style.display = "block";
    }
}
function Delcad() {
    let x = document.getElementById("Del");
    let y = document.getElementById("cadastrar");
    let w = document.getElementById("Deletar");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        w.style.display = "none";
    } else {
        x.style.display = "none";
        y.style.display = "block";
        w.style.display = "block";
    }
}
function contruir(){
    let test = true;
    let nome = document.getElementById("nome").value;
    let qt = document.getElementById("qt").value;
    let url = document.getElementById("url").value;
    if(nome == "" || qt == "" || url == ""){
        alert("Dados invalidos!");
        test = false;
    }
    for(i = 0;vnome.length-1>=i;i++){
        if (nome === vnome[i]){
            test = false;
            if(vnome.length != 0){
                alert("Nome Duplicado!");
            }
        }
    }
    if (test){
        vnome.push(nome);
        vqt.push(qt);
        vurl.push(url);
        cad();
        addDiv();
    }
}
function Delcontruir(){
    let test = false;
    let pos = 0;
    let nome = document.getElementById("deletename").value;
    if(nome === ""){
        alert("Dado invalido!");
        test = false;
    }
    for(i = 0;vnome.length-1>=i; i++){
        if (nome === vnome[i]){
            if(vnome.length !== 0){
                test = true;
                pos = i;
            }
        }
    }
    if (test){
        var vnomet = new Array();
        var vqtt = new Array();
        var vurlt = new Array();
        for(i = 0;vnome.length-1>=i;i++){
             if (pos != i){
                vnomet[i] = vnome[i];
             }
        }
        for(i = 0;vqt.length-1>=i;i++){
             if (pos != i){
                vqtt[i] = vqt[i];
             }
        }
        for(i = 0;vurl.length-1>=i;i++){
             if (pos != i){
                vurlt[i] = vurl[i];
             }
        }
        vnome =vnomet;
        vqt = vqtt;
        vurl = vurlt;
        Delcad();
        addDiv();
    }
}
function remove(){
    let myNode = document.getElementById("series");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}
function addDiv() {
    remove();
    for (i = 0;vnome.length-1>=i;i++){
        if((typeof(vnome[i])!='undefined')){
            let objTo = document.getElementById("series");
            let divtest = document.createElement("div");
            divtest.innerHTML = vnome[i];
            divtest.style.marginTop = "5%";
            objTo.appendChild(divtest);
            let x = document.createElement("IMG");
            let urltext = vurl[i];
            x.setAttribute("src", urltext);
            x.setAttribute("width", "50%");
            x.setAttribute("height", "50%");
            objTo.appendChild(x);
            objTo = document.getElementById("series");
            divtest = document.createElement("div");
            divtest.innerHTML = "Numero de temporadas: "+vqt[i];
            objTo.appendChild(divtest);
        }
    }
}