// h1
// [
// <h1>​Exercises​</h1>​
// ]
// h1.css('color','red')
// [
// <h1>​Exercises​</h1>​
// ]
//    ......Or........
// $('h1').css('color','blue')
// [
// <h1 style=​"color:​ red;​">​Exercises​</h1>​
// ]







// Select all elements that match the given css selector 
//(passed as a string to the $ function)
var welcome = $('#welcome-message');
// first arguement is the css property you want to change 
//second argument is the value to change it to
welcome.css('font-size', '72px');