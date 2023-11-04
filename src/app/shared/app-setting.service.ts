import { Injectable } from '@angular/core';
import { AppConfigService } from '../core/services/app-config.service';

@Injectable({
  providedIn: 'root',
})
export class AppSettingService {
  configData: any = {};

  constructor(private config: AppConfigService) {
    this.configData = config.config;
  }
}
