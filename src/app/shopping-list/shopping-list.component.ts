import { ShoppingItem } from './../models/shopping-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  itemName:string; // a variable for taking input - item name from user
  itemQuantity:number;
  shoppingList:Array<ShoppingItem>;

  constructor() {
    this.itemName = "";
    this.itemQuantity = 0;
    this.shoppingList = [new ShoppingItem('milk', 1), new ShoppingItem('eggs', 12)];
  }

  ngOnInit(): void {
  }

  addItem():void{
    if(this.itemName.trim() !== "" && this.itemQuantity > 0){
      this.shoppingList.push(new ShoppingItem(this.itemName, this.itemQuantity));
    }
  }

}
