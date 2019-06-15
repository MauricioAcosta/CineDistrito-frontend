import { Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None //https://stackoverflow.com/questions/46670795/how-to-change-whole-page-background-color-in-angular
})

export class AppComponent {
  title = 'CineDistrito-cli';
}
