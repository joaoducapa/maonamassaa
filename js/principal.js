var titulo = document.querySelector(".titulo");
titulo.textContent  = "aparecida nutricionista";

var pacientes = document.querySelectorAll('.paciente');
for(let contador = 0; contador < pacientes.length;i ++){
    var peso = pacientes[contador].querySelector('.info-peso').textContent;
    var altura = pacientes[contador].querySelector('.info-altura').textContent;
    var imc = peso / (altura * altura);
    pacientes[contador].querySelector('.info-imc').textContent = imc; 
}
