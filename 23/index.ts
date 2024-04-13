// @ts-ignore
import {findAbundantNumbers, findDivisorDataList} from './findAbundantNumbers.ts';
// @ts-ignore
import {calcImpossibleSum} from './calcImpossibleSum.ts';

const limit: number = 28123; // if 25, answer is 301?

// 過剰数のリストを取得
const abundantNumbers = findAbundantNumbers(limit);

//const list = findDivisorDataList(limit);
//console.log({list});

const result = calcImpossibleSum(abundantNumbers, limit);

// console.log({abundantNumbers});
console.table({limit, result})
// answer: 4179871