import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WankyCardComponent } from './wanky-card.component';

const routes: Routes = [{ path: '', component: WankyCardComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class WankyCardRoutingModule {}
