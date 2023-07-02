const labelActividad = document.querySelector(".label_Actividad").textContent;
const inputActividad = document.querySelector(".input_Actividad");
const labelContrato = document.querySelector(".label_Contrato").textContent;
const inputContrato = document.querySelector(".input_Contrato");
const labelCargo = document.querySelector(".label_Cargo").textContent;
const inputCargo = document.querySelector(".input_Cargo");
const labelAntiguedad = document.querySelector(".label_Antiguedad").textContent;
const inputAntiguedad = document.querySelector(".input_Antiguedad");
const labelPeriodicidad = document.querySelector(".label_Periodicidad").textContent;
const inputPeriodicidad = document.querySelector(".input_Periodicidad");
const labelIngresos = document.querySelector(".label_Ingresos").textContent;
const inputIngresos = document.querySelector(".input_Ingresos");
const labelGastos = document.querySelector(".label_Gastos").textContent;
const inputGastos = document.querySelector(".input_Gastos");
const labelDisponible = document.querySelector(".label_Disponible").textContent;
const inputDisponible = document.querySelector(".input_Disponible");
const labelProblematica = document.querySelector(".label_Problematica").textContent;
const textareaProblematica = document.querySelector(".textarea_Problematica");
const labelSuperacion = document.querySelector(".label_Superacion").textContent;
const textareaSuperacion = document.querySelector(".textarea_Superacion");
const labelPrincipales = document.querySelector(".label_Principales").textContent;
const inputPrincipales = document.querySelector(".input_Principales");
const textareaPrincipales = document.querySelector(".textarea_Principales");
const labelAdicionales = document.querySelector(".label_Adicionales").textContent;
const inputAdicionales = document.querySelector(".input_Adicionales");
const textareaAdicionales = document.querySelector(".textarea_Adicionales");
const labelCodeudor = document.querySelector(".label_Codeudor").textContent;
const inputCodeudor = document.querySelector(".input_Codeudor");
const textareaCodeudor = document.querySelector(".textarea_Codeudor");
const labelPersonales = document.querySelector(".label_Personales").textContent;
const inputPersonales = document.querySelector(".input_Personales");
const textareaPersonales = document.querySelector(".textarea_Personales");
const labelServicios = document.querySelector(".label_Servicios").textContent;
const inputServicios = document.querySelector(".input_Servicios");
const textareaServicios = document.querySelector(".textarea_Servicios");
const labelFinancieras = document.querySelector(".label_Financieras").textContent;
const inputFinancieras = document.querySelector(".input_Financieras");
const textareaFinancieras = document.querySelector(".textarea_Financieras");
const labelReal = document.querySelector(".label_Real").textContent;
const inputReal = document.querySelector(".input_Real");
const textareaReal = document.querySelector(".textarea_Real");
const labelOtros = document.querySelector(".label_Otros").textContent;
const inputOtros = document.querySelector(".input_Otros");
const textareaOtros = document.querySelector(".textarea_Otros");
const labelEsCodeudor = document.querySelector(".label_EsCodeudor").textContent;
const inputEsCodeudor = document.querySelector(".input_EsCodeudor");
const textareaAdicional = document.querySelector(".datos_Adicionales");
const textareaObservacion = document.querySelector(".resultadoObservacion");
const botonCopiar = document.querySelector(".copiarTexto");

function actualizarIngresos (){
    let valor1 = inputPrincipales.value ? parseFloat(inputPrincipales.value) : 0;
    let valor2 = inputAdicionales.value ? parseFloat(inputAdicionales.value) : 0;
    let valor3 = inputCodeudor.value ? parseFloat(inputCodeudor.value) : 0;
    let sumaTotalIngreso = valor1 + valor2 + valor3;
    inputIngresos.value = sumaTotalIngreso;    
}

inputPrincipales.addEventListener("input", actualizarIngresos);
inputAdicionales.addEventListener("input", actualizarIngresos);
inputCodeudor.addEventListener("input", actualizarIngresos);

function actualizarGastos (){
    let valor1 = inputPersonales.value ? parseFloat(inputPersonales.value) : 0;
    let valor2 = inputServicios.value ? parseFloat(inputServicios.value) : 0;
    let valor3 = inputFinancieras.value ? parseFloat(inputFinancieras.value) : 0;
    let valor4 = inputReal.value ? parseFloat(inputReal.value) : 0;
    let valor5 = inputOtros.value ? parseFloat(inputOtros.value) : 0;
    let sumaTotalGastos = valor1 + valor2 + valor3 + valor4 + valor5;
    inputGastos.value = sumaTotalGastos;    
}

inputPersonales.addEventListener("input", actualizarGastos);
inputServicios.addEventListener("input", actualizarGastos);
inputFinancieras.addEventListener("input", actualizarGastos);
inputReal.addEventListener("input", actualizarGastos);
inputOtros.addEventListener("input", actualizarGastos);

function actualizarDisponible (){
    let valor1 = inputIngresos.value ? parseFloat(inputIngresos.value) : 0;
    let valor2 = inputGastos.value ? parseFloat(inputGastos.value) : 0;
    let valorDisponible = valor1 - valor2;
    inputDisponible.value = "$ " + valorDisponible;
}

inputPrincipales.addEventListener("input", actualizarDisponible);
inputAdicionales.addEventListener("input", actualizarDisponible);
inputCodeudor.addEventListener("input", actualizarDisponible);
inputPersonales.addEventListener("input", actualizarDisponible);
inputServicios.addEventListener("input", actualizarDisponible);
inputFinancieras.addEventListener("input", actualizarDisponible);
inputReal.addEventListener("input", actualizarDisponible);
inputOtros.addEventListener("input", actualizarDisponible);

function concatenado () {
    let valor1 = inputActividad.value ? (labelActividad+" "+inputActividad.value + " "): "";
    let valor2 = inputContrato.value ? (labelContrato+" "+inputContrato.value + " "): "";
    let valor3 = inputCargo.value ? (labelCargo+" "+inputCargo.value + " "): "";
    let valor4 = inputAntiguedad.value ? (labelAntiguedad+" "+inputAntiguedad.value + " "): "";
    let valor5 = inputPeriodicidad.value ? (labelPeriodicidad+" "+inputPeriodicidad.value + " "): "";
    let valor6 = inputIngresos.value ? (labelIngresos+" "+inputIngresos.value + " "): "";
    let valor7 = inputGastos.value ? (labelGastos+" "+inputGastos.value + " "): "";
    let valor8 = inputDisponible.value ? (labelDisponible+" "+inputDisponible.value + " "): "";
    let valor9 = textareaProblematica.value ? (labelProblematica+" "+textareaProblematica.value + " "): "";
    let valor10 = textareaSuperacion.value ? (labelSuperacion+" "+textareaSuperacion.value + " "): "";
    let valor11 = inputPrincipales.value ? (labelPrincipales+" "+inputPrincipales.value + " "): "";
    let valor12 = textareaPrincipales.value ? ("("+textareaPrincipales.value+")" + " "): "";
    let valor13 =  inputAdicionales.value ? (labelAdicionales+" "+inputAdicionales.value + " "): "";
    let valor14 =  textareaAdicionales.value ? ("("+textareaAdicionales.value+")" + " "): "";
    let valor15 =  inputCodeudor.value ? (labelCodeudor+" "+inputCodeudor.value + " "): "";
    let valor16 =  textareaCodeudor.value ? ("("+textareaCodeudor.value+")"+" "): "";
    let valor17 =  inputPersonales.value ? (labelPersonales+" "+inputPersonales.value + " "): "";
    let valor18 =  textareaPersonales.value ? ("("+textareaPersonales.value+")"+ " "): "";
    let valor19 = inputServicios.value ? (labelServicios+" "+inputServicios.value + " "): "";
    let valor20 = textareaServicios.value ? ("("+textareaServicios.value+")"+ " "): "";
    let valor21 = inputFinancieras.value ? (labelFinancieras+" "+inputFinancieras.value + " "): "";
    let valor22 = textareaFinancieras.value ? ("("+textareaFinancieras.value+")"+ " "): "";
    let valor23 = inputReal.value ? (labelReal+" "+inputReal.value + " "): "";
    let valor24 = textareaReal.value ? ("("+textareaReal.value+")"+ " "): "";
    let valor25 = inputOtros.value ? (labelOtros+" "+inputOtros.value + " "): "";
    let valor26 = textareaOtros.value ? ("("+textareaOtros.value+")"+ " "): "";
    let valor27 = inputEsCodeudor.value ? (labelEsCodeudor+" "+inputEsCodeudor.value + " "): "";
    let valor28 = textareaAdicional.value ? (textareaAdicional.value): " ";
    let observacionConcatenada = valor1 + valor2 + valor3 + valor4 + valor5 + valor6 + valor7 + valor8 + valor9 + valor10 + valor11 + valor12 + valor13 + valor14 + valor15 + valor16 + valor17 + valor18 + valor19 + valor20 + valor21 + valor22 + valor23 + valor24 + valor25 + valor26 + valor27 + valor28;
    textareaObservacion.value = observacionConcatenada;
}

inputActividad.addEventListener("input", concatenado);
inputContrato.addEventListener("input", concatenado);
inputCargo.addEventListener("input", concatenado);
inputAntiguedad.addEventListener("input", concatenado);
inputPeriodicidad.addEventListener("input", concatenado);
inputIngresos.addEventListener("input", concatenado);
inputGastos.addEventListener("input", concatenado);
inputDisponible.addEventListener("input", concatenado);
textareaProblematica.addEventListener("input", concatenado);
textareaSuperacion.addEventListener("input", concatenado);
inputPrincipales.addEventListener("input", concatenado);
textareaPrincipales.addEventListener("input", concatenado);
inputAdicionales.addEventListener("input", concatenado);
textareaAdicionales.addEventListener("input", concatenado);
inputCodeudor.addEventListener("input", concatenado);
textareaCodeudor.addEventListener("input", concatenado);
inputPersonales.addEventListener("input", concatenado);
textareaPersonales.addEventListener("input", concatenado);
inputServicios.addEventListener("input", concatenado);
textareaServicios.addEventListener("input", concatenado);
inputFinancieras.addEventListener("input", concatenado);
textareaFinancieras.addEventListener("input", concatenado);
inputReal.addEventListener("input", concatenado);
textareaReal.addEventListener("input", concatenado);
inputOtros.addEventListener("input", concatenado);
textareaOtros.addEventListener("input", concatenado);
inputEsCodeudor.addEventListener("input", concatenado);
textareaAdicional.addEventListener("input", concatenado);

function copiarObservacion () {
    let mensajeResultado = textareaObservacion.value;
    navigator.clipboard.writeText(mensajeResultado);    
}

botonCopiar.onclick = copiarObservacion;

window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    event.returnValue = '¿Estás seguro de que quieres salir?';
});