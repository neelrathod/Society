import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
  
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, propName : string): any {
    if(value.lnegth === 0 || filterString === ""){
      return value;
    }
    const array = [];
    for(const item of value ){
       if(item[propName] === filterString){
         array.push(item);
       }
    }
    return array;
  }

}
