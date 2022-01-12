var cont = [document.querySelector(".primerrequest"),document.querySelector(".segundorequest")];
var nom = document.querySelector(".nombre");
var numami = document.querySelector(".numero2");
var numreq = document.querySelector(".numero1");
var cuenta = 418;
a=1;

function remover(){
    if(a==1){
        cont[0].remove();
        a++;
    }
    else{
        cont[1].remove();
    }
    numreq.innerText -= 1;
}
function cambiar(){
    nom.innerText="Luisa Chávez";
}

function sube(){
    cuenta++;
    numami.innerText = cuenta;
    remover();
}
