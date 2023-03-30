//### lab take ###

import './style.css';

import {
  of,
  map,
  Observable,
  Observer,
  BehaviorSubject,
  filter,
  take,
} from 'rxjs';

let a = of(0, 1, 2, 3, 4).subscribe(console.log);

let b = of(0, 1, 2, 3, 4)
  .pipe(
    // 0 1 2 3 4
    filter((v) => v % 2 == 0),
    // 0 2 4
    take(2)
    // 0
  )
  .subscribe(console.log);
