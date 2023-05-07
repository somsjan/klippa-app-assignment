import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent {

  @Input()
  labelText: string;

  @Input()
  value: string;

}
