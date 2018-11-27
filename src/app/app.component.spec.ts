import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SortPipe } from './sort-pipe';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

let fixture: ComponentFixture<AppComponent>,
    component: AppComponent,
    appService: AppService;
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      declarations: [
        AppComponent,
        SortPipe
      ],
      providers: [AppService]
    }).compileComponents().then( () => {
      fixture = TestBed.createComponent(AppComponent); // end testbed config & create fixture that provides access to component instance itself
      component = fixture.componentInstance; // getting component itself
      appService = fixture.debugElement.injector.get(AppService);
    });
  }));

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'my-angular-app'`, () => {
    expect(component.title).toEqual('my-angular-app');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-angular-app!');
  });
  it('should sort array', () => {
    let pipe: SortPipe;
    pipe = new SortPipe();
    const sortedArray = pipe.transform([{name: 'color', rank: 2}, {name: 'test', rank: 1}], 'rank');
    const rank = sortedArray[0].rank;
    expect(rank).toEqual(1);
  });
});
