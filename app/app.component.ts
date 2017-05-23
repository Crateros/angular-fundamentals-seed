//Import component decorator
import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number,
}

// Virtual object (descriptor) that describes a single passenger
//For optional property use ? i.e. checkInDate?: number
interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkInDate: number | null,
  children?: Child[] | null,
}


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

      <div class="app">
        <h3>Airline Passengers</h3>
        Total passengers: {{ passengers.length }}
        <ul>
          <li *ngFor="let passenger of passengers; let i = index;">
            <span
              class="status"
              [ngClass]="{ 'checked-in': passenger.checkedIn,
                           'checked-out': !passenger.checkedIn}"
            >
            </span>
            {{ i + 1 }}: {{ passenger.fullname }}
            <p>{{ passenger | json }}</p>
            <div class="date">
              Check in date:
              {{ passenger.checkInDate? (passenger.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in' }}
            </div>
            <div class="children">
              Children: {{ passenger.children.length }}
            </div>
          </li>
        </ul>
      </div>

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

  passengers: Passenger[] = [
    {
      id: 1,
      fullname: 'TheSwede',
      checkedIn: true,
      checkInDate: 1490742000000,
      children: null,
    },
    {
      id: 2,
      fullname: 'IamTwo',
      checkedIn: false,
      checkInDate: null,
      children: [{ name: 'Boy', age: 2 }],
    },
    {
      id: 3,
      fullname: 'NumeroThree',
      checkedIn: false,
      checkInDate: null,
      children: null,
    },
    {
      id: 4,
      fullname: 'Talia',
      checkedIn: true,
      checkInDate: 1488412800000,
      children: [{ name: 'Girl', age: 3 }],
    },
  ]

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
