import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicReadComponent } from './topic-read.component';

describe('TopicReadComponent', () => {
  let component: TopicReadComponent;
  let fixture: ComponentFixture<TopicReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
