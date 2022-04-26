import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PopoverBodyTextComponent } from './popover-body-text.component';

describe('PopoverBodyTextComponent', () => {
  let component: PopoverBodyTextComponent;
  let fixture: ComponentFixture<PopoverBodyTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopoverBodyTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverBodyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PopoverBodyTextComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should render the PopoverBodyTextComponent with the given content', ()=>{
    component.content = 'This is the given content';
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('.comment-text'))
    expect(p.nativeElement.textContent).toBe('This is the given content');

    component.content = 'This is the changed content';
    fixture.detectChanges();
    expect(p.nativeElement.textContent).toBe('This is the changed content');
  })

  it('should render the PopoverBodyTextComponent with the correct styles', ()=>{
    component.content = 'Some content';

    fixture.detectChanges();

    const comment = window.getComputedStyle(
      fixture.debugElement.query(By.css('.comment-text')).nativeElement
    );
    expect(comment.color).toBe('rgb(74, 74, 74)');

    component.type = 'task';
    
    fixture.detectChanges();
    const ticket = window.getComputedStyle(
      fixture.debugElement.query(By.css('.task-text')).nativeElement
    );
    expect(ticket.color).toBe('rgb(139, 139, 139)');
  })
});
