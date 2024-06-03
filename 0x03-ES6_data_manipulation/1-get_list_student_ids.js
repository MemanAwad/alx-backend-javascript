export default function getListStudentIds(arrayy) {
  let arr = [];
  if (!(arrayy instanceof Array)) {
    return arr;
  }
  arr = arrayy.map((x) => x.id);
  return arr;
}
