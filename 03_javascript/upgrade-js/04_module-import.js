// 모듈 사용 - import 키워드를 사용
// 따로따로 가져오기
import {flr, getFlr} from './04_export1.js';
console.log(flr);
console.log(getFlr(2));
// 한번에 가져오기
import * as flowers from './04_export1.js';
console.log(flowers);
console.log(flowers.flr);
console.log(flowers.getFlr);

// ---------------------------------------------------
import { showAnimals, animals } from './04_export2.js';
console.log(animals);
showAnimals();

import sayHi from './05_exportdefault.js';
sayHi();