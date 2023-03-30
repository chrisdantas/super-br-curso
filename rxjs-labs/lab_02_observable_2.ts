//### lab2 ###
import './style.css';

import { of, map, Observable } from 'rxjs';

const obsevable = new Observable((observer) => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();
});

const observer = {
  next: (v) => console.log(`o valor eh: ${v}`),
  complete: () => console.log(`completou`),
  error: (e) => console.log(`error: ${e}`),
};

obsevable.subscribe(observer);
