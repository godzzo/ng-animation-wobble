import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssWobbleComponent } from './css-wobble.component';

describe('CssWobbleComponent', () => {
	let component: CssWobbleComponent;
	let fixture: ComponentFixture<CssWobbleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CssWobbleComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CssWobbleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
