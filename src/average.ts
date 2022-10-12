export const findAverage = (numArr: Array<number>): number => {
  return numArr.reduce((total: number, currentValue: number) => {
    return total + currentValue;
  }, 0) / numArr.length;
};
