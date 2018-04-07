import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FormComponent } from './form.component';
import { Comment } from '../../services/comment/comment';
import { CommentDataService } from '../../services/comment-data/comment-data.service';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let commentDataService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, FormsModule ],
      declarations: [ FormComponent ],
      providers: [ CommentDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    commentDataService = fixture.debugElement.injector.get(CommentDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a Comment', async(() => {
    expect(component.newComment instanceof Comment ).toBeTruthy();
  }));

  it('should a Comment have been called success', async(() => {
    spyOn(commentDataService, 'addComment');
    component.addComment();
    expect(commentDataService.addComment).toHaveBeenCalled();
  }));
});
