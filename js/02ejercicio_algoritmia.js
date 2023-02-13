/*
Solicitar al usuario 10 numeros y que el programa devolvera:
1. cuantos son positivos
2. cuantos son negativos´
3. cuantos son pares
*/
let nums = [];
let negs = [];
let pars = [];
function solicitarnum(){
    for(let i=0; i<10; i++){
        let n = parseFloat(prompt("Introduce diez numeros reales "));
        nums.push(n);
        console.log(nums);
    }
}
solicitarnum()
console.log("numeros introducidos: "+nums);

function negativos(){
    for(let i=0; i<nums.length; i++){
     let n = nums[i];
     if(n<0){
        console.log(n+" es negativo");
        negs.push(n);
     }else{
        console.log(n+" es positivo");
     }   
    }
}
negativos()
console.log("los numeros negativos introducidos son: "+negs);
alert("Has introducido "+negs.length+" numeros negativos");

function pares(){
    for(let i=0; i<nums.length; i++){
        let n = nums[i];
        if((n%2)==0){
            console.log(n+" es par");
            pars.push(n);
        }else{
            console.log(n+" es impar");
        }
    }
}
pares();
console.log("los numeros pares introducimos son: "+pars);
alert("Has introducido "+pars.length+" numeros pares");