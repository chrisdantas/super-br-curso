//### lab takeWhile ###
import './style.css';

import {
  of,
  map,
  interval,
  Observable,
  Observer,
  BehaviorSubject,
  filter,
  take,
  takeUntil,
  takeWhile,
} from 'rxjs';

//t: 0 1 2 3 4 5
//y:   0 1 2 3 4
//x:           0
let x = of(1, 2, 3, 4, 5);
let y = x.pipe(takeWhile((v) => v < 4)).subscribe(console.log);
