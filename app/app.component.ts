//Import component decorator
import { Component } from '@angular/core';

//Decorator declaration, targets app-root html element in index
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- [] binding notation denotes one way data flow -->
      <h1 [innerHTML]="title"></h1>
      <h1>{{ title + '!' }}</h1>
      <!-- element.src = 'logo.svg -->
      <img [src]="logo">
      <!-- element.value = 'Donnie' -->
      <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)">
      <div> {{ name }} </div>
      <div>
        {{ numberOne }}
        {{ numberTwo }}
        <div>
          {{ numberOne + numberTwo}}
        <div>
      <div>
      {{ isHappy ? ':)' : ':(' }}
    <div>
  `
})
export class AppComponent {
  name: string = 'Donnie';
  handleInput(event: any) {
    //Updates the {{ name }} element on keystroke input
    this.name = event.target.value;
  }
  handleBlur(event: any) {
    //Updates the {{ name }} element on blur
    this.name = event.target.value;
    console.log(event);
  }
  title: string;
  isHappy: boolean;
  logo: string = 'img/logo.svg';
  numberOne: number = 1;
  numberTwo: number = 2;
  constructor() {
    this.title = 'Ultimate Angular',
    this.isHappy = true;
  }
}
