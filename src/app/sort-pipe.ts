import { Pipe, PipeTransform } from '@angular/core';
import {ValuesList} from './interfaces';
@Pipe({
  name: 'sort',
  pure: true
})
export class SortPipe implements PipeTransform {
    transform(array: Array<ValuesList>, args: string): Array<ValuesList> {
        if (array && args) {
            if (array.length === 0) {
                return array;
            }
            array.sort((a: any, b: any) => {
                if (a[args] < b[args]) {
                    return -1;
                } else if (a[args] > b[args]) {
                    return 1;
                } else {
                    return 0;
                }
            });
            return array;
        }

    }
}
