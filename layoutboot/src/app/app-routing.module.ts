import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SideComponent } from './side/side.component';
import { ContinfoComponent } from './continfo/continfo.component';

export const ROUTES: Routes = [
{ path: '', component: NavComponent,
 children: [
     { path: 'side', component: SideComponent,
     children: [
        { path: 'continfo', component: ContinfoComponent }
      ]
     },
    ]
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
