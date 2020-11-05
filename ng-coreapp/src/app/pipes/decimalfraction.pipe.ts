import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
    name: 'decimalFraction'
})
//note: name of the pipe must match pipe Class name , camel case
//100.78979 | decimalFraction => 100.79
export class DecimalFractionPipe implements PipeTransform {
    //custom pipe logic://value | pipe : input
    transform(value: number, digit: number = 2) {
        //logic
        return value.toFixed(digit);
    }
}