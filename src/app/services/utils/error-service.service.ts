import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor() { }

  getClientMessage(error: Error): string {
    if (!navigator.onLine) {
      return 'No internet Connexion';
    }
    return error.message ? error.message : error.toString();
  }

}
