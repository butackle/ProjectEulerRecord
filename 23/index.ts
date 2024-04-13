// @ts-ignore
import {findAbundantNumbers} from './findAbundantNumbers.ts';
// @ts-ignore
import {calcImpossibleSum} from './calcImpossibleSum.ts';

const limit: number = 28123;

// 過剰数のリストを取得
const abundantNumbers = findAbundantNumbers(limit);

const result = calcImpossibleSum(abundantNumbers, limit);
console.table({result})
// answer: 4179871