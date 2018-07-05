import { AppComponent } from './app.component';
import { SomeService } from './some.service';

describe('AppComponent', () => {

  let underTest: AppComponent;

  beforeEach(() => {
    underTest = new AppComponent(new SomeService());
  });

  it('should call the method', () => {
    underTest.selectAFileAndDoSomething();
  });
});
