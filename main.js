const h1 = document.querySelector("h1");
const input1 = document.querySelector("#Calculo1");
const input2 = document.querySelector("#Calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result");

btn.addEventListener("click", btnOnclick)


function btnOnclick(){
   const sumaInputs = (parseInt(input1.value) + parseInt(input2.value)); 
   pResult.innerHTML = "resultado: " + sumaInputs;
}
