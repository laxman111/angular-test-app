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
      { id: 'er4j5h345', name: 'Item 1', title: 'Test 1', subtitle: 'Subtitle 1', desc: 'this is test description', isForSell: true, price: '$20' },
      { id: 'er4j5h345', name: 'Item 2', title: 'Test 2', subtitle: 'Subtitle 2', desc: 'this is test description', isForSell: false },
      { id: 'er4j5h345', name: 'Item 3', title: 'Test 3', subtitle: 'Subtitle 3', desc: 'this is test description', isForSell: false },
      { id: 'er4j5h345', name: 'Item 4', title: 'Test 4', subtitle: 'Subtitle 4', desc: 'this is test description', isForSell: false },
      { id: 'er4j5h345', name: 'Item 5', title: 'Test 5', subtitle: 'Subtitle 5', desc: 'this is test description', isForSell: false },
      { id: 'er4j5h345', name: 'Item 6', title: 'Test 6', subtitle: 'Subtitle 6', desc: 'this is test description', isForSell: false },
      { id: 'er4j5h345', name: 'Item 7', title: 'Test 7', subtitle: 'Subtitle 7', desc: 'this is test description', isForSell: true, price: '$20' },
      { id: 'er4j5h345', name: 'Item 8', title: 'Test 8', subtitle: 'Subtitle 8', desc: 'this is test description', isForSell: true, price: '$20' },
    ];
   }

  ngOnInit(): void {
  }

}
