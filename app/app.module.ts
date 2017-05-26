import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StockInventoryModule } from './stock-inventory/containers/stock-inventory.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    StockInventoryModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
