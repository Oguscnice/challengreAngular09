import { Component, Output, EventEmitter } from '@angular/core';
import { Cat } from '../models/cat.models';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.less'],
})
export class ListKittenComponent {

  catToAdopted : any = {};
// @Input()
// newCatToSend = newCatToAdopt($event)
  selectedCat!: any;
  allCats: Cat[] = [
    {
      race: 'Russe',
      name: 'Hasbulla',
      birth: new Date(),
      imgcat:
        'https://i.pinimg.com/736x/85/3b/eb/853beb1ca96bb4af58169ae4d28ad2fd.jpg',
        survol :false
    },
    {
      race: 'Russian',
      name: 'Hasbu',
      birth: new Date(),
      imgcat: 'https://pbs.twimg.com/media/E8PvXDdUUAEs4oE.jpg',
      survol :false
    },
  ];

  ngOnInit() {
    // this.cat = new Cat(race, name, new Date(), imgcat);
  }

  newCatToAdopt(event: any): void {
    this.allCats.push(event);
  }

  afficheP(cat : any) {
    this.selectedCat = cat;
    cat.survol = !cat.survol;
  }

  // cacheP(cat : any) {
  //   cat.survol = false;
  // }

  @Output()
  newCatToAdopted : EventEmitter<any> = new EventEmitter();
  newCatAdopted(cat : any):void {
    this.selectedCat = cat;
    this.newCatToAdopted.emit(this.selectedCat)
    this.allCats = this.allCats.filter((catToDelete : any) => catToDelete !== this.selectedCat)
  }
}

