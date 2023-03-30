//### lab takeUntil ###
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
} from 'rxjs';

//t: 0 1 2 3 4 5
//y:   0 1 2 3 4
//x:           0
let x = interval(5000).pipe(take(1));
let y = interval(900).pipe(takeUntil(x)).subscribe(console.log);
