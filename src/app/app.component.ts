import { Component } from '@angular/core';
import {UtilTools} from 'basic-view-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  selectedIndex = 0;
  navigationList = [];
  toGitHub(): void{
    console.log(UtilTools.uuid());
    const a = document.createElement('a');
    a.href = 'https://github.com/listenWhisper/docs-markdown';
    a.target = '_blank';
    a.click()
  }
}
