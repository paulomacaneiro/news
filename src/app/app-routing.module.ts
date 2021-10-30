import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { TopNewsComponent } from './top-news/top-news.component';

const routes: Routes = [
  {path :'', component: TopNewsComponent},
  {path :'tecnologia', component: TechNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
