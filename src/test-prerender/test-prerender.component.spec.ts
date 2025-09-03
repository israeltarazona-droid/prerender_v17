import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPrerenderComponent } from './test-prerender.component';

describe('TestPrerenderComponent', () => {
  let component: TestPrerenderComponent;
  let fixture: ComponentFixture<TestPrerenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestPrerenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestPrerenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
