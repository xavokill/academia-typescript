var btnSum = document.getElementById("btnSum");
var txtNum1 = document.getElementById("txtNum1");
var txtNum2 = document.getElementById("txtNum2");
function sumar(num1, num2) {
    return num1 + num2;
}
btnSum.addEventListener("click", function () {
    // forma #1 de 'castear' tipos de datos
    console.log(sumar(+txtNum1.value, +txtNum2.value));
    // forma #2 de 'castear' tipos de datos
    //console.log(sumar(parseInt(txtNum1.value), parseInt(txtNum2.value)));
    // forma #3 de 'castear' tipos de datos
    // console.log(sumar(Number(txtNum1.value), Number(txtNum2.value)))
});
