import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encurtador'
})
export class EncurtadorPipe implements PipeTransform {

  transform(value: string, limit:number): string {
    if(value.toString().length > (+ limit)){
      return value.substr(0,limit)+ '...';
    }
    return value.toString();
  }

}
