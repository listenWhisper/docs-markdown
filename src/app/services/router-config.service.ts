import { Injectable } from '@angular/core';
import {HeaderMenu, HeaderMenuList} from '../domains/header-menu.domain';
import {Route, Router, Routes} from '@angular/router';
import {MarkdownService} from './markdown.service';
import {RouterComponent} from '../views/router/router.component';
import {SideMenu} from '../domains/side-menu.domain';
import {ReadonlyMarkdownComponent} from '../components/readonly-markdown/readonly-markdown.component';

@Injectable({
  providedIn: 'root'
})
export class RouterConfigService {
  private _headerMenuList: HeaderMenuList = new HeaderMenuList();
  private routes: Routes = [];
  constructor(
    private markdownService: MarkdownService,
    private router: Router
  ) { }

  get headerMenuList(){
    return this._headerMenuList;
  }

  set headerMenuList(headerMenuList: HeaderMenuList){
    this._headerMenuList = headerMenuList;
    this.routes = [];

    let promise: any[] = [];
    headerMenuList.items.forEach(item => {
      promise.push(this.getMarkDown(item));
    });

    Promise.all(promise).then(() => {
      const first = headerMenuList.first;
      this.routes.push({
        path: '',
        redirectTo: first.Router.substring(1),
        pathMatch: 'full',
      })
      this.router.resetConfig(this.routes);
      this.router.navigate(['']).then();
    })
  }

  getMarkDown(headerMenu: HeaderMenu){
    return new Promise((resolve, reject) => {
      this.markdownService.getJsonConfig<any>(headerMenu.Mark).then(res => {
        let children: Routes = [];
        let result: SideMenu[] = [];
        try {
          result = JSON.parse(res);
        }catch (e){
          result = res;
        }
        result.forEach(item => {
          item.Children.forEach(router => {
            children.push({
              path: router.Mark,
              component: ReadonlyMarkdownComponent
            })
          })
        });
        const route: Route = {
          path: headerMenu.Mark,
          component: RouterComponent,
          children: children
        };
        this.routes.push(route);
        resolve(true);
      }).catch(err => {
        reject(false);
      })
    })
  }
}
