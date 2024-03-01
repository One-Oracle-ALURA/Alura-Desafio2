function olaMundo() {
    console.log('Olá Mundo!');
}

olaMundo();

function olaNome(nome) {
    console.log(`Olá, ${nome}!`);
}

olaNome("Gustavo")

function dobroNumero(numero) {
    return numero * 2;
}

let dobro = dobroNumero(2);
    console.log(dobro);

function calculoMedia(x, y, z) {
    return (x + y + z) / 3
}

let media = calculoMedia(1, 2, 3);
    console.log(media);

function maiorNumero(a, b) {
    return a > b ? a : b;
}

let numeroMaior = maiorNumero(5, 10);
    console.log(numeroMaior);

function numeroQuadrado(numero) {
    return numero * numero;
}

let quadrado = numeroQuadrado(12);
    console.log(quadrado);