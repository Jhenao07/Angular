import { Component}  from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
    <p>
  😈Estamos estudiando Angular Carnal🤞
    </p>
    <h3> Counter: {{counter}}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset(7)">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent  {
  public counter: number = 7;

  increaseBy(value: number) :void{
     this.counter += value;
  }
  reset(value: number) :void{
     this.counter = value
  }
}

