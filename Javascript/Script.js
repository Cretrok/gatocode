var casillas = document.querySelectorAll("main div");
var turno = "X";

casillas.forEach(casilla => {
    casilla.addEventListener( "click", function (evento) {
    	if( turno == 'X'){
    		this.innerHTML = `<span class="movimiento croos">${turno}</span>`;
    		turno = "O";
    		console.log("click en: "+casilla);
    	}else{
    		this.innerHTML = `<span class="movimiento circle">${turno}</span>`
    		turno = "X";
    	}
    });
});    







