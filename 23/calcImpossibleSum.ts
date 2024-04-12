export const calcImpossibleSum = (abundantNumbers: number[], limit: number): number => {
  let impossibleSum = 0
  let min = Math.min(...abundantNumbers) * 2;
  let minIndex = 0;

  for (let i = 1; i <= limit; i++) {
    console.clear();
    console.log(i);

    if (i < min) {
      impossibleSum += i
      continue;
    }

    // 自分より大きい数の最小の過剰数のインデックスを取得
    // @ts-ignore
    const abundantNumbersMaxMinIndex = abundantNumbers.slice(minIndex - abundantNumbers.length).findIndex((abundantNumber) => abundantNumber >= i)
    minIndex = abundantNumbersMaxMinIndex;

    // 自分より小さい数の過剰数の配列を作成
    const abundantMinNumbers = abundantNumbers.slice(0, abundantNumbersMaxMinIndex)

    if (!isPossibleSum(i, abundantMinNumbers)) {
      impossibleSum += i
    }
  }


  return impossibleSum
}


const isPossibleSum = (goalNumber: number, abundantMinNumbers: number[]): boolean => {
  for (const index in abundantMinNumbers) {
    const baseNumber = abundantMinNumbers[index]
    const opponents = abundantMinNumbers.slice(Number(index));

    for (const opponent of opponents) {
      const result = baseNumber + opponent
      if (result === goalNumber) {
        return true
      }
      if (result > goalNumber) {
        break;
      }
    }
  }

  return false
}
