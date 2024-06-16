// Merge Sorded Arrays

var mergeTwoLists = function(list1, list2) {
    let list3=list1.concat(list2);
    return list3.sort();
}
console.log(mergeTwoLists([1,2,4],[1,3,4]))