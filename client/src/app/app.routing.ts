
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignsComponent } from './designs/designs.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: 'design', component: DesignsComponent}
];

// @NgModule({
//     imports:[
//         RouterModule.forRoot(
//             appRoutes,
//             { enableTracing: true}
//         )
//     ],
//     exports:[
//         RouterModule
//     ]
// })

export class AppRoutingModule {}