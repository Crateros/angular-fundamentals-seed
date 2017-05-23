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
      <button (click)="handleClick()">Click Me!</button>
      <!-- <input
        type="text"
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"> -->
      <div>One-way databinding with (ngModelChange)=handleChange()</div>
      <input
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      >
      <div>Two-way databinding using [(ngModel)]</div>
      <input
        type="text"
        [(ngModel)]="name"
      >
      <div>{{ name }}</div>

      <br>

      <div>Template #ref variable</div>
      <button (click)="handleClickTwo(username.value)">Get Value</button>
      <input
        type="text"
        #username
      >

      <br>

      <div>ngIf Selection</div>
      <input
        type="text"
        [value]="name2"
        (input)="handleChangeTwo($event.target.value)"
      >
      <div *ngIf="name2.length > 2">Searching for... {{ name2 }}</div>

      <br>

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
  name2: string = '';
  handleClick() {
    this.name = "Clicked!";
  }
  handleClickTwo(value: string) {
    console.log(value);
  }
  handleChange(value: string) {
    //Updates the {{ name }} element on keystroke input, this mimics two way data binding, but one way data flow that updates on the fly
    this.name = value;
  }
  handleChangeTwo(value: string) {
    this.name2 = value;
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
