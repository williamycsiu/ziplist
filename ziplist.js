/**
 * Created by William on 9/19/2016.
 */

const list1 = [1, 2, 3];
const list2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const list = [];
  for (let i = 0; i < list1.length; i++) {
    list.push(list1[i], list2[i]);
  }
  return list;
}

console.log(`Zip : ${zipList(list1, list2)}`);

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(`Zip the simple way : ${zipListTheSimpleWay(list1, list2)}`);
