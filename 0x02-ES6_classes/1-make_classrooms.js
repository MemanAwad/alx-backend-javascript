import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const array = new Array(3);
  const room1 = new ClassRoom(19);
  const room2 = new ClassRoom(20);
  const room3 = new ClassRoom(34);
  array[0] = room1;
  array[1] = room2;
  array[2] = room3;

  return array;
}
