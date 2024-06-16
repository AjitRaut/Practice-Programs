var findMaximizedCapital = function(k, w, profits, capital) {
    let projects = profits.map((profit, index) => ({ profit, capital: capital[index] }));
    console.log(projects)
     
     projects.sort((a, b) => a.capital - b.capital);
     console.log(projects)
     
     let maxHeap = [];
     let current = 0;
 
     for (let i = 0; i < k; i++) {
         while (current < projects.length && projects[current].capital <= w) {
             maxHeap.push(projects[current].profit);
             maxHeap.sort((a, b) => b - a);  
             current++;
         }
 
        
         if (maxHeap.length === 0) {
             break;
         }
 
         w += maxHeap.shift();
     }
 
     return w;
 };
 console.log(findMaximizedCapital(2, 0,[1,2,3], [0,1,1]))