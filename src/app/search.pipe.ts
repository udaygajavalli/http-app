import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(dataArray: any[],sortBy:string, searchTerm: string): unknown {
    if (!dataArray || !sortBy || !searchTerm) {
      return dataArray;
    } else {
      return dataArray.filter(
        (obj) =>
          obj[sortBy].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    }
  }
}
