import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { MaterialModule } from './material.module';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormComponent
      ],
      imports: [  MaterialModule ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Customer Comment');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Customer Comment');
  }));
  it('should create the form', async(() => {
    const fixture = TestBed.createComponent(FormComponent);
    const form = fixture.debugElement.componentInstance;
    expect(form).toBeTruthy();
  }));
});
