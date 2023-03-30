//### lab 7 ###
import './style.css';

import { of, map, Observable, Observer } from 'rxjs';

let subscriber = (observer) => {
  let count = 0;
  console.log('chamou a fnc de subinscricao');
  setTimeout(() => {
    observer.next(count++);
  }, 5000);
};

let obs = new Observable(subscriber);
obs.subscribe((v) => console.log(`J recebu valor ${v}`));
obs.subscribe((v) => console.log(`M recebu valor ${v}`));

obs.subscribe((v) => console.log(`N recebu valor ${v}`));
