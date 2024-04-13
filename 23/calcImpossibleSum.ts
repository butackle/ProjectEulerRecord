/**
 * 2つの過剰数の和で書き表せない正の整数の総和を求める
 *
 * @param abundantNumbers
 * @param limit
 */
export const calcImpossibleSum = (abundantNumbers: number[], limit: number): number => {
  let sum = 0;

  for (let targetNumber = 0; targetNumber <= limit; targetNumber++) {
    // console.clear();
    // console.log({targetNumber});
    // console.timeLog('Non-Abundant-Sums', `targetNumber is ${targetNumber}`)

    if (targetNumber < abundantNumbers[0] * 2) {
      sum += targetNumber;
      continue;
    }

    sum += competeAbundantNumbers(targetNumber, abundantNumbers);
  }

  return sum;
}

/**
 * 対象の数字が2つの過剰数の和で書き表せないかを調べる。
 * 書き表せる場合には0を返して、書き表せない場合には対象の数字を返す。
 *
 * @param targetNumber
 * @param abundantNumbers
 */
const competeAbundantNumbers = (targetNumber: number, abundantNumbers: number[]): number => {
  for (const opponent1 of abundantNumbers) {
    if (opponent1 > targetNumber) {
      break;
    }
    for (const opponent2 of abundantNumbers) {
      const result = opponent1 + opponent2;
      if (result === targetNumber) {
        return 0;
      }
      if (result > targetNumber) {
        break;
      }
    }
  }

  return targetNumber;
}
