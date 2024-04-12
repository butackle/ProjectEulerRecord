interface Divisor {
  base: number;
  divisors: number[];
  divisorsTotal: number
}

/**
 * 約数のデータを取得する
 *
 * @param base
 */
const findDivisorData = (base: number): Divisor => {
  const divisors: number[] = [] // 約数
  let divisorsTotal = 0 // 約数和
  const addDivisor = (divisor: number) => {
    divisors.push(divisor)
    divisorsTotal += divisor
  }

  // 約数1
  if (base !== 1) {
    addDivisor(1)
  }

  // 約数2
  const isEven = base % 2 === 0
  if (isEven && base !== 2) {
    addDivisor(2)
  }

  // 約数3〜
  const counter = getCounter(isEven);
  for (let i = 3; i < base; i = counter(i)) {
    if (base % i === 0) {
      addDivisor(i)
    }
  }
  addDivisor(base)


  return {base, divisors, divisorsTotal: divisorsTotal - base}
}

/**
 * findDivisorDataで使うカウンターを取得
 *
 * @param isEven
 */
const getCounter: (isEven: boolean) => ((i: number) => number) = (isEven: boolean) => {
  if (isEven) {
    return (i: number) => i + 1
  } else {
    return (i: number) => i + 2
  }
}

/**
 * 約数のデータリストを取得する
 *
 * @param limit
 */
const findDivisorDataList = (limit: number): Divisor[] => [...Array(limit)].map((_, i) => findDivisorData(i + 1))


/**
 * 過剰数のリストを取得する
 *
 * @param limit
 */
const findAbundantNumbers = (limit: number): number[] => [...Array(limit)].reduce<number[]>((abundantNumbers, _, i) => {
  const {base, divisorsTotal} = findDivisorData(i + 1)
  return base < divisorsTotal ? [...abundantNumbers, base] : abundantNumbers
}, [])

export type {Divisor}
export {findDivisorDataList, findAbundantNumbers}