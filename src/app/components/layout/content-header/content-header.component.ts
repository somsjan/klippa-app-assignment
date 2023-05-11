import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {

  @Input()
  headerText: string = '';

  @Input()
  buttonText: string = '';

  @Output()
  readonly onButtonClick = new EventEmitter<any>();


}
