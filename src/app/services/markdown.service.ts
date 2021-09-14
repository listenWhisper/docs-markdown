import { Injectable } from '@angular/core';
import {RequestService} from 'basic-view-data';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarkdownService {
  requestService: RequestService = new RequestService(this.http);
  constructor(
    private http: HttpClient
  ) { }

  getJsonConfig<T>(configName: string): Promise<T>{
    const url = `./config/${configName}.config.json`;
    return new Promise(resolve => {
      this.requestService.get(url).then((res: T) => {
        resolve(res);
      })
    });
  }

  getMarkDown<T>(markDownName: string): Promise<T>{
    const url = `./config/${markDownName}.md`;
    return new Promise(resolve => {
      this.requestService.get(url).then((res: T) => {
        resolve(res);
      })
    });
  }
}
