/*
Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
1º Almacenar todos los números en un array
2º Almacenar en otro array los números comprendidos entre el 1 y 250
3º Almacenar en otro array los números comprendidos entre el 251 y 500
*/
let nums = [];
let num250 = [];
let num500 = [];
function solicitarnum() {
    while (nums.length < 10) {
        let n = parseFloat(prompt("introduce diez números entre el 1 y el 500"));
        if (n < 0) {
            alert("el numero es menor que 1, introduce otro entre el 1 y el 500");
        } else {
            if (n > 500) {
                alert("el numero es mayor que 500, introduce otro entre el 1 y el 500");
            } else {
                if (n > 1 && n <= 500) {
                    console.log(n + "cumple la condicion");
                    nums.push(n);
                    console.log(nums);
                }
            }
        }
    }
}
solicitarnum();
alert("numeros introducidos " + nums);
console.log(nums);

function organizarnum() {
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (n < 250) {
            num250.push(n);
        } else {
            num500.push(n);
        }
    }
}
organizarnum();
alert("numeros introducidos por encima de 250 : "+num250+"\n numeros introducidos entre 250 y 500 : "+num500);