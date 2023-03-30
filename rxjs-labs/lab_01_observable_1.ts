//### lab1 ###
import './style.css';

import { of, map } from 'rxjs';

/**
 * O padrão observador (observer) é um padrão de projeto no qual um objeto, chamado de sujeito (subject), mantém uma lista de seus dependentes, chamados observadores , e os notifica automaticamente sobre mudanças de estado.
 *
 * Os observáveis (Observables) ​​são declarativos — ou seja, você define uma função para publicar valores, mas ela não é executada até que um consumidor a assine. O consumidor inscrito recebe notificações até que a função seja concluída ou até que ele cancele a assinatura.
 */
// Observable (Observáveis)
//handler - manipulador

const obsevable = of(1, 2, 3);

const observer = {
  next: (v) => console.log(`o valor eh: ${v}`),
  complete: () => console.log(`completou`),
  error: (e) => console.log(`error: ${e}`),
};

obsevable.subscribe(observer);
