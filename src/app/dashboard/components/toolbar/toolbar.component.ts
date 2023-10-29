import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output()
  toggleSidebar = new EventEmitter();

  changeLanguage(event: any) {
    const selectedLanguage = event.value;
    console.log(`Selected language: ${selectedLanguage}`);
  }
}