import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pwaoffline';
  years:any = [];

  constructor() {
    console.log("****************");

    this.snippets();
  }


  snippets() {

    let date = new Date();

    console.log(date.getFullYear());

    for (let y: any = date.getFullYear(); y >= date.getFullYear() - 4; y--) {
      console.log(y);

      this.years.push(y);
    }
    console.log(this.years)
  }

}
