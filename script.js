var gridconteiner = document.getElementById('gridconteiner');
var baody = document.getElementById('body');
var sidevalue = 100;
var nhorizontal = Math.trunc(document.documentElement.clientWidth / sidevalue);
var nvertical = Math.trunc(document.documentElement.clientHeight / sidevalue);
var ntotalelementos = nhorizontal * nvertical;
alert("Click em qualquer area para reconfigurar o padrã0 de circulo!");
function getRandInt(begin, end){
    if (begin === 0) {
        alert("Erro!");
        return;
    }

    return Math.floor(Math.random() * (end - begin + 1)) + begin;
}

function createGrid(nelementos){
    gridconteiner.innerHTML = "";
    for(let x = 0; x < nelementos; x++){
        let fracao = 10;
        let txreducao = getRandInt(1, 5);
        let reducao = fracao * txreducao; 
        let diametro = sidevalue - reducao;
        let div = document.createElement("div");
        let innerdiv = document.createElement("div");
        matiz = (getRandInt(1, 12)-1) * 30;

        div.id = x;
        div.classList = 'full-center';
        div.style.height = sidevalue + 'px';
        div.style.width = sidevalue + 'px';
        innerdiv.style.backgroundColor = "hsl(" + matiz + ",100%, 50%)";
        innerdiv.style.height = diametro + 'px';
        innerdiv.style.width = diametro + 'px';
        innerdiv.style.borderRadius = diametro/2 + 'px';
        div.appendChild(innerdiv);
        gridconteiner.style.height = nvertical * sidevalue + 'px';
        gridconteiner.style.width = nhorizontal * sidevalue + 'px';
        gridconteiner.appendChild(div);        
    }
}

createGrid(ntotalelementos);

function updateSizeViewport(){
    nhorizontal = Math.trunc(document.documentElement.clientWidth / sidevalue);
    nvertical = Math.trunc(document.documentElement.clientHeight / sidevalue);
    ntotalelementos = nhorizontal * nvertical;
    createGrid(ntotalelementos);
}

window.addEventListener('resize', updateSizeViewport)
function createGridOnClick(){
    createGrid(ntotalelementos) 
}
baody.onclick = createGridOnClick;
