/**
 * ziplist practice WOD.
 * Created by William on 9/19/2016.
 */

const List1 = ['a', 'b', 'c'];
const List2 = [1, 2, 3];

function zipList(list1, list2) {
  const list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i], list2[i]);
  }
  return list;
}

console.log(`Zip : ${zipList(List1, List2)}`);

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(`Zip the simple way : ${zipListTheSimpleWay(List1, List2)}`);
