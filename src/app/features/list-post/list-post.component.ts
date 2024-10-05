import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { ArticleItems } from 'src/app/models/newsapiEverythingModel';
import { Constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent {
  newsList: Array<ArticleItems> = [];
  selectedSourceList: string[] = [];

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.loadNewsEverything();
  }
  loadNewsEverything() {
    const params = {
      sources: this.selectedSourceList.join(),
      pageSize: 20,
    };
    this.appService.getNewsApiEverything(params).subscribe({
      next: (data) => {
        this.newsList = data.articles;
      },
      error: (error) => {
        console.log(error);
      },
    });
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
    this.appService.postTweet(payload).subscribe({
      next: (data) => {
        console.log('TWEET posted : ', data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
