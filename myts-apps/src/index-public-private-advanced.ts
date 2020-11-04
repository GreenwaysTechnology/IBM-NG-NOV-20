//advanced usecase of private,public

// class Order {
//     orderId: number;
//     invoiceValue: number;
//     productName: string;
//     constructor(orderId: number, invoiceValue: number, productName: string) {
//         this.orderId = orderId;
//         this.invoiceValue = invoiceValue;
//         this.productName = productName;
//     }

// }
// class Order {
//     //convert local variables into instance variable by adding either public or private
//     constructor(public orderId?: number, public invoiceValue?: number, public productName?: string) {
//         this.orderId = orderId;
//         this.invoiceValue = invoiceValue;
//         this.productName = productName;
//     }
// }

class Order {
    //if local and istance variable initalzation ; remove inialization code
    constructor(public orderId?: number, private invoiceValue?: number,
        public productName?: string) { }
}
let order = new Order(1, 1000, 'toys')
console.log(order);
//console.log(order.invoiceValue)