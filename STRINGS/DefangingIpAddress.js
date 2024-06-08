// Defanging Ip Address.

var defangIPaddr = function(address) {
    let address2=address.replace(/\./g, "[.]");
    return address2
};
console.log(defangIPaddr("1.1.1.1"))