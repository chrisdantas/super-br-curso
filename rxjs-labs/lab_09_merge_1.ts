//### lab 9 ###
import './style.css';

import { of, merge, interval, map, Observable, Observer, filter } from 'rxjs';

let list1 = of('oi', 'estou', 'vivo');
let list2 = of(4, 5, 6, 7, 8, 9, 10);

//emit every 4 seconds
//const first = interval(4000);

let final_val = merge(list1, list2);
final_val.subscribe((x) => console.log(x));

/*
merge(
  of('oi', 'estou', 'vivo'),
  interval(1000),  
).subscribe(console.log)
*/

//emit every 4 seconds
const first = interval(1000);

//used as instance method
const example = first.pipe(filter((v) => v % 2 == 0));
const subscribe = example.subscribe((val) => console.log(val));
