import { OrderType } from "../types/Order.type";
import { ORDERS } from '../mock-data/Orders.mock';


export class OrderService {
    constructor() {
        console.log('Order Service is being initalized')
    }
    public findAll(): Array<OrderType> {
        return ORDERS;
    }
}