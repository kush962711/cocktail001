import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  public isLoadingSpinner = false;
  public spinnerShow(): void {
    this.isLoadingSpinner=true;
    setTimeout(() => {
      this.isLoadingSpinner = false;
    }, 2500);
  }
}

