import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }


  setSessionParam(sessionKey: string, value: any){
    window.sessionStorage.setItem(sessionKey, value);
  }

  getSessionParam(sessionKey: string){
    return window.sessionStorage.getItem(sessionKey) || '';
  }

}
