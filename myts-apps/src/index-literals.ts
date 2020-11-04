//literals -string
//"" ,'' ,``,`${variable}`
let firstName = "Subramanian";
let lastName = 'Murugan'
console.log("First Name" + firstName);
console.log(`First Name ${firstName} ${lastName}`);
let title = 'IBM'
//multi line string literal
let htmlPage = `
    <html>
      <head>
       <title>
          ${title}
       </title>
     </head>
     <body>
      <h1>Welcome</h1>
     </body>
     </html>
`;
console.log(htmlPage);

////////////////////////////////////////////////////////////////////////////
//number
//numbers : 64 bit size: aka double
let stockValue = 1000;
console.log(`Stock value ${stockValue}`);
///////////////////////////////////////////////////////////////////////////////
//undefined ; void
//undefined ; variable is declared but not iniitalized
let qty;
console.log(`Qty ${qty}`)
////////////////////////////////////////////////////////////////////////////////
//NaN ; Not a Number ; Runtime execption.
//NaN : it is runtime numerical errors
//if you do compuation against undefined
let totalStockValue = qty * stockValue;
console.log(`Total Stock value ${totalStockValue}`);
///////////////////////////////////////////////////////////////////
//div by zero
let avgStock = stockValue / 0;
//div /0 : infinity
console.log(`Average Stock value ${avgStock}`);
///////////////////////////////////////////////////////////////////////////////
//booleans
let isActive = true;
let isEnabled = false;

if (isActive) {
    console.log('Active')
} else {
    console.log('It is not active')
}

if (isEnabled) {
    console.log('isEnabled')
} else {
    console.log('It is not Enabled')
}
///////////////////////////////////
//Advanced booleans; which is true / false
//advanced booleans ;
//in js everthing is true exepect the following values
/**
 * falsy values
 * 1.boolean false
 * 2.0
 * 3.undefined
 * 4.NaN
 * 5.null
 * 6.empty string ""/ ''
 */

let message = "";

if (message) {
    console.log('You have message')
} else {
    console.log('You dont have message')
}













