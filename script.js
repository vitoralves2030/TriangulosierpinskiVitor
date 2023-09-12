 var c = document.getElementById("myCanvas");
 var ctx = c.getContext("2d");
 var delay1, delay2;
/*Dibujar linea"*/

function drawLine(p0, p1, color = "black"){
ctx.beginPath();
ctx.moveTo(p0.x, p0.y);
ctx.lineTo(p1.x, p1.y);
ctx.strokeStyle = color; 
ctx.lineWidth = 2;
ctx.stroke();
}
/*Dibujar triángulo*/
 function drawTriangle(p0, p1,p2){
drawLine(p0, p1);
drawLine(p1, p2);
drawLine(p2, p0);
}

/*"Dibujar fractal*/
function drawFract(p0,p1,p2,nivel) {
if (nivel > 0){ 
 /*Calcular nuevos vértices intermedios"*/
const pA = {
x: p0.x+(p1.x-p0.x)/2,
y: p0.y-(p0.y-p1.y)/2
}, 
pB ={
x: p1.x + (p2.x-p1.x)/2,
y: p1.y - (p1.y-p2.y)/2
},
 pC ={
x:p0.x+(p2.x-p0.x)/2,
y:p0.y
};

/*Dibujar los tres triángulos intermedios*/
drawFract(p0, pA, pC, nivel - 1);
setTimeout(function(){
drawFract(pA, p1,pB, nivel - 1); 
}, delay1);
setTimeout(function(){ 
drawFract(pC, pB,p2, nivel - 1);
}, delay2);
} else {
/*Triangulo principal*/
drawTriangle(p0,p1, p2);
}
}

/*Activar animación*/
function animacion(check){
if (check == true) {
delay1 = 500; 
delay2 = 1000;
    
} else {
 delay1 = 0;    
 delay2 = 0;
}
}

/*"Limpia la imagen y vuelve a dibujar con el nivel especificado"*/
function actualizarFractal(val){
document.getElementById("textInput").value = val;
document.getElementById("niveles").value = val;
document.getElementById("cant").innerHTML = 3** parseInt(val);

ctx.clearRect(0, 0, 401, 401);
drawFract({x: 0, y: 400}, {x: 200, y: 0}, {x: 400, y: 400}, val);
}
    
drawFract({x: 0, y: 400}, {x: 200, y: 0}, {x: 400, y: 400 }, 0);
    