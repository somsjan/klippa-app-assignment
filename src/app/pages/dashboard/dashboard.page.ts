import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage {

  public showAddDocumentComponent: boolean = false;

  constructor() {
  }

  public onAdd() {
    this.showAddDocumentComponent = !this.showAddDocumentComponent;
  }

}
