import { Injectable } from '@angular/core';
import {HeaderMenuList} from '../domains/header-menu.domain';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterConfigService {
  private _headerMenuList: HeaderMenuList = new HeaderMenuList();
  constructor(
    private router: Router
  ) { }

  get headerMenuList(){
    return this._headerMenuList;
  }

  set headerMenuList(headerMenuList: HeaderMenuList){
    this._headerMenuList = headerMenuList;
  }
}
