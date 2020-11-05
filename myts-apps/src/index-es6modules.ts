import { OrderService } from './services/Order.service';
import { OrderController } from './controllers/Order.controller';
import TodoService from './services/todo.service';

function createOrder() {
    let orderCtl = new OrderController(new OrderService());
    console.log(orderCtl.findAll())
    //with export default
    new TodoService();
}
createOrder();