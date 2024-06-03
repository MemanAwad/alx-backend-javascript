export default function getStudentIdsSum(studentlist) {
  const initialvalue = 0;
  const arr = studentlist.map((x) => x.id);
  const sumofids = arr
    .reduce((accumlator, currentvalue) => accumlator + currentvalue, initialvalue);
  return sumofids;
}
