const retorna_signo = require("./signoDeHoje").default;
const { colecao_signos } = require("./definitions");

// Sou meio cético, mas vai lá, pelo esporte mesmo...
// 'Aquário'|'Peixes'|'Áries'|'Touro'|'Gêmeos'|'Câncer'|'Leão'|'Virgem'|'Libra'|'Escorpião'|'Sagitário'|'Capricórnio'

/** @type {'Aquário'|'Peixes'|'Áries'|'Touro'|'Gêmeos'|'Câncer'|'Leão'|'Virgem'|'Libra'|'Escorpião'|'Sagitário'|'Capricórnio'} */
let signoComComplecaoVsCode = "Touro"
test('Testar pessoa de Touro (o desenvolvedor)', () => {
    expect(retorna_signo(new Date('12-05-2000'))).toMatch(signoComComplecaoVsCode)
});


signoComComplecaoVsCode = "Escorpião"
test('Testar pessoa de Escorpião', () => {
    expect(retorna_signo(new Date('24-10-1997'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Virgem"
test('Testar pessoa virgem', () => {
    expect(retorna_signo(new Date('23-08'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Virgem"
test('Testar pessoa virgem', () => {
    expect(retorna_signo(new Date('22-09'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Aquário"
test('Testar pessoa aquário', () => {
    expect(retorna_signo(new Date('23-01'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Peixes"
test('Testar pessoa peixe', () => {
    expect(retorna_signo(new Date('21-02'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Áries"
test('Testar pessoa aries', () => {
    expect(retorna_signo(new Date('19-04'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Gêmeos"
test('Testar pessoas gemeas', () => {
    expect(retorna_signo(new Date('25-05'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Câncer"
test('Testar pessoas de cancer', () => {
    expect(retorna_signo(new Date('24-06'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Leão"
test('testar leão selvagem', () => {
    expect(retorna_signo(new Date('29-07'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Libra"
test('testar moeda libra', () => {
    expect(retorna_signo(new Date('22-10'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Capricórnio"
test('testar pessoa Capricornoano', () => {
    expect(retorna_signo(new Date('20-01'))).toMatch(signoComComplecaoVsCode)
})

signoComComplecaoVsCode = "Sagitário"
test('testar pessoa sagiotário', () => {
    expect(retorna_signo(new Date('18-12'))).toMatch(signoComComplecaoVsCode)
})

