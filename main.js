const acertijo = "Soy el arte de los sonidos, una dulce melodía, con notas y ritmo, traigo alegría.Sin palabras, puedo expresar emociones,y mover los corazones de generaciones. ¿Qué soy?";
const palabraClave = "musica";
let numberOfTries = 0;

while (true) {
    const userGuess = prompt("Intenta adivinar la palabra oculta:");
    numberOfTries++;

    if (userGuess === null) {
        break; // El usuario presionó Cancelar o cerró la ventana de diálogo.//
    }

    if (userGuess.toLowerCase() === palabraClave) {
        alert(`¡Felicitaciones! Adivinaste la palabra en ${numberOfTries} intentos.`);
        break;
    } else {
        alert("No es la palabra correcta. Inténtalo de nuevo.");
    }
}