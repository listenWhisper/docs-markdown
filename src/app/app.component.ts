import { Component } from '@angular/core';
import { Util } from 'basic-view-data/share/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  selectedIndex = 0;
  navigationList = []
  toGitHub(): void{
    Util.pathLink('https://github.com/listenWhisper/docs-markdown');
  }
}
