/*
1º Solicite al usuario el ingreso por teclado de 3 notas
2º Saque la media de las notas
3º Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'
*/
let notas = [];
function introducirnotas() {
    while (notas.length < 3) {
        var nota = parseFloat(prompt("Introduce una nota entre el 0 y el 10"));
        if(nota<0 || nota>10){
            alert("la nota introducida no está entre 0 y 10");
        }else{
            notas.push(nota);
        }        
    }
}
introducirnotas();
alert("Las notas introducidas son: "+notas);

function calculanotas() {
    let media;
    media = (notas[0] + notas[1] + notas[2]) / 3;
    console.log(media);
    if (media < 5) {
        alert("La media de las notas introducidas es: " + media + ", estás suspenso");
    } else {
        if (media >= 5 && media < 7) {
            alert("La media de las notas introducidas es: " + media + ", estás aprobado");
        } else {
            alert("La media de las notas introducidas es: " + media + ", tienes un sobresaliente");
        }
    }
    return media;
}
calculanotas();