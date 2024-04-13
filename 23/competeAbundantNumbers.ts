/**
 * 対象の数字が2つの過剰数の和で書き表せないかを調べる。
 * 書き表せる場合には0を返して、書き表せない場合には対象の数字を返す。
 *
 * @param targetNumber
 * @param abundantNumbers
 */
export const competeAbundantNumbers = (targetNumber: number, abundantNumbers: number[]): number => {
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
