import { Component, Input } from '@angular/core';

class Article{
  constructor(
    public title: string,
    public description: string
  ){ }
}

@Component({
  selector: 'app-sidebar',
  template: `
    <div id="sidebar">sidebar will go here</div>
  `
})
export class SidebarComponent{}

@Component({
  selector: 'app-article',
  template: `
    <pre>{{article | json}}</pre>
  `
})
export class ArticleComponent{
  @Input() article: Object;
}

@Component({
  selector: 'app-root',
  template: `
    <div id="container">
      <app-sidebar></app-sidebar>
      <div id="content">
        <app-article
          *ngFor="let article of articles"
          [article]="article"></app-article>
      </div>
    </div>
  `
})
export class AppComponent {
  articles: Article[];

  constructor(){
    this.articles = [
      new Article('angular 2', 'easiest way to learn'),
      new Article('react', 'super fun'),
      new Article('jquery', 'miss you')
    ];
  }
}
