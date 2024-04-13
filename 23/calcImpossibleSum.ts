export const calcImpossibleSum = (abundantNumbers: number[], limit: number): number => {
  let sum = 0;

  for (let targetNumber = 0; targetNumber <= limit; targetNumber++) {
    // console.clear();
    // console.log({targetNumber});

    if (targetNumber < abundantNumbers[0] * 2) {
      sum += targetNumber;
      continue;
    }

    sum += competeAbundantNumbers(targetNumber, abundantNumbers);
  }

  return sum;
}

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
