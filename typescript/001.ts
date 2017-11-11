import EulerProblem from './EulerProblem';

export default class implements EulerProblem {
  getResult(): number {
    const numbers: number[] = [];

    for (let n = 1; n < 1000; n++) {
      if (n % 3 == 0 || n % 5 == 0) numbers.push(n);
    }

    return numbers.reduce((p, c) => p + c);
  }
}
