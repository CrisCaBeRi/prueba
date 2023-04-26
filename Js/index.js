//!formulario
function sendAlert() {
  let nombre = document.getElementById("name").value;
  let apellidos = document.getElementById("lastName").value;
  let correo = document.getElementById("email").value;
  if (nombre != false && apellidos != false && correo != false) {
    alert(
      `Hola ${nombre} ${apellidos}, te has registrado con el correo ${correo}`
    );
  }
}
//!Hola José 
let array = ["Maria","Carlos","Jose", "Luisa","Martha"]; 
for (let index = 0; index < array.length; index++) {
    if (array[index]== "Jose") {        
        console.log(`Bienvenido ${array[index]}`);   
    }else{
        console.log(`Hola ${array[index]}`);
    }
}