const {operacao, colecao_signos} = require("./definitions")

/**
 * @param {Date} data
 * @param {Date} data_inicio
 * @param {Date} data_fim
 * @param {operacao} tipo_comparacao
 * @return {Boolean} true caso a data se encaixe dentro do intervalo
 * @throws {Error}
 **/
const verifica_data_range = (data, data_inicio, data_fim, tipo_comparacao) => {
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
 * @return {string | ''} retorna um signo
 * @throws {Error}
 **/
const retorna_signo = (data) => {
  const signos = colecao_signos;
  const ano = data.getFullYear();

  for (const signo of signos) {
    const data_inicio_signo = new Date(`${ano}-${signo.DataInicio} 00:00:00`);
    const data_fim_signo = new Date(`${ano}-${signo.DataFim} 23:59:59`);

    const tipo_comparacao = signo.DataInicio === '12-22' ? operacao.or : operacao.and;

    if (verifica_data_range(data, data_inicio_signo, data_fim_signo, tipo_comparacao)) {
      return signo.Nome;
    } // else
  }
  return '';
};

module.exports =  {  default: retorna_signo };
