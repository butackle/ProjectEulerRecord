// @ts-ignore
import {findAbundantNumbers} from './findAbundantNumbers.ts';
// @ts-ignore
import {calcImpossibleSum} from './calcImpossibleSum.ts';

const limit: number = 28123;

// 過剰数のリストを取得
const abundantNumbers = findAbundantNumbers(limit);

console.log(calcImpossibleSum(abundantNumbers, limit))
// answer: 4179871