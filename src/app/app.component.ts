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
    const a = document.createElement('a');
    a.href = 'https://github.com/listenWhisper/docs-markdown';
    a.target = '_blank';
    a.click()
  }
}
