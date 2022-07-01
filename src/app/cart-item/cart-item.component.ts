import { Component, OnInit } from '@angular/core';
import {Item} from "../dto/item";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
item = new Item("1001",
  "https://m.media-amazon.com/images/I/41-aexp44tL._AC_UL320_.jpg",
  "Apple AirPods (2nd Generation)",
  4,
  299,
  5)
  constructor() { }

  ngOnInit(): void {
  }

}
