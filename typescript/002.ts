import EulerProblem from './EulerProblem';

export default class implements EulerProblem {
  getResult(): number {
    const numbers: number[] = [];

    let n = 0;
    let m = 1;

    while (n < 4000000) {
      const term = n + m;
      if (term % 2 == 0) numbers.push(term);
      n = m;
      m = term;
    }

    return numbers.reduce((p, c) => p + c);
  }
}
