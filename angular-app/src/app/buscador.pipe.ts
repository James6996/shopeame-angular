import { Producto } from 'src/app/viewer-products.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(value:Producto[], ...args: string[]): Producto[] {
    const founded: Producto[] = value.filter((elem)=>
    elem.name.toLowerCase().includes(args[0].toLowerCase())
    );
    return founded;
  }

}
