var d = document.getElementById("dibujo");
var lienzo= d.getContext("2d");

var lineas= 30;
var l =0;
var xi;
var xf;
var x= 310;
for (var l = 0;l<lineas ; l++) {
    xi = 10*l;
    xf = 10*(l+1);
    xy = x-10;
    dibujarlineas("green",xi,0,300,xf);
    dibujarlineas("green",0,xi,xf,300);
    dibujarlineas("green",xy,0,0,xf);
    dibujarlineas("green",300,xy,xf,300);
    x=x-10
}
dibujarlineas("green",1,1,1,299);
dibujarlineas("green",1,299,299,299);
dibujarlineas("green",1,1,299,1);
dibujarlineas("green",299,299,299,1);


function dibujarlineas(color,xinicial,yinicial,xfinal,yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
