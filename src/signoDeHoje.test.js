const retorna_signo = require("./signoDeHoje").default;

// Sou meio cético, mas vai lá, pelo esporte mesmo...
/** @typedef {'Aquário'|'Peixes'|'Áries'|'Touro'|'Gêmeos'|'Câncer'|'Leão'|'Virgem'|'Libra'|'Escorpião'|'Sagitário'|'Capricórnio'} signoComComplecaoVsCode */

/**
 * @param {string} testName
 * @param {Date} data 
 * @param {signoComComplecaoVsCode} signo 
 **/
const testarSigno = (testName, data, signo) => {
    test(`${testName} | data = ${data.toUTCString()}`, () => {
      expect(retorna_signo(data)).toMatch(signo);
    });
}


testarSigno('Testar pessoa de Touro (o desenvolvedor)', new Date('05-12-2000'), "Touro")

testarSigno('Testar pessoa de Escorpião', new Date('10-24-1997'), "Escorpião")

testarSigno('Testar pessoa virgem', new Date('08-23-2005'), "Virgem")

testarSigno('Testar pessoa virgem', new Date('09-22-2005'), "Virgem")

testarSigno('Testar pessoa aquário', new Date('01-23-2005'), "Aquário")

testarSigno('Testar pessoa peixe', new Date('02-21-2005'), "Peixes")

testarSigno('Testar pessoa aries', new Date('04-19-2005'), "Áries")

testarSigno('Testar pessoas gemeas', new Date('05-25-2005'), "Gêmeos")

testarSigno('Testar pessoas de cancer', new Date('06-24-2005'), "Câncer")

testarSigno('testar leão selvagem', new Date('07-29-2005'), "Leão")

testarSigno('testar moeda libra', new Date('10-22-2005'), "Libra")

testarSigno('testar pessoa Capricornoano', new Date('01-20-2005'), "Capricórnio")

testarSigno('testar pessoa sagiotário', new Date('12-18-2005'), "Sagitário")
