import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTalkService {

  public items: any = [];

  constructor() {}

  filterItems(searchTerm) {
    console.log(searchTerm)
    return this.items.filter(item => {
      return item.title.indexOf(searchTerm) > -1;
    });
  }
}
