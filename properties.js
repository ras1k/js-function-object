var myCart = {
    mouse : 5,
    keyboard : 9,
    pen : 15,
    book : 25
}
var properties = Object.keys(myCart);
var propertieValues = Object.values(myCart);
// console.log(myCart);
// console.log(properties);
// console.log(propertieValues);
// var propertyName = 'mouse';
// var propertyValue = myCart[propertyName];
// console.log(propertyValue);
// myCart['mouse']  = 69;
// console.log(myCart);

for (var i = 0; i < properties.length; i++){
    var propertyName = properties[i];
    var propertieValue = myCart[propertyName];
    console.log(propertyName, propertieValue);
}
