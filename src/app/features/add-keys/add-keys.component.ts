import { Component } from '@angular/core';

@Component({
  selector: 'app-add-keys',
  templateUrl: './add-keys.component.html',
  styleUrls: ['./add-keys.component.scss'],
})
export class AddKeysComponent {
  newsApiKey: string;
  constructor() {
    this.newsApiKey = localStorage.getItem('newsApiKey') || '';
  }
  saveKeys() {
    localStorage.setItem('newsApiKey', this.newsApiKey);
  }
}
