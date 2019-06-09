var casillas = document.querySelectorAll("main div");
const h2 = document.querySelector("h2");
var turno = "X";
const reinicio = document.querySelector(".reinicio");

casillas.forEach(casilla => {
    casilla.addEventListener( "click", function (evento) {
		if( this.childElementCount == 0){
	    	if( turno == 'X'){
	    		this.innerHTML = `<span class="movimiento cross">${turno}</span>`;
	    		h2.innerHTML = "Usuario 1";
	    		turno = "O";
	    	}else{
	    		this.innerHTML = `<span class="movimiento circle">${turno}</span>`
	    		h2.innerHTML = "Usuario 2";
	    		turno = "X";
	    	}
    	}else {
    		alert("Casilla Ya Ocupada");
    	}
    });
});    



reinicio.addEventListener('click', function(){
	h2.innerHTML = "Usuario 1";
	turno = "X";
	casillas.forEach(casilla => {
		casilla.innerHTML = "";
	});
});
