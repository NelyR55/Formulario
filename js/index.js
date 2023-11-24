var bandera =false; 

function validar (){
 if(bandera){
     console.log("Validacion completa");
  //redirecciona a la pagina correspondiente
 }
}
function correctCaptcha(){

     console.log("Captcha resuelto correctamente");
     bandera = true;
}
