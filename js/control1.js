var Questions = new Array(3);
Questions[0] = 'Modifique el código de ProgramaBase para usar el botón 2 y el led 1';
Questions[1] = 'De qué forma se puede reducir la frecuencia de parpadeo del led? Nombre dos formas diferentes';
Questions[2] = 'Escriba una función para setear y encender los 8 LEDs de la placa';
var ii = 0;
var html_txt = '';
while(ii < 3) {
	num = Math.round(3 * Math.random());
	if(Questions[num] != null) {
		document.write('<ul>' + Questions[num] + '</ul>');
		ii++;
		Questions[num] = null;
	}
}
