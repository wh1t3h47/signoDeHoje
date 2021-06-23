const {operacao, colecao_signos, debug} = require("./definitions");
const Assertions = require("./assertions").default;

/**
 * @param {Date} data
 * @param {Date} data_inicio
 * @param {Date} data_fim
 * @param {operacao} tipo_comparacao
 * @return {Boolean} true caso a data se encaixe dentro do intervalo
 * @throws {Error}
 **/

const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
  Assertions.checkType({ tipo_comparacao }, 'object')
  Assertions.checkInstance({ tipo_comparacao }, { operacao })
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

  const signos = colecao_signos;
  const ano = (new Date()).getFullYear();
  let signoNome = '';

  signos.some((signo) => {
    const data_inicio_signo = new Date(`${signo.DataInicio}-${ano} 00:00:00`);
    const data_fim_signo = new Date(`${signo.DataFim}-${ano} 23:59:59`);

    if (debug) {
      console.log('data_inicio_signo = ', data_inicio_signo,
        '\ndata_fim_signo = ', data_fim_signo,
        '\ndata_inicio_signo = ', data_inicio_signo,
        '\ndata = ', data,
        '\nano = ', ano,
      );
    }

    const tipo_comparacao = signo.DataInicio === '12-22' ? operacao.or : operacao.and;

    if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
      signoNome = signo.Nome;
      return true;
    } // else
  });
  return signoNome;
};

module.exports =  {  default: retorna_signo };
