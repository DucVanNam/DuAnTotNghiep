import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatvexeRoutingModule } from './datvexe-routing.module';
import { DatvexeComponent } from './datvexe.component';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DatvexeComponent
  ],
  imports: [
    CommonModule,
    DatvexeRoutingModule,
    NzListModule,
    NzGridModule,
    NzCardModule,
    NzButtonModule,
    NzModalModule,
    NzAutocompleteModule,
    NzSelectModule,
    FormsModule
  ]
})
export class DatvexeModule { }
