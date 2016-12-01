import { Component } from '@angular/core';
import { Article } from './article'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'


})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('angular 2', 'easiest way to learn', 6),
      new Article('react', 'super fun'),
      new Article('jquery', 'miss you')
    ];
  }
}
