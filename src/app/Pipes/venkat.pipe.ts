import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'venkat'
})
export class VenkatPipe implements PipeTransform {

  transform(name:string,gender:string): string{
    if(gender.toLocaleLowerCase()=="male"){
      return "Mr." + name;
    }else{
      return "Mrs." + name;
    }

}
}
