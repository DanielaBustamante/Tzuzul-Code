/*
REQUISITOS:
- Compartir código fuente a través de GitHub
(Repo privado: Agregando a @tzuzulcode como colaborador)
- Presentar solución en la fecha asignada
- Seguir buenas prácticas para el código

FECHA MAXIMA DE ENTREGA:
- 18/02/22

CONSIGNAS: Matriz en espiral
- Para este primer proyecto y con el objetivo de practicar 
tu lógica con matrices, deberás desarrollar el clásico 
ejercicio del generador de matrices en espiral

DETALLES DEL PROYECTO:
- Construir un generador de matrices en espiral. 
Se necesita que el generador funcione para cualquier 
tamaño de matriz.
*/

let tamaño = prompt("Ingrese el tamaño de la matriz: ")
let inicio = 0
let fin = tamaño - 1
let contador = 1

let matriz = new Array(tamaño)
for(x=0 ; x<tamaño ; x++){ /*ver el menor igual aca */
    matriz[x] = new Array(tamaño)  
}

for(x=0 ; x<tamaño; x++){
    for(y=0 ; y<tamaño ; y++){
        matriz[x][y] = 0
    }
}

while(contador<=(Math.pow(tamaño,2))){

    for(x=inicio; x<=fin; x++){
        matriz[inicio][x] = contador
        contador++

    }

    for(x=inicio+1; x<=fin; x++){
        matriz[x][fin] = contador 
        contador++
    }

    for(x=fin-1; x>=inicio; x--){
        matriz[fin][x] = contador
        contador++
    }

    for(x=fin-1; x>=inicio+1; x--){
        matriz[x][inicio] = contador
        contador++
    }

    inicio = inicio+1
    fin = fin-1

}

document.write("<table>")

for(x=0 ; x<tamaño; x++){
    document.write("<tr>")
    for(y=0 ; y<tamaño ; y++){
        document.write("<td align='center'>" + matriz[x][y] + "</td>")
    }
    document.write("</tr>")
}
document.write("<table>")