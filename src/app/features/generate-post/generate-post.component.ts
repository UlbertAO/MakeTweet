import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { Constants } from 'src/app/shared/constants';
import { UtilEventEmitterService } from 'src/app/shared/util-event-emitter.service';

@Component({
  selector: 'app-generate-post',
  templateUrl: './generate-post.component.html',
  styleUrls: ['./generate-post.component.scss'],
})
export class GeneratePostComponent {
  allKeysAdded: boolean;
  sourceIds: { [key: string]: boolean } = {};

  errorMsg: string | null = null;
  successMsg: string | null = null;

  constructor(
    private appService: AppService,
    private utilEventEmitterService: UtilEventEmitterService
  ) {
    console.log('GenereatePost constructor');
    const sourceIdsTemp: string =
      localStorage.getItem(Constants.NEWSAPISOURCES) || '';
    this.sourceIds = sourceIdsTemp ? JSON.parse(sourceIdsTemp) : {};
  }
  ngOnInit() {
    console.log('GeneratePost ngOnInit');
    this.checkKeys();
  }
  checkKeys() {
    this.allKeysAdded =
      localStorage.getItem(Constants.NEWSAPIKEY)?.trim() &&
      localStorage.getItem(Constants.xTwitterConsumerKey) &&
      localStorage.getItem(Constants.xTwitterConsumerSecret) &&
      localStorage.getItem(Constants.xTwitterToken) &&
      localStorage.getItem(Constants.xTwitterTokenSecret)
        ? true
        : false;
  }
  getSources() {
    this.utilEventEmitterService.isPending(true);
    this.appService.getNewsApiSources().subscribe({
      next: (data) => {
        this.utilEventEmitterService.isPending(false);

        data.sources
          // .map((x) => x.id)
          .forEach((src) => {
            this.sourceIds[src.id] = false;
          });
        localStorage.setItem(
          Constants.NEWSAPISOURCES,
          JSON.stringify(this.sourceIds)
        );
        // console.log(data);
      },
      error: (error) => {
        this.utilEventEmitterService.isPending(false);

        this.errorMsg = error.error.message;
      },
    });
  }
  updateValue(key: string, value: boolean) {
    this.sourceIds = {
      ...this.sourceIds,
      [key]: !value,
    };
    console.log(this.sourceIds);
  }
  loadPost() {
    localStorage.setItem(
      Constants.NEWSAPISOURCES,
      JSON.stringify(this.sourceIds)
    );
    this.utilEventEmitterService.loadListPost(
      Object.keys(this.sourceIds).filter((src) => this.sourceIds[src])
    );
  }
}
