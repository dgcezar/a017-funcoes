const soma = (num1, num2) => {
    let somando = num1 + num2;
    console.log(somando);
}

const subtracao = (num1, num2) => {
    let sub = num1 - num2;
    console.log(sub);
}

const multiplicacao = (num1, num2) => {
    let multi = num1 * num2;
    console.log(multi);
}

const divisao = (num1, num2) => {
    let div = num1 / num2;
    console.log(div);
}

/*
soma(10,10);
subtracao(10,10);
multiplicacao(10,10);
divisao(10,10);
*/

const operacoes = (num1, num2) => {
    soma(num1, num2);
    subtracao(num1, num2);
    multiplicacao(num1, num2);
    divisao(num1, num2)
}

operacoes(10,10);