// Check Given Number Is Palindrome Or Not.

var isPalindrome = function(x) {
    let pal=x.toString().split('').reverse().join('');

    if(pal==x){
     return true
    }else{
     return false
    }
 };
 let x=121
 console.log(isPalindrome(x))