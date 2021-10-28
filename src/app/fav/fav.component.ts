import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  bgColor1="#52796F";
  ftColor1="#b5179e"

  colorModeMessage = "OFF";

  colorSwitch = false;

  constructor() { }

  ngOnInit(): void {
  }

  swapColors():void{
    if(!this.colorSwitch){
      this.bgColor1 = "#FFC20A";
      this.ftColor1 = "#0C7BDC";
      this.colorSwitch = true;
      this.colorModeMessage = "ON";
    } else {
      this.bgColor1="#52796F";
      this.ftColor1="#b5179e";
      this.colorSwitch = false;
      this.colorModeMessage = "OFF";
    }
  }

  swapBgAndTC():void{
    let tmp = this.bgColor1;
    this.bgColor1 = this.ftColor1;
    this.ftColor1 = tmp;
  }

}
