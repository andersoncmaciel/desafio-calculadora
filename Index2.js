let saldoDeVitorias = subtrair();

function subtrair(vitorias = 400, derrotas = 50) {
    return vitorias - derrotas;
}
    if (saldoDeVitorias < 10) {
        console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Ferro"}!`); 
    } 
    if (saldoDeVitorias > 11 && saldoDeVitorias < 20) {
        console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Bronze"}!`);
    }
    if (saldoDeVitorias > 21 && saldoDeVitorias < 50) {
            console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Prata"}!`); 
    }
    if (saldoDeVitorias > 51 && saldoDeVitorias < 80) {
            console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Ouro"}!`);  
    }
    if (saldoDeVitorias > 81 && saldoDeVitorias < 90) {
            console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Diamante"}!`);
    }
    if (saldoDeVitorias > 91 && saldoDeVitorias < 100) {
            console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Lendário"}!`); 
    }
    if (saldoDeVitorias >= 101) {
            console.log(`O herói tem saldo de ${saldoDeVitorias} está no nível de ${"Imortal"}!`); 
    }

