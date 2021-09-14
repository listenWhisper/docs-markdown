import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouterComponent} from './views/router/router.component';
import {ReadonlyMarkdownComponent} from './components/readonly-markdown/readonly-markdown.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'document/quickstart',
    pathMatch: 'full',
  },
  {
    path: 'document',
    component: RouterComponent,
    children: [
      {
        path: 'quickstart', component: ReadonlyMarkdownComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
