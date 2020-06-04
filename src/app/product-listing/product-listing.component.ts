import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  listItems: Array<any>;
  constructor() {
    this.listItems = [
      { id: 'er4j5h345', name: 'Item1', title: 'Test1', subtitle: 'Subtitle1', desc: 'this is test desc', isForSell: true, price: '$20' },
      { id: 'er4j5h345', name: 'Item2', title: 'Test2', subtitle: 'Subtitle2', desc: 'this is test desc', isForSell: false },
      { id: 'er4j5h345', name: 'Item3', title: 'Test3', subtitle: 'Subtitle3', desc: 'this is test desc', isForSell: false },
      { id: 'er4j5h345', name: 'Item4', title: 'Test4', subtitle: 'Subtitle4', desc: 'this is test desc', isForSell: false },
      { id: 'er4j5h345', name: 'Item5', title: 'Test5', subtitle: 'Subtitle5', desc: 'this is test desc', isForSell: false },
      { id: 'er4j5h345', name: 'Item6', title: 'Test6', subtitle: 'Subtitle6', desc: 'this is test desc', isForSell: false },
      { id: 'er4j5h345', name: 'Item7', title: 'Test7', subtitle: 'Subtitle7', desc: 'this is test desc', isForSell: true, price: '$20' },
      { id: 'er4j5h345', name: 'Item8', title: 'Test8', subtitle: 'Subtitle8', desc: 'this is test desc', isForSell: true, price: '$20' },
    ];
   }

  ngOnInit(): void {
  }

}
