
let nota = 0;
let contadorPromocionados = 0;
let contadorRegulares = 0;
let contadorReprobados = 0;
let contadorErrores = 0;

while (nota !== -1) {
    nota = Number(prompt("Ingrese una nota (o -1 para terminar)"));
    if (nota === -1) {
        alert("Fin del ingreso de notas");
        break;
    }
    if (nota >= 7 && nota <= 10) {
        contadorPromocionados++;
        alert("Promocionado");
    } else if (nota >= 4 && nota < 7) {
        contadorRegulares++;
        alert("Regular");
    } else if (nota > 0 && nota < 4) {
        contadorReprobados++;
        alert("Reprobado");
    } else {
        contadorErrores++;
        alert("Error en promedio");
    }
}

document.getElementById("promocionado").innerHTML = "Notas promocionados: " + contadorPromocionados;
document.getElementById("regular").innerHTML = "Notas regulares: " + contadorRegulares;
document.getElementById("reprovado").innerHTML = "Notas reprobadas: " + contadorReprobados + "<br>Notas fuera de rango: " + contadorErrores;