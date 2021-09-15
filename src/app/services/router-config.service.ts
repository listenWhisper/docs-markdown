import { Injectable } from '@angular/core';
import {HeaderMenu, HeaderMenuList} from '../domains/header-menu.domain';
import {Route, Router, Routes} from '@angular/router';
import {MarkdownService} from './markdown.service';

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
    headerMenuList.items.forEach(item => {
      this.getMarkDown(item);
    });
  }

  getMarkDown(headerMenu: HeaderMenu): void{
    debugger
    this.markdownService.getJsonConfig(headerMenu.Mark).then(res => {
      const Route: Route = {
        path: ''
      };
    })
  }
}
