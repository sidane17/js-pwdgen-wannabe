
const z = "#24";
document.getElementById("submit").onclick = function(){
    let a = document.getElementById("nome").value;
    let b = document.getElementById("cognome").value;
    let c  = document.getElementById("colore").value;
  
    let password = a+b+c+z;
    document.getElementById("cavallo").innerHTML=password;

}



