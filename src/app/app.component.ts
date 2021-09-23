import {Component, OnInit} from '@angular/core';
import {UtilTools} from 'basic-view-data';
import {MarkdownService} from './services/markdown.service';
import {HeaderMenu, HeaderMenuList} from './domains/header-menu.domain';
import {Router} from '@angular/router';
import {RouterConfigService} from './services/router-config.service';
import {SessionStorageService} from './services/session-storage.service';
import {SessionMap} from './enums/session-map';
import {HeaderConfig} from './domains/header-config.domain';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  selectedIndex = 0;
  headerMenuList: HeaderMenuList = new HeaderMenuList();
  headerConfig: HeaderConfig = new HeaderConfig();
  constructor(
    private markdownService: MarkdownService,
    private sessionStorageService: SessionStorageService,
    private routerConfigService: RouterConfigService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.router.navigateByUrl('').then(() => {
      this.markdownService.getJsonConfig<HeaderConfig>('header').then(res => {
        this.headerConfig = new HeaderConfig(res);
        this.markdownService.getJsonConfig<HeaderMenu[]>(res.headerMenu).then((res) => {
          this.headerMenuList = new HeaderMenuList(UtilTools.createBasicViewListItems<HeaderMenu>(res));
          this.selectedIndex = this.headerMenuList.items.findIndex(item => item.Mark === this.sessionStorageService.getSessionParam(SessionMap.root));
          this.routerConfigService.headerMenuList = this.headerMenuList;
        })
      })
    })
  }

  toGitHub(url: string): void {
    UtilTools.pathLink(url, '_blank');
  }

  navSelect(headerMenu: HeaderMenu, index: number): void{
    this.router.navigate([headerMenu.Router]).then(() => {
      this.sessionStorageService.setSessionParam(SessionMap.root, headerMenu.Mark);
      this.sessionStorageService.setSessionParam(SessionMap.view, headerMenu.Router);
      this.selectedIndex = index;
    })
  }
}
