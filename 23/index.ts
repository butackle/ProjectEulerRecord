// @ts-ignore
import {findAbundantNumbers, findDivisorDataList} from './findAbundantNumbers.ts';
// @ts-ignore
import {calcImpossibleSum} from './calcImpossibleSum.ts';

const limit: number = 28123; // if 25, answer is 301?
const timeLabel = 'Non-Abundant-Sums'

console.time(timeLabel);

// 過剰数のリストを取得
const abundantNumbers = findAbundantNumbers(limit);
console.timeLog(timeLabel, 'abundantNumbers found')

//const list = findDivisorDataList(limit);
//console.log({list});

const result = calcImpossibleSum(abundantNumbers, limit);

// console.log({abundantNumbers});
console.table({limit, result})
// answer: 4179871

console.timeEnd(timeLabel);
// Non-Abundant-Sums: 24553ms
// Non-Abundant-Sums: 208736ms　効率化してない時
