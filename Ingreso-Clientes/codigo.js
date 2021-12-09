const nombre= document.getElementById("nombre");
const apellido= document.getElementById("apellido");
const cui= document.getElementById("cui");
const departamento= document.getElementById("departamento");
const button=document.getElementById("boton-registro");


button.addEventListener("click",()=>{
    console.clear();
    if(nombre.value==""||apellido.value==""||cui.value==""||departamento.value==""){
        alertaFracaso();
        limpiarCampos();
    } else {
        if(cui.value.toString().length===13){
            alertaExito();
            console.log(`Nombre del Cliente: ${nombre.value}`);
            console.log(`Apellido del Cliente: ${apellido.value}`);
            console.log(`CUI del Cliente: ${cui.value}`);
            console.log(`Departamento del Cliente: ${departamento.value}`);
            limpiarCampos();
        } else {
            cuiIncorrecto();
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

const cuiIncorrecto=()=>{
    Swal.fire({
        icon: 'error',
        title: 'Error en el campo CUI...',
        text: 'Revisa el campo del CUI debido a que no has ingresado la cantidad de caracteres necesarios!',
      })
};

const limpiarCampos= ()=>{
    nombre.value="";
    apellido.value="";
    cui.value="";
    departamento.value="";
}