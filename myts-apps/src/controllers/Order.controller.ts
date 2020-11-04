import { OrderService } from '../services/Order.service';
import { OrderType } from "../types/Order.type";

export class OrderController {
    constructor(private orderService: OrderService) { }
    //controller api
    public findAll(): Array<OrderType> {
        return this.orderService.findAll();
    }
}