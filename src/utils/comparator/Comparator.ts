type sn = string | number;

export class Comparator {
  constructor(compareFunction?) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  compare;

  /**
   * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
   * @param {(string|number)} a
   * @param {(string|number)} b
   * @returns {number}
   */
  static defaultCompareFunction(a: sn, b: sn): number {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }
}
