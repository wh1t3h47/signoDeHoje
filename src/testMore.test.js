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

 // Testei a média dos dias, é 23, os testes vão circular ao redor desse valor

testarSigno('testar data pesquisada de Aquário', new Date('01-23-2000'), "Aquário")

testarSigno('testar data pesquisada de Aquário', new Date(`02-13-2000`), "Aquário")

testarSigno('testar data pesquisada de Peixes', new Date(`02-23-2000`), "Peixes")

testarSigno('testar data pesquisada de Peixes', new Date(`03-19-2000`), "Peixes")

testarSigno('testar data pesquisada de Áries', new Date(`03-23-2000`), "Áries")

testarSigno('testar data pesquisada de Áries', new Date(`04-12-2000`), "Áries")

testarSigno('testar data pesquisada de Touro', new Date(`04-23-2000`), "Touro")

testarSigno('testar data pesquisada de Touro', new Date(`05-17-2000`), "Touro")

testarSigno('testar data pesquisada de Gêmeos', new Date(`05-23-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Gêmeos', new Date(`06-15-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Câncer', new Date(`06-23-2000`), "Câncer")

testarSigno('testar data pesquisada de Câncer', new Date(`07-16-2000`), "Câncer")

testarSigno('testar data pesquisada de Leão', new Date(`07-23-2000`), "Leão")

testarSigno('testar data pesquisada de Leão', new Date(`08-19-2000`), "Leão")

testarSigno('testar data pesquisada de Virgem', new Date(`08-23-2000`), "Virgem")

testarSigno('testar data pesquisada de Virgem', new Date(`09-17-2000`), "Virgem")

testarSigno('testar data pesquisada de Libra', new Date(`09-23-2000`), "Libra")

testarSigno('testar data pesquisada de Libra', new Date(`10-17-2000`), "Libra")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-23-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-12-2000`), "Escorpião")

testarSigno('testar data pesquisada de Sagitário', new Date(`11-23-2000`), "Sagitário")

testarSigno('testar data pesquisada de Sagitário', new Date(`12-18-2000`), "Sagitário")

testarSigno('testar data pesquisada de Capricórnio', new Date(`01-15-2000`), "Capricórnio")

testarSigno('testar data pesquisada de Capricórnio', new Date(`01-17-2000`), "Capricórnio")

testarSigno('testar data pesquisada de Aquário', new Date('01-22-2000'), "Aquário")

testarSigno('testar data pesquisada de Aquário', new Date(`02-02-2000`), "Aquário")

testarSigno('testar data pesquisada de Peixes', new Date(`02-21-2000`), "Peixes")

testarSigno('testar data pesquisada de Peixes', new Date(`03-19-2000`), "Peixes")

testarSigno('testar data pesquisada de Áries', new Date(`03-29-2000`), "Áries")

testarSigno('testar data pesquisada de Áries', new Date(`04-18-2000`), "Áries")

testarSigno('testar data pesquisada de Touro', new Date(`04-21-2000`), "Touro")

testarSigno('testar data pesquisada de Touro', new Date(`05-18-2000`), "Touro")

testarSigno('testar data pesquisada de Gêmeos', new Date(`05-21-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Gêmeos', new Date(`06-17-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Câncer', new Date(`07-15-2000`), "Câncer")

testarSigno('testar data pesquisada de Leão', new Date(`08-14-2000`), "Leão")

testarSigno('testar data pesquisada de Virgem', new Date(`09-17-2000`), "Virgem")

testarSigno('testar data pesquisada de Libra', new Date(`10-16-2000`), "Libra")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-26-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-27-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-28-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-29-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-30-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-01-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-02-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-03-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-04-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-13-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-14-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-15-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-16-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-17-2000`), "Escorpião")
 
testarSigno('testar data pesquisada de Escorpião', new Date(`11-18-2000`), "Escorpião")

testarSigno('testar data pesquisada de Escorpião', new Date(`11-21-2000`), "Escorpião")

testarSigno('testar data pesquisada de Sagitário', new Date(`12-18-2000`), "Sagitário")

testarSigno('testar data pesquisada de Capricórnio', new Date(`01-17-2000`), "Capricórnio")

testarSigno('testar data pesquisada de Capricórnio', new Date(`01-16-2000`), "Capricórnio")

testarSigno('testar data pesquisada de Aquário', new Date('01-22-2000'), "Aquário")

testarSigno('testar data pesquisada de Aquário', new Date(`02-15-2000`), "Aquário")

testarSigno('testar data pesquisada de Peixes', new Date(`02-22-2000`), "Peixes")

testarSigno('testar data pesquisada de Peixes', new Date(`03-15-2000`), "Peixes")

testarSigno('testar data pesquisada de Áries', new Date(`03-22-2000`), "Áries")

testarSigno('testar data pesquisada de Áries', new Date(`04-17-2000`), "Áries")

testarSigno('testar data pesquisada de Touro', new Date(`04-22-2000`), "Touro")

testarSigno('testar data pesquisada de Touro', new Date(`05-14-2000`), "Touro")

testarSigno('testar data pesquisada de Gêmeos', new Date(`05-22-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Gêmeos', new Date(`06-17-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Câncer', new Date(`06-22-2000`), "Câncer")

testarSigno('testar data pesquisada de Leão', new Date(`07-24-2000`), "Leão")

testarSigno('testar data pesquisada de Leão', new Date(`07-25-2000`), "Leão")

testarSigno('testar data pesquisada de Leão', new Date(`08-15-2000`), "Leão")

testarSigno('testar data pesquisada de Leão', new Date(`08-22-2000`), "Leão")

testarSigno('testar data pesquisada de Virgem', new Date(`09-20-2000`), "Virgem")

testarSigno('testar data pesquisada de Virgem', new Date(`09-17-2000`), "Virgem")

testarSigno('testar data pesquisada de Libra', new Date(`10-19-2000`), "Libra")

testarSigno('testar data pesquisada de Libra', new Date(`10-18-2000`), "Libra")

testarSigno('testar data pesquisada de Sagitário', new Date(`11-22-2000`), "Sagitário")

testarSigno('testar data pesquisada de Capricórnio', new Date(`12-25-2000`), "Capricórnio")

testarSigno('testar data pesquisada de Capricórnio', new Date(`12-28-2000`), "Capricórnio")

testarSigno('testar data pesquisada de Aquário', new Date(`01-22-2000`), "Aquário")

testarSigno('testar data pesquisada de Aquário', new Date('01-24-2000'), "Aquário")

testarSigno('testar data pesquisada de Aquário', new Date(`02-16-2000`), "Aquário")

testarSigno('testar data pesquisada de Peixes', new Date(`02-24-2000`), "Peixes")

testarSigno('testar data pesquisada de Peixes', new Date(`03-13-2000`), "Peixes")

testarSigno('testar data pesquisada de Áries', new Date(`03-24-2000`), "Áries")

testarSigno('testar data pesquisada de Áries', new Date(`04-12-2000`), "Áries")

testarSigno('testar data pesquisada de Touro', new Date(`04-24-2000`), "Touro")

testarSigno('testar data pesquisada de Gêmeos', new Date(`05-24-2000`), "Gêmeos")

testarSigno('testar data pesquisada de Leão', new Date(`07-24-2000`), "Leão")

testarSigno('testar data pesquisada de Leão', new Date(`08-16-2000`), "Leão")

testarSigno('testar data pesquisada de Leão', new Date(`08-15-2000`), "Leão")

testarSigno('testar data pesquisada de Virgem', new Date(`08-24-2000`), "Virgem")

testarSigno('testar data pesquisada de Libra', new Date(`09-24-2000`), "Libra")

testarSigno('testar data pesquisada de Escorpião', new Date(`10-24-2000`), "Escorpião")

testarSigno('testar data pesquisada de Sagitário', new Date(`11-24-2000`), "Sagitário")

testarSigno('testar data pesquisada de Peixes', new Date(`02-24-2000`), "Peixes")
