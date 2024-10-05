import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hasTruthy',
})
export class HasTruthyPipe implements PipeTransform {
  transform(value: any): boolean {
    return value && Object.values(value).some((v) => !!v);
  }
}
