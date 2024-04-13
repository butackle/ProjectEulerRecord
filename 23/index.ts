// @ts-ignore
import {findAbundantNumbers, findDivisorDataList} from './findAbundantNumbers.ts';
// @ts-ignore
import {competeAbundantNumbers} from './competeAbundantNumbers.ts';

const limit: number = 28123; // if 25, answer is 301?
const timeLabel = 'Non-Abundant-Sums'

console.time(timeLabel);

// 過剰数のリストを取得
const abundantNumbers = findAbundantNumbers(limit);
console.timeLog(timeLabel, 'abundantNumbers found')

//const list = findDivisorDataList(limit);
//console.log({list});

const result = [...Array(limit)].reduce((sum, _, index) => {
  const targetNumber = index + 1;
  console.timeLog(timeLabel, {sum, targetNumber});

  return sum + competeAbundantNumbers(targetNumber, abundantNumbers);
}, 0)

// console.log({abundantNumbers});
console.table({limit, result, answer: {25: 301, 28123: 4179871}[limit]})

console.timeEnd(timeLabel);
// Non-Abundant-Sums: 20872ms
// Non-Abundant-Sums: 208736ms　効率化してない時
