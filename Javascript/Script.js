var casillas = document.querySelectorAll("main div");
const h2 = document.querySelector("h2");
const btnrestart = document.querySelector('.reinicio');
var turno = "X";
const reinicio = document.querySelector("reinicio");

casillas.forEach(casilla => {
    casilla.addEventListener( "click", function (evento) {
    	if( turno == 'X'){
    		this.innerHTML = `<span class="movimiento croos">${turno}</span>`;
    		h2.innerHTML = "Usuario 1";
    		turno = "O";
    		//console.log("click en: "+casilla);
    	}else{
    		this.innerHTML = `<span class="movimiento circle">${turno}</span>`
    		h2.innerHTML = "Usuario 2";
    		turno = "X";
    	}
    });
});    



btnrestart.addEventListener('click', function(){
	h2.innerHTML = "Usuario 1";
	casillas.forEach(casilla => {
		casilla.innerHTML = "";
	});
});
