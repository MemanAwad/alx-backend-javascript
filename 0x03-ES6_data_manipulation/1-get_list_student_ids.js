export default function getListStudentIds(arrayy) {
  let arr = [];
  if (typeof (arrayy) !== 'object') {
    return arr;
  }
  arr = arrayy.map((x) => x.id);
  return arr;
}
