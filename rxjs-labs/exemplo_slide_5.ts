//exemplo slide 5
import './style.css';

import { of, merge, interval, map, Observable, Observer, filter } from 'rxjs';

// Create simple observable that emits three values
const myObservable = of(1, 2, 3);

// Create observer object
const myObserver = {
  next: (x: number) =>
    console.log('O observador pegou/obteve(got) um próximo valor: ' + x),
  error: (err: Error) => console.error('Observer pegou um error: ' + err),
  complete: () => console.log('Observer got(obteve) a complete notification'),
};

// Execute with the observer object
myObservable.subscribe(myObserver);

// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification

myObservable.subscribe(
  (x) => console.log('Observer got a next value: ' + x),
  (err) => console.error('Observer got an error: ' + err),
  () => console.log('Observer got a complete notification')
);
