//### lab 8 ###
import './style.css';

import { of, map, Observable, Observer } from 'rxjs';

function producer(observer) {
  let counter = 0;
  setInterval(() => {
    console.log('producer\t\t: ' + counter);
    observer.next(counter);
    counter++;
  }, 1000);
}

const obs = new Observable(producer);
obs.subscribe((v) => console.log('subscription 1\t: ' + v));
obs.subscribe((v) => console.log('subscription 2\t: ' + v));
