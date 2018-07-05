import { Injectable } from '@angular/core';
import { AWFileSystem } from 'appworks-js';


@Injectable({
  providedIn: 'root'
})
export class AppworksLocatorService {

  constructor() { }

  getAwFs(): AWFileSystem {
      return new AWFileSystem();
  }
}
