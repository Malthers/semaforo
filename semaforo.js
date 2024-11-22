const manual = document.getElementById ('manual');
const auto = document.getElementById ('auto');
const semaforo = document.getElementById ('semaforo');


function fManual () {
    if (manual.textContent.trim() == 'Ligar') {
        fDesligado()
        manual.textContent = 'Amarelo';

    }
    else if (manual.textContent.trim() == 'Amarelo') {
        manual.textContent = 'Vermelho';
    }
    else if (manual.textContent.trim() == 'Vermelho') {
        manual.textContent = 'Verde';
    }
    else if (manual.textContent.trim() == 'Verde') {
        manual.textContent = 'Amarelo';
    }
    else {
        manual.textContent = 'Ligar';
    }
}

function fDesligado () {
    if (manual.textContent.trim() == 'Verde' || 'Amarelo' || 'Vermelho') {
        auto.textContent = 'Desligar';
        
    } 
    
    
}

function fAuto () {
    
    if (auto.textContent.trim() == 'Automático') {
        fDesligado()
    }
    else {
        manual.textContent = 'Ligar';
        auto.textContent = 'Automático';
    }
    
}


manual.addEventListener ('click', fManual);
auto.addEventListener ('click', fAuto);
