import { Component } from '@angular/core';
import { AppService } from 'src/app/core/services/app.service';
import { ArticleItems } from 'src/app/models/newsapiEverythingModel';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss'],
})
export class ListPostComponent {
  newsList: Array<ArticleItems> = [];

  constructor(private appService: AppService) {}
  ngOnInit() {
    this.loadNewsEverything();
  }
  loadNewsEverything() {
    this.appService.getNewsApiEverything().subscribe({
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
  }
}
