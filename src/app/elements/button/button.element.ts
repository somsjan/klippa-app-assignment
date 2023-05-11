import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.element.html',
  styleUrls: ['./button.element.scss']
})
export class ButtonElement {

  @Input()
  text: string = '';

  @Input()
  disabled: boolean = false;

  @Output()
  readonly onClick = new EventEmitter<any>();

  constructor() {

  }

}
