import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CssWobbleComponent } from './css-wobble.component';

const routes: Routes = [{ path: '', component: CssWobbleComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CssWobbleRoutingModule {}
