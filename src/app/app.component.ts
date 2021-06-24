import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Novidades', url: 'novidades', icon: 'star' },
    { title: 'Sorvetes', url: 'sorvetes', icon: 'happy' },
    { title: 'Encomendas', url: 'encomendas', icon: 'bicycle' }
    
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
