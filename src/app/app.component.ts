import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  selectedIndex = 0;
  navigationList = []
  toGitHub(): void{
    debugger
  }
}
