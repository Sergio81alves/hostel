let prato; 
let bebida;
function escolheuPao(){
   let pao = document.getElementById('pao').style.border="2px solid green";
   let croissant = document.getElementById('croissant').style.border=""
   prato = 'Pão'
}

function escolheuCroissant(){
    let croissant = document.getElementById('croissant').style.border="2px solid green";
    let pao = document.getElementById('pao').style.border=""
    prato = 'Croissant'
 }

 function escolheuCafe(){
    document.getElementById('cafe').style.border="2px solid green";
    document.getElementById('leite').style.border="";
    document.getElementById('crem').style.border=""
    bebida = "Café"
 }
 function escolheuLeite(){
    document.getElementById('cafe').style.border="";
    document.getElementById('leite').style.border="2px solid green";
    document.getElementById('crem').style.border=""
    bebida = "Leite"
 }
 function escolheuCrem(){
    document.getElementById('cafe').style.border="";
    document.getElementById('leite').style.border="";
    document.getElementById('crem').style.border="2px solid green"
    bebida = "Crem"
 }

 function finalizarPedido() {
   let mensagem = `Olá, gostaria de pedir um ${prato} e um ${bebida}`;
   if(prato || bebida != undefined){
    mensagem;
   }else{
    alert("Por Favor, Conferir o pedido")
   }
   window.open("https://wa.me/+5511988090104?text=" + mensagem)
 }