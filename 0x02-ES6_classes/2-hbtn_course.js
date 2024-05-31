export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(vname) {
    if (typeof vname !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = vname;
  }

  get name() {
    return this._name;
  }

  set lenght(vlenght) {
    if (typeof vlenght !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._lenght = vlenght;
  }

  get length() {
    return this._length;
  }

  set students(vstudents) {
    this._students = vstudents;
  }

  get students() {
    return this._students;
  }
}
