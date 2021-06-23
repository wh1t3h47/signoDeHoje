# Cógido de conduta para reportar vulnerabilidades

## Versões Mantidas

| Version | Supported          |
| ------- | ------------------ |
| <1.0.0  | :x:                |
| 1.0.1   | :x:                |
| 1.0.2   | :white_check_mark: |

## Filosofia
> #### Nenhuma vulnerabilidade é pequena suficiente para ser ignorada
> mas, você tem que garantir que:

> - 1. A vulnerabilidade possa ser reproduzida em um ambiente não exótico (Linux);
> - 2. Que haja possibilidade de comprovar, ou deduzir lógicamente como um atacante tiraria proveito do hipotético cenário;
> - 3. Que seja dado um tempo para podermos reproduzir, investigar, formular e aplicar uma solução para a questão discutida;

## Pagamentos (bounties)
> Infelizmente somos apenas um projeto independente, não temos fundos para pagar uma auditoria adequada, caso queira fazer, não espere mais que uma cerveja ou uma camiseta bacana

# Procedimento científico para o relatório

- [ ] 0. (OPCIONAL) Testar o software por vulnerabilidades;
- [ ] 1. Descoberta da vulnerabilidade;
- [ ] 2. Questionamentos: O que é vulnerável? Qual a natureza da vulnerabilidade? Onde ela pode estar localizada? O que causou ela?
- [ ] 3. Experimentos: Tente causar a falha mais uma vez, ela tem a ver com entrada que pode ser insegura (vinda do usuário), é consistente? Segue algum padrão?
- [ ] 4. Reprodução: Tente criar um manual mais claro o possível sobre como eu posso causar o comportamento errático, qual navegador/ programa/ ambiente foi usado?
- [ ] 5. Relatório: Escreva sobre como a descoberta foi feita, discorra sobre os questionamentos, anexe as anotações do experimento e como reproduzir
- [ ] 6. (OPCIONAL) Ajude a desenvolver uma solução fazendo um fork do repositório e abrindo um issue ou Pull Request

