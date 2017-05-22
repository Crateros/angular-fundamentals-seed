//Import component decorator
import { Component } from '@angular/core';

//Decorator declaration, targets app-root html element in index
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      {{ title }}
    <div>
  `
})
export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Ultimate Angular'
  }
}
