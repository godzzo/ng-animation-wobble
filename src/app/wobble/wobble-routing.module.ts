import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WobbleComponent } from './wobble.component';

const routes: Routes = [{ path: '', component: WobbleComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WobbleRoutingModule {}
