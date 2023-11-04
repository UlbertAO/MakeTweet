import { Component } from '@angular/core';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-add-keys',
  templateUrl: './add-keys.component.html',
  styleUrls: ['./add-keys.component.scss'],
})
export class AddKeysComponent {
  newsApiKey: string;
  constructor() {
    this.newsApiKey = localStorage.getItem(Constants.NEWSAPIKEY) || '';
  }
  saveKeys() {
    localStorage.setItem(Constants.NEWSAPIKEY, this.newsApiKey);
  }
}
