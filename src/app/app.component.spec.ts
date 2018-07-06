import { AppComponent } from './app.component';
import { SomeService } from './some.service';
import { AppworksLocatorService } from './appworks-locator.service';
import { AWFileSystem } from '../../node_modules/appworks-js';
import { create } from 'domain';

describe('AppComponent', () => {

  // the component we are testing
  let underTest: AppComponent;
  // the business type service we want to observe calls to
  let someServiceMock;
  // our new service that is responsible for construction
  let awLocator;
  // the AppWork plugin
  let awFileSystem;

  // setup method that runs before each test
  beforeEach(() => {
    createComponentUnderTest();
  });

  // tests

  it('should call the business logic method', () => {
    underTest.selectAFileAndDoSomething();
    // TODO assert that someServiceMock.someBusinessLogic method was called
  });

  // test helpers

  function createComponentUnderTest() {
    // we dont need the real obbject here so we can use a spy
    someServiceMock = jasmine.createSpyObj('someService', ['someBusinessLogic']);
    awLocator = new AppworksLocatorService();
    awFileSystem = new AWFileSystem();
    mockAppWorksFs();

    underTest = new AppComponent(someServiceMock, awLocator);
  }

  function mockAppWorksFs() {
    // TODO mock the return of the AppWorks plugin from our new component

    // TODO mock out the actual AppWorks call
  }

});
