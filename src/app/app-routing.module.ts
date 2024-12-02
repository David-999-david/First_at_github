import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { AddListComponent } from './components/add-list/add-list.component';
import { ListDetailComponent } from './components/list-detail/list-detail.component';

const routes: Routes = [
  {path:'',component:ListItemsComponent},
  {path:'list',component:ListItemsComponent},
  {path:'add',component:AddListComponent},
  {path:'list/:id',component:ListDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
