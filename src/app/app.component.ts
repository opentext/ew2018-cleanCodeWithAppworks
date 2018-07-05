import { Component } from '@angular/core';
import { SomeService } from './some.service';
import { AWFileSystem } from 'appworks-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private someService: SomeService) {
  }

  selectAFileAndDoSomething() {
    const options: any = {};
    const success = (result) => {
      this.someService.someBusinessLogic(result);
    };
    const err = (error) => {
      console.log(`we failed to select a file! - ${error}`);
    };

    const fs: AWFileSystem = new AWFileSystem();
    fs.showDirSelector(options, success, err);
  }
}
