const {operacao,
  colecao_signos,
  debugDataSigno,
  debugSignoEncontrado,
  DataInicio} = require("./definitions");
const Assertions = require("./assertions").default;


// Não funciona se por em definitions.js
/** @typedef {{ or: 0, and: 1 }} operacao */

/**
 * @param {Date} data
 * @param {Date} data_inicio
 * @param {Date} data_fim
 * @param {operacao} tipo_comparacao
 * @return {boolean} true caso a data se encaixe dentro do intervalo
 * @throws {Error}
 **/

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
  Assertions.checkType({ tipo_comparacao }, 'object')
  // Assertions.checkInstance({ tipo_comparacao }, { operacao })
  Assertions.checkInstance({ data, data_inicio, data_fim }, Date)

  // assert((tipo_comparacao instanceof operacao), "Operação precisa ser do tipo operacao, disponível em definitions.js");
  // assert((data_inicio instanceof Date && data_fim instanceof Date), "data_inicio e data_fim precisam ser do tipo Date")

  if (tipo_comparacao === operacao.and) {
    return (data >= data_inicio && data <= data_fim);
  } // else
  if (tipo_comparacao === operacao.or) {
    return (data >= data_inicio || data <= data_fim);
  } // else
  throw new Error('Comparação inválida');
};

/**
 * @example
 * const data_app = new Date();
 * const nome_signo = retorna_signo(data_app);
 * console.log(`O signo de hoje é: ${nome_signo}`);
 * @param {Date} data
 * @return {string | '' | undefined} retorna um signo ou uma string vazia/ undefined caso haja erro
 * @throws {Error}
 **/

const retorna_signo = (data) => {
  Assertions.checkInstance({ data }, Date)
  if (Number.isNaN(data)) {
    throw new Error("A data não pode ser convertida para signo, pois é inválida.");
  }

  const signos = colecao_signos;
  const ano = data.getFullYear();
  let signoNome = '';

  signos.some((signo) => {
    const data_inicio_signo = new Date(`${signo.DataInicio}-${ano} 00:00:00.000`);
    const data_fim_signo = new Date(`${signo.DataFim}-${ano} 23:59:59.999`);

    if (debugDataSigno) {
      console.log('data_inicio_signo = ', data_inicio_signo,
        '\ndata_fim_signo = ', data_fim_signo,
        '\ndata_inicio_signo = ', data_inicio_signo,
        '\ndata = ', data,
        '\nano = ', ano,
      );
    }

    const tipo_comparacao = signo.DataInicio === DataInicio ? operacao.or : operacao.and;

    if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
      if (debugSignoEncontrado) {
        console.log('encontrou signo', signo.Nome)
      }
      signoNome = signo.Nome;
      return true;
    } // else
  });

  return signoNome;
};

module.exports =  {  default: retorna_signo };
