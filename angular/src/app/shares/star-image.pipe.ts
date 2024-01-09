// shared/star-image.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starImage'
})
export class StarImagePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    // Remplacez 'path/to/your/images' par le chemin d'accès à vos images d'étoiles
    return `./assets/${value}-stars.png`;
  }

}
