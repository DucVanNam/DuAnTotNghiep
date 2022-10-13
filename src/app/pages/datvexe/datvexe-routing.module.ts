import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatvexeComponent } from './datvexe.component';

const routes: Routes = [{ path: '', component: DatvexeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatvexeRoutingModule { }
