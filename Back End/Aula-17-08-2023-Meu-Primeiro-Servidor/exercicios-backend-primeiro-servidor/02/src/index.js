const express = require('express');
const app = express();

let minutos = 0;
let segundos = 0;
let intervalId = null;

function formatTime(number) {
  return number.toString().padStart(2, '0');
}

function startCronometro() {
  intervalId = setInterval(() => {
    segundos++;
    if (segundos >= 60) {
      segundos = 0;
      minutos++;
    }
    console.log(`Min ${minutos} Seg ${segundos}`); // Para Acompanhar o que estah acontecendo
  }, 1000);
}

function pauseCronometro() {
  clearInterval(intervalId);
  intervalId = null;
}

app.get('/', (req, res) => {
  res.send(`Tempo atual do cronômetro: ${formatTime(minutos)} minutos e ${formatTime(segundos)} segundos`);
});

app.get('/iniciar', (req, res) => {
  if (!intervalId) {
    startCronometro();
    res.send('Cronômetro iniciado!');
  } else {
    res.send('Cronômetro já está em execução.');
  }
  console.log('Iniciar Solicitado'); //Para acompanhar no console
});

app.get('/pausar', (req, res) => {
  if (intervalId) {
    pauseCronometro();
    res.send('Cronômetro pausado!');
  } else {
    res.send('Cronômetro já está pausado.');
  }
  console.log('Pausar Solicitado'); //Para acompanhar no console
});

app.get('/continuar', (req, res) => {
  if (!intervalId) {
    startCronometro();
    res.send('Cronômetro continuando!');
  } else {
    res.send('Cronômetro já está em execução.');
  }
  console.log('Continuar Solicitado'); //Para acompanhar no console
});

app.get('/zerar', (req, res) => {
  minutos = 0;
  segundos = 0;
  console.log('Zerar Solicitado'); //Para acompanhar no console
  res.send('Cronômetro zerado!');
});

app.listen(8000, () => {
  console.log('Servidor do cronômetro rodando em http://localhost:8000');
});
