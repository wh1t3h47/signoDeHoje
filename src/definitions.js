const DataInicio = "12-22"

/** 
 * @type {Array<{ Nome: 'Aquário' | 'Peixes' | 'Áries' | 'Touro' | 'Gêmeos' | 'Câncer' | 'Leão' | 'Virgem' | 'Libra' | 'Escorpião' | 'Sagitário' | 'Capricórnio', DataInicio: '01-21' | '02-19' | '03-21' | '04-20' | '05-21' | '06-21' | '07-23' | '08-23' | '09-23' | '10-23' | '11-22' | '12-22', DataFim: '02-18' | '03-20' | '04-19' | '05-20' | '06-20' | '07-22' | '08-22' | '09-22' | '10-22' | '11-21' | '12-21' | '01-20' }> } */

const colecao_signos = [
  { Nome: 'Aquário',
    DataInicio: '01-21', DataFim: '02-18'},
  { Nome: 'Peixes',
    DataInicio: '02-19', DataFim: '03-20'},
  { Nome: 'Áries',
    DataInicio: '03-21', DataFim: '04-19'},
  { Nome: 'Touro',
    DataInicio: '04-20', DataFim: '05-20'},
  { Nome: 'Gêmeos',
    DataInicio: '05-21', DataFim: '06-20'},
  { Nome: 'Câncer',
    DataInicio: '06-21', DataFim: '07-22'},
  { Nome: 'Leão',
    DataInicio: '07-23', DataFim: '08-22'},
  { Nome: 'Virgem',
    DataInicio: '08-23', DataFim: '09-22'},
  { Nome: 'Libra',
    DataInicio: '09-23', DataFim: '10-22'},
  { Nome: 'Escorpião',
    DataInicio: '10-23', DataFim: '11-21'},
  { Nome: 'Sagitário',
    DataInicio: '11-22', DataFim: '12-21'},
  { Nome: 'Capricórnio',
    DataInicio, DataFim: '01-20'},
];

/** enum */
const or = 0;
/** enum */
const and = 1;
/** @type {Record<'and' | 'or', number>} */
const operacao = { and, or };

/** Caso seja true, printa uma informação mais verbal, útil para debugging */
const debugDataSigno = false;
/** Caso seja true, printa uma informação mais verbal, útil para debugging */
const debugSignoEncontrado = false;
  
module.exports = {
  DataInicio,
  colecao_signos,
  operacao,
  debugDataSigno,
  debugSignoEncontrado,
}
