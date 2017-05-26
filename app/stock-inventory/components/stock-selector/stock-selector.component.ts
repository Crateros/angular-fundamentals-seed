import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'stock-selector',
  styleUrls: ['stock-selector.component.scss'],
  template: `
    <div class="stock-selector" [formGroup]="parent">
      <div formGroupName="selector">
        <select formControlName="product_id">
        <!-- Display emtpy option -->
        <option value="">Select stock</option>
        <option
          *ngFor="let product of products"
          [value]="product.id"
        >
        {{ product.name }}
        </option>
        </select>
      </div>
    </div>
  `
})
export class StockSelectorComponent {
  @Input()
  parent: FormGroup;

  @Input()
  products: Product[];
}
