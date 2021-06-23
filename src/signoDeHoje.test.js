const retorna_signo = require("./signoDeHoje").default;
const { colecao_signos } = require("./definitions");

// Sou meio cético, mas vai lá, pelo esporte mesmo...
/** @typedef {'Aquário'|'Peixes'|'Áries'|'Touro'|'Gêmeos'|'Câncer'|'Leão'|'Virgem'|'Libra'|'Escorpião'|'Sagitário'|'Capricórnio'} signoComComplecaoVsCode */

test('Testar pessoa de Touro (o desenvolvedor)', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Touro"
    expect(retorna_signo(new Date('05-12-2000'))).toMatch(signo)
});


test('Testar pessoa de Escorpião', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Escorpião"
    expect(retorna_signo(new Date('10-24-1997'))).toMatch(signo)
})

test('Testar pessoa virgem', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Virgem"
    expect(retorna_signo(new Date('08-23-2005'))).toMatch(signo)
})

test('Testar pessoa virgem', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Virgem"
    expect(retorna_signo(new Date('09-22-2005'))).toMatch(signo)
})

test('Testar pessoa aquário', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Aquário"
    expect(retorna_signo(new Date('01-23-2005'))).toMatch(signo)
})

test('Testar pessoa peixe', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Peixes"
    expect(retorna_signo(new Date('02-21-2005'))).toMatch(signo)
})

test('Testar pessoa aries', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Áries"
    expect(retorna_signo(new Date('04-19-2005'))).toMatch(signo)
})

test('Testar pessoas gemeas', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Gêmeos"
    expect(retorna_signo(new Date('05-25-2005'))).toMatch(signo)
})

test('Testar pessoas de cancer', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Câncer"
    expect(retorna_signo(new Date('06-24-2005'))).toMatch(signo)
})

test('testar leão selvagem', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Leão"
    expect(retorna_signo(new Date('07-29-2005'))).toMatch(signo)
})

test('testar moeda libra', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Libra"
    expect(retorna_signo(new Date('10-22-2005'))).toMatch(signo)
})

test('testar pessoa Capricornoano', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Capricórnio"
    expect(retorna_signo(new Date('01-20-2005'))).toMatch(signo)
})

test('testar pessoa sagiotário', () => {
    /** @type {signoComComplecaoVsCode} */
    const signo = "Sagitário"
    expect(retorna_signo(new Date('12-18-2005'))).toMatch(signo)
})

