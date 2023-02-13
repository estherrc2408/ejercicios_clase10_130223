
var nota1 = parseFloat(prompt("Introduce la primera nota"));
var nota2 = parseFloat(prompt("Introduce la segunda nota"));
var nota3 = parseFloat(prompt("Introduce la tercera nota"));
console.log(nota1, nota2, nota3);


function calculanotas() {
    let media;
    media = (nota1 + nota2 + nota3) / 3;
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