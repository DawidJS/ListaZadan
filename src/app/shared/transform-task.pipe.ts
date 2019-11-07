import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTask'
})
export class TransformTaskPipe implements PipeTransform {

  transform(value: any, args: string = ''): any {
    return value.charAt(0).toUpperCase() + value.slice(1) + args; // pierwsza litera zamieni sie na duza litere i doda argument na koncu , arg podaje sie w html
  }

}
