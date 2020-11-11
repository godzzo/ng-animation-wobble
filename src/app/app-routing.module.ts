import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'wobble',
		loadChildren: () =>
			import('./wobble/wobble.module').then((m) => m.WobbleModule),
	},
	{
		path: 'bounce',
		loadChildren: () =>
			import('./bounce/bounce.module').then((m) => m.BounceModule),
	},
	{
		path: 'css-wobble',
		loadChildren: () =>
			import('./css-wobble/css-wobble.module').then(
				(m) => m.CssWobbleModule,
			),
	},
	{
		path: 'wanky',
		loadChildren: () =>
			import('./wanky-card/wanky-card.module').then(
				(m) => m.WankyCardModule,
			),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
