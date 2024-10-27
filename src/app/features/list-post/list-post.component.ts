import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { ArticleItems } from 'src/app/models/newsapiEverythingModel';
import { Constants } from 'src/app/shared/constants';
import { UtilEventEmitterService } from 'src/app/shared/util-event-emitter.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent {
  newsList: Array<ArticleItems> = [];
  selectedSourceList: string[] = [];
  includeFilters: { [key: string]: boolean } = {
    title: true,
    description: true,
    content: false,
    author: false,
    publishedAt: false,
    source: false,
  };
  errorMsg: string | null = null;
  successMsg: string | null = null;

  constructor(
    private appService: AppService,
    private utilEventEmitterService: UtilEventEmitterService
  ) {}
  ngOnInit() {
    this.loadNewsEverything();
  }

  loadNewsEverything() {
    const params = {
      sources: this.selectedSourceList.join(),
      pageSize: 20,
    };
    this.utilEventEmitterService.isPending(true);

    this.appService.getNewsApiEverything(params).subscribe({
      next: (data) => {
        this.utilEventEmitterService.isPending(false);

        this.newsList = data.articles;
      },
      error: (error) => {
        this.utilEventEmitterService.isPending(false);
        this.errorMsg = error.error?.message ?? Constants.APIError;
      },
    });
  }
  updateValue(key: string, value: boolean) {
    this.includeFilters = {
      ...this.includeFilters,
      [key]: !value,
    };
    console.log(this.includeFilters);
  }
  postOnX(postContent: string) {
    console.log(postContent);
    const payload = {
      text: postContent,
      apiKey: localStorage.getItem(Constants.xTwitterConsumerKey),
      apiSecretKey: localStorage.getItem(Constants.xTwitterConsumerSecret),
      accessToken: localStorage.getItem(Constants.xTwitterToken),
      accessTokenSecret: localStorage.getItem(Constants.xTwitterTokenSecret),
    };
    this.utilEventEmitterService.isPending(true);

    this.appService.postTweet(payload).subscribe({
      next: (data) => {
        this.utilEventEmitterService.isPending(false);

        console.log('TWEET posted : ', data);
      },
      error: (error) => {
        this.utilEventEmitterService.isPending(false);

        console.log(error);
      },
    });
  }
}
