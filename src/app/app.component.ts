import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	items = [
		{ name: 'Home', link: '/' },
		{ name: 'Wobble', link: '/wobble' },
		{ name: 'Bounce', link: '/bounce' },
		{ name: 'CSS Wobble', link: '/css-wobble' },
		{ name: 'Wanky Card', link: '/wanky' },
	];
}
