import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Architecture Example Hugo</h1>
    <img src= "assets/Logo.png" class="center" width="200" height="80" display:block>
    <app-hero-list></app-hero-list>
    <app-sales-tax></app-sales-tax>
  `
})
export class AppComponent { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/