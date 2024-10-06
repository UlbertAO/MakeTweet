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
    return this.http.post<NewsApiSourcesModel>(
      this.baseUrl?.netlifyFunction + '/newsApi',
      {
        url: this.baseUrl?.newsapi + '/top-headlines/sources',
        method: 'GET',
        options: {
          params: params,
          headers: headers,
        },
      }
    );
  }

  getNewsApiEverything(params: any): Observable<NewsApiEverythingModel> {
    const headers = {
      'X-Api-Key': localStorage.getItem(Constants.NEWSAPIKEY) || '',
    };
    return this.http.post<NewsApiEverythingModel>(
      this.baseUrl?.netlifyFunction + '/newsApi',
      {
        url: this.baseUrl?.newsapi + '/everything',
        method: 'GET',
        options: {
          params: params,
          headers: headers,
        },
      }
    );
  }
  postTweet(payload: any) {
    return this.http.post(this.baseUrl?.netlifyFunction + '/tweet', payload);
  }
}
