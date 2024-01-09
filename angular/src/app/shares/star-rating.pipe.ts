// shares/star-rating.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starRating'
})
export class StarRatingPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const fullStars = Math.floor(value);
    const halfStars = Math.round(value - fullStars);
    const emptyStars = 5 - fullStars - halfStars;

    return '★'.repeat(fullStars) + '½'.repeat(halfStars) + '☆'.repeat(emptyStars);
  }

}
