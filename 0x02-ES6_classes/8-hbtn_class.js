export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    this._location = value;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return null; // Default case
  }
}