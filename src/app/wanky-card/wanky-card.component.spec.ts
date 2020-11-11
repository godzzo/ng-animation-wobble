import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WankyCardComponent } from './wanky-card.component';

describe('WankyCardComponent', () => {
	let component: WankyCardComponent;
	let fixture: ComponentFixture<WankyCardComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [WankyCardComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WankyCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
