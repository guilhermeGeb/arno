function enviar(){
    var mensagem = document.getElementById("input").value;

    var paragrafo = document.createElement("P");  
    var texto = document.createTextNode( mensagem );
    paragrafo.appendChild(texto); 

    document.getElementById("mensagens").appendChild( paragrafo );

    document.getElementById("input").value = "";
}