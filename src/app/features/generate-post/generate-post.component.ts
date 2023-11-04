import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-post',
  templateUrl: './generate-post.component.html',
  styleUrls: ['./generate-post.component.scss'],
})
export class GeneratePostComponent {
  constructor() {
    console.log('GenereatePost constructor');
  }
  ngOnInit() {
    console.log('GeneratePost ngOnInit');
  }
}
