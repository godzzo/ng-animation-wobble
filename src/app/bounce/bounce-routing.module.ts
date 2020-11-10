import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BounceComponent } from './bounce.component';

const routes: Routes = [{ path: '', component: BounceComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class BounceRoutingModule {}
