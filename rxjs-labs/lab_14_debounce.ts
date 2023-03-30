//### lab debounce ###
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
  fromEvent,
  distinctUntilChanged,
  distinct,
} from 'rxjs';

import { debounceTime } from 'rxjs/operators';

const searchBox = document.getElementById('search');

const keyup$ = fromEvent(searchBox, 'keyup');

keyup$
  .pipe(
    map((i: any) => i.currentTarget.value)
    //debounceTime(500),
    //distinct()
  )
  .subscribe(console.log);
