import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  id(): string {
    return '_' + Math.random().toString(36).substr(2, 19);
  }
}
