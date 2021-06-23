const retorna_signo = require("./signoDeHoje").default;
const {DataInicio} = require("./definitions")

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


testarSigno('testar primeiro dia de Aquário)', new Date('01-21-2000'), "Aquário")

testarSigno('testar último dia de Aquário)', new Date('02-19-2000'), "Aquário")

testarSigno('testar primeiro dia de Peixes)', new Date('02-20-2000'), "Peixes")

testarSigno('testar último dia de Peixes)', new Date('03-20-2000'), "Peixes")

testarSigno('testar primeiro dia de Áries)', new Date('03-21-2000'), "Áries")

testarSigno('testar último dia de Áries)', new Date('04-19-2000'), "Áries")

testarSigno('testar primeiro dia de Touro)', new Date('04-20-2000'), "Touro")

testarSigno('testar último dia de Touro)', new Date('05-20-2000'), "Touro")

testarSigno('testar primeiro dia de Gêmeos)', new Date('05-21-2000'), "Gêmeos")

testarSigno('testar último dia de Gêmeos)', new Date('06-21-2000'), "Gêmeos")

testarSigno('testar primeiro dia de Câncer)', new Date('06-22-2000'), "Câncer")

testarSigno('testar último dia de Câncer)', new Date('07-21-2000'), "Câncer")

testarSigno('testar primeiro dia de Leão)', new Date('07-23-2000'), "Leão")

testarSigno('testar último dia de Leão)', new Date('08-22-2000'), "Leão")

testarSigno('testar primeiro dia de gente Virgem)', new Date('08-23-2000'), "Virgem")

testarSigno('testar último dia de gente Virgem)', new Date('09-22-2000'), "Virgem")

testarSigno('testar primeiro dia de Libra)', new Date('09-23-2000'), "Libra")

testarSigno('testar último dia de Libra)', new Date('10-22-2000'), "Libra")

testarSigno('testar primeiro dia de Escorpião)', new Date('10-23-2000'), "Escorpião")

testarSigno('testar último dia de Escorpião)', new Date('11-21-2000'), "Escorpião")

testarSigno('testar primeiro dia de Sagitário)', new Date('11-22-2000'), "Sagitário")

testarSigno('testar último dia de Sagitário)', new Date('12-21-2000'), "Sagitário")

testarSigno('testar primeiro dia de Capricórnio)', new Date(`${DataInicio}-2000`), "Capricórnio")

testarSigno('testar último dia de Capricórnio)', new Date('01-19-2000'), "Capricórnio")
