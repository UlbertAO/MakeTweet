import { Component } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { UtilEventEmitterService } from 'src/app/shared/util-event-emitter.service';

@Component({
  selector: 'app-add-keys',
  templateUrl: './add-keys.component.html',
  styleUrls: ['./add-keys.component.scss'],
})
export class AddKeysComponent {
  newsApiKey: string;
  xTwitterConsumerKey: string;
  xTwitterConsumerSecret: string;
  xTwitterToken: string;
  xTwitterTokenSecret: string;

  constructor(private utilEventEmitterService: UtilEventEmitterService) {
    this.newsApiKey = localStorage.getItem(Constants.NEWSAPIKEY) || '';

    this.xTwitterConsumerKey =
      localStorage.getItem(Constants.xTwitterConsumerKey) || '';
    this.xTwitterConsumerSecret =
      localStorage.getItem(Constants.xTwitterConsumerSecret) || '';
    this.xTwitterToken = localStorage.getItem(Constants.xTwitterToken) || '';
    this.xTwitterTokenSecret =
      localStorage.getItem(Constants.xTwitterTokenSecret) || '';
  }
  saveKeys() {
    localStorage.setItem(Constants.NEWSAPIKEY, this.newsApiKey);

    localStorage.setItem(
      Constants.xTwitterConsumerKey,
      this.xTwitterConsumerKey
    );
    localStorage.setItem(
      Constants.xTwitterConsumerSecret,
      this.xTwitterConsumerSecret
    );
    localStorage.setItem(Constants.xTwitterToken, this.xTwitterToken);
    localStorage.setItem(
      Constants.xTwitterTokenSecret,
      this.xTwitterTokenSecret
    );
    this.utilEventEmitterService.keysAdded(true);
  }
}
