import {Component, OnInit} from '@angular/core';
import {UtilTools} from 'basic-view-data';
import {MarkdownService} from './services/markdown.service';
import {HeaderMenu, HeaderMenuList} from './domains/header-menu.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  selectedIndex = 0;
  headerMenuList: HeaderMenuList = new HeaderMenuList();
  constructor(
    private markdownService: MarkdownService
  ) {
  }

  ngOnInit(): void {
    this.markdownService.getJsonConfig<HeaderMenu[]>('header-menu').then((res) => {
     this.headerMenuList = new HeaderMenuList(UtilTools.createBasicViewListItems<HeaderMenu>(res));
    })
  }

  toGitHub(): void {
    console.log(UtilTools.uuid());
    UtilTools.pathLink('https://github.com/listenWhisper/docs-markdown', '_blank');
  }
}
