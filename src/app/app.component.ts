import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentTab;
  showHeader = true;
  constructor() {
    this.currentTab = "Startseite"
  }
}
