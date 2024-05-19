// examine the document object
// console.dir(document);


// console.log(document.title);
// document.title =123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// GET ELEMENT BY ID SELECTING METHOD
//console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);
headerTitle.textContent = 'hello';
headerTitle.style.borderBlock = 'solid 3px #000';