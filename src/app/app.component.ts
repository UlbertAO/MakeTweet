import { Component } from '@angular/core';
import { UtilEventEmitterService } from './shared/util-event-emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'make_tweet';
  loader: boolean = false;
  constructor(private utilEventEmitterService: UtilEventEmitterService) {}
  ngOnInit() {
    this.utilEventEmitterService.pending.subscribe((data) => {
      if (data) {
        this.loader = true;
      } else {
        this.loader = false;
      }
    });
  }
}
