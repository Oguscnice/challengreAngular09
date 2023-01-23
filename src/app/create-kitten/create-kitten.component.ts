import { Component, EventEmitter, Output, Input } from '@angular/core';
// import { Cat } from '../models/cat.models';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.less']
})
export class CreateKittenComponent {

  cat : any = {race:"",name:"",birth: new Date(),imgcat:""}

  // constructor(public race : string, public name : string, public birth : Date, public picture : string){}

  // race :string = ""
  // name :string = ""
  // birth :Date = new Date()
  // picture :string = "";

@Output()
newCatToSend : EventEmitter<any> = new EventEmitter();

  onSubmit():void {
    console.log(this.cat)
    this.newCatToSend.emit(this.cat)
  }
}
