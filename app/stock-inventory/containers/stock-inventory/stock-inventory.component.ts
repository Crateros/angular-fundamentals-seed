import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventroy">
      Hello world from Stock Inventory Component!
      <form [formGroup]="form" (ngSubmit)="onSubmit()">

      <stock-branch
      [parent]="form"
      >
      </stock-branch>

      <stock-selector
      [parent]="form"
      [products]="products"
      >
      </stock-selector>

      <stock-products
      [parent]="form">
      </stock-products>


      <div class="stock-inventory__buttons">
        <button type="submit" [disabled]="form.invalid">
        Order Stock
        </button>
      </div>

      <pre>{{ form.value | json }}</pre>

      </form>
    </div>
  `
})

export class StockInventoryComponent {

  products: Product[] = [
    { "id": 1, "price": 2500, "name": "PC"},
    { "id": 2, "price": 3500, "name": "Mac"},
    { "id": 3, "price": 4500, "name": "Linux"},
    { "id": 4, "price": 5500, "name": "Car"},
  ];

  form = new FormGroup({
    store: new FormGroup({
      //Empty string '' is default value
      branch: new FormControl(''),
      code: new FormControl(''),
    }),
    selector: new FormGroup({
      product_id: new FormControl(''),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([])
  })

  onSubmit() {
    console.log('Submit:', this.form.value);
  }
}
