import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularMaterialModule } from './modules/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import {RouterModule, Routes} from '@angular/router';

import { AppRoutes } from "./app.routes";
import { CameraComponent } from './components/camera/camera.component'
import { CameraListComponent } from './components/camera-list/camera-list.component'
import { WindowRef } from './providers/window-ref';

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    CameraListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [WindowRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
