import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  products: any[] = [
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDay: 'March 12, 2021',
      description: '15 gallon capacity rolling',
      price: '32.99',
      starRating: '4.2',
      imageUrl: 'assests/images/garden_cart.png'
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDay: 'May 21, 2021',
      description: 'Curved claw steel hammer',
      price: '8.9',
      starRating: '4.8',
      imageUrl: 'assests/images/hammer.png'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
