import { Component } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ]),
    trigger('photoState', [
      state('move', style({
        transform: 'translateX(-100%)',
      })),
      state('enlarge', style({
        transform: 'scale(1.5)',
      })),
      state('spin', style({
        transform: 'rotateY(180deg) rotateZ(90deg)',
      })),
      transition('show => hide', animate('2000ms ease-out')),
      transition('* => *', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent {
  show = false;

  position: string;

  constructor() { }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }

  changePosition(newPosition: string){
    this.position = newPosition;
  }

}
