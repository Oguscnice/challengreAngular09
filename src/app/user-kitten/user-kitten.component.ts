import { Component } from '@angular/core';
import { Cat } from '../models/cat.models';
@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.less']
})
export class UserKittenComponent {
  catAdopted :Cat[]= [];


    newCatAdopted2(event: any): void {
      this.catAdopted.push(event);
    }
}
