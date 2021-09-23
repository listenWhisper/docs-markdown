import { Component, OnInit } from '@angular/core';
import {SideMenuList, SideMenuView} from '../../domains/side-menu.domain';
import {RouterConfigService} from '../../services/router-config.service';
import {SessionStorageService} from '../../services/session-storage.service';
import {SessionMap} from '../../enums/session-map';
import {Menu} from '../../domains/menu.domain';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.less']
})
export class RouterComponent implements OnInit {
  sideMenuList: SideMenuList = new SideMenuList();
  constructor(
    private sessionStorageService: SessionStorageService,
    private routerConfigService: RouterConfigService,
  ) { }

  ngOnInit(): void {
    const key = this.sessionStorageService.getSessionParam(SessionMap.root);
    const result: SideMenuView = new SideMenuView(this.routerConfigService.sideMenuViewList.find(item => item.Id === key) || {});
    this.sideMenuList.items = result.SideMenu;
  }

  menuChange(menu: Menu): void{
    this.sessionStorageService.setSessionParam(SessionMap.view, menu.Router);
  }
}
