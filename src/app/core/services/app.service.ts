import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsApiEverythingModel } from 'src/app/models/newsapiEverythingModel';
import { NewsApiSourcesModel } from 'src/app/models/newsapiSourcesModel';
import { AppSettingService } from 'src/app/shared/app-setting.service';
import { Constants } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl: any;

  constructor(private http: HttpClient, private appSetting: AppSettingService) {
    this.baseUrl = appSetting.configData?.baseurl;
  }

  getNewsApiSources(): Observable<NewsApiSourcesModel> {
    const params = {
      category: 'technology',
      language: 'en',
    };
    const headers = {
      'X-Api-Key': localStorage.getItem(Constants.NEWSAPIKEY) || '',
    };
    return this.http.get<NewsApiSourcesModel>(
      this.baseUrl?.newsapi + '/top-headlines/sources',
      {
        params: params,
        headers: headers,
      }
    );
    // return this.http.get<NewsApiSourcesModel>(
    //   '../../../assets/response/newsapiSources.json'
    // );
  }
  getNewsApiEverything(params: any): Observable<NewsApiEverythingModel> {
    const headers = {
      'X-Api-Key': localStorage.getItem(Constants.NEWSAPIKEY) || '',
    };
    return this.http.get<NewsApiEverythingModel>(
      this.baseUrl?.newsapi + '/everything',
      {
        params: params,
        headers: headers,
      }
    );

    // return this.http.get<NewsApiEverythingModel>(
    //   '../../../assets/response/newsapiEverything.json'
    // );
  }
  postTweet() {
    return this.http.get('/api/getSomething');
  }
}
