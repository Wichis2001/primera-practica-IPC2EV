const email= document.getElementById("email")
const nombre= document.getElementById("nombre");
const contrasenia= document.getElementById("contrasenia")
const contraseniaR= document.getElementById("contraseniar")
const button=document.getElementById("boton-registro");


button.addEventListener("click",()=>{
    console.clear();
    if(nombre.value==""||contrasenia.value==""||contraseniaR.value==""||email.value==""){
        alertaFracaso();
        limpiarCampos();
    } else {
        if(contrasenia.value===contraseniaR.value){
            alertaExito();
            console.log(`Email del Usuario: ${email.value}`);
            console.log(`Nombre de Usuario: ${nombre.value}`);
            console.log(`Contraseña del Usuario: ${contrasenia.value}`);
            limpiarCampos();
        } else {
            contraseniaIncorrecta();
            limpiarCampos();
        }
    }
});

const alertaExito=()=>{
    Swal.fire({
        icon: 'success',
        title: 'Registro de usuario Realizado con Exito!',
        text: 'Verifica los datos en la consola del navegador',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(./../fondoT.png")',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.gifer.com/PYh.gif")
          left top
          no-repeat
        `
    })
};

const alertaFracaso=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has llenado todos los campos disponibles!',
      })
};

const contraseniaIncorrecta=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Contraseñas No Coinciden...',
        text: 'Revisa los campos de contraseñas para asegurarte que esten escritas igual!',
      })
};

const limpiarCampos= ()=>{
    nombre.value="";
    contraseniaR.value="";
    email.value="";
    contrasenia.value="";
}