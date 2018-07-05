import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SomeService {

  constructor() {
  }

  someBusinessLogic(filePaths?: string[]) {
    console.log(`I did a thing one time at ${new Date().toDateString()} - filePaths=${filePaths}`);
  }

}
