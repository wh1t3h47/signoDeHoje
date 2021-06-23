/**
 * @namespace Assert
 **/

const Assertions = {
    /**
     * @throws {Error}
     * Dá um Error(errorMessage) caso a condition seja falseável
     * @param {unknown} condition Vai ser resolvida pra false ou true
     * @param {string} errorMessage
     **/

    assert: (condition, errorMessage) => {
      if (typeof errorMessage !== 'string' || !errorMessage) {
        throw new Error('Erro interno em assert: errorMessage precisa ser uma string não vazia');
      }
      if (!condition) {
        console.error(errorMessage);
        throw new Error(errorMessage);
      }
    },

    /**
     * compara unknownTypes, caso não bata com expectedType, vai dar erro,
     * unknownTypes pode ser apenas um ítem ou uma array
     * @throws {Error}
     * @param {Record<string, unknown> } unknownTypes todos os valores
     * desse objeto devem ser do tipo `expectedType`, as keys devem ser
     * o nome da variável para mostrar uma mensagem de erro amigável
     * @param {'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'undefined'} expectedType 
     **/
    checkType: (variablesToCompare, expectedType) => {
      /** @type {Array<unknown>} */
      if (typeof variablesToCompare !== 'object') {
        throw new Error('variablesToCompare tem que ser um objeto')
      }

      Object.entries(variablesToCompare).forEach(([varKey, variableToCompare]) => {
        const actualType = (typeof variableToCompare);
        Assertions.assert(( actualType !== expectedType),
          `${varKey} precisa ser do tipo ${expectedType}, mas o tipo recebido é ${actualType}`)
      });
    },

    /**
     * compara objectsToCompare, caso não seja uma instância de baseclass,
     * vai dar erro, objectsToCompare pode ser apenas um ítem ou uma array.
     * IMPORTANTE: Esse método não pode ser usado no seguinte caso:
     * `(Array.isArray(new baseClass()) == true) === true)`
     * @throws {Error}
     * @param {string} varKey 
     * @param {Record<string, object>} objectsToCompare todos os valores desse
     * objeto devem ser da instância `baseClass`, as keys serão usadas para
     * mostrar o nome da variável que falhou a verificação
     * @param {Function | Record<string, object> | unknown} baseClass classe
     * sem ser instanciada (apenas a função do construtor). Caso seja um objeto
     * instanciado, ele precisa estar dentro de outro objeto, sendo a key o nome
     * da variável para mostrar a mensagem de erro amigável
     */
    checkInstance: (objectsToCompare, baseClass) => {
      if (typeof objectsToCompare !== 'object') {
        throw new Error('objectToCompare tem que ser um objeto')
      }

      let expectedClassName = '';
  
      if (baseClass.name) {
        expectedClassName = baseClass.name;
      } else {
        try {
          expectedClassName = String(baseClass);
        } catch(_e) {
          /* ignora */
        }
        try {
          expectedClassName = String(baseClass);
        } catch(_e) {
          /* ignora */
        }
        try {
          expectedClassName = baseClass.toString();
        } catch(_e) {
          /* ignora */
        }
      }

      Object.entries(objectsToCompare).forEach(([varKey, objectToCompare]) => {
        Assertions.assert((objectToCompare instanceof baseClass),
          `${varKey} precisa ser instância da classe ${expectedClassName || '[SEM NOME]'}`)
      })
  
    }
  
  }

module.exports = {
    default: Assertions,
}
