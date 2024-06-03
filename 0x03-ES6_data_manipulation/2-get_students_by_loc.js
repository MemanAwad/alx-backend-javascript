export default function getStudentsByLocation(studentlist, city) {
  let arr = [];
  if (!(studentlist instanceof Array)) {
    return arr;
  }
  arr = studentlist.filter((x) => x.location === city);
  return arr;
}
