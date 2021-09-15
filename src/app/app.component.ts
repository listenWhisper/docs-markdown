import {Component, OnInit} from '@angular/core';
import {UtilTools} from 'basic-view-data';
import {MarkdownService} from './services/markdown.service';
import {HeaderMenu, HeaderMenuList} from './domains/header-menu.domain';
import {Router} from '@angular/router';
import {SideMenuList} from './domains/side-menu.domain';
import {RouterConfigService} from './services/router-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  selectedIndex = 0;
  headerMenuList: HeaderMenuList = new HeaderMenuList();
  sideMenuList: SideMenuList = new SideMenuList();
  constructor(
    private markdownService: MarkdownService,
    private routerConfigService: RouterConfigService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.markdownService.getJsonConfig<HeaderMenu[]>('header-menu').then((res) => {
     this.headerMenuList = new HeaderMenuList(UtilTools.createBasicViewListItems<HeaderMenu>(res));
     this.routerConfigService.headerMenuList = this.headerMenuList;
    })
  }

  getMarkDown(headerMenu: HeaderMenu): void{
    this.markdownService.getMarkDown(headerMenu.Mark).then(res => {
      debugger
    })
  }

  toGitHub(): void {
    UtilTools.pathLink('https://github.com/listenWhisper/docs-markdown', '_blank');
  }

  navSelect(headerMenu: HeaderMenu, index: number): void{
    this.router.navigate([headerMenu.Router]).then(() => {
      this.selectedIndex = index;
      this.getMarkDown(headerMenu);
    });
  }
}
