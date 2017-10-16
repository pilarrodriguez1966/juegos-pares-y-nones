document.getElementById("no").onclick=function(){
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("noQuiero").style.display="block";
    
}
document.getElementById("si").onclick=function(){
    document.getElementById("bienvenida").style.display="none";
    document.getElementById("elige").style.display="block";
    
}
  document.getElementById("siguiente").onclick=function(){
       
    document.getElementById("elige").style.display="none";
    document.getElementById("jugador").style.display="block";
     
    
} 
  
  document.getElementById("continua").onclick=function(){
    document.getElementById("jugador").style.display="none";
    document.getElementById("maquina").style.display="block";
      
   juego(); 
}
  document.getElementById("juega").onclick=function(){
      document.getElementById("maquina").style.display="none"; 
      document.getElementById("resultados").style.display="block";
  }
  //empieza el juego
  function juego(){
      var par=document.getElementById("pares");
      var impar=document.getElementById("nones");
      if(par.checked){
          var jugador=par.value;
          var maquina=impar.value;
      }
      if(impar.checked){
          var jugador=impar.value;
          var maquina=par.value;
      }
      console.log(jugador);
      console.log(maquina);
      
      var escogerNumero=document.getElementById("escogerNumero").value;
      console.log(escogerNumero);
      
      var numeroMaquina=Math.floor(Math.random()*11);
      console.log(numeroMaquina);
      var suma=Number(escogerNumero)+Number(numeroMaquina);
      console.log(suma);
      
      document.getElementById("numJ").innerHTML="Jugador elige "+escogerNumero;
      document.getElementById("numM").innerHTML="Maquina elige "+numeroMaquina;
      
      
      if(suma%2===1){
          var resultados="nones";
      }
      if(suma%2===0){
          var resultados="pares";
      }
      if(resultados===jugador){
        document.getElementById('ganador').style.display='block';
        document.getElementById('perdedor').style.display
        ='none';
    }else{
        document.getElementById('perdedor').style.display='block';
        document.getElementById('ganador').style.display='none';
    }
}
      
      
  
  
  
             