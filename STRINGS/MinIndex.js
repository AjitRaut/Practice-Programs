var findRestaurant = function (list1, list2) {
    let common = [];
    let minSum = Infinity;  
  
    for (let j = 0; j < list2.length; j++) {
      for (let i = 0; i < list1.length; i++) {
        if (list1[i] === list2[j]) {
          let indexSum = i + j;  
          
          if (indexSum < minSum) {
            minSum = indexSum;
            common = [list1[i]];  
          } 
          else if (indexSum === minSum) {
            common.push(list1[i]);
          }
        }
      }
    }
  
    return common;
  };
  
  console.log(
    findRestaurant(
      ["Shogun", "Tapioca Express", "Burger King", "KFC"],
      [
        "Piatti",
        "The Grill at Torrey Pines",
        "Hungry Hunter Steakhouse",
        "Shogun",
      ]
    )
  );  
  