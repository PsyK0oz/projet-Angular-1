// shared/star-image.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starImage'
})
export class StarImagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    
    return `./assets/${value}-stars.png`;
  }

}
