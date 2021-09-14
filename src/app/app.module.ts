import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {MarkdownModule} from 'ngx-markdown';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {ViewIconComponent} from './components/view-icon/view-icon.component';
import {ViewIconDirectives} from './directives';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
registerLocaleData(zh);

const Views = [];

const Components = [
  AppComponent,
  ViewIconComponent
];

const Directives = [
  ViewIconDirectives
];

const Module = [
  NzLayoutModule,
  NzMenuModule,
  NzIconModule,
  NzTabsModule
];


@NgModule({
  declarations: [
    Components,
    Directives
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    MarkdownModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    Module
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
