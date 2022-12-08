export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Error 1'],
      [2, 'Error 2'],
      [3, 'Error 3'],
      [4, 'Error 4'],
    ]);
  }

  translate(code) {
    let result;
    if (this.errors.has(code)) {
      result = this.errors.get(code);
    } else {
      throw new Error('Unknown error');
    }
    return result;
  }
}
