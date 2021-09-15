import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterComponent} from './views/router/router.component';
import {ReadonlyMarkdownComponent} from './components/readonly-markdown/readonly-markdown.component';


const routes: Routes = [
  {
    path: 'document',
    component: RouterComponent,
    children: [
      {
        path: 'quickstart', component: ReadonlyMarkdownComponent
      }
    ]
  },
  {
    path: 'component',
    component: RouterComponent,
    children: [
      {
        path: 'announcement', component: ReadonlyMarkdownComponent,
      }
    ]
  },
  {
    path: '',
    redirectTo: 'document/quickstart',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
