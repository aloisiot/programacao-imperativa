let nota = 8.5;

switch (nota) {
    case nota >=7 && nota <=10:
        console.log('Aprovado');
        break;
    case nota >= 6 && nota >= 7.9:
        console.log('Recuperação');
        break;
        case nota < 6 && nota >=0:
        console.log('Reprovado');
        break;
    default:
        console.log('Insira uma nota válida.');
        break;
}